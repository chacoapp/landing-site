import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Accountability from './Accountability';
import CTASection from './CTASection';
import Footer from './Footer';
import './index.css'; // Or import your global styles
import ContactUs from './ContactUs';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Accountability />
            <CTASection />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;