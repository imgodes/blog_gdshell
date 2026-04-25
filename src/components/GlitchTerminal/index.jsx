import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const LINES = [
  { text: '> SYSTEM_INIT...', type: 'normal' },
  { text: '> ERR0R: unauthorized_access_detected', type: 'error' },
  { text: '> Let the hunt begin', type: 'main' },
];

const CHAR_DELAY    = 55;
const LINE_PAUSE    = 380;
const DISPLAY_PAUSE = 3200;
const CLEAR_DELAY   = 90;

const CORRUPT_CHARS = '█▓▒░@#$%&?!';

function corruptChar() {
  return CORRUPT_CHARS[Math.floor(Math.random() * CORRUPT_CHARS.length)];
}

export default function GlitchTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typing, setTyping]             = useState('');
  const [lineIdx, setLineIdx]           = useState(0);
  const [charIdx, setCharIdx]           = useState(0);
  const [phase, setPhase]               = useState('typing');
  const [corrupt, setCorrupt]           = useState(null);

  // Typing corruption: random chance to flash a wrong char, then self-correct
  useEffect(() => {
    if (phase !== 'typing' || lineIdx >= LINES.length) return;

    const target = LINES[lineIdx].text;
    if (charIdx < target.length) {
      const shouldCorrupt = Math.random() < 0.12;
      if (shouldCorrupt) {
        setCorrupt(corruptChar());
        const fix = setTimeout(() => setCorrupt(null), 80);
        return () => clearTimeout(fix);
      }
    }
  }, [charIdx, phase, lineIdx]);

  useEffect(() => {
    let timer;

    if (phase === 'typing') {
      if (lineIdx >= LINES.length) {
        setPhase('display');
        return;
      }

      const target = LINES[lineIdx].text;

      if (charIdx < target.length) {
        timer = setTimeout(() => {
          setTyping(target.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, CHAR_DELAY + (Math.random() * 30 - 15)); // jitter humano
      } else {
        timer = setTimeout(() => {
          setVisibleLines(v => [...v, LINES[lineIdx]]);
          setTyping('');
          setCharIdx(0);
          setLineIdx(i => i + 1);
        }, LINE_PAUSE);
      }
    }

    if (phase === 'display') {
      timer = setTimeout(() => setPhase('clear'), DISPLAY_PAUSE);
    }

    if (phase === 'clear') {
      if (visibleLines.length > 0) {
        timer = setTimeout(() => {
          setVisibleLines(v => v.slice(1));
        }, CLEAR_DELAY);
      } else {
        timer = setTimeout(() => {
          setLineIdx(0);
          setCharIdx(0);
          setTyping('');
          setPhase('typing');
        }, 600);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, lineIdx, charIdx, visibleLines]);

  const activeLineData = phase === 'typing' && lineIdx < LINES.length ? LINES[lineIdx] : null;
  const isDisplay      = phase === 'display';

  return (
    <div className={styles.terminal}>
      <div className={styles.scanline} />

      {visibleLines.map((line, i) => {
        const isMain      = line.type === 'main';
        const withGlitch  = isMain && isDisplay;
        return (
          <div
            key={i}
            className={`${styles.line} ${styles[line.type]} ${withGlitch ? styles.glitching : ''}`}
            data-text={line.text}
          >
            {line.text}
          </div>
        );
      })}

      {activeLineData && (
        <div className={`${styles.line} ${styles[activeLineData.type]}`}>
          {typing}
          {corrupt && <span className={styles.corruptChar}>{corrupt}</span>}
          <span className={styles.cursor}>█</span>
        </div>
      )}
    </div>
  );
}
