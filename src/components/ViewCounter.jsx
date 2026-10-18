import { useEffect } from 'react';
import { Eye } from 'lucide-react';

const endpoint = import.meta.env.VITE_GOATCOUNTER_URL || 'https://rahuln7.goatcounter.com/count';
const counterUrl = new URL(`/counter/${encodeURIComponent('/')}.svg`, endpoint);
counterUrl.searchParams.set('no_branding', '1');
counterUrl.searchParams.set('style', '#gcvc-border{fill:transparent;stroke:transparent}#gcvc-for{display:none}#gcvc{fill:#aaa9a2}');

const ViewCounter = () => {
  useEffect(() => {
    if (document.querySelector('script[data-portfolio-goatcounter]')) return;
    const script = document.createElement('script');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    script.dataset.goatcounter = endpoint;
    script.dataset.portfolioGoatcounter = 'true';
    document.head.appendChild(script);
  }, []);

  return <span className="view-counter" aria-label="Portfolio view count"><Eye size={13} aria-hidden="true" /><img src={counterUrl.href} alt="Portfolio views" /></span>;
};

export default ViewCounter;
