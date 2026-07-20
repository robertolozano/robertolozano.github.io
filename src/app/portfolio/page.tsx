'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import styles from './portfolio.module.css';

type FilterCategory = 'all' | 'web' | 'ml' | 'mobile' | 'database' | 'other';

const filterButtons: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Database', value: 'database' },
  { label: 'Interactive', value: 'other' },
];

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: projects.filter((p) => p.category === 'web').length, label: 'Web apps' },
  { value: projects.filter((p) => p.category === 'ml').length, label: 'ML projects' },
  { value: new Set(projects.flatMap((p) => p.techStack)).size, label: 'Technologies' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const countFor = (value: FilterCategory) =>
    value === 'all' ? projects.length : projects.filter((p) => p.category === value).length;

  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h1 className={styles.pageTitle}>Things I&apos;ve built</h1>
          <p className={styles.pageDescription}>
            Personal and graduate research projects spanning web development, NLP and machine
            learning, mobile, and database systems. For professional work, see the{' '}
            <Link href="/#experience" className={styles.inlineLink}>
              experience section
            </Link>
            .
          </p>

          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {filterButtons.map((button) => {
              const isActive = activeFilter === button.value;
              return (
                <button
                  key={button.value}
                  type="button"
                  className={`${styles.filterButton} ${isActive ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(button.value)}
                  aria-pressed={isActive}
                >
                  {button.label}
                  <span className={styles.filterCount}>{countFor(button.value)}</span>
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className={styles.projectGrid}>
              {filteredProjects.map((project, index) => (
                // Keying on the filter restarts the entrance animation per view.
                <ProjectCard
                  key={`${activeFilter}-${project.id}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No projects in this category yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
