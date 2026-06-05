import React from 'react';
import logo from '../../assets/CCMlogo.png';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <img src={logo} className={styles.logoImage} alt="CodeCraft Media logo" />
            <span className={styles.brandText}>CodeCraft Media</span>
          </div>
          <p className={styles.tagline}>Web development that looks premium and performs fast.</p>
        </div>

        <div className={styles.cols}>
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.list}>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.list}>
              <li>Corporate Websites</li>
              <li>E-Commerce Websites</li>
              <li>Portfolio Websites</li>
              <li>Custom Web Applications</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactLine}>Email: codecraftmedia@gmail.com</div>
            <div className={styles.contactLine}>Phone: +91 63851 50804</div>
            <div className={styles.contactLine}>Instagram: @codecraftmedia.official</div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>© {year} CodeCraft Media. All rights reserved.</div>
      </div>
    </footer>
  );
}

