import { Language } from '../App';

interface HeroProps {
  language: Language;
}

const translations = {
  zh: {
    title: '阿楊命理',
    subtitle: '專業八字排盤 · 紫微斗數 · 風水命理',
    description: '二十年命理經驗，服務香港、台灣及海外華人客戶，提供精準的命理分析與人生指引',
    cta: '立即開始排盤',
    features: ['專業認證', '精準分析', '保密服務']
  },
  en: {
    title: 'A Yang Fortune Telling',
    subtitle: 'Professional Bazi · Zi Wei Dou Shu · Feng Shui',
    description: '20 years of experience serving clients in Hong Kong, Taiwan and overseas Chinese communities',
    cta: 'Start Calculation',
    features: ['Professional', 'Accurate', 'Confidential']
  }
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🔮</div>
          <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-4 font-serif">
            {t.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-800 mb-6 font-medium">
            {t.subtitle}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t.description}
          </p>
          
          <button
            onClick={scrollToCalculator}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition shadow-xl"
          >
            {t.cta}
          </button>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white bg-opacity-70 px-6 py-3 rounded-full shadow-md">
                <span className="text-2xl">✨</span>
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
