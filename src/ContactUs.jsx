import React, { useEffect } from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll(`.${styles['contact-us-section']} .fade-in`);
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
        <section className={styles['contact-us-section']} id="contact-us">
            <div className={styles['contact-container']}>
                <div className={styles['contact-content']}>
                    <h2 className={`fade-in heading-gradient`}>Have questions?</h2>
                    <p className={`fade-in stagger-delay-1 ${styles['contact-text']}`}>
                        We're here to help! Our team is ready to assist with any questions or feedback
                        about your Chaco experience.
                    </p>
                    <div className={styles['contact-info']}>
                        <div className={`fade-in stagger-delay-2 ${styles['email-container']}`}>
                            <span className={styles['email-label']}>Email us at:</span>
                            <a href="mailto:chacobetatesting@gmail.com" className={styles['email-link']}>
                                chacobetatesting@gmail.com
                            </a>
                        </div>
                        <div className={`fade-in stagger-delay-3 ${styles['button-container']}`}>
                            <a
                                href="mailto:chacobetatesting@gmail.com"
                                className={`btn ${styles['contact-button']}`}
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;