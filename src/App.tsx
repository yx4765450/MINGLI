import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BaziCalculator from './components/BaziCalculator';
import QimenDunjia from './components/QimenDunjia';
import PalmFaceReading from './components/PalmFaceReading';
import FengShuiLayout from './components/FengShuiLayout';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

export type Language = 'zh' | 'en';

function App() {
  const [language, setLanguage] = useState<Language>('zh');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <SEO />
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <BaziCalculator language={language} />
      <QimenDunjia language={language} />
      <PalmFaceReading language={language} />
      <FengShuiLayout language={language} />
      <Services language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
