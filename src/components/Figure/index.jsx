import React from 'react';
import styles from './styles.module.css';

export default function Figure({ src, alt, caption }) {
  return (
    <figure>
      <img src={src} alt={alt || caption} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}