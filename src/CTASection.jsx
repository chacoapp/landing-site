import React, { useEffect } from 'react';
import styles from './CTASection.module.css';

function CTASection() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(`.${styles['cta-section']} .fade-in`);
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <section className={styles['cta-section']}>
      <div className="container">
        <h2 className={`fade-in heading-gradient`}>Ready to build better habits?</h2>
        <p className="fade-in stagger-delay-1">
          Join our growing community and chase your goals with the power of real
          social accountability.
        </p>
        <a
          href="https://testflight.apple.com/join/bqJPaDcM"
          target="_blank"
          className="btn btn-hero btn-green fade-in stagger-delay-2"
        >
          Try Chaco
        </a>
      </div>
    </section>
  );
}

export default CTASection;