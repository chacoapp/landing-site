import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer style={{ background: 'var(--theme-tertiary-dark)' }}>
      <div className={styles['footer-bottom']}>
        <p>&copy; 2025 Chaco 🐢 Raised in Austin, TX</p>
        <div className={styles['social-links']}>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/chacoapp/"
            className={styles['social-icon']}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn"
              style={{ width: '105%', height: '105%', borderRadius: '50%' }}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/chacoapp/"
            className={styles['social-icon']}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png"
              alt="Instagram"
              style={{ width: '130%', height: '130%', borderRadius: '50%' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;