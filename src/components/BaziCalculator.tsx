import { useState } from 'react';
import { Language } from '../App';
import { calculateBazi, BaziResult } from '../utils/baziCalculator';

interface BaziCalculatorProps {
  language: Language;
}

const translations = {
  zh: {
    title: '八字排盤系統',
    subtitle: '輸入您的出生資訊，即時獲得專業八字分析',
    birthDate: '出生日期',
    birthTime: '出生時間',
    calendar: '曆法',
    solar: '陽曆（公曆）',
    lunar: '陰曆（農曆）',
    gender: '性別',
    male: '男',
    female: '女',
    calculate: '開始排盤',
    result: '排盤結果',
    year: '年柱',
    month: '月柱',
    day: '日柱',
    hour: '時柱',
    heavenlyStem: '天干',
    earthlyBranch: '地支',
    element: '五行',
    dayMaster: '日主',
    analysis: '命理分析',
    fiveElements: '五行分析',
    strength: '強弱',
    luckyElements: '喜用神',
    unluckyElements: '忌神'
  },
  en: {
    title: 'Bazi Calculator',
    subtitle: 'Enter your birth information for professional Bazi analysis',
    birthDate: 'Birth Date',
    birthTime: 'Birth Time',
    calendar: 'Calendar',
    solar: 'Solar (Gregorian)',
    lunar: 'Lunar (Chinese)',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    calculate: 'Calculate',
    result: 'Bazi Chart Result',
    year: 'Year Pillar',
    month: 'Month Pillar',
    day: 'Day Pillar',
    hour: 'Hour Pillar',
    heavenlyStem: 'Heavenly Stem',
    earthlyBranch: 'Earthly Branch',
    element: 'Element',
    dayMaster: 'Day Master',
    analysis: 'Analysis',
    fiveElements: 'Five Elements',
    strength: 'Strength',
    luckyElements: 'Lucky Elements',
    unluckyElements: 'Unlucky Elements'
  }
};

export default function BaziCalculator({ language }: BaziCalculatorProps) {
  const t = translations[language];
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('12:00');
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<BaziResult | null>(null);

  const handleCalculate = () => {
    if (!birthDate) {
      alert(language === 'zh' ? '請選擇出生日期' : 'Please select birth date');
      return;
    }

    const baziResult = calculateBazi(birthDate, birthTime, gender, calendarType);
    setResult(baziResult);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.birthDate}
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.birthTime}
                </label>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.calendar}
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCalendarType('solar')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    calendarType === 'solar'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.solar}
                </button>
                <button
                  onClick={() => setCalendarType('lunar')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    calendarType === 'lunar'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.lunar}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.gender}
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    gender === 'male'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.male}
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    gender === 'female'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.female}
                </button>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition shadow-lg"
            >
              {t.calculate}
            </button>
          </div>

          {result && (
            <div className="mt-8 bg-white rounded-2xl shadow-2xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-6 text-center font-serif">
                {t.result}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['year', 'month', 'day', 'hour'].map((pillar, index) => (
                  <div key={pillar} className="text-center">
                    <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-lg p-4 mb-2">
                      <div className="text-4xl font-bold text-red-800 mb-2">
                        {result.pillars[index].heavenlyStem}
                      </div>
                      <div className="text-4xl font-bold text-orange-800">
                        {result.pillars[index].earthlyBranch}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      {t[pillar as keyof typeof t]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{t.dayMaster}</h4>
                  <p className="text-3xl font-bold text-red-700 mb-2">{result.dayMaster}</p>
                  <p className="text-gray-600">{result.dayMasterElement}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{t.fiveElements}</h4>
                  <div className="space-y-2">
                    {Object.entries(result.fiveElements).map(([element, count]) => (
                      <div key={element} className="flex justify-between items-center">
                        <span className="font-medium">{element}</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                            <div
                              className="h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                              style={{ width: `${(count / 8) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">{t.analysis}</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">{t.luckyElements}:</span> {result.luckyElements}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">{t.unluckyElements}:</span> {result.unluckyElements}
                  </p>
                  <p className="text-gray-700 mt-4">{result.analysis}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
