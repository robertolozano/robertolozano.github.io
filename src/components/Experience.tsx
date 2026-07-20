'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Experience.module.css';
import { experiences } from '@/data/constants';

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {experiences.map((experience, index) => (
        <motion.article
          key={experience.id}
          className={styles.entry}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className={styles.marker} aria-hidden="true" />
          <div className={styles.card}>
            <header className={styles.cardHeader}>
              <div>
                <h3 className={styles.role}>{experience.role}</h3>
                <p className={styles.company}>
                  {experience.company}
                  {experience.employmentType && (
                    <span className={styles.employmentType}> · {experience.employmentType}</span>
                  )}
                </p>
              </div>
              <div className={styles.meta}>
                <span className={styles.dateRange}>{experience.dateRange}</span>
                <span className={styles.location}>{experience.location}</span>
              </div>
            </header>

            <ul className={styles.highlights}>
              {experience.highlights.map((highlight) => (
                <li key={highlight} className={styles.highlight}>
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className={styles.techStack}>
              {experience.techStack.map((tech) => (
                <li key={tech} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
};
