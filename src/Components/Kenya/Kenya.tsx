import { useEffect, useRef, useState } from 'react';

import { Elements } from '../../Elements';
import { useResultsContext } from '../../Context/RContext';
import Styles from './Kenya.module.scss';
import { Info } from '../../Elements/types';

const Kenya = () => {
  const [loaded, setLoaded] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [county, setCounty] = useState<any>(null);
  const width = (window.innerWidth * 10) / 100;

  const [info, setInfo] = useState<Info>({
    county: '',
    topCandidate: '',
    secondCandidate: '',
    thirdCandidate: '',
    fourthCandidate: '',

    topCandidateVotes: 0,
    secondCandidateVotes: 0,
    thirdCandidateVotes: 0,
    fourthCandidateVotes: 0,

    topCandidatePercent: 0,
    secondCandidatePercent: 0,
    thirdCandidatePercent: 0,
    fourthCandidatePercent: 0,

    topCandidateColor: '',
    secondCandidateColor: '',
    thirdCandidateColor: '',
    fourthCandidateColor: ''
  });

  const { Kenya } = Elements;
  const { getTopCandidate, getCountyTotal, getCandidateInfo } =
    useResultsContext()!;

  const toggleLoaded = () => {
    setLoaded(!loaded);
  };

  const kenyaRef = useRef<HTMLElement>(null);
  kenyaRef.current?.addEventListener('load', toggleLoaded);
  const { current } = kenyaRef;
  const paths = current?.querySelectorAll('path');

  const floatingRef = useRef<HTMLDivElement>(null);

  if (loaded === false) {
    setTimeout(() => {
      setLoaded(!loaded);
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

  useEffect(() => {
    paths?.forEach((path) => {
      const mouseInside = (e: MouseEvent) => {
        setX(e.clientX - width);
        setY(e.clientY);
      };

      path.addEventListener('mouseenter', (e) => {
        floatingRef.current!.style.display = 'flex';
        const element = e.target as HTMLElement;
        const totals = getCountyTotal(parseInt(element.id.replace('KE-', '')));
        console.log(totals);
        const c = element.getAttribute('title');
        setCounty(c);
        const {
          RaoTotal,
          RutoTotal,
          WaihigaTotal,
          WajackoyahTotal,
          RaoPercentage,
          RutoPercentage,
          WaihigaPercentage,
          WajackoyahPercentage
        } = totals;
        const unSorted = {
          'Raila Odinga': RaoTotal,
          'Ruto William': RutoTotal,
          'Waihiga David': WaihigaTotal,
          'Wajackoyah George': WajackoyahTotal
        };
        const sorted = Object.entries(unSorted).sort((a, b) => a[1] - b[1]);

        const unSortedPercent = {
          'Raila Odinga': RaoPercentage,
          'Ruto William': RutoPercentage,
          'Waihiga David': WaihigaPercentage,
          'Wajackoyah George': WajackoyahPercentage
        };
        //sort unSortedPercent
        const sortedPercent = Object.entries(unSortedPercent).sort(
          (a, b) => a[1] - b[1]
        );

        setInfo({
          ...info,
          county: c,
          topCandidate: sorted[3][0],
          secondCandidate: sorted[2][0],
          thirdCandidate: sorted[1][0],
          fourthCandidate: sorted[0][0],
          topCandidateVotes: sorted[3][1],
          secondCandidateVotes: sorted[2][1],
          thirdCandidateVotes: sorted[1][1],
          fourthCandidateVotes: sorted[0][1],
          topCandidatePercent: sortedPercent[3][1],
          secondCandidatePercent: sortedPercent[2][1],
          thirdCandidatePercent: sortedPercent[1][1],
          fourthCandidatePercent: sortedPercent[0][1]
        });
        mouseInside(e);
      });

      path.addEventListener('mouseleave', () => {
        floatingRef.current!.style.display = 'none';
      });
    });
  }, [loaded, paths, getCountyTotal, info, width]);

  // get the viewport width and height

  return (
    <div className={Styles.main} onClick={toggleLoaded}>
      <Kenya ref={kenyaRef} />

      <div
        className={Styles.floatingDiv}
        ref={floatingRef}
        style={{
          top: y,
          left: x
        }}
      >
        <div className={Styles.title}>
          <h3>{county}</h3>
        </div>
        <div className={Styles.first}>
          <h4>{info.topCandidate}</h4>
          <p>
            {' '}
            {`     
            ${info.topCandidateVotes} (${info.topCandidatePercent}%)
          `}
          </p>
          <h5>{getCandidateInfo(info.topCandidate)?.party}</h5>
          <div
            className={Styles.colorDiv}
            style={{
              backgroundColor: `${getCandidateInfo(info.topCandidate)?.color}`,
              height: '1.2rem',
              aspectRatio: '1/1',
              borderRadius: '50%'
            }}
          >
          </div>
        </div>

        <div className={Styles.second}>
          <h4>{info.secondCandidate}</h4>
          <p>
            {`
            ${info.secondCandidateVotes} (${info.secondCandidatePercent}%)
          `}
          </p>
          <h5>{getCandidateInfo(info.secondCandidate)?.party}</h5>
          <div
            className={Styles.colorDiv}
            style={{
              backgroundColor: `${
                getCandidateInfo(info.secondCandidate)?.color
              }`,
              height: '1.2rem',
              aspectRatio: '1/1',
              borderRadius: '50%'
            }}
          ></div>
        </div>

        <div className={Styles.third}>
          <h4>{info.thirdCandidate}</h4>
          <p>
            {`
            ${info.thirdCandidateVotes} (${info.thirdCandidatePercent}%)
          `}
          </p>
          <h5>{getCandidateInfo(info.thirdCandidate)?.party}</h5>
          <div
            className={Styles.colorDiv}
            style={{
              backgroundColor: `${
                getCandidateInfo(info.thirdCandidate)?.color
              }`,
              height: '1.2rem',
              aspectRatio: '1/1',
              borderRadius: '50%'
            }}
          ></div>
        </div>

        <div className={Styles.fourth}>
          <h4>{info.fourthCandidate}</h4>
          <p>
            {`
            ${info.fourthCandidateVotes} (${info.fourthCandidatePercent}%)
            `}
          </p>
          <h5>{getCandidateInfo(info.fourthCandidate)?.party}</h5>
          <div
            className={Styles.colorDiv}
            style={{
              background: `${getCandidateInfo(info.fourthCandidate)?.color}`,
              height: '1.2rem',
              aspectRatio: '1/1',
              borderRadius: '50%'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Kenya;
