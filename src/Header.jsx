import React from 'react';
import styles from './Header.module.css';

function Header() {



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const headerOffset = 93; // Adjust based on the height of your header

    const scrollToSection = (targetId) => {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - headerOffset, // Apply the header offset
                behavior: 'smooth', // Smooth scrolling
            });
        }
    };
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <a href="#home"
                        className={styles.logo}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                    >
                        <img
                            src="https://goalapp-public.s3.us-east-2.amazonaws.com/assets/textlogo-large-light.png"
                            alt="Chaco Logo"
                        />
                    </a>
                    <nav className={styles.navLinks}>
                        <a
                            href="#how-chaco-works"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#how-chaco-works');
                            }}
                        >How It Works</a>
                        <a href="#testimonials"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#testimonials');
                            }}>Testimonials</a>
                        <a href="#contact-us"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#contact-us');
                            }}>Contact Us</a>

                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
