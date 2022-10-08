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
  }, [loaded, paths, getTopCandidate]);

  // listen for mouseenter on paths
  useEffect(() => {
    paths?.forEach((path) => {
      path.addEventListener('mouseenter', (e) => {
        const element = e.target as HTMLElement;
        console.log(element.id);
      });
    });
  }, [loaded, paths]);

  //draw a rectangle around each path
  paths?.forEach((path) => {
    const rect = path.getBoundingClientRect();
    // check if mouse is inside rect
    const mouseInside = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        return true;
      }
      return false;
    };

    // listen for mousemove
    path.addEventListener('mouseenter', (e) => {
      const element = e.target as HTMLElement;
      console.log(element.id);
      mouseInside(e);
    });
  });
  // add mouseenter event listener

  return (
    <div className={Styles.main} onClick={toggleLoaded}>
      <Kenya ref={kenyaRef} />
    </div>
  );
};

export default Kenya;
