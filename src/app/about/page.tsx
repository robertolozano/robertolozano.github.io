"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./about.module.css";
import {
  skills,
  certifications,
  contactEmail,
  resumeUrl,
} from "@/data/constants";
import { Button } from "@/components/Button";
import { EducationList } from "@/components/Education";

const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Frameworks & Libraries", items: skills.frameworks },
  { title: "Tools & Platforms", items: skills.tools },
  { title: "Core Concepts", items: skills.concepts },
];

const passions = [
  {
    title: "Full Stack Product Work",
    body: "Owning features end to end, from schema to API to interface. I care most about the unglamorous parts: edge cases surfaced early, real-time state that stays consistent, and tooling people actually want to use.",
  },
  {
    title: "Agentic Development",
    body: "Designing AI-assisted workflows that hold up under review: purpose-built subagents with scoped tools, parallel work on isolated worktrees, and browser automation to verify what actually shipped.",
  },
  {
    title: "NLP & Machine Learning",
    body: "Graduate research in word embeddings, topic modeling, and recommendation systems. I'm drawn to the evaluation side: proving a model is actually better, not just plausible.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrow}>About</span>
            <h1 className={styles.pageTitle}>Hi, I&apos;m Roberto</h1>
            <p className={styles.lead}>
              I&apos;m a full-stack developer with 3+ years of professional
              experience building React-based web applications and the
              production systems behind them, from construction pipeline
              portals to internal tooling used daily by operations teams.
            </p>
            <p className={styles.body}>
              I finished my MS in Computer Science at Santa Clara University in
              2025, where my graduate work focused on NLP and machine learning:
              word embeddings, recommendation systems, and sentiment analysis.
              More recently I&apos;ve been deep in agentic development workflows,
              building custom Claude Code subagents with scoped roles and
              isolated context, orchestrating parallel agents across git
              worktrees, and verifying the output with Playwright before
              anything gets merged.
            </p>
            <p className={styles.body}>
              What ties it together: I like owning a problem end to end, talking
              to the people who actually use the thing, and shipping something
              that holds up in production.
            </p>
            <div className={styles.heroActions}>
              <Button href={resumeUrl} external>
                View Resume
              </Button>
              <Button href={`mailto:${contactEmail}`} variant="secondary">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroImageWrap}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/me.jpg"
              alt="Roberto Lozano Jr."
              width={420}
              height={420}
              className={styles.profileImage}
            />
          </motion.div>
        </div>
      </section>

      <motion.section className={styles.sectionAlt} {...fadeIn}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education</h2>
          </header>

          <EducationList />
        </div>
      </motion.section>

      <motion.section className={styles.section} {...fadeIn}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Skills &amp; Technologies</h2>
          </header>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <div key={group.title} className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>{group.title}</h3>
                <ul className={styles.skillList}>
                  {group.items.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.certifications}>
            {certifications.map((cert) => (
              <span key={cert} className={styles.certificationBadge}>
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 5 5L20 7" />
                </svg>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className={styles.sectionAlt} {...fadeIn}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              What I&apos;m passionate about
            </h2>
          </header>

          <div className={styles.passionsGrid}>
            {passions.map((passion) => (
              <article key={passion.title} className={styles.passionCard}>
                <h3 className={styles.passionTitle}>{passion.title}</h3>
                <p className={styles.passionDescription}>{passion.body}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className={styles.contactSection} {...fadeIn}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>Let&apos;s build something</h2>
          <p className={styles.contactText}>
            I&apos;m currently open to new opportunities. The fastest way to
            reach me is email.
          </p>
          <a className={styles.contactLink} href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </motion.section>
    </main>
  );
}
