'use client';

import { motion } from 'framer-motion';
import styles from './not-found.module.css';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={styles.errorCode}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>
          That page doesn&apos;t exist or has been moved. Try the portfolio instead — there&apos;s
          plenty to look at.
        </p>
        <div className={styles.actions}>
          <Button href="/">Return home</Button>
          <Button href="/portfolio" variant="secondary">
            View portfolio
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
