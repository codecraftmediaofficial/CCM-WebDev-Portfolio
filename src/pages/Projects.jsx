import React, { useEffect } from 'react';
import projects from '../data/projects.js';
import ProjectCard from '../sections/ProjectCard.jsx';
import styles from './Projects.module.css';

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('isVisible');
        }
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Projects() {
  useRevealOnScroll();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.kicker + ' reveal'}>Projects</div>
          <h1 className={styles.title + ' reveal'}>Premium builds, shipped fast</h1>
          <p className={styles.subtitle + ' reveal'}>
            A sample portfolio showcasing six modern web experiences. Add or swap projects by editing the project data array.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((p, idx) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${Math.min(idx * 60, 420)}ms` }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

