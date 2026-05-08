// 天干
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 地支
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 五行
const ELEMENTS: Record<string, string> = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水',
  '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
  '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
};

export interface Pillar {
  heavenlyStem: string;
  earthlyBranch: string;
  element: string;
}

export interface BaziResult {
  pillars: Pillar[];
  dayMaster: string;
  dayMasterElement: string;
  fiveElements: Record<string, number>;
  luckyElements: string;
  unluckyElements: string;
  analysis: string;
}

// 计算年柱
function getYearPillar(year: number): Pillar {
  // 1984年是甲子年，以此为基准
  const baseYear = 1984;
  const offset = (year - baseYear) % 60;
  const stemIndex = offset % 10;
  const branchIndex = offset % 12;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex >= 0 ? stemIndex : stemIndex + 10];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex >= 0 ? branchIndex : branchIndex + 12];
  
  return {
    heavenlyStem,
    earthlyBranch,
    element: ELEMENTS[heavenlyStem]
  };
}

// 计算月柱
function getMonthPillar(year: number, month: number): Pillar {
  // 简化算法：根据年干和月份确定月柱
  const yearStemIndex = ((year - 1984) % 10 + 10) % 10;
  const monthStemBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0]; // 甲己年起丙寅
  const stemIndex = (monthStemBase[yearStemIndex] + month - 1) % 10;
  const branchIndex = (month + 1) % 12; // 寅月为正月
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex];
  
  return {
    heavenlyStem,
    earthlyBranch,
    element: ELEMENTS[heavenlyStem]
  };
}

// 计算日柱
function getDayPillar(dateString: string): Pillar {
  // 使用公历日期计算，以2000年1月1日(庚辰日)为基准
  const baseDate = new Date('2000-01-01');
  const targetDate = new Date(dateString);
  const daysDiff = Math.floor((targetDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // 2000-01-01是庚辰日，庚是第6个天干，辰是第4个地支
  const stemIndex = (6 + daysDiff) % 10;
  const branchIndex = (4 + daysDiff) % 12;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex >= 0 ? stemIndex : stemIndex + 10];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex >= 0 ? branchIndex : branchIndex + 12];
  
  return {
    heavenlyStem,
    earthlyBranch,
    element: ELEMENTS[heavenlyStem]
  };
}

// 计算时柱
function getHourPillar(dayStem: string, hour: number): Pillar {
  // 根据日干和时辰确定时柱
  const dayStemIndex = HEAVENLY_STEMS.indexOf(dayStem);
  const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
  
  // 甲己日起甲子时
  const hourStemBase = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
  const stemIndex = (hourStemBase[dayStemIndex] + hourBranchIndex) % 10;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[hourBranchIndex];
  
  return {
    heavenlyStem,
    earthlyBranch,
    element: ELEMENTS[heavenlyStem]
  };
}

// 统计五行
function countFiveElements(pillars: Pillar[]): Record<string, number> {
  const count: Record<string, number> = {
    '木': 0,
    '火': 0,
    '土': 0,
    '金': 0,
    '水': 0
  };
  
  pillars.forEach(pillar => {
    const stemElement = ELEMENTS[pillar.heavenlyStem];
    const branchElement = ELEMENTS[pillar.earthlyBranch];
    count[stemElement]++;
    count[branchElement]++;
  });
  
  return count;
}

// 分析喜用神
function analyzeLuckyElements(dayMasterElement: string, fiveElements: Record<string, number>): { lucky: string; unlucky: string } {
  const elementCycle = ['木', '火', '土', '金', '水'];
  const index = elementCycle.indexOf(dayMasterElement);
  
  // 简化分析：日主弱则需要生扶，日主强则需要克泄
  const total = Object.values(fiveElements).reduce((sum, count) => sum + count, 0);
  const dayMasterCount = fiveElements[dayMasterElement];
  
  if (dayMasterCount <= total / 5) {
    // 日主弱，需要生我和帮我的
    const lucky = [dayMasterElement, elementCycle[(index - 1 + 5) % 5]];
    const unlucky = [elementCycle[(index + 1) % 5], elementCycle[(index + 2) % 5]];
    return {
      lucky: lucky.join('、'),
      unlucky: unlucky.join('、')
    };
  } else {
    // 日主强，需要克我和泄我的
    const lucky = [elementCycle[(index + 1) % 5], elementCycle[(index + 2) % 5]];
    const unlucky = [dayMasterElement, elementCycle[(index - 1 + 5) % 5]];
    return {
      lucky: lucky.join('、'),
      unlucky: unlucky.join('、')
    };
  }
}

// 生成分析文字
function generateAnalysis(dayMaster: string, fiveElements: Record<string, number>, gender: 'male' | 'female'): string {
  const dominant = Object.entries(fiveElements).sort((a, b) => b[1] - a[1])[0][0];
  const weak = Object.entries(fiveElements).filter(([_, count]) => count <= 1).map(([el]) => el);
  
  const analyses = [
    `您的日主為${dayMaster}，五行以${dominant}最旺。`,
    weak.length > 0 ? `命局中${weak.join('、')}較弱，需要在生活中多加補充。` : '五行較為平衡。',
    gender === 'male' ? '建議在事業發展上把握機遇，穩健前行。' : '感情運勢平穩，建議多注重內在修養。',
    '整體運勢向好，需要注意健康養生，保持身心平衡。'
  ];
  
  return analyses.join('');
}

export function calculateBazi(dateString: string, timeString: string, gender: 'male' | 'female', calendarType: 'solar' | 'lunar' = 'solar'): BaziResult {
  let date = new Date(dateString);
  
  // 如果是农历，需要转换为公历
  if (calendarType === 'lunar') {
    // 简化处理：这里假设用户输入的是公历日期
    // 在实际应用中，应该使用lunar-javascript库进行转换
    // 但为了简化，我们暂时使用公历日期
  }
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const [hourStr] = timeString.split(':');
  const hour = parseInt(hourStr);
  
  const yearPillar = getYearPillar(year);
  const monthPillar = getMonthPillar(year, month);
  const dayPillar = getDayPillar(dateString);
  const hourPillar = getHourPillar(dayPillar.heavenlyStem, hour);
  
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const dayMaster = dayPillar.heavenlyStem;
  const dayMasterElement = ELEMENTS[dayMaster];
  const fiveElements = countFiveElements(pillars);
  const { lucky, unlucky } = analyzeLuckyElements(dayMasterElement, fiveElements);
  const analysis = generateAnalysis(dayMaster, fiveElements, gender);
  
  return {
    pillars,
    dayMaster,
    dayMasterElement,
    fiveElements,
    luckyElements: lucky,
    unluckyElements: unlucky,
    analysis
  };
}
