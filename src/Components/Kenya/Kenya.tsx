import { useEffect, useRef, useState } from 'react';

import { Elements } from '../../Elements';
import { useResultsContext } from '../../Context/RContext';
import Styles from './Kenya.module.scss';

const Kenya = () => {
  const [loaded, setLoaded] = useState(false);
  const { Kenya } = Elements;
  const { getTopCandidate } = useResultsContext()!;

  const toggleLoaded = () => {
    setLoaded(!loaded);
  };

  const kenyaRef = useRef<HTMLElement>(null);
  kenyaRef.current?.addEventListener('load', toggleLoaded);
  const { current } = kenyaRef;
  const paths = current?.querySelectorAll('path');

  if (loaded === false) {
    setTimeout(() => {
      setLoaded(!loaded);
      console.log('loaded');
    }, 1);
  }

  useEffect(() => {
    paths?.forEach((path) => {
      const id = path.id.replace('KE-', '');
      const topCandidate = getTopCandidate(parseInt(id));
      if (!topCandidate) return;
      if (topCandidate.name === 'Raila Odinga') {
        path.setAttribute('fill', 'var(--rao)');
      }
      if (topCandidate.name === 'Ruto William') {
        path.setAttribute('fill', 'var(--wsr)');
      }
    });
  }, [loaded]);

  return (
    <div className={Styles.main} onClick={toggleLoaded}>
      <Kenya ref={kenyaRef} />
    </div>
  );
};

export default Kenya;
