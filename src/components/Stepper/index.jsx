import React from 'react';
import styles from './styles.module.css';

export function Stepper({ steps }) {
  return (
    <ol className={styles.stepper}>
      {steps.map((step, index) => (
        <li key={index} className={styles.step}>
          <div className={styles.index}>{index + 1}</div>
          <div className={styles.content}>
            <strong className={styles.title}>{step.title}</strong>
            {step.children && (
              <div className={styles.body}>{step.children}</div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}