import { useState } from 'react';
import { Language } from '../App';

interface QimenDunjiaProps {
  language: Language;
}

const translations = {
  zh: {
    title: '奇門遁甲',
    subtitle: '中國古老的預測學，用於擇吉、布局和決策分析',
    question: '問事類型',
    selectQuestion: '請選擇問事類型',
    career: '事業財運',
    relationship: '感情婚姻',
    health: '健康疾病',
    travel: '出行擇吉',
    business: '商業決策',
    lawsuit: '官司訴訟',
    calculate: '開始占卜',
    result: '奇門遁甲盤',
    direction: '方位',
    palace: '宮位',
    door: '門',
    star: '星',
    god: '神',
    analysis: '分析結果',
    suggestion: '建議',
    luckyDirection: '吉方',
    unluckyDirection: '凶方',
    luckyTime: '吉時',
  },
  en: {
    title: 'Qimen Dunjia',
    subtitle: 'Ancient Chinese divination for decision making and timing',
    question: 'Question Type',
    selectQuestion: 'Select question type',
    career: 'Career & Wealth',
    relationship: 'Love & Marriage',
    health: 'Health',
    travel: 'Travel',
    business: 'Business',
    lawsuit: 'Legal',
    calculate: 'Calculate',
    result: 'Qimen Chart',
    direction: 'Direction',
    palace: 'Palace',
    door: 'Door',
    star: 'Star',
    god: 'God',
    analysis: 'Analysis',
    suggestion: 'Suggestion',
    luckyDirection: 'Lucky Direction',
    unluckyDirection: 'Unlucky Direction',
    luckyTime: 'Lucky Time',
  }
};

const palaces = ['乾宮', '坎宮', '艮宮', '震宮', '巽宮', '離宮', '坤宮', '兌宮', '中宮'];
const doors = ['開門', '休門', '生門', '傷門', '杜門', '景門', '死門', '驚門'];
const stars = ['天蓬', '天芮', '天沖', '天輔', '天禽', '天心', '天柱', '天任', '天英'];
const gods = ['值符', '騰蛇', '太陰', '六合', '白虎', '玄武', '九地', '九天'];

export default function QimenDunjia({ language }: QimenDunjiaProps) {
  const t = translations[language];
  const [questionType, setQuestionType] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (!questionType) {
      alert(language === 'zh' ? '請選擇問事類型' : 'Please select question type');
      return;
    }
    setShowResult(true);
  };

  const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return (
    <section id="qimen" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔯</div>
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-2xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.question}
              </label>
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">{t.selectQuestion}</option>
                <option value="career">{t.career}</option>
                <option value="relationship">{t.relationship}</option>
                <option value="health">{t.health}</option>
                <option value="travel">{t.travel}</option>
                <option value="business">{t.business}</option>
                <option value="lawsuit">{t.lawsuit}</option>
              </select>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition shadow-lg"
            >
              {t.calculate}
            </button>
          </div>

          {showResult && (
            <div className="mt-8 bg-white rounded-2xl shadow-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center font-serif">
                {t.result}
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${
                      index === 4
                        ? 'from-yellow-100 to-orange-100 border-2 border-yellow-400'
                        : 'from-purple-100 to-indigo-100'
                    } rounded-lg p-4 text-center`}
                  >
                    <div className="text-xs font-bold text-purple-800 mb-2">{palaces[index]}</div>
                    <div className="space-y-1">
                      <div className="text-sm text-indigo-700">{getRandomElement(doors)}</div>
                      <div className="text-sm text-purple-700">{getRandomElement(stars)}</div>
                      <div className="text-xs text-gray-600">{getRandomElement(gods)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">✅</span>
                    {t.analysis}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'zh'
                      ? '根據當前時局分析，您所問之事呈現吉象。天時地利相合，宜把握良機，順勢而為。建議選擇吉方出行或布局，可增強運勢。'
                      : 'Based on current analysis, your question shows auspicious signs. Time and location align favorably. Seize the opportunity and act accordingly. Choose lucky directions for best results.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    {t.suggestion}
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">{t.luckyDirection}:</span> 東南、正南</p>
                    <p><span className="font-semibold">{t.unluckyDirection}:</span> 西北、正北</p>
                    <p><span className="font-semibold">{t.luckyTime}:</span> 09:00 - 11:00, 13:00 - 15:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6">
                <p className="text-sm text-gray-700 italic text-center">
                  {language === 'zh'
                    ? '奇門遁甲預測僅供參考，具體行動仍需結合實際情況謹慎決策。'
                    : 'Qimen Dunjia predictions are for reference only. Always consider practical circumstances.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
