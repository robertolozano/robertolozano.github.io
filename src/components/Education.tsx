'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Education.module.css';
import { education } from '@/data/constants';

interface EducationListProps {
  /**
   * Compact lays the degrees out side by side and trims the coursework to a
   * preview — used on the homepage, where education supports the pitch rather
   * than being the main event. The full list lives on /about.
   */
  compact?: boolean;
}

/** How many coursework chips the compact card shows before collapsing to "+N". */
const MAX_COMPACT_COURSES = 5;

export const EducationList: React.FC<EducationListProps> = ({ compact = false }) => {
  return (
    <div className={`${styles.list} ${compact ? styles.listCompact : ''}`}>
      {education.map((entry, index) => {
        const allCourses = entry.coursework ?? [];
        const shownCourses = compact ? allCourses.slice(0, MAX_COMPACT_COURSES) : allCourses;
        const hiddenCourses = allCourses.slice(shownCourses.length);

        return (
        <motion.article
          key={entry.id}
          className={`${styles.card} ${compact ? styles.cardCompact : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.header}>
            {entry.logo ? (
              <Image
                src={`/${entry.logo}`}
                alt={`${entry.school} logo`}
                width={56}
                height={56}
                className={styles.logo}
              />
            ) : (
              <span className={styles.monogram} aria-hidden="true">
                {entry.monogram}
              </span>
            )}

            <div className={styles.heading}>
              <h3 className={styles.degree}>{entry.degree}</h3>
              <p className={styles.school}>{entry.school}</p>
              {compact && <p className={styles.yearInline}>{entry.dateRange}</p>}
            </div>

            {!compact && <span className={styles.year}>{entry.dateRange}</span>}
          </div>

          <p className={styles.description}>{entry.description}</p>

          {shownCourses.length > 0 && (
            <div className={styles.coursework}>
              <h4 className={styles.courseworkTitle}>Selected Coursework</h4>
              <ul className={styles.courseworkList}>
                {shownCourses.map((course) => (
                  <li key={course} className={styles.courseworkItem}>
                    {course}
                  </li>
                ))}
                {hiddenCourses.length > 0 && (
                  <li
                    className={`${styles.courseworkItem} ${styles.courseworkMore}`}
                    title={hiddenCourses.join(', ')}
                  >
                    +{hiddenCourses.length} more
                  </li>
                )}
              </ul>
            </div>
          )}
        </motion.article>
        );
      })}
    </div>
  );
};
