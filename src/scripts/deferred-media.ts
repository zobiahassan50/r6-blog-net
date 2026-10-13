/** Load muted loop videos after first paint / when visible — never blocks LCP. */
export function initDeferredVideos() {
  const nodes = document.querySelectorAll<HTMLVideoElement>('video[data-deferred-video]');
  if (nodes.length === 0) return;

  const canLoad = (video: HTMLVideoElement) => {
    const minWidth = Number(video.getAttribute('data-deferred-min-width') || 0);
    if (minWidth > 0 && window.innerWidth < minWidth) return false;
    return true;
  };

  const loadVideo = (video: HTMLVideoElement) => {
    if (video.dataset.loaded === '1' || !canLoad(video)) return;
    const src = video.getAttribute('data-deferred-video');
    if (!src) return;

    // Prefer VP9/WebM when present (smaller, same visual quality), then MP4.
    if (/\.mp4$/i.test(src)) {
      const webm = src.replace(/\.mp4$/i, '.webm');
      const webmSource = document.createElement('source');
      webmSource.src = webm;
      webmSource.type = 'video/webm';
      video.appendChild(webmSource);
    }

    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.dataset.loaded = '1';
    video.autoplay = true;
    video.load();
    void video.play().catch(() => {});
  };

  const schedule = (video: HTMLVideoElement) => {
    const start = () => loadVideo(video);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(start, { timeout: 1800 });
    } else {
      window.setTimeout(start, 900);
    }
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const video = entry.target as HTMLVideoElement;
          io.unobserve(video);
          schedule(video);
        }
      },
      { rootMargin: '200px 0px' },
    );
    nodes.forEach((video) => {
      if (!canLoad(video)) {
        window.matchMedia(`(min-width: ${video.getAttribute('data-deferred-min-width')}px)`).addEventListener(
          'change',
          (event) => {
            if (event.matches) schedule(video);
          },
          { once: true },
        );
        return;
      }
      io.observe(video);
    });
  } else {
    nodes.forEach(schedule);
  }
}
