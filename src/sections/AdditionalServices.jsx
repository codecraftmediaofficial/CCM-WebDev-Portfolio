import React from 'react';
import ServiceCard from './ServiceCard.jsx';
import styles from './AdditionalServices.module.css';
import SectionHeading from './SectionHeading.jsx';

const additional = [
  {
    title: 'Graphic Designing',
    description: 'Premium visuals, logos, and brand assets that stay consistent across channels.',
    icon: '🎨',
  },
  {
    title: 'Video Editing',
    description: 'Clean cuts, motion highlights, and polished edits for marketing and product stories.',
    icon: '🎬',
  },
  {
    title: '3D Modeling & Design',
    description: 'Modern 3D assets and product visuals designed for impact and clarity.',
    icon: '🧊',
  },
];

export default function AdditionalServices() {
  return (
    <div className={styles.section + ' section'}>
      <div className={styles.container + ' container'}>
        <SectionHeading
          kicker="Additional Services"
          title="Full-stack creative support"
          description="Extend your brand experience with quality design, video, and 3D work." 
        />

        <div className={styles.grid}>
          {additional.map((s, idx) => (
            <div key={s.title} className={styles.item + ' reveal'} style={{ transitionDelay: `${idx * 70}ms` }}>
              <ServiceCard icon={s.icon} title={s.title} description={s.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

