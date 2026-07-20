'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';
import { heroData, contactEmail, resumeUrl } from '@/data/constants';
import { Button } from './Button';

const facts = [
  { value: '3+', label: 'Years professional' },
  { value: 'MS', label: 'Computer Science' },
  { value: '10', label: 'Shipped projects' },
];

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Decorative background wash — purely visual. */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroData.availability && (
            <span className={styles.availability}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              {heroData.availability}
            </span>
          )}

          <h1 className={styles.name}>{heroData.name}</h1>
          <p className={styles.title}>{heroData.title}</p>
          <p className={styles.tagline}>{heroData.tagline}</p>
          <p className={styles.description}>{heroData.description}</p>

          <div className={styles.ctaRow}>
            <Button href={resumeUrl} external>
              View Resume
            </Button>
            <Button href={`mailto:${contactEmail}`} variant="secondary">
              Get in Touch
            </Button>
          </div>

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={styles.factValue}>{fact.value}</dt>
                <dd className={styles.factLabel}>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className={styles.portrait}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.portraitFrame}>
            <Image
              src={`/${heroData.image}`}
              alt={`Portrait of ${heroData.name}`}
              width={520}
              height={620}
              className={styles.portraitImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
