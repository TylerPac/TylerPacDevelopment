import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // useLocation gives the current URL path from React Router.
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the route changes, reset scroll to the top-left of the page.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
