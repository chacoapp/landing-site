import React, { useEffect } from 'react';
import styles from './Features.module.css';

function Features() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll(`.${styles['feature-grid']} .fade-in`);
        const titleElement = document.querySelector(`.${styles['section-title']} .fade-in`);

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

        // Ensure section title gets animated as well
        if (titleElement) {
            observer.observe(titleElement);
        }

        fadeElements.forEach((element) => {
            observer.observe(element);
        });
    }, []);

    return (
        <section className={styles.features} id="how-chaco-works">
            <div className="container">
                <div className={styles['section-title']}>
                    <h2 className="fade-in heading-gradient">Your path to better habits.</h2>
                </div>
                <div className={styles['feature-grid']}>
                    {[
                        {
                            icon: '✅',
                            title: 'Start Simple',
                            description:
                                'Track anything, from calling your parents to cooking something new. Whether it’s daily or just once in a while, progress starts small.',
                        },
                        {
                            icon: '🌱',
                            title: 'Get Inspired',
                            description:
                                'Not sure where to start? See what your friends are up to, find what you like, and dive in! It\'s easier to stay on track with others by your side.',
                        },
                        {
                            icon: '📸',
                            title: 'Share Your Journey',
                            description:
                                'Post quick photo or video updates to your friends! Sharing your progress with others is the best way to keep yourself honest and driven.',
                        },
                        {
                            icon: '💬',
                            title: 'Stay Accountable',
                            description:
                                'Friends can watch and react to your progress as you grow, keeping you moving forward. It’s not about judgment, just encouragement.',
                        },
                        {
                            icon: '🔥',
                            title: 'Add Stakes',
                            description:
                                'Add fun consequences if you miss a goal, like posting a silly photo or triggering an email. Optional, flexible, and just enough pressure.',
                        },
                        {
                            icon: '👥',
                            title: 'Keep It Real',
                            description:
                                'Not a social media platform: no followers, no clout, no pressure. Just a space for friends to share progress with the people who matter most.',
                        },
                    ].map((feature, index) => (
                        <div key={index} className={`${styles['feature-card']} fade-in`}>
                            <div className={styles['feature-icon']}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
