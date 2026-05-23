import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './art.module.css';

const drawings = [
  { src: '/img/art/mask.jpg', title: '' },
  { src: '/img/art/flowergirl.jpg', title: '' },
  { src: '/img/art/home.jpg', title: '' },
  { src: '/img/art/water.jpg', title: '' },
  { src: '/img/art/cat.jpg', title: '' },
  { src: '/img/art/panacea3.jpg', title: '' },
  { src: '/img/art/panacea2.jpg', title: '' },
  { src: '/img/art/panacea.jpg', title: '' },
  { src: '/img/art/jumporfall.jpg', title: '' },
  { src: '/img/art/tiger.jpg', title: '' },
  { src: '/img/art/eat.jpg', title: '' },
  { src: '/img/art/flowerhand.jpg', title: '' },
  { src: '/img/art/bamboo.jpg', title: '' },
  { src: '/img/art/ciguy.jpg', title: '' },                                                                                                                                                                                                                                                                                                                                                                                                                        
];

export default function Art() {
  const [lightbox, setLightbox] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setLightbox(null);
    if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % drawings.length);
    if (e.key === 'ArrowLeft') setLightbox(i => (i - 1 + drawings.length) % drawings.length);
  };

  return (
    <Layout title="Art" description="Mural de desenhos">
      <div className={styles.crtNoise} />
      <div className={styles.crtOverlay} />

      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerLine} />
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>//</span> ART MURAL
          </h1>
          <p className={styles.subtitle}>sketchbook_dump.exe</p>
          <div className={styles.headerLine} />
        </header>

        {drawings.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>[ ]</span>
            <p>Nenhum arquivo carregado ainda.</p>
            <p className={styles.emptyHint}>
              Adicione imagens em <code>/static/img/art/</code> e registre em <code>art.js</code>.
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {drawings.map((item, i) => (
              <button
                key={i}
                className={styles.card}
                onClick={() => setLightbox(i)}
                aria-label={item.title || `Desenho ${i + 1}`}
              >
                <div className={styles.cardInner}>
                  <img src={item.src} alt={item.title || `Desenho ${i + 1}`} className={styles.cardImg} loading="lazy" />
                  <div className={styles.cardGlitch} aria-hidden />
                  {item.title && (
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardTitle}>{item.title}</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardCorner} />
              </button>
            ))}
          </div>
        )}
      </main>

      {lightbox !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Fechar">
              ✕
            </button>
            <img
              src={drawings[lightbox].src}
              alt={drawings[lightbox].title || `Desenho ${lightbox + 1}`}
              className={styles.lightboxImg}
            />
            {drawings[lightbox].title && (
              <p className={styles.lightboxTitle}>{drawings[lightbox].title}</p>
            )}
            <div className={styles.lightboxNav}>
              <button
                className={styles.lightboxBtn}
                onClick={() => setLightbox(i => (i - 1 + drawings.length) % drawings.length)}
              >
                ← prev
              </button>
              <span className={styles.lightboxCount}>{lightbox + 1} / {drawings.length}</span>
              <button
                className={styles.lightboxBtn}
                onClick={() => setLightbox(i => (i + 1) % drawings.length)}
              >
                next →
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
