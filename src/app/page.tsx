import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ExperienceTimeline } from '@/components/Experience';
import { EducationList } from '@/components/Education';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import styles from './page.module.css';

/** The homepage shows a curated subset; the full set lives on /portfolio. */
const FEATURED_COUNT = 6;

export default function Home() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <main className={styles.main}>
      <Hero />

      <section className={styles.section} id="experience">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Experience</span>
            <h2 className={styles.sectionTitle}>Where I&apos;ve worked</h2>
            <p className={styles.sectionSubtitle}>
              Production systems and internal tooling for construction and manufacturing teams.
            </p>
          </header>
          <ExperienceTimeline />
        </div>
      </section>

      <section className={styles.sectionAlt} id="education">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Education</span>
            <h2 className={styles.sectionTitle}>Where I studied</h2>
            <p className={styles.sectionSubtitle}>
              An MS focused on machine learning and NLP, on top of a CS foundation.
            </p>
          </header>

          <EducationList compact />

          <div className={styles.sectionFooter}>
            <Link href="/about" className={styles.viewAll}>
              See full coursework
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Projects</span>
            <h2 className={styles.sectionTitle}>What I&apos;ve been up to</h2>
            <p className={styles.sectionSubtitle}>
              Selected personal and graduate research work across web, ML, and mobile.
            </p>
          </header>

          <div className={styles.projectGrid}>
            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="/portfolio" className={styles.viewAll}>
              View all {projects.length} projects
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
