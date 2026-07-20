'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/ProjectCard.module.css';
import { Project } from '@/types';
import { SocialIcon } from './SocialIcon';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryLabels: Record<string, string> = {
  web: 'Web App',
  ml: 'Machine Learning',
  mobile: 'Mobile',
  database: 'Database',
  other: 'Interactive',
};

/** Tech lists run long; the rest stay visible as a "+N" count. */
const MAX_VISIBLE_TECH = 5;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const visibleTech = project.techStack.slice(0, MAX_VISIBLE_TECH);
  const overflowCount = project.techStack.length - visibleTech.length;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        // Stagger within a row, but cap it so late cards don't feel sluggish.
        delay: Math.min(index, 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.media}>
        <Image
          src={`/${project.image}`}
          alt={`${project.title} screenshot`}
          width={640}
          height={400}
          className={styles.image}
        />
        {project.category && (
          <span className={styles.category}>{categoryLabels[project.category]}</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.techStack}>
          {visibleTech.map((tech) => (
            <li key={tech} className={styles.techItem}>
              {tech}
            </li>
          ))}
          {overflowCount > 0 && (
            <li
              className={`${styles.techItem} ${styles.techMore}`}
              title={project.techStack.slice(MAX_VISIBLE_TECH).join(', ')}
            >
              +{overflowCount}
            </li>
          )}
        </ul>

        <div className={styles.links}>
          <a
            className={styles.link}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source on GitHub (opens in a new tab)`}
          >
            <SocialIcon name="GitHub" size={16} />
            Code
          </a>

          {project.liveLink && (
            <a
              className={`${styles.link} ${styles.linkPrimary}`}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site (opens in a new tab)`}
            >
              Live Site
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
