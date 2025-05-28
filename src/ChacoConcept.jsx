import React, { useState, useEffect } from 'react';
// import HabitTile from './HabitTile'; // Removed as HabitTile is not used directly in this JSX

// Define image sources and repetitions outside the component for clarity and reusability
const postImageSources = [
  '/assets/posts/post1.png',
  '/assets/posts/post2.png',
  '/assets/posts/post3.png',
  '/assets/posts/post4.png',
  '/assets/posts/post5.png'
];
// Create many duplicates for continuous scrolling
const repeatedPostImages = [
  ...postImageSources,
  ...postImageSources,
  ...postImageSources,
  ...postImageSources,
  ...postImageSources,
  ...postImageSources,
  ...postImageSources,
  ...postImageSources
];

const habitImageSources = [
  '/assets/habits/habit1.png',
  '/assets/habits/habit2.png',
  '/assets/habits/habit3.png',
  '/assets/habits/habit4.png',
  '/assets/habits/habit5.png'
];
// Create many duplicates for continuous scrolling
const repeatedHabitImages = [
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources,
  ...habitImageSources
];

const ChacoConcept = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [activeHabitIndex, setActiveHabitIndex] = useState(0);
  const [activePostIndex, setActivePostIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling during initial animation
    document.body.style.overflow = 'hidden';

    // Start fading out logo and fading in content after 1 second
    const introTimer = setTimeout(() => {
      setIntroComplete(true);
      setContentVisible(true);
    }, 1000);

    // Allow scrolling after animations are complete
    const scrollEnableTimer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(scrollEnableTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Add auto-rotation effect
  useEffect(() => {
    const habitInterval = setInterval(() => {
      setActiveHabitIndex((prev) => (prev + 1) % habitImageSources.length);
    }, 4000);

    const postInterval = setInterval(() => {
      setActivePostIndex((prev) => (prev + 1) % postImageSources.length);
    }, 5500);

    return () => {
      clearInterval(habitInterval);
      clearInterval(postInterval);
    };
  }, []);

  // Calculate rotation for each item
  const getRotation = (index, total) => {
    return (index * 360) / total;
  };

  // The 'goals' array was defined but not used in the JSX, so it has been removed for cleanup.
  // If 'goals' data is needed for other text or elements, it can be re-added.

  // Data for Features Section
  const featuresData = [
    {
      title: "Start Simple",
      description: "Track anything, from calling your parents to cooking something new. Whether it's daily or just once in a while, progress starts small.",
      icon: "✅"
    },
    {
      title: "Visual Proof",
      description: "Capture photos or videos as proof of completion. No more weaseling out of accountability - make your progress tangible and personal.",
      icon: "📸"
    },
    {
      title: "Friend-Powered",
      description: "Share your journey with trusted friends who can verify your progress and keep you motivated. It's just about encouragement, not judgment.",
      icon: "👥"
    },
    {
      title: "Add Stakes",
      description: "Make it count with optional stakes, ranging from silly photos to charity donations. Choose whatever level of accountability you need.",
      icon: "🔥"
    },
    {
      title: "Earn Rewards",
      description: "Complete sponsored habits to earn real rewards from your favorite brands. Turn your personal progress into perks to enjoy!",
      icon: "🎁"
    },
    {
      title: "Keep It Real",
      description: "Not a social media platform: no followers, no clout, no pressure. Just a space for friends to share progress with the people who matter most.",
      icon: "💫"
    }
  ];

  // Data for Testimonials Section
  const testimonialsData = [
    {
      quote: "Chaco has made me more way consistent with going to the gym and getting my work done because it lets my friends hold me accountable. Sometimes I wake up and don't want to go to the gym, but then I would fail my Chaco goal, and we do NOT want that.",
      name: "Jack S.",
      avatar: "🏋️‍♂️",
      habit: "Gym 3 times weekly"
    },
    {
      quote: "Using Chaco makes it easy to stay committed to my habit of running everyday! I love the fun environment Chaco provides to push my friends to reach their potential as well. I'm excited to keep using the app to hold myself accountable in other ways like eating healthy and doing schoolwork!.",
      name: "Sanvi N.",
      avatar: "🏃‍♀️",
      habit: "Run 2 miles daily"
    },
  ];

  const nextHabit = () => {
    setActiveHabitIndex((prev) => (prev + 1) % habitImageSources.length);
  };

  const prevHabit = () => {
    setActiveHabitIndex((prev) => (prev - 1 + habitImageSources.length) % habitImageSources.length);
  };

  const nextPost = () => {
    setActivePostIndex((prev) => (prev + 1) % postImageSources.length);
  };

  const prevPost = () => {
    setActivePostIndex((prev) => (prev - 1 + postImageSources.length) % postImageSources.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#070707] via-[#111111] to-[#070707] text-white overflow-x-hidden">
      {/* Logo Wrapper */}
      <div className={`logo-wrapper ${introComplete ? 'logo-fade-out' : ''}`}>
        <img
          src="/assets/logo.png"
          alt="Chaco Logo"
        />
      </div>

      {/* Hero Section */}
      <section className={`relative z-20 min-h-screen flex items-center px-8 md:px-16 lg:px-24 hero-content ${contentVisible ? 'hero-content-fade-in' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b8848]/15 to-[#65b461]/15 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4b8848]/15 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] to-transparent"></div>

        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12 w-52 transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/logo.png"
              alt="Chaco Logo"
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white">Progress is better</span>
            <span className="text-[#4b8848]">together.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#C5C6CC] mb-12 max-w-2xl mx-auto leading-relaxed">
            Set goals, share progress, and build lasting habits with friends. Add stakes, earn rewards, and stay accountable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/chaco-goal-tracking/id6740173414"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#4b8848] hover:bg-[#65b461] text-white rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.98.48 7.13-.65 1.48-1.52 2.95-2.51 4.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.72 4.26-3.74 4.25z" />
              </svg>
              <span>Download on iOS</span>
            </a>
            <button
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Download on Android</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#070707]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4b8848]/25 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#111111] to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="inline-block py-2 px-4 rounded-full bg-[#4b8848]/10 text-[#65b461] text-sm font-medium mb-5">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What makes Chaco different</h2>
            <p className="text-xl text-[#C5C6CC] max-w-2xl mx-auto">
              Designed for real life—with the people you trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222222] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/5"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-[#C5C6CC]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-24 relative overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#0a0a0a] to-[#111111]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#65b461]/25 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#070707] to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See Chaco in Action</h2>
            <p className="text-xl text-[#C5C6CC] max-w-2xl mx-auto">
              Track habits and share progress with friends in a fun, engaging way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Habit Tiles Showcase */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track Your Habits</h3>
              <p className="text-[#C5C6CC] mb-8">Set goals, track progress, and stay accountable with your friends. Watch your habits grow day by day.</p>
              <div className="stacked-showcase">
                <div className="stacked-container">
                  <button
                    onClick={prevHabit}
                    className="nav-button prev-button"
                    aria-label="Previous habit"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="stacked-cards">
                    {habitImageSources.map((src, index) => {
                      const isActive = index === activeHabitIndex;
                      const isNext = (index === (activeHabitIndex + 1) % habitImageSources.length);
                      const isPrev = (index === (activeHabitIndex - 1 + habitImageSources.length) % habitImageSources.length);

                      return (
                        <div
                          key={`habit-${index}`}
                          className={`stacked-card ${isActive ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
                        >
                          <div className="card-inner bg-[#111111] p-2 rounded-xl">
                            <img
                              src={src}
                              alt={`Chaco Habit Widget Screenshot ${index + 1}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={nextHabit}
                    className="nav-button next-button"
                    aria-label="Next habit"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Post Panel Showcase */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Share Your Progress</h3>
              <p className="text-[#C5C6CC] mb-8">Post updates, celebrate wins, and keep your friends in the loop. Make habit-building social and fun.</p>
              <div className="stacked-showcase">
                <div className="stacked-container">
                  <button
                    onClick={prevPost}
                    className="nav-button prev-button"
                    aria-label="Previous post"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="stacked-cards">
                    {postImageSources.map((src, index) => {
                      const isActive = index === activePostIndex;
                      const isNext = (index === (activePostIndex + 1) % postImageSources.length);
                      const isPrev = (index === (activePostIndex - 1 + postImageSources.length) % postImageSources.length);

                      return (
                        <div
                          key={`post-${index}`}
                          className={`stacked-card ${isActive ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
                        >
                          <div className="card-inner bg-[#070707] p-2 rounded-xl">
                            <img
                              src={src}
                              alt={`Chaco Post Screenshot ${index + 1}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={nextPost}
                    className="nav-button next-button"
                    aria-label="Next post"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#070707]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4b8848]/25 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#111111] to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <span className="inline-block py-2 px-4 rounded-full bg-[#4b8848]/10 text-[#65b461] text-sm font-medium mb-5">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hear from our users</h2>
            <p className="text-xl text-[#C5C6CC] max-w-2xl mx-auto">
              Real stories from people building better habits with Chaco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222222] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#4b8848]/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-[#C5C6CC] text-sm">{testimonial.habit}</div>
                  </div>
                </div>
                <p className="text-[#C5C6CC] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b8848]/15 to-[#65b461]/15 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4b8848]/15 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#070707] to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to build better habits?</h2>
          <p className="text-xl text-[#C5C6CC] mb-12 max-w-2xl mx-auto">
            Join our growing community and chase your goals with the power of real social accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://apps.apple.com/us/app/chaco-goal-tracking/id6740173414"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#4b8848] hover:bg-[#65b461] text-white rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.98.48 7.13-.65 1.48-1.52 2.95-2.51 4.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.72 4.26-3.74 4.25z" />
              </svg>
              <span>Download on iOS</span>
            </a>
            <button
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Download on Android</span>
            </button>
          </div>

          <div className="text-[#C5C6CC]">
            <p className="mb-2">Questions? Contact us at:</p>
            <a href="mailto:chacobetatesting@gmail.com" className="text-[#65b461] hover:text-[#4b8848] font-medium transition-colors">
              chacobetatesting@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070707] text-white py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h4 className="font-bold mb-4 text-lg text-white">Connect</h4>
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.instagram.com/chacoapp/" target="_blank" rel="noopener noreferrer"
                    className="text-[#C5C6CC] hover:text-[#65b461] transition-colors inline-flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/chacoapp/" target="_blank" rel="noopener noreferrer"
                    className="text-[#C5C6CC] hover:text-[#65b461] transition-colors inline-flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-[#C5C6CC] text-sm">
              <p>&copy; {new Date().getFullYear()} Chaco 🐢 Raised in Austin, TX</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChacoConcept;