import React, { useEffect } from 'react';
import styles from './Accountability.module.css';

function Accountability() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(
      `.${styles['accountability-content']} .fade-in`
    );
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
    <section className={styles.accountability} id="testimonials">
      <div className="container">
        <div className={styles['accountability-content']}>
          <div className={styles['accountability-text']}>
            <h2 className="fade-in heading-gradient" style={{ lineHeight: 1.2 }}>
              Consistency is easy when you’re not alone.
            </h2>
            <p className="fade-in stagger-delay-1">
              Research shows that people are 65% more likely to achieve a goal
              when they have someone to hold them to it. Chaco makes this easy by
              keeping you connected with the people who matter most.
            </p>
          </div>
          <div className={styles['accountability-image']}>
            <div
              className={` ${styles['accountability-testimonial']} fade-in stagger-delay-3`}
            >
              <div className={styles['testimonial-header']}>
                <div className={styles['testimonial-avatar']}>🏋</div>
                <div className={styles['testimonial-name']}>Jack S.</div>
              </div>
              <p className={styles['testimonial-text']}>
                "Chaco has without a doubt made me more consistent with going to
                the gym and getting my work done because the app and my friends
                hold me accountable. Sometimes I wake up and don’t want to the go
                to the gym, but then I would fail my Chaco goal, and we do NOT
                want that."
              </p>
            </div>

            <div
              className={`${styles['accountability-testimonial']} fade-in stagger-delay-4`}
            >
              <div className={styles['testimonial-header']}>
                <div className={styles['testimonial-avatar']}>🏃‍♀️</div>
                <div className={styles['testimonial-name']}>Sanvi N.</div>
              </div>
              <p className={styles['testimonial-text']}>
                "Using Chaco makes it easy to stay committed to my habit of
                running everyday! I also love the fun environment Chaco provides
                to push my friends to reach their potential. I'm excited to keep
                using the app to hold myself accountable in other ways like eating
                healthy and doing schoolwork!."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accountability;