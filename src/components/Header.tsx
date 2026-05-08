import { useState } from 'react';
import { Language } from '../App';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const translations = {
  zh: {
    home: '首頁',
    calculator: '八字排盤',
    qimen: '奇門遁甲',
    palmface: '手面相',
    fengshui: '風水佈局',
    services: '服務項目',
    testimonials: '客戶評價',
    contact: '聯繫我們',
  },
  en: {
    home: 'Home',
    calculator: 'Bazi',
    qimen: 'Qimen',
    palmface: 'Reading',
    fengshui: 'Feng Shui',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
  }
};

export default function Header({ language, setLanguage }: HeaderProps) {
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="text-3xl animate-pulse">☯️</div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-serif">
                {language === 'zh' ? '阿楊命理' : 'A Yang Fortune Telling'}
              </h1>
              <p className="text-xs text-orange-200 hidden md:block">
                {language === 'zh' ? '專業命理諮詢' : 'Professional Fortune Telling'}
              </p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-orange-300 transition text-sm">{t.home}</button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-orange-300 transition text-sm">{t.calculator}</button>
            <button onClick={() => scrollToSection('qimen')} className="hover:text-orange-300 transition text-sm">{t.qimen}</button>
            <button onClick={() => scrollToSection('palmface')} className="hover:text-orange-300 transition text-sm">{t.palmface}</button>
            <button onClick={() => scrollToSection('fengshui')} className="hover:text-orange-300 transition text-sm">{t.fengshui}</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-orange-300 transition text-sm">{t.testimonials}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-300 transition text-sm">{t.contact}</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-3 md:px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition text-sm font-medium"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.home}</button>
            <button onClick={() => scrollToSection('calculator')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.calculator}</button>
            <button onClick={() => scrollToSection('qimen')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.qimen}</button>
            <button onClick={() => scrollToSection('palmface')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.palmface}</button>
            <button onClick={() => scrollToSection('fengshui')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.fengshui}</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.testimonials}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-orange-300 transition">{t.contact}</button>
          </nav>
        )}
      </div>
    </header>
  );
}
