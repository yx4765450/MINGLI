import { Language } from '../App';

interface ServicesProps {
  language: Language;
}

const translations = {
  zh: {
    title: '服務項目',
    subtitle: '專業命理諮詢，為您指點迷津',
    services: [
      {
        icon: '📊',
        title: '八字命理',
        description: '精準分析八字命盤，解讀人生運勢、事業財運、婚姻感情等各方面運程'
      },
      {
        icon: '⭐',
        title: '紫微斗數',
        description: '紫微斗數排盤分析，預測未來運勢，了解人生軌跡與發展方向'
      },
      {
        icon: '🏠',
        title: '風水佈局',
        description: '家居風水、辦公室風水勘察與佈局指導，助您趨吉避凶，旺運聚財'
      },
      {
        icon: '👤',
        title: '面相手相',
        description: '面相、手相分析，了解性格特質、運勢走向與健康狀況'
      },
      {
        icon: '📅',
        title: '擇日服務',
        description: '婚嫁、開業、搬家、動土等重大事項擇吉日，選擇最佳時機'
      },
      {
        icon: '💑',
        title: '合婚配對',
        description: '男女八字合婚分析，評估婚姻契合度，提供相處建議'
      }
    ]
  },
  en: {
    title: 'Our Services',
    subtitle: 'Professional fortune telling consultation',
    services: [
      {
        icon: '📊',
        title: 'Bazi Analysis',
        description: 'Precise Bazi chart analysis for career, wealth, relationships and life path guidance'
      },
      {
        icon: '⭐',
        title: 'Zi Wei Dou Shu',
        description: 'Purple Star Astrology chart reading to predict future trends and life trajectory'
      },
      {
        icon: '🏠',
        title: 'Feng Shui',
        description: 'Home and office Feng Shui consultation to enhance prosperity and harmony'
      },
      {
        icon: '👤',
        title: 'Face & Palm Reading',
        description: 'Face and palm reading analysis for personality traits and fortune insights'
      },
      {
        icon: '📅',
        title: 'Date Selection',
        description: 'Auspicious date selection for weddings, business openings, moving and more'
      },
      {
        icon: '💑',
        title: 'Marriage Compatibility',
        description: 'Bazi compatibility analysis for couples with relationship guidance'
      }
    ]
  }
};

export default function Services({ language }: ServicesProps) {
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-red-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
