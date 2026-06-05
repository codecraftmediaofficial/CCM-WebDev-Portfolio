import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.wrap + ' container'}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <SectionHeading
            kicker="About Us"
            title="A web development partner built for long-term value"
            description="We design scalable front-ends and sturdy foundations so your website can grow—without the mess."
          />
        </div>
        <div className={styles.right}>
          <div className={styles.block + ' reveal'}>
            <h3 className={styles.h3}>Our overview</h3>
            <p className={styles.p}>
              CodeCraft Media focuses on premium business websites, fast landing pages, and modern React experiences.
              Every component is built to be maintainable.
            </p>
          </div>
          <div className={styles.block + ' reveal'}>
            <h3 className={styles.h3}>Mission</h3>
            <p className={styles.p}>
              Deliver clean code, sharp UI, and performance-first execution—so teams can ship confidently.
            </p>
          </div>
          <div className={styles.block + ' reveal'}>
            <h3 className={styles.h3}>Why choose us</h3>
            <p className={styles.p}>
              We combine agency-level design sensibility with developer-grade reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


