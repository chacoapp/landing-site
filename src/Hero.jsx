import React, { useEffect } from 'react';
import styles from './Hero.module.css';

function Hero() {
  useEffect(() => {
    const heroElements = document.querySelectorAll(`.${styles.hero} .fade-in`);
    setTimeout(() => {
      heroElements.forEach((element) => {
        element.classList.add('animated');
      });
    }, 300);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles['hero-content']}>
          <h1 className="fade-in stagger-delay-1 title-gradient">
            Track habits. Add stakes. Share progress.
          </h1>
          <p className="fade-in stagger-delay-2">
            Chaco helps you set goals and track progress with the support of
            your closest friends—because progress is better together.
          </p>
          <div className={`hero-cta fade-in stagger-delay-3 ${styles['hero-cta']}`}>
            <a
              href="https://testflight.apple.com/join/bqJPaDcM"
              target="_blank"
              className="btn btn-hero btn-green"
            >
              Start tracking now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;