
import { Lesson } from './types';

const svgBase64 = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

export const initialLessons: Lesson[] = [
  // --- BEGINNER ---
  {
    id: 'sun',
    title: 'שמש מחייכת',
    icon: '☀️',
    difficulty: 'beginner',
    steps: [
      { id: 's1', instruction: 'ציירו עיגול צהוב גדול', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 's2', instruction: 'הוסיפו קרניים מסביב', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="none" stroke="#ccc" stroke-width="2"/><path d="M50 10 L50 18 M50 82 L50 90 M10 50 L18 50 M82 50 L90 50 M22 22 L28 28 M72 72 L78 78 M22 78 L28 72 M72 22 L78 28" stroke="black" stroke-width="3"/></svg>') },
      { id: 's3', instruction: 'ציירו חיוך ועיניים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><circle cx="50" cy="50" r="30"/><path d="M50 10 L50 18 M50 82 L50 90 M10 50 L18 50 M82 50 L90 50 M22 22 L28 28 M72 72 L78 78 M22 78 L28 72 M72 22 L78 28"/></g><circle cx="42" cy="45" r="3" fill="black"/><circle cx="58" cy="45" r="3" fill="black"/><path d="M40 60 Q50 70 60 60" fill="none" stroke="black" stroke-width="3"/></svg>') }
    ]
  },
  {
    id: 'cloud',
    title: 'ענן רך',
    icon: '☁️',
    difficulty: 'beginner',
    steps: [
      { id: 'cl1', instruction: 'ציירו קו ישר בתחתית', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="80" y2="70" stroke="black" stroke-width="3"/></svg>') },
      { id: 'cl2', instruction: 'הוסיפו חצאי עיגולים מלמעלה', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 70 Q20 40 40 40 Q50 30 60 40 Q80 40 80 70 Z" fill="none" stroke="black" stroke-width="3"/></svg>') }
    ]
  },
  {
    id: 'flower-simple',
    title: 'פרח פשוט',
    icon: '🌸',
    difficulty: 'beginner',
    steps: [
      { id: 'fs1', instruction: 'ציירו עיגול קטן', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="10" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'fs2', instruction: 'הוסיפו 4 עלי כותרת גדולים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="10" stroke="#ccc" stroke-width="2" fill="none"/><path d="M50 40 Q50 10 30 30 M50 60 Q50 90 70 70 M40 50 Q10 50 30 70 M60 50 Q90 50 70 30" stroke="black" stroke-width="3" fill="none"/></svg>') }
    ]
  },
  {
    id: 'fish-simple',
    title: 'דגיג קטן',
    icon: '🐠',
    difficulty: 'beginner',
    steps: [
      { id: 'fsi1', instruction: 'ציירו אליפסה לגוף', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="30" ry="20" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'fsi2', instruction: 'הוסיפו משולש קטן לזנב', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="30" ry="20" stroke="#ccc" stroke-width="2" fill="none"/><path d="M20 50 L5 35 L5 65 Z" stroke="black" stroke-width="3" fill="none"/></svg>') }
    ]
  },

  // --- INTERMEDIATE ---
  {
    id: 'cat',
    title: 'חתול חמוד',
    icon: '🐱',
    difficulty: 'intermediate',
    steps: [
      { id: 'c1', instruction: 'ציירו עיגול לראש', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'c2', instruction: 'הוסיפו אוזניים ועיניים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><circle cx="50" cy="50" r="35"/></g><path d="M25 25 L35 15 L45 25 M55 25 L65 15 L75 25" stroke="black" stroke-width="3" fill="none"/><circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/></svg>') },
      { id: 'c3', instruction: 'הוסיפו אף ושפם', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><circle cx="50" cy="50" r="35"/><path d="M25 25 L35 15 L45 25 M55 25 L65 15 L75 25"/></g><path d="M48 55 L50 58 L52 55 Z" fill="black"/><path d="M35 55 L15 52 M35 58 L15 62 M65 55 L85 52 M65 58 L85 62" stroke="black" stroke-width="2"/></svg>') }
    ]
  },
  {
    id: 'dog',
    title: 'כלכלב שמח',
    icon: '🐶',
    difficulty: 'intermediate',
    steps: [
      { id: 'd1', instruction: 'ציירו אליפסה מאורכת לפנים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="35" ry="30" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'd2', instruction: 'הוסיפו אוזניים ארוכות', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="35" ry="30" fill="none" stroke="#ccc" stroke-width="2"/><path d="M15 35 Q5 45 15 65 M85 35 Q95 45 85 65" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'd3', instruction: 'ציירו עיניים ואף גדול', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><ellipse cx="50" cy="50" rx="35" ry="30"/><path d="M15 35 Q5 45 15 65 M85 35 Q95 45 85 65"/></g><circle cx="35" cy="45" r="4" fill="black"/><circle cx="65" cy="45" r="4" fill="black"/><path d="M45 55 L55 55 L50 60 Z" fill="black"/></svg>') }
    ]
  },
  {
    id: 'tree',
    title: 'עץ התפוחים',
    icon: '🌳',
    difficulty: 'intermediate',
    steps: [
      { id: 't1', instruction: 'ציירו גזע רחב', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M40 95 L40 60 M60 95 L60 60" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 't2', instruction: 'הוסיפו צמרת עגולה', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M40 95 L40 60 M60 95 L60 60" fill="none" stroke="#ccc" stroke-width="2"/><path d="M20 60 Q10 40 30 20 Q50 5 70 20 Q90 40 80 60 Q70 75 50 75 Q30 75 20 60" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 't3', instruction: 'ציירו תפוחים קטנים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><path d="M40 95 L40 60 M60 95 L60 60"/><path d="M20 60 Q10 40 30 20 Q50 5 70 20 Q90 40 80 60 Q70 75 50 75 Q30 75 20 60"/></g><circle cx="35" cy="35" r="4" fill="red"/><circle cx="65" cy="40" r="4" fill="red"/><circle cx="50" cy="25" r="4" fill="red"/></svg>') }
    ]
  },
  {
    id: 'car',
    title: 'מכונית מירוץ',
    icon: '🚗',
    difficulty: 'intermediate',
    steps: [
      { id: 'cr1', instruction: 'ציירו את גוף המכונית', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="50" width="80" height="20" rx="5" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'cr2', instruction: 'הוסיפו גג מעוגל', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="50" width="80" height="20" rx="5" fill="none" stroke="#ccc" stroke-width="2"/><path d="M30 50 Q50 25 70 50" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'cr3', instruction: 'הוסיפו גלגלים וחלונות', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><rect x="10" y="50" width="80" height="20" rx="5"/><path d="M30 50 Q50 25 70 50"/></g><circle cx="25" cy="70" r="8" fill="none" stroke="black" stroke-width="3"/><circle cx="75" cy="70" r="8" fill="none" stroke="black" stroke-width="3"/></svg>') }
    ]
  },
  {
    id: 'butterfly',
    title: 'פרפר צבעוני',
    icon: '🦋',
    difficulty: 'intermediate',
    steps: [
      { id: 'b1', instruction: 'ציירו גוף ואליפסה לראש', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="20" r="8" fill="none" stroke="black" stroke-width="3"/><ellipse cx="50" cy="55" rx="8" ry="25" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'b2', instruction: 'הוסיפו כנפיים גדולות', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><circle cx="50" cy="20" r="8"/><ellipse cx="50" cy="55" rx="8" ry="25"/></g><path d="M58 40 Q85 10 85 45 Q85 80 58 70 M42 40 Q15 10 15 45 Q15 80 42 70" fill="none" stroke="black" stroke-width="3"/></svg>') }
    ]
  },

  // --- ADVANCED ---
  {
    id: 'rocket',
    title: 'חללית לחלל',
    icon: '🚀',
    difficulty: 'advanced',
    steps: [
      { id: 'r1', instruction: 'ציירו גוף גלילי עם קצה מחודד', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 L70 30 L70 80 L30 80 L30 30 Z" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'r2', instruction: 'הוסיפו כנפיים צדדיות וחלון', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 L70 30 L70 80 L30 80 L30 30 Z" fill="none" stroke="#ccc" stroke-width="2"/><path d="M30 60 L15 80 L30 80 M70 60 L85 80 L70 80" stroke="black" stroke-width="3"/><circle cx="50" cy="45" r="7" stroke="black" stroke-width="2" fill="none"/></svg>') },
      { id: 'r3', instruction: 'ציירו להבות אש ומנוע', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><path d="M50 10 L70 30 L70 80 L30 80 L30 30 Z"/><path d="M30 60 L15 80 L30 80 M70 60 L85 80 L70 80"/><circle cx="50" cy="45" r="7"/></g><path d="M35 80 L35 85 L65 85 L65 80 M40 85 Q50 100 60 85" stroke="red" stroke-width="2" fill="none"/></svg>') }
    ]
  },
  {
    id: 'robot',
    title: 'רובוט חברותי',
    icon: '🤖',
    difficulty: 'advanced',
    steps: [
      { id: 'ro1', instruction: 'ציירו ראש מרובע וגוף מלבני', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="25" fill="none" stroke="black" stroke-width="3"/><rect x="25" y="35" width="50" height="40" fill="none" stroke="black" stroke-width="3"/></svg>') },
      { id: 'ro2', instruction: 'הוסיפו גפיים מפרקיות', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><rect x="35" y="10" width="30" height="25"/><rect x="25" y="35" width="50" height="40"/></g><path d="M25 45 L10 45 L10 60 M75 45 L90 45 L90 60 M35 75 L35 90 M65 75 L65 90" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'ro3', instruction: 'ציירו פנים, אנטנה וכפתורים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><rect x="35" y="10" width="30" height="25"/><rect x="25" y="35" width="50" height="40"/><path d="M25 45 L10 45 L10 60 M75 45 L90 45 L90 60 M35 75 L35 90 M65 75 L65 90"/></g><circle cx="42" cy="22" r="3" fill="black"/><circle cx="58" cy="22" r="3" fill="black"/><path d="M50 10 L50 2" stroke="black" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="blue"/></svg>') }
    ]
  },
  {
    id: 'castle',
    title: 'טירה עתיקה',
    icon: '🏰',
    difficulty: 'advanced',
    steps: [
      { id: 'cs1', instruction: 'ציירו בסיס מלבני ושני מגדלים', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="40" height="40" stroke="black" stroke-width="3" fill="none"/><rect x="20" y="40" width="15" height="50" stroke="black" stroke-width="3" fill="none"/><rect x="65" y="40" width="15" height="50" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'cs2', instruction: 'הוסיפו גגות משולשים וחלונות', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><rect x="30" y="50" width="40" height="40"/><rect x="20" y="40" width="15" height="50"/><rect x="65" y="40" width="15" height="50"/></g><path d="M20 40 L27.5 20 L35 40 M65 40 L72.5 20 L80 40" stroke="black" stroke-width="3" fill="none"/><rect x="45" y="70" width="10" height="20" stroke="black" stroke-width="2" fill="none"/></svg>') }
    ]
  },
  {
    id: 'bird-adv',
    title: 'ציפור שיר',
    icon: '🐦',
    difficulty: 'advanced',
    steps: [
      { id: 'ba1', instruction: 'ציירו גוף עגול וראש קטן', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="35" r="10" stroke="black" stroke-width="3" fill="none"/><ellipse cx="45" cy="55" rx="25" ry="18" stroke="black" stroke-width="3" fill="none"/></svg>') },
      { id: 'ba2', instruction: 'הוסיפו כנף מפורטת וזנב', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="2" fill="none"><circle cx="70" cy="35" r="10"/><ellipse cx="45" cy="55" rx="25" ry="18"/></g><path d="M45 55 Q45 30 20 50 Q45 70 45 55" stroke="black" stroke-width="2" fill="none"/><path d="M22 60 L5 55 L5 70 Z" stroke="black" stroke-width="2" fill="none"/></svg>') }
    ]
  },
  {
    id: 'dragon-simple',
    title: 'דרקון קטן',
    icon: '🐲',
    difficulty: 'advanced',
    steps: [
      { id: 'dr1', instruction: 'ציירו גוף מפותל וראש', guideImage: svgBase64('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 70 Q50 90 70 70 Q90 50 70 30 Q50 10 30 30" stroke="black" stroke-width="3" fill="none"/></svg>') }
    ]
  }
];
