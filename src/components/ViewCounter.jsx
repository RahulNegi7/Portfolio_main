import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const endpoint = import.meta.env.VITE_GOATCOUNTER_URL || 'https://rahuln7.goatcounter.com/count';

const ViewCounter = () => {
  const [views, setViews] = useState('');

  useEffect(() => {
    if (!endpoint) return undefined;

    let active = true;
    const script = document.createElement('script');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    script.dataset.goatcounter = endpoint;

    const loadCount = async () => {
      try {
        const counterUrl = new URL(`/counter/${encodeURIComponent(window.location.pathname)}.json`, endpoint);
        const response = await fetch(counterUrl);
        if (!response.ok) return;
        const data = await response.json();
        if (active && data.count) setViews(data.count);
      } catch {
        // Keep the footer clean if the analytics service is unavailable or blocked.
      }
    };

    script.addEventListener('load', loadCount, { once: true });
    document.head.appendChild(script);

    return () => {
      active = false;
      script.removeEventListener('load', loadCount);
      script.remove();
    };
  }, []);

  if (!views) return null;

  return <span className="view-counter" aria-label={`${views} portfolio views`}><Eye size={13} aria-hidden="true" /> {views} views</span>;
};

export default ViewCounter;
