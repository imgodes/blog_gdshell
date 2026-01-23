import React from 'react';
import styles from './styles.module.css';

export function Stepper({ steps }) {
  return (
    <ol className={styles.stepper}>
      {steps.map((step, index) => (
        <li key={index} className={styles.step}>
          <div className={styles.index}>{index + 1}</div>
          <div className={styles.content}>
            <strong>{step.title}</strong>
            {step.description && <p>{step.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
