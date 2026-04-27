import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutApp from './pages/AboutApp';
import Research from './pages/Research';
import Team from './pages/Team';
import Participate from './pages/Participate';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// 404 page
function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: 40 }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 80, fontWeight: 800, color: 'var(--plum)', opacity: 0.15, lineHeight: 1 }}>404</div>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'var(--plum)', marginBottom: 12 }}>Page not found</h2>
      <p style={{ fontSize: 16, color: 'var(--text-mid)', marginBottom: 32 }}>Let's get you back on track.</p>
      <a href="/" className="btn-primary">Back to Home →</a>
    </div>
  );
}

// Placeholder pages for Privacy and Terms
function Privacy() {
  return (
    <div style={{ padding: '140px 24px 80px', maxWidth: 800, margin: '0 auto' }}>
      <div className="section-label">Legal</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, color: 'var(--plum)', marginBottom: 20 }}>Privacy Policy</h1>
      <div style={{ background: 'var(--lavender)', borderRadius: 16, padding: '24px', marginBottom: 24 }}>
        <p style={{ fontSize: 14, color: 'var(--plum)', fontWeight: 600 }}>Last updated: March 2026 — Full policy coming soon.</p>
      </div>
      <p style={{ fontSize: 16, color: 'var(--text-mid)', lineHeight: 1.8 }}>
        Beyond the Hairline collects only the health and account information you choose to provide. Your data is stored securely in your private account and is not sold to third parties. De-identified data may be included in aggregate research if you have opted into the study. A comprehensive privacy policy will be published prior to the formal research launch.
      </p>
    </div>
  );
}

function Terms() {
  return (
    <div style={{ padding: '140px 24px 80px', maxWidth: 800, margin: '0 auto' }}>
      <div className="section-label">Legal</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, color: 'var(--plum)', marginBottom: 20 }}>Terms of Use</h1>
      <div style={{ background: 'var(--lavender)', borderRadius: 16, padding: '24px', marginBottom: 24 }}>
        <p style={{ fontSize: 14, color: 'var(--plum)', fontWeight: 600 }}>Last updated: March 2026 — Full terms coming soon.</p>
      </div>
      <p style={{ fontSize: 16, color: 'var(--text-mid)', lineHeight: 1.8 }}>
        Beyond the Hairline is provided free of charge for informational and research purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. By using this app, you agree to use it responsibly and understand that its data is meant to supplement — not replace — clinical care. Full terms of use will be published prior to the formal research launch.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-the-app" element={<AboutApp />} />
            <Route path="/the-research" element={<Research />} />
            <Route path="/meet-the-team" element={<Team />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
