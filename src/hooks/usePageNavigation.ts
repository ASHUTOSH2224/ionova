import { useState, useEffect, useCallback } from 'react';

export function usePageNavigation(pages: string[], defaultPage: string) {
  const getPageFromHash = () => {
    if (typeof window === 'undefined') return defaultPage;
    const hash = window.location.hash.replace('#', '');
    return pages.includes(hash) ? hash : defaultPage;
  };

  const [activePage, setActivePage] = useState(getPageFromHash);

  const navigate = useCallback((page: string) => {
    setActivePage(page);
    const hash = page === defaultPage ? '' : `#${page}`;
    window.history.pushState(null, '', hash || window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [defaultPage]);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { activePage, navigate };
}
