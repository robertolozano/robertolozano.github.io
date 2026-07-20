'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Header.module.css';
import { socialLinks, navLinks } from '@/data/constants';
import { ThemeToggle } from './ThemeToggle';
import { SocialIcon } from './SocialIcon';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change so it never lingers over new content.
  // Adjusting during render (rather than in an effect) avoids a wasted pass
  // where the menu is still open on the new route.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  // Lock body scroll while the mobile menu covers the page.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (href: string) => {
    // In-page anchors (e.g. "/#experience") are not routes — marking them
    // current would light up two nav items at once on the homepage.
    if (href.includes('#')) return false;
    return pathname === href;
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Roberto Lozano Jr. — home">
          <span className={styles.logoMark}>RLJ</span>
          <span className={styles.logoText}>Roberto Lozano Jr.</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.socials}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`${link.name} profile (opens in a new tab)`}
              >
                <SocialIcon name={link.name} />
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                isActive(link.href) ? styles.mobileNavLinkActive : ''
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileSocials}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
            >
              <SocialIcon name={link.name} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
