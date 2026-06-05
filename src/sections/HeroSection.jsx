import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero + ' reveal'}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.badge}>Premium Web Development</div>
            <h1 className={styles.h1}>
              CodeCraft Media builds modern websites that <span className={styles.em}>convert</span>.
            </h1>
            <p className={styles.p}>
              From corporate branding to high-performing web apps—our team designs, develops, and ships clean,
              maintainable experiences.
            </p>

            <div className={styles.actions}>
              <Link className="btn" to="/projects">
                View Projects <span aria-hidden="true">→</span>
              </Link>
              <a
                className="btnSecondary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Contact Us
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>Fast</div>
                <div className={styles.statLabel}>Performance-first builds</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>Clean</div>
                <div className={styles.statLabel}>Component-based architecture</div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.illus} role="img" aria-label="Web development themed illustration">
              <div className={styles.illusCard}>
                <div className={styles.illusTop}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <div className={styles.code}>
                  <div className={styles.line}>
                    <span className={styles.dim}>const</span> <span>site</span> = <span className={styles.purple}>createApp</span>();
                  </div>
                  <div className={styles.line}>
                    <span className={styles.dim}>site</span>.<span className={styles.purple}>route</span>('projects');
                  </div>
                  <div className={styles.line}>
                    <span className={styles.dim}>site</span>.<span className={styles.purple}>animate</span>('fade');
                  </div>
                </div>
              </div>
              <div className={styles.rings} aria-hidden="true">
                <div className={styles.ring1} />
                <div className={styles.ring2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

