'use client';

import styles from '@/components/TheHeader/TheHeader.module.css';
import { Navigation } from '@/components/Navigation/Navigation';

const navItems = [
  { label: 'Про компанію', href: '/' },
  { label: 'Послуги', href: '/services' },
  { label: 'Технології', href: '/technology' },
  { label: 'Гарантія', href: '/assurance' },
  { label: 'Галерея', href: '/portfolio' },
  { label: 'Новини', href: '/news' },
  { label: 'Контакти', href: '/contacts' },
];

const TheHeader = () => {
  return (
    <header className={styles.container}>
      <Navigation navLinks={navItems} />       
    </header>
  );
};

export default TheHeader;
