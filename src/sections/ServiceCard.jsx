import React from 'react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card + ' hoverLift reveal'}>
      <div className={styles.iconWrap} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

