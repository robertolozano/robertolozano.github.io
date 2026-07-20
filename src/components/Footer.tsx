import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import { socialLinks, navLinks, contactEmail } from '@/data/constants';
import { SocialIcon } from './SocialIcon';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>RLJ</span>
          <div>
            <p className={styles.name}>Roberto Lozano Jr.</p>
            <p className={styles.role}>Full Stack Developer</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.connect}>
          <a className={styles.email} href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
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
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Roberto Lozano Jr.</p>
        <p>Built with Next.js &amp; TypeScript</p>
      </div>
    </footer>
  );
};
