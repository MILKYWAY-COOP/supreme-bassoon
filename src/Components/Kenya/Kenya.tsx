import { useRef } from 'react';

import { Elements } from '../../Elements';
import { useResultsContext } from '../../Context/RContext';
import Styles from './Kenya.module.scss';

const Kenya = () => {
  const { Kenya } = Elements;
  const { getTopCandidate } = useResultsContext()!;
  const kenyaRef = useRef<HTMLElement>(null);
  const { current } = kenyaRef;

  const paths = current?.querySelectorAll('path');
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

  return (
    <div className={Styles.main}>
      <Kenya ref={kenyaRef} />
    </div>
  );
};

export default Kenya;
