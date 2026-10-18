import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const endpoint = import.meta.env.VITE_GOATCOUNTER_URL || 'https://rahuln7.goatcounter.com/count';

const ViewCounter = () => {
  const [views, setViews] = useState('');

  useEffect(() => {
    let active = true;
    const script = document.querySelector('script[data-portfolio-goatcounter]') || document.createElement('script');

    if (!script.isConnected) {
      script.src = 'https://gc.zgo.at/count.js';
      script.async = true;
      script.dataset.goatcounter = endpoint;
      script.dataset.portfolioGoatcounter = 'true';
      document.head.appendChild(script);
    }

    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
      if (!active || request.status < 200 || request.status >= 300) return;
      try {
        const data = JSON.parse(request.responseText);
        if (data.count != null) setViews(data.count);
      } catch {
        // Leave the counter hidden if the analytics service returns invalid data.
      }
    });
    request.open('GET', new URL(`/counter/${encodeURIComponent('/')}.json`, endpoint));
    request.send();

    return () => {
      active = false;
      request.abort();
    };
  }, []);

  if (views === '') return null;
  return <span className="view-counter" aria-label={`${views} portfolio views`}><Eye size={13} aria-hidden="true" /> {views}</span>;
};

export default ViewCounter;
