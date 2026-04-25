import React from 'react';
import styles from './styles.module.css';

export function Step({ title, children, _index }) {
  return (
    <li className={styles.step}>
      <div className={styles.index}>{_index}</div>
      <div className={styles.content}>
        <strong className={styles.title}>{title}</strong>
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </li>
  );
}

export function Stepper({ children }) {
  const steps = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, { _index: index + 1 });
  });

  return (
    <ol className={styles.stepper}>
      {steps}
    </ol>
  );
}