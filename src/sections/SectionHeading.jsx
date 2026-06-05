import React from 'react';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className={styles.wrap}>
      {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {description ? <p className={styles.desc}>{description}</p> : null}
    </div>
  );
}

