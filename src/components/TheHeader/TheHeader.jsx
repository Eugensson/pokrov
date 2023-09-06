'use client';

import Logo from '@/components/Logo/Logo';
import Lang from '@/components/Lang/Lang';
import { Navigation } from '@/components/Navigation/Navigation';
import { navItems } from '@/data/navItems';

import styles from '@/components/TheHeader/TheHeader.module.css';

const TheHeader = () => {
  return (
    <header className={styles.wrapper}>
      <Logo width={100} height={80}/>
      <Navigation navLinks={navItems} />
      <Lang/>
    </header>
  );
};

export default TheHeader;
