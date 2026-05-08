import { useState } from 'react';
import { Language } from '../App';

interface FengShuiLayoutProps {
  language: Language;
}

const translations = {
  zh: {
    title: '居家風水佈局',
    subtitle: '專業風水分析，打造和諧居住環境',
    roomType: '房間類型',
    selectRoom: '請選擇房間類型',
    livingRoom: '客廳',
    bedroom: '臥室',
    kitchen: '廚房',
    study: '書房',
    office: '辦公室',
    shop: '店鋪',
    direction: '房屋朝向',
    selectDirection: '請選擇主要朝向',
    north: '坐北朝南',
    south: '坐南朝北',
    east: '坐東朝西',
    west: '坐西朝東',
    analyze: '開始分析',
    result: '風水佈局建議',
    layout: '佈局要點',
    colors: '吉祥色彩',
    plants: '推薦植物',
    taboos: '風水禁忌',
    enhancements: '增運方法',
  },
  en: {
    title: 'Feng Shui Layout',
    subtitle: 'Professional Feng Shui analysis for harmonious living',
    roomType: 'Room Type',
    selectRoom: 'Select room type',
    livingRoom: 'Living Room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    study: 'Study',
    office: 'Office',
    shop: 'Shop',
    direction: 'House Direction',
    selectDirection: 'Select main direction',
    north: 'North Facing',
    south: 'South Facing',
    east: 'East Facing',
    west: 'West Facing',
    analyze: 'Analyze',
    result: 'Feng Shui Recommendations',
    layout: 'Layout Tips',
    colors: 'Lucky Colors',
    plants: 'Recommended Plants',
    taboos: 'Taboos',
    enhancements: 'Enhancement Methods',
  }
};

export default function FengShuiLayout({ language }: FengShuiLayoutProps) {
  const t = translations[language];
  const [roomType, setRoomType] = useState('');
  const [direction, setDirection] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = () => {
    if (!roomType || !direction) {
      alert(language === 'zh' ? '請選擇房間類型和朝向' : 'Please select room type and direction');
      return;
    }
    setShowResult(true);
  };

  const getLayoutAdvice = () => {
    const adviceMap: Record<string, any> = {
      livingRoom: {
        zh: {
          layout: ['沙發宜靠牆擺放，寓意有靠山', '茶几不宜過大，保持空間流通', '電視櫃高度適中，不宜過高壓迫', '財位應保持明亮整潔'],
          colors: ['米黃色', '淺綠色', '淡藍色', '象牙白'],
          plants: ['發財樹', '富貴竹', '金錢樹', '蘭花'],
          taboos: ['避免橫樑壓頂', '鏡子不對大門', '沙發背後忌空', '光線不宜過暗'],
          enhancements: ['擺放水晶球增強氣場', '使用溫暖燈光', '保持空氣流通', '定期清理雜物']
        },
        en: {
          layout: ['Sofa should be against wall', 'Coffee table not too large', 'TV cabinet at moderate height', 'Keep wealth corner bright'],
          colors: ['Beige', 'Light Green', 'Light Blue', 'Ivory White'],
          plants: ['Money Tree', 'Lucky Bamboo', 'Jade Plant', 'Orchid'],
          taboos: ['Avoid beams overhead', 'Mirror not facing door', 'Sofa not floating', 'Avoid dim lighting'],
          enhancements: ['Place crystal ball', 'Use warm lighting', 'Maintain air flow', 'Regular decluttering']
        }
      },
      bedroom: {
        zh: {
          layout: ['床頭宜靠實牆，不靠窗', '床位不對門，保護隱私', '梳妝台鏡子不對床', '保持臥室整潔溫馨'],
          colors: ['淡粉色', '米色', '淺紫色', '乳白色'],
          plants: ['薰衣草', '蘆薈', '虎尾蘭', '吊蘭'],
          taboos: ['床頭不對廁所', '避免尖角對床', '鏡子不照床', '床下不堆雜物'],
          enhancements: ['使用成對擺設增進感情', '柔和燈光助眠', '擺放粉晶促姻緣', '保持空氣清新']
        },
        en: {
          layout: ['Headboard against solid wall', 'Bed not facing door', 'Mirror not facing bed', 'Keep bedroom tidy'],
          colors: ['Light Pink', 'Beige', 'Light Purple', 'Cream White'],
          plants: ['Lavender', 'Aloe Vera', 'Snake Plant', 'Spider Plant'],
          taboos: ['Headboard not near toilet', 'Avoid sharp corners', 'No mirror reflecting bed', 'Clear under bed'],
          enhancements: ['Use paired items for love', 'Soft lighting', 'Rose quartz for romance', 'Fresh air']
        }
      },
      kitchen: {
        zh: {
          layout: ['爐灶不對水槽，水火分離', '保持廚房通風良好', '刀具收納整齊', '冰箱不空，象徵豐足'],
          colors: ['白色', '淺黃色', '米色', '淡綠色'],
          plants: ['薄荷', '羅勒', '迷迭香', '香菜'],
          taboos: ['爐灶不對廁所門', '避免橫樑壓灶', '刀具不外露', '垃圾桶不過大'],
          enhancements: ['保持明亮清潔', '使用圓形器皿', '擺放五穀雜糧', '定期更換廚具']
        },
        en: {
          layout: ['Stove away from sink', 'Good ventilation', 'Organize utensils', 'Keep fridge stocked'],
          colors: ['White', 'Light Yellow', 'Beige', 'Light Green'],
          plants: ['Mint', 'Basil', 'Rosemary', 'Cilantro'],
          taboos: ['Stove not facing toilet', 'No beams over stove', 'Hide sharp knives', 'Small trash bin'],
          enhancements: ['Bright and clean', 'Round containers', 'Display grains', 'Update cookware']
        }
      },
      study: {
        zh: {
          layout: ['書桌面向吉位，背靠實牆', '座位不背門，增強安全感', '書櫃整齊有序', '光線充足明亮'],
          colors: ['淺綠色', '淺藍色', '米白色', '淡黃色'],
          plants: ['文竹', '富貴竹', '常春藤', '綠蘿'],
          taboos: ['書桌不對門沖', '座位避免橫樑', '鏡子不對書桌', '避免雜亂無章'],
          enhancements: ['擺放文昌塔', '使用黃色檯燈', '放置四寶筆墨', '保持整潔有序']
        },
        en: {
          layout: ['Desk facing lucky direction', 'Seat against wall', 'Organized bookshelf', 'Sufficient lighting'],
          colors: ['Light Green', 'Light Blue', 'Off White', 'Light Yellow'],
          plants: ['Asparagus Fern', 'Lucky Bamboo', 'Ivy', 'Pothos'],
          taboos: ['Desk not facing door', 'No beams overhead', 'Mirror not facing desk', 'Avoid clutter'],
          enhancements: ['Place pagoda', 'Yellow desk lamp', 'Display writing tools', 'Keep organized']
        }
      }
    };

    const advice = adviceMap[roomType] || adviceMap.livingRoom;
    return language === 'zh' ? advice.zh : advice.en;
  };

  return (
    <section id="fengshui" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.roomType}
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">{t.selectRoom}</option>
                  <option value="livingRoom">{t.livingRoom}</option>
                  <option value="bedroom">{t.bedroom}</option>
                  <option value="kitchen">{t.kitchen}</option>
                  <option value="study">{t.study}</option>
                  <option value="office">{t.office}</option>
                  <option value="shop">{t.shop}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.direction}
                </label>
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">{t.selectDirection}</option>
                  <option value="north">{t.north}</option>
                  <option value="south">{t.south}</option>
                  <option value="east">{t.east}</option>
                  <option value="west">{t.west}</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition shadow-lg"
            >
              {t.analyze}
            </button>
          </div>

          {showResult && (
            <div className="mt-8 bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center font-serif">
                {t.result}
              </h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📐</span>
                    {t.layout}
                  </h4>
                  <ul className="space-y-2">
                    {getLayoutAdvice().layout.map((item: string, index: number) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🎨</span>
                    {t.colors}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {getLayoutAdvice().colors.map((color: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 border-2 border-purple-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🌿</span>
                    {t.plants}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {getLayoutAdvice().plants.map((plant: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 border-2 border-green-200"
                      >
                        {plant}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">⚠️</span>
                    {t.taboos}
                  </h4>
                  <ul className="space-y-2">
                    {getLayoutAdvice().taboos.map((item: string, index: number) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">⭐</span>
                    {t.enhancements}
                  </h4>
                  <ul className="space-y-2">
                    {getLayoutAdvice().enhancements.map((item: string, index: number) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-yellow-600 mr-2">★</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 italic text-center">
                  {language === 'zh'
                    ? '風水佈局建議基於傳統風水理論，具體實施需結合實際環境和個人情況。'
                    : 'Feng Shui recommendations based on traditional theory. Implementation should consider actual environment.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
