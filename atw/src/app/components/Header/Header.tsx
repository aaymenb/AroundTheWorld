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
        <Link href="/login" passHref>
          <span className={styles.navLink}>Connexion</span>
        </Link>
        <Link href="/signup" passHref>
          <span className={`${styles.navLink} ${styles.signupButton}`}>Inscription</span>
        </Link>
      </nav>
    </header>
  );
} 