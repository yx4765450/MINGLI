import { useState } from 'react';
import { Language } from '../App';

interface PalmFaceReadingProps {
  language: Language;
}

const translations = {
  zh: {
    title: '手面相分析',
    subtitle: '通過面相手相了解性格特質、運勢走向與健康狀況',
    readingType: '分析類型',
    faceReading: '面相分析',
    palmReading: '手相分析',
    uploadPhoto: '上傳照片',
    uploadDesc: '點擊上傳或拖拽照片到此處',
    analyze: '開始分析',
    result: '分析結果',
    personality: '性格特質',
    fortune: '運勢分析',
    health: '健康提示',
    career: '事業運',
    wealth: '財運',
    relationship: '感情運',
    lifespan: '壽元',
    features: '主要特徵',
  },
  en: {
    title: 'Palm & Face Reading',
    subtitle: 'Understand personality, fortune and health through facial and palm analysis',
    readingType: 'Reading Type',
    faceReading: 'Face Reading',
    palmReading: 'Palm Reading',
    uploadPhoto: 'Upload Photo',
    uploadDesc: 'Click to upload or drag photo here',
    analyze: 'Analyze',
    result: 'Analysis Result',
    personality: 'Personality',
    fortune: 'Fortune',
    health: 'Health',
    career: 'Career',
    wealth: 'Wealth',
    relationship: 'Relationship',
    lifespan: 'Longevity',
    features: 'Key Features',
  }
};

export default function PalmFaceReading({ language }: PalmFaceReadingProps) {
  const t = translations[language];
  const [readingType, setReadingType] = useState<'face' | 'palm'>('face');
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = () => {
    setShowResult(true);
  };

  return (
    <section id="palmface" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🤚</div>
          <h2 className="text-4xl font-bold text-red-900 mb-4 font-serif">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.readingType}
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setReadingType('face')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    readingType === 'face'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  👤 {t.faceReading}
                </button>
                <button
                  onClick={() => setReadingType('palm')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                    readingType === 'palm'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🤚 {t.palmReading}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.uploadPhoto}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-pink-500 transition cursor-pointer bg-gray-50">
                <div className="text-5xl mb-4">📷</div>
                <p className="text-gray-600">{t.uploadDesc}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {language === 'zh' ? '支援 JPG, PNG 格式' : 'Support JPG, PNG format'}
                </p>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-pink-700 hover:to-rose-700 transform hover:scale-105 transition shadow-lg"
            >
              {t.analyze}
            </button>
          </div>

          {showResult && (
            <div className="mt-8 bg-white rounded-2xl shadow-2xl p-8 border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-pink-900 mb-6 text-center font-serif">
                {t.result}
              </h3>

              <div className="mb-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎭</span>
                  {t.features}
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  {readingType === 'face' ? (
                    <>
                      <div>• {language === 'zh' ? '額頭飽滿，智慧高' : 'Full forehead, high intelligence'}</div>
                      <div>• {language === 'zh' ? '眉清目秀，性格溫和' : 'Clear features, gentle personality'}</div>
                      <div>• {language === 'zh' ? '鼻樑挺直，事業有成' : 'Straight nose, successful career'}</div>
                      <div>• {language === 'zh' ? '耳垂厚實，福祿雙全' : 'Thick earlobes, fortune and prosperity'}</div>
                    </>
                  ) : (
                    <>
                      <div>• {language === 'zh' ? '生命線深長，身體健康' : 'Long life line, good health'}</div>
                      <div>• {language === 'zh' ? '智慧線清晰，思維敏捷' : 'Clear wisdom line, sharp mind'}</div>
                      <div>• {language === 'zh' ? '感情線完整，愛情美滿' : 'Complete heart line, happy love'}</div>
                      <div>• {language === 'zh' ? '財運線明顯，財源廣進' : 'Clear money line, wealth flows'}</div>
                    </>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {t.personality}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'zh'
                      ? '性格開朗樂觀，待人真誠友善。具有領導才能，做事有條理。情感豐富，重視家庭和朋友關係。'
                      : 'Optimistic and cheerful personality. Sincere and friendly. Leadership abilities with organized approach. Emotionally rich, values family and friends.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {t.health}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'zh'
                      ? '整體健康狀況良好，但需注意腸胃保養。建議保持規律作息，適當運動，注意飲食均衡。'
                      : 'Overall health is good. Pay attention to digestive system. Maintain regular schedule, exercise moderately, and balanced diet.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {t.career}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'zh'
                      ? '事業運勢上揚，適合從事管理、教育或創意相關工作。貴人運佳，把握機會可有突破。'
                      : 'Career fortune rising. Suitable for management, education or creative work. Good mentor luck, opportunities for breakthrough.'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {t.relationship}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'zh'
                      ? '感情運勢平穩，與伴侶關係和諧。單身者有機會遇到合適對象，宜主動把握。'
                      : 'Stable relationship fortune. Harmonious with partner. Singles may meet suitable match, take initiative.'}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  {t.wealth}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'zh'
                    ? '財運亨通，正財穩定，偏財有驚喜。建議穩健理財，可適當投資，但需謹慎評估風險。貴人相助，合作機會多。'
                    : 'Good wealth fortune. Stable main income with unexpected gains. Recommend conservative investment with careful risk assessment. Good partnerships.'}
                </p>
              </div>

              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 italic text-center">
                  {language === 'zh'
                    ? '手面相分析結合傳統相學理論，僅供參考。具體情況因人而異，建議結合實際情況綜合判斷。'
                    : 'Analysis based on traditional physiognomy theory, for reference only. Individual results may vary.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
