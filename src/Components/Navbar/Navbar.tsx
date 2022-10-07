import { useRef, useState, useEffect } from 'react';

import Styles from './Navbar.module.scss';
import { Elements } from '../../Elements';

const Menu = () => {
  return (
    <ul>
      <li>PRESIDENTIAL</li>
      <li>GOVERNORS</li>
      <li>PARLIAMENT</li>
      <li>SENATE</li>
      <li>MANIFESTOS</li>
      <li>NEWS</li>
      <li>LIVE TV</li>
      <li>LIVE RADIO</li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const barRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      barRef.current?.classList.add(Styles.open);
      overlayRef.current?.classList.add(Styles.open);
      overlayRef.current?.classList.remove(Styles.close);
    } else {
      barRef.current?.classList.remove(Styles.open);
      overlayRef.current?.classList.remove(Styles.open);
      overlayRef.current?.classList.add(Styles.close);
    }
  }, [isOpen]);

  return (
    <nav className={Styles.nav}>
      <div className={Styles.main}>
        <div className={Styles.logo}>
          <img src={Elements.Citizen} />
        </div>
        <div className={Styles.items}>
          <Menu />
        </div>
        <div
          className={Styles.bars}
          onClick={() => setIsOpen(!isOpen)}
          ref={barRef}
        >
          <div className={Styles.bar}></div>
        </div>
      </div>

      <div className={Styles.overlay} ref={overlayRef}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
