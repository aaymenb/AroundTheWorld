import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/logo.png"
        alt="Around The World Logo"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Logo; 