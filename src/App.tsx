// ============================================
// MAIN APP COMPONENT
// Single-page portfolio for Vlada Vujasinovic
// ============================================

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* ============================================
          NAVIGATION
          Minimalist top-bar with smooth scroll
      ============================================ */}
      <Navigation />

      {/* ============================================
          HERO SECTION
          Bold typography with asymmetrical layout
      ============================================ */}
      <Hero />

      {/* ============================================
          WORKS SECTION
          Responsive gallery with lightbox
      ============================================ */}
      <Works />

      {/* ============================================
          ABOUT SECTION
          Bio and services list
      ============================================ */}
      <About />

      {/* ============================================
          CONTACT SECTION
          Email and social links
      ============================================ */}
      <Contact />
    </div>
  );
}

export default App;
