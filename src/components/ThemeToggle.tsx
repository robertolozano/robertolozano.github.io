'use client';

import React from 'react';
import styles from '@/styles/ThemeToggle.module.css';

/**
 * Theme switch with no React state at all.
 *
 * Which icon shows is decided in CSS from `data-theme`, so the server and
 * client render identical markup — no hydration mismatch and no post-mount
 * icon flip. The click handler reads the current theme straight off the
 * document.
 *
 * Light is the default: the OS `prefers-color-scheme` setting is deliberately
 * ignored, so dark applies only when a visitor asks for it here.
 */
export const ThemeToggle: React.FC = () => {
  const toggle = () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') ?? 'light';
    const next = current === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage unavailable (private mode) — the theme still applies this session.
    }
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {/* Moon — shown in light mode, i.e. "switch to dark". */}
      <svg
        className={styles.showInLight}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-9.45-9.45 1 1 0 0 0-1.19-1.19A10 10 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
      </svg>

      {/* Sun — shown in dark mode, i.e. "switch to light". */}
      <svg
        className={styles.showInDark}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
        <path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M5.9 5.9 4.4 4.4M19.6 19.6l-1.5-1.5M18.1 5.9l1.5-1.5M4.4 19.6l1.5-1.5" />
      </svg>
    </button>
  );
};
