import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/CCMlogo.png';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', section: 'home', type: 'scroll' },
  { label: 'About Us', section: 'about', type: 'scroll' },
  { label: 'Services', section: 'services', type: 'scroll' },
  { label: 'Projects', to: '/projects', type: 'link' },
  { label: 'Contact', section: 'contact', type: 'scroll' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} aria-label="Company home">
          <img src={logo} className={styles.logoImage} alt="CodeCraft Media logo" />
          <span className={styles.brandText}>CodeCraft Media</span>
        </NavLink>

        <button
          type="button"
          className={`${styles.menuText} ${menuOpen ? styles.openButton : ''}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          Menu
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Primary">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ) : (
              <button
                key={item.label}
                type="button"
                className={styles.navButton}
                onClick={() => scrollToSection(item.section)}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      </div>

      <button
        type="button"
        className={`${styles.backdrop} ${menuOpen ? styles.visible : ''}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />
    </header>
  );
}

