import { Language } from '../App';

interface TestimonialsProps {
  language: Language;
}

const translations = {
  zh: {
    title: '客戶評價',
    subtitle: '來自香港、台灣客戶的真實反饋',
    testimonials: [
      {
        name: '張小姐',
        location: '香港 🇭🇰',
        avatar: '👩',
        rating: 5,
        comment: '阿楊師傅的八字分析非常準確！幫我解決了事業上的困惑，按照師傅的建議調整後，工作順利很多。強烈推薦！',
        date: '2024年1月'
      },
      {
        name: '李先生',
        location: '台北 🇹🇼',
        avatar: '👨',
        rating: 5,
        comment: '很專業的命理服務，師傅耐心解答我所有疑問。風水佈局建議很實用，家裡氣場明顯改善了。',
        date: '2024年2月'
      },
      {
        name: '陳太太',
        location: '香港 🇭🇰',
        avatar: '👩‍🦰',
        rating: 5,
        comment: '找阿楊師傅看了合婚，分析得很透徹。師傅給的建議讓我和先生的相處更和諧，感謝！',
        date: '2023年12月'
      },
      {
        name: '王先生',
        location: '台中 🇹🇼',
        avatar: '👨‍💼',
        rating: 5,
        comment: '開公司前請師傅擇日和看風水，現在生意興隆。師傅的專業度和準確度都讓人信服！',
        date: '2024年3月'
      },
      {
        name: '林小姐',
        location: '九龍 🇭🇰',
        avatar: '👩‍💻',
        rating: 5,
        comment: '紫微斗數分析很詳細，幫我了解自己的性格和運勢。師傅很有耐心，解釋得很清楚。',
        date: '2024年1月'
      },
      {
        name: '黃先生',
        location: '高雄 🇹🇼',
        avatar: '👨‍🎓',
        rating: 5,
        comment: '師傅的面相分析讓我印象深刻，提醒我注意的健康問題後來真的應驗了。非常感謝阿楊師傅！',
        date: '2023年11月'
      }
    ]
  },
  en: {
    title: 'Client Testimonials',
    subtitle: 'Real feedback from Hong Kong and Taiwan clients',
    testimonials: [
      {
        name: 'Ms. Zhang',
        location: 'Hong Kong 🇭🇰',
        avatar: '👩',
        rating: 5,
        comment: 'Master Yang\'s Bazi analysis was incredibly accurate! Helped me resolve career confusion. Highly recommended!',
        date: 'Jan 2024'
      },
      {
        name: 'Mr. Li',
        location: 'Taipei 🇹🇼',
        avatar: '👨',
        rating: 5,
        comment: 'Very professional service. The Feng Shui advice was practical and effective. Family atmosphere improved significantly.',
        date: 'Feb 2024'
      },
      {
        name: 'Mrs. Chen',
        location: 'Hong Kong 🇭🇰',
        avatar: '👩‍🦰',
        rating: 5,
        comment: 'Marriage compatibility analysis was thorough. The advice improved our relationship harmony. Thank you!',
        date: 'Dec 2023'
      },
      {
        name: 'Mr. Wang',
        location: 'Taichung 🇹🇼',
        avatar: '👨‍💼',
        rating: 5,
        comment: 'Consulted for business opening date and Feng Shui. Business is thriving now. Very professional!',
        date: 'Mar 2024'
      },
      {
        name: 'Ms. Lin',
        location: 'Kowloon 🇭🇰',
        avatar: '👩‍💻',
        rating: 5,
        comment: 'Detailed Zi Wei Dou Shu analysis helped me understand my personality and fortune. Very patient master!',
        date: 'Jan 2024'
      },
      {
        name: 'Mr. Huang',
        location: 'Kaohsiung 🇹🇼',
        avatar: '👨‍🎓',
        rating: 5,
        comment: 'Face reading was impressive. The health warning came true later. Very grateful to Master Yang!',
        date: 'Nov 2023'
      }
    ]
  }
};

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                "{testimonial.comment}"
              </p>
              
              <p className="text-xs text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-red-100 to-orange-100 px-8 py-4 rounded-full">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-900">500+</div>
              <div className="text-sm text-gray-600">{language === 'zh' ? '滿意客戶' : 'Happy Clients'}</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-900">20+</div>
              <div className="text-sm text-gray-600">{language === 'zh' ? '年經驗' : 'Years Experience'}</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-900">98%</div>
              <div className="text-sm text-gray-600">{language === 'zh' ? '推薦率' : 'Recommendation'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
