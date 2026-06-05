import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';

import ServicesSection from '../sections/ServicesSection.jsx';
import AdditionalServices from '../sections/AdditionalServices.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import HeroSection from '../sections/HeroSection.jsx';

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

export default function Home() {
  const location = useLocation();
  useRevealOnScroll();

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    const sectionId = location.hash.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div className={styles.page}>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="additional-services">
        <AdditionalServices />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <div className={styles.mobileCta}>
        <Link className="btnSecondary" to="/projects">
          View Projects
        </Link>
      </div>
    </div>
  );
}

