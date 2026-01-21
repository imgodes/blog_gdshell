import React from 'react';
import Link from '@docusaurus/Link';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>
      <div className={styles.overlay}></div>
      <div className={styles.terminal}>
        <h1>Error <span className={styles.errorcode}>404</span></h1>
        <p className={styles.output}>
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </p>
        <p className={styles.output}>
          Please try to <Link to="/">go back</Link>
        </p>
        <p className={styles.output}>Good luck.</p>
      </div>
    </div>
  );
}