/** Blog index topic filters + Starwind sort select. */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');
  const searchInput = document.getElementById('blog-search') as HTMLInputElement | null;

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

  /** @param sortOverride — Starwind fires value-change before data-value updates */
  const apply = (sortOverride?: string) => {
    const tag = activeTag();
    const sort = sortOverride || getSort();
    const q = query();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const tagMatch = tag === 'all' || el.getAttribute('data-tag') === tag;
      const text = el.getAttribute('data-search') ?? '';
      const match = tagMatch && (q.length === 0 || text.includes(q));
      el.hidden = !match;
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
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

  document.addEventListener('starwind:value-change', onSortChange);

  // Starwind select hydrates after first paint — re-apply once ready.
  requestAnimationFrame(() => apply());
  window.setTimeout(() => apply(), 0);
}
