import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import ServiceCard from './ServiceCard.jsx';
import styles from './ServicesSection.module.css';

const services = [
  {
    key: 'corporate',
    title: 'Corporate Websites',
    description: 'Brand-forward sites with clear structure and fast performance.',
    icon: '🏢',
  },
  {
    key: 'ecommerce',
    title: 'E-Commerce Websites',
    description: 'Conversion-focused storefronts designed for smooth shopping.',
    icon: '🛒',
  },
  {
    key: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Modern profiles and case studies with premium typography.',
    icon: '🧩',
  },
  {
    key: 'business',
    title: 'Business Websites',
    description: 'Reliable web experiences that help your business grow.',
    icon: '📈',
  },
  {
    key: 'customapps',
    title: 'Custom Web Applications',
    description: 'Scalable apps built with maintainable components and logic.',
    icon: '⚙️',
  },
  {
    key: 'landing',
    title: 'Landing Pages',
    description: 'Campaign pages optimized for clarity, speed, and action.',
    icon: '🚀',
  },
];

export default function ServicesSection() {
  return (
    <div className={styles.section + ' section'}>
      <div className={styles.container + ' container'}>
        <SectionHeading
          kicker="Web Development"
          title="Everything you need to launch and scale"
          description="A focused set of services for business goals—built with modern UI and production-ready code." 
        />

        <div className={styles.grid}>
          {services.map((s, idx) => (
            <div key={s.key} className={styles.item + ' reveal'} style={{ transitionDelay: `${idx * 55}ms` }}>
              <ServiceCard icon={s.icon} title={s.title} description={s.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

