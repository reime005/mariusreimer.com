import { useState, useEffect } from 'react';

export const useScrollListener = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollListener = (ev: Event) => {
    const max = document.body.scrollHeight - window.innerHeight;
    const pos = document.documentElement.scrollTop;

    setScrollPercentage((pos / max) * 100);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  }, []);

  return {
    scrollPercentage,
  };
};
