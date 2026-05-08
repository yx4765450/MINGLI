import { Language } from '../App';

interface FooterProps {
  language: Language;
}

const translations = {
  zh: {
    slogan: '專業命理諮詢 · 為您指點迷津',
    quickLinks: '快速連結',
    services: '服務項目',
    about: '關於我們',
    contact: '聯繫方式',
    privacy: '隱私政策',
    terms: '服務條款',
    followUs: '關注我們',
    copyright: '© 2024 阿楊命理。保留所有權利。',
    disclaimer: '本網站提供的命理服務僅供參考，不構成任何具體建議。'
  },
  en: {
    slogan: 'Professional Fortune Telling · Guide Your Path',
    quickLinks: 'Quick Links',
    services: 'Services',
    about: 'About Us',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    followUs: 'Follow Us',
    copyright: '© 2024 A Yang Fortune Telling. All rights reserved.',
    disclaimer: 'Fortune telling services are for reference only and do not constitute specific advice.'
  }
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">☯️</div>
              <h3 className="text-2xl font-bold font-serif">
                {language === 'zh' ? '阿楊命理' : 'A Yang'}
              </h3>
            </div>
            <p className="text-orange-200 text-sm">
              {t.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-orange-200">
              <li><a href="#home" className="hover:text-white transition">首頁</a></li>
              <li><a href="#calculator" className="hover:text-white transition">{t.services}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">{t.about}</a></li>
              <li><a href="#contact" className="hover:text-white transition">{t.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.services}</h4>
            <ul className="space-y-2 text-orange-200 text-sm">
              <li>{language === 'zh' ? '八字命理' : 'Bazi Analysis'}</li>
              <li>{language === 'zh' ? '紫微斗數' : 'Zi Wei Dou Shu'}</li>
              <li>{language === 'zh' ? '風水佈局' : 'Feng Shui'}</li>
              <li>{language === 'zh' ? '擇日服務' : 'Date Selection'}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
            <div className="space-y-2 text-orange-200 text-sm">
              <p>📱 +852 9123 4567</p>
              <p>✉️ master@ayang.com</p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-2xl hover:text-white transition">💬</a>
                <a href="#" className="text-2xl hover:text-white transition">📱</a>
                <a href="#" className="text-2xl hover:text-white transition">📧</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center">
          <p className="text-orange-200 text-sm mb-2">{t.disclaimer}</p>
          <p className="text-orange-300 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
