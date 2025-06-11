'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <Logo />
        </Link>
        <Link href="/" passHref>
          <span className={styles.appName}>Around The World</span>
        </Link>
      </div>
      <nav className={styles.nav}>
      </nav>
    </header>
  );
} 