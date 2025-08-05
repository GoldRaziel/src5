import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ lineHeight: '1.5', fontSize: '2.5rem' }}>
        {t('home_line1')}<br />
        {t('home_line2')}<br />
        {t('home_line3')}
      </h1>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{t('home_text')}</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/idea"><button>{t('home_discover')}</button></a>
        <a href="/donate"><button>{t('home_donate')}</button></a>
      </div>
    </div>
  );
};

export default Home;
