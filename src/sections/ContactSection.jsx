import React, { useMemo, useState } from 'react';
import styles from './ContactSection.module.css';
import SectionHeading from './SectionHeading.jsx';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!validateEmail(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Message is required.';
    if (form.phone.trim() && form.phone.trim().length < 7) e.phone = 'Phone looks too short.';
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!canSubmit) return;
    setSubmitted(true);
    // Production-ready sites would POST to backend; here we just simulate.
  }

  return (
    <div className={styles.section + ' section'}>
      <div className={styles.container + ' container'}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <SectionHeading
              kicker="Contact"
              title="Let’s build something premium"
              description="Send a message and we’ll get back quickly. Fields are validated for a smooth experience." 
            />

            <div className={styles.info + ' reveal'}>
              <div className={styles.infoRow}>✉️ <span>codecraftmedia@gmail.com</span></div>
              <div className={styles.infoRow}>📞 <span>+91 63851 50804</span></div>
              <div className={styles.infoRow}>📍 <span>Remote / Worldwide</span></div>
              <div className={styles.infoRow}>📷 <span>@codecraftmedia.official</span></div>
              <div className={styles.socials}>
                <a className={styles.social} href="https://instagram.com/codecraftmedia.official" target="_blank" rel="noreferrer noopener">
                  Instagram
                </a>
                <a className={styles.social} href="mailto:codecraftmedia@gmail.com" target="_blank" rel="noreferrer noopener">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className={styles.right + ' reveal'}>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  aria-invalid={touched.name && !!errors.name}
                />
                {touched.name && errors.name ? <div className={styles.error}>{errors.name}</div> : null}
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  value={form.email}
                  onChange={(e) => setField('email', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  aria-invalid={touched.email && !!errors.email}
                />
                {touched.email && errors.email ? <div className={styles.error}>{errors.email}</div> : null}
              </label>

              <label className={styles.label}>
                Phone (optional)
                <input
                  className={styles.input}
                  value={form.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  aria-invalid={touched.phone && !!errors.phone}
                />
                {touched.phone && errors.phone ? <div className={styles.error}>{errors.phone}</div> : null}
              </label>

              <label className={styles.label}>
                Message
                <textarea
                  className={styles.textarea}
                  value={form.message}
                  rows={5}
                  onChange={(e) => setField('message', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  aria-invalid={touched.message && !!errors.message}
                />
                {touched.message && errors.message ? <div className={styles.error}>{errors.message}</div> : null}
              </label>

              <button className="btn" type="submit" disabled={submitted}>
                {submitted ? 'Message sent ✓' : 'Send Message'}
              </button>

              <p className={styles.note}>
                By submitting, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

