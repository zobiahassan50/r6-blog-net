/** Blog index topic filters, search dropdown, and Starwind sort select. */

type SearchItem = {
  title: string;
  tag: string;
  href: string;
  titleSearch: string;
  tagSearch: string;
};

export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');
  const searchInput = document.getElementById('blog-search') as HTMLInputElement | null;
  const searchMenu = document.getElementById('blog-search-menu') as HTMLUListElement | null;
  const searchDataEl = document.getElementById('blog-search-data');

  let suggestions: SearchItem[] = [];
  try {
    suggestions = searchDataEl ? (JSON.parse(searchDataEl.textContent || '[]') as SearchItem[]) : [];
  } catch {
    suggestions = [];
  }

  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const isBlogSortEvent = (event: Event) => {
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return false;
    return event.target === root || root.contains(event.target as Node);
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB || tsB - tsA;
    if (sort === 'long') return readB - readA || tsB - tsA;
    return tsB - tsA;
  };

  const query = () => searchInput?.value.trim().toLocaleLowerCase() ?? '';

  /** Score a post against the query — title hits first, then tag. Desc is ignored. */
  const scoreMatch = (title: string, tag: string, q: string): number => {
    if (!q) return 1;
    const tokens = q.split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return 1;

    const titleHit = tokens.every((token) => title.includes(token));
    const tagHit = tokens.every((token) => tag.includes(token));
    if (titleHit) return 3;
    if (tagHit) return 2;
    // Whole-phrase fallback inside title/tag
    if (title.includes(q) || tag.includes(q)) return 2;
    return 0;
  };

  const closeMenu = () => {
    if (!searchMenu || !searchInput) return;
    searchMenu.hidden = true;
    searchMenu.innerHTML = '';
    searchInput.setAttribute('aria-expanded', 'false');
  };

  const openMenu = (items: SearchItem[]) => {
    if (!searchMenu || !searchInput) return;
    if (items.length === 0) {
      closeMenu();
      return;
    }

    searchMenu.innerHTML = items
      .map(
        (item, index) => `
      <li role="option" id="blog-search-option-${index}">
        <a
          href="${item.href}"
          class="block px-3 py-2.5 text-sm text-neutral-900 transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-white/90 dark:hover:bg-white/10 dark:focus:bg-white/10"
          data-blog-search-option
        >
          <span class="block font-medium leading-snug">${item.title}</span>
          <span class="mt-0.5 block text-xs text-neutral-600 dark:text-white/55">${item.tag}</span>
        </a>
      </li>`,
      )
      .join('');
    searchMenu.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
  };

  const updateDropdown = () => {
    const q = query();
    if (!q) {
      closeMenu();
      return;
    }
    const matches = suggestions
      .map((item) => ({ item, score: scoreMatch(item.titleSearch, item.tagSearch, q) }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map((row) => row.item);
    openMenu(matches);
  };

  /** @param sortOverride — Starwind fires value-change before data-value updates */
  const apply = (sortOverride?: string) => {
    const tag = activeTag();
    const sort = sortOverride || getSort();
    const q = query();
    const items = cards();

    const scored = items.map((el) => {
      const title = el.getAttribute('data-search-title') ?? '';
      const cardTag = el.getAttribute('data-search-tag') ?? '';
      const searchScore = scoreMatch(title, cardTag, q);
      return { el, searchScore };
    });

    scored.sort((a, b) => {
      if (q && a.searchScore !== b.searchScore) return b.searchScore - a.searchScore;
      return compareCards(a.el, b.el, sort);
    });
    scored.forEach(({ el }) => grid.appendChild(el));

    let visibleCount = 0;
    scored.forEach(({ el, searchScore }) => {
      const tagMatch = tag === 'all' || el.getAttribute('data-tag') === tag;
      const match = tagMatch && searchScore > 0;
      el.hidden = !match;
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }

    updateDropdown();
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  const onSortChange = (event: Event) => {
    if (!isBlogSortEvent(event)) return;
    const next = (event as CustomEvent<{ value?: string }>).detail?.value;
    apply(typeof next === 'string' && next.length > 0 ? next : undefined);
  };

  searchInput?.addEventListener('input', apply);
  searchInput?.addEventListener('search', apply);
  searchInput?.addEventListener('focus', updateDropdown);
  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      searchInput.blur();
    }
    if (event.key === 'ArrowDown' && searchMenu && !searchMenu.hidden) {
      event.preventDefault();
      const first = searchMenu.querySelector<HTMLAnchorElement>('[data-blog-search-option]');
      first?.focus();
    }
  });

  searchMenu?.addEventListener('keydown', (event) => {
    const options = [...searchMenu.querySelectorAll<HTMLAnchorElement>('[data-blog-search-option]')];
    const current = document.activeElement as HTMLAnchorElement | null;
    const index = current ? options.indexOf(current) : -1;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      options[Math.min(index + 1, options.length - 1)]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index <= 0) searchInput?.focus();
      else options[index - 1]?.focus();
    } else if (event.key === 'Escape') {
      closeMenu();
      searchInput?.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const root = document.querySelector('[data-blog-search]');
    if (!root || root.contains(event.target as Node)) return;
    closeMenu();
  });

  document.addEventListener('starwind:value-change', onSortChange);

  requestAnimationFrame(() => apply());
  window.setTimeout(() => apply(), 0);
}
