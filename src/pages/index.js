import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './home.module.css';
import AboutPopover from '@site/src/components/AboutPopover';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const avatar = document.querySelector('.glitch.avatar');
    const glitchTexts = document.querySelectorAll('.glitch-text');

    glitchTexts.forEach(el => {
      const handleMouseEnter = () => avatar?.classList.add('glitch-active');
      const handleMouseLeave = () => avatar?.classList.remove('glitch-active');

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('focus', handleMouseEnter);
      el.addEventListener('blur', handleMouseLeave);

      return () => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('focus', handleMouseEnter);
        el.removeEventListener('blur', handleMouseLeave);
      };
    });
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Blog de tecnologia e cybersecurity"
    >
      <div className={styles.crtNoise}></div>
      <div className={styles.crtOverlay}></div>

      <section className={`${styles.hero} ${styles.crtBg}`}>
        <div className={styles.layout}>

          {/* Coluna esquerda vazia (mantém layout centralizado) */}
          <div></div>

          {/* Avatar Central + Botões */}
          <div className={styles.center}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarCircle}>
                <div className={`${styles.glitch} ${styles.avatar}`}>
                  <img src="/img/mask.png" alt="Avatar Kitsune" />
                </div>
              </div>
            </div>
            <AboutPopover />

            <div className={styles.navButtons}>
              <Link
                to="/docs/fundamentos"
                className={`${styles.uiButton} ${styles.navButton} ${styles.glitchText}`}
                data-text="Fundamentos"
              >
                Fundamentos
                <span className={styles.uiButtonGlitch}>Fundamentos</span>
              </Link>

              <Link
                to="/docs/cybersecurity"
                className={`${styles.uiButton} ${styles.navButton} ${styles.glitchText}`}
                data-text="Cybersecurity"
              >
                Cybersecurity
                <span className={styles.uiButtonGlitch}>Cybersecurity</span>
              </Link>
            </div>
          </div>

          {/* Coluna direita vazia */}
          <div></div>

        </div>
      </section>
    </Layout>
  );
}
