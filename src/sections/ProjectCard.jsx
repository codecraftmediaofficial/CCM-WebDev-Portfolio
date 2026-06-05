import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <a
      className={styles.card + ' hoverLift'}
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open project: ${project.title}`}
    >
      <div className={styles.thumbWrap}>
        <img className={styles.thumb} src={project.thumbnail} alt={project.title} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.ext} aria-hidden="true">↗</span>
        </div>
        <p className={styles.desc}>{project.description}</p>
      </div>
    </a>
  );
}

