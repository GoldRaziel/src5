import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Investors from './pages/Investors';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navStyle = ({ isActive }) => ({
    marginRight: '15px',
    color: isActive ? '#00ccff' : '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
  });

  return (
    <Router>
      <nav style={{ background: '#111', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <NavLink to="/" style={navStyle}>{t('home')}</NavLink>
          <NavLink to="/idea" style={navStyle}>{t('about')}</NavLink>
          <NavLink to="/investors" style={navStyle}>{t('investors')}</NavLink>
          <NavLink to="/gallery" style={navStyle}>{t('gallery')}</NavLink>
          <NavLink to="/donate" style={navStyle}>{t('donate')}</NavLink>
          <NavLink to="/contact" style={navStyle}>{t('contact')}</NavLink>
        </div>
        <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('it')}>IT</button>
          <button onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;