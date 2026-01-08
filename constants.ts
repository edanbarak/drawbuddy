
import { DrawingSubject, Step, Lesson } from './types';

const svgBase64 = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

const createStep = (id: string, instruction: string, svg: string): Step => ({
  id,
  instruction,
  guideImage: svgBase64(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`)
});

export const subjects: DrawingSubject[] = [
  {
    id: 'cat',
    title: 'חתול',
    icon: '🐱',
    versions: {
      beginner: {
        id: 'cat-beg',
        steps: [
          createStep('b1', 'ציירו עיגול גדול לראש', '<circle cx="50" cy="50" r="40" fill="none" stroke="black" stroke-width="3"/>'),
          createStep('b2', 'הוסיפו שתי אוזניים משולשות', '<circle cx="50" cy="50" r="40" fill="none" stroke="#ccc" stroke-width="2"/><path d="M25 20 L35 12 L45 22 M55 22 L65 12 L75 20" fill="none" stroke="black" stroke-width="3"/>'),
          createStep('b3', 'ציירו פנים פשוטות וחיוך', '<g stroke="#ccc" stroke-width="2" fill="none"><circle cx="50" cy="50" r="40"/><path d="M25 20 L35 12 L45 22 M55 22 L65 12 L75 20"/></g><circle cx="35" cy="45" r="3" fill="black"/><circle cx="65" cy="45" r="3" fill="black"/><path d="M40 70 Q50 80 60 70" fill="none" stroke="black" stroke-width="3"/>')
        ]
      },
      intermediate: {
        id: 'cat-int',
        steps: [
          createStep('i1', 'ראש ואוזניים עם פרטים', '<circle cx="50" cy="40" r="30" fill="none" stroke="black" stroke-width="3"/><path d="M30 15 L40 5 L50 20 M50 20 L60 5 L70 15" fill="none" stroke="black" stroke-width="3"/>'),
          createStep('i2', 'הוסיפו גוף יושב וזנב', '<g stroke="#ccc" fill="none"><circle cx="50" cy="40" r="30"/><path d="M30 15 L40 5 L50 20 M50 20 L60 5 L70 15"/></g><path d="M35 70 Q50 95 65 70 Q85 80 80 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('i3', 'ציירו עיניים, אף ואישונים', '<g stroke="#ccc" fill="none"><path d="M35 70 Q50 95 65 70 Q85 80 80 50"/></g><circle cx="40" cy="35" r="5" stroke="black"/><circle cx="60" cy="35" r="5" stroke="black"/><path d="M48 45 L52 45 L50 48 Z" fill="black"/>'),
          createStep('i4', 'הוסיפו שפם ופרווה קטנה', '<g stroke="#ccc" fill="none"><circle cx="50" cy="40" r="30"/></g><path d="M30 40 L10 38 M30 45 L10 48 M70 40 L90 38 M70 45 L90 48" stroke="black" stroke-width="2"/>')
        ]
      },
      advanced: {
        id: 'cat-adv',
        steps: [
          createStep('a1', 'מתאר ראש מורכב עם לחיים', '<path d="M30 30 Q20 40 30 60 Q50 75 70 60 Q80 40 70 30 Q50 20 30 30" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('a2', 'אוזניים חדות עם צד פנימי', '<path d="M30 30 L25 10 L45 25 M70 30 L75 10 L55 25" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('a3', 'עיניים חתוליות מפורטות', '<path d="M35 40 Q40 35 45 40 Q40 45 35 40 M55 40 Q60 35 65 40 Q60 45 55 40" stroke="black" fill="none"/><circle cx="40" cy="40" r="1" fill="black"/><circle cx="60" cy="40" r="1" fill="black"/>'),
          createStep('a4', 'גוף שלם בתנוחת ישיבה', '<path d="M35 68 Q25 95 50 95 Q75 95 65 68" stroke="black" stroke-width="3" fill="none"/><path d="M30 85 L20 90 M70 85 L80 90" stroke="black"/>'),
          createStep('a5', 'זנב מתפתל ופרווה', '<path d="M75 90 Q95 90 90 60 Q85 40 70 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('a6', 'פרטים אחרונים: שפם וריסים', '<path d="M30 50 L5 50 M30 55 L7 58 M70 50 L95 50 M70 55 L93 58" stroke="black" stroke-width="1"/>')
        ]
      }
    }
  },
  {
    id: 'house',
    title: 'בית',
    icon: '🏠',
    versions: {
      beginner: {
        id: 'house-beg',
        steps: [
          createStep('h1', 'ציירו ריבוע לקיר', '<rect x="25" y="50" width="50" height="40" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('h2', 'הוסיפו גג משולש', '<path d="M20 50 L50 20 L80 50 Z" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('h3', 'ציירו דלת וחלון', '<rect x="42" y="70" width="16" height="20" stroke="black" stroke-width="2" fill="none"/><rect x="30" y="55" width="8" height="8" stroke="black" fill="none"/>')
        ]
      },
      intermediate: {
        id: 'house-int',
        steps: [
          createStep('h1', 'בסיס הבית עם עובי', '<path d="M20 50 L20 90 L80 90 L80 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('h2', 'גג עם רעפים פשוטים', '<path d="M15 50 L50 15 L85 50" stroke="black" stroke-width="3" fill="none"/><path d="M30 35 L40 35 M50 25 L60 25" stroke="#ccc"/>'),
          createStep('h3', 'דלת עם ידית ושני חלונות', '<rect x="42" y="65" width="16" height="25" stroke="black" stroke-width="2" fill="none"/><circle cx="55" cy="78" r="1"/><rect x="28" y="55" width="10" height="10" stroke="black"/><rect x="62" y="55" width="10" height="10" stroke="black"/>'),
          createStep('h4', 'ארובה וקצת עשן', '<rect x="65" y="20" width="8" height="15" stroke="black" fill="none"/><path d="M70 15 Q75 5 85 10" stroke="gray" stroke-width="2"/>')
        ]
      },
      advanced: {
        id: 'house-adv',
        steps: [
          createStep('h1', 'בית תלת-ממדי (פרספקטיבה)', '<path d="M20 50 L20 90 L60 90 L60 50 Z M60 50 L85 40 L85 80 L60 90" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('h2', 'גג מורכב עם כיוונים', '<path d="M20 50 L40 20 L60 50 M40 20 L75 15 L85 40" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('h3', 'חלונות עם תריסים', '<rect x="30" y="60" width="10" height="15" stroke="black"/><path d="M25 60 L30 60 L30 75 L25 75 M40 60 L45 60 L45 75 L40 75" stroke="black"/>'),
          createStep('h4', 'דלת כפולה עם מדרגה', '<rect x="65" y="65" width="15" height="20" stroke="black"/><line x1="72" y1="65" x2="72" y2="85" stroke="black"/><rect x="63" y="85" width="19" height="5" stroke="black"/>'),
          createStep('h5', 'פרטי נוף סביב הבית', '<path d="M5 90 L95 90 M10 80 Q15 70 20 80" stroke="green" stroke-width="2"/>'),
          createStep('h6', 'לבנים וטקסטורה על הקירות', '<path d="M25 80 H35 M45 75 H55 M70 60 H80" stroke="#eee"/>')
        ]
      }
    }
  },
  {
    id: 'dog',
    title: 'כלב',
    icon: '🐶',
    versions: {
      beginner: {
        id: 'dog-beg',
        steps: [
          createStep('d1', 'ראש עגול ואוזניים נופלות', '<circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="none"/><path d="M25 35 Q15 45 25 65 M75 35 Q85 45 75 65" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('d2', 'עיניים ואף שחור', '<circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/><path d="M48 55 H52 V58 H48 Z" fill="black"/>')
        ]
      },
      intermediate: {
        id: 'dog-int',
        steps: [
          createStep('d1', 'ראש אובלי עם אוזניים רכות', '<ellipse cx="50" cy="40" rx="30" ry="25" stroke="black" stroke-width="3" fill="none"/><path d="M20 30 Q10 40 20 60 M80 30 Q90 40 80 60" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('d2', 'גוף יושב וזנב קטן', '<path d="M35 65 Q50 90 65 65 M70 70 Q90 70 85 55" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('d3', 'עיניים, אף ולשון בחוץ', '<circle cx="42" cy="35" r="3" fill="black"/><circle cx="58" cy="35" r="3" fill="black"/><path d="M47 48 H53 L50 52 Z" fill="black"/><path d="M48 55 Q50 65 52 55" fill="pink" stroke="black"/>')
        ]
      },
      advanced: {
        id: 'dog-adv',
        steps: [
          createStep('d1', 'מבנה פנים עם לוע בולט', '<path d="M30 40 Q30 10 50 10 Q70 10 70 40 Q70 60 50 60 Q30 60 30 40" stroke="black" stroke-width="3" fill="none"/><path d="M40 45 Q50 55 60 45" stroke="black"/>'),
          createStep('d2', 'אוזניים גדולות ושמוטות', '<path d="M30 25 Q10 25 15 60 M70 25 Q90 25 85 60" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('d3', 'גוף שרירי בתנוחה', '<path d="M35 60 L30 90 M65 60 L70 90 M40 90 H60" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('d4', 'זנב פרוותי ועיניים מביעות', '<path d="M70 70 Q95 60 90 30" stroke="black" stroke-width="2"/><circle cx="45" cy="35" r="2" fill="black"/><circle cx="55" cy="35" r="2" fill="black"/>'),
          createStep('d5', 'קולר עם תג', '<path d="M38 60 Q50 65 62 60" stroke="red" stroke-width="3"/><circle cx="50" cy="68" r="3" fill="gold" stroke="black"/>'),
          createStep('d6', 'טקסטורת פרווה ופרטים', '<path d="M20 50 L15 52 M80 50 L85 52" stroke="#ddd"/>')
        ]
      }
    }
  },
  {
    id: 'tree',
    title: 'עץ',
    icon: '🌳',
    versions: {
      beginner: {
        id: 'tree-beg',
        steps: [
          createStep('t1', 'גזע פשוט', '<path d="M45 90 L45 60 M55 90 L55 60" stroke="black" stroke-width="3"/>'),
          createStep('t2', 'ענן עלים למעלה', '<path d="M30 60 Q10 40 30 20 Q50 5 70 20 Q90 40 70 60 Z" stroke="black" stroke-width="3" fill="none"/>')
        ]
      },
      intermediate: {
        id: 'tree-int',
        steps: [
          createStep('t1', 'גזע רחב עם ענפים', '<path d="M40 95 Q45 70 40 50 M60 95 Q55 70 60 50" stroke="black" stroke-width="3" fill="none"/><path d="M40 55 L30 45 M60 55 L70 45" stroke="black" stroke-width="2"/>'),
          createStep('t2', 'צמרת עשירה במקטעים', '<path d="M30 50 Q15 30 40 30 Q50 15 65 30 Q85 30 75 50 Q60 60 45 60 Q30 60 30 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('t3', 'פירות או פרחים קטנים', '<circle cx="35" cy="40" r="3" fill="red"/><circle cx="65" cy="35" r="3" fill="red"/><circle cx="50" cy="25" r="3" fill="red"/>')
        ]
      },
      advanced: {
        id: 'tree-adv',
        steps: [
          createStep('t1', 'גזע עבה עם שורשים', '<path d="M35 95 Q40 80 40 40 M65 95 Q60 80 60 40" stroke="black" stroke-width="3" fill="none"/><path d="M35 95 L25 98 M65 95 L75 98" stroke="black"/>'),
          createStep('t2', 'מערכת ענפים מורכבת', '<path d="M40 40 L20 20 M40 50 L25 55 M60 40 L80 20 M60 50 L75 55" stroke="black" stroke-width="2"/>'),
          createStep('t3', 'עלים בודדים וקבצות עלים', '<path d="M20 20 Q10 10 25 10 Q35 20 20 20" stroke="green" fill="none"/><path d="M80 20 Q90 10 75 10 Q65 20 80 20" stroke="green" fill="none"/>'),
          createStep('t4', 'חור בגזע (קן לציפור)', '<ellipse cx="50" cy="65" rx="5" ry="8" fill="#332211"/>'),
          createStep('t5', 'דשא ופרחים בבסיס', '<path d="M20 95 L30 85 L40 95 M70 95 L80 85 L90 95" stroke="green"/>'),
          createStep('t6', 'טקסטורת קליפת עץ', '<path d="M45 50 V70 M55 45 V65" stroke="#443322" stroke-width="1"/>')
        ]
      }
    }
  },
  {
    id: 'car',
    title: 'מכונית',
    icon: '🚗',
    versions: {
      beginner: {
        id: 'car-beg',
        steps: [
          createStep('c1', 'מלבן לגוף', '<rect x="15" y="55" width="70" height="20" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('c2', 'חצי עיגול לגג', '<path d="M30 55 Q50 30 70 55" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('c3', 'שני גלגלים', '<circle cx="30" cy="75" r="8" fill="black"/><circle cx="70" cy="75" r="8" fill="black"/>')
        ]
      },
      intermediate: {
        id: 'car-int',
        steps: [
          createStep('c1', 'גוף אווירודינמי', '<path d="M10 70 H90 V60 Q80 55 75 40 H30 Q25 55 10 60 Z" stroke="black" stroke-width="3" fill="none"/>'),
          // Fix: Use double quotes for the instruction string to avoid parsing errors with the Hebrew apostrophe (geresh).
          createStep('c2', "גלגלים עם ג'נטים", '<circle cx="30" cy="70" r="10" stroke="black" fill="white"/><circle cx="30" cy="70" r="4" fill="gray"/><circle cx="70" cy="70" r="10" stroke="black" fill="white"/><circle cx="70" cy="70" r="4" fill="gray"/>'),
          createStep('c3', 'חלונות ודלתות', '<path d="M35 45 H50 V55 H32 Z M55 45 H70 L75 55 H55 Z" stroke="black" fill="none"/><line x1="52" y1="45" x2="52" y2="65" stroke="black"/>'),
          createStep('c4', 'פנסים ומראה', '<rect x="85" y="62" width="5" height="5" fill="yellow"/><circle cx="28" cy="45" r="2" fill="gray"/>')
        ]
      },
      advanced: {
        id: 'car-adv',
        steps: [
          createStep('c1', 'מבנה תלת-ממדי של מכונית ספורט', '<path d="M10 70 L20 60 L80 60 L90 70 Z M20 60 L35 35 L70 35 L80 60" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('c2', 'גלגלים רחבים עם צמיגים', '<ellipse cx="25" cy="75" rx="12" ry="10" stroke="black"/><ellipse cx="75" cy="75" rx="12" ry="10" stroke="black"/>'),
          createStep('c3', 'חלונות מעוקלים ופנים הרכב', '<path d="M38 40 H68 L75 55 H32 Z" stroke="black" fill="none"/><line x1="53" y1="40" x2="53" y2="55" stroke="black"/>'),
          createStep('c4', 'ספוילר אחורי ופגוש', '<path d="M10 60 L5 55 H20 M85 65 H95" stroke="black" stroke-width="2"/>'),
          createStep('c5', 'גריל קדמי ופרטי מנוע', '<rect x="40" y="62" width="20" height="5" stroke="black"/>'),
          createStep('c6', 'השתקפויות וצללים', '<path d="M40 45 H60" stroke="#eee" stroke-width="4"/>')
        ]
      }
    }
  },
  {
    id: 'flower',
    title: 'פרח',
    icon: '🌻',
    versions: {
      beginner: {
        id: 'flower-beg',
        steps: [
          createStep('f1', 'עיגול מרכזי', '<circle cx="50" cy="40" r="10" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f2', 'עלי כותרת פשוטים', '<path d="M50 30 Q40 10 30 30 Q10 40 30 50 Q40 70 50 50 Q60 70 70 50 Q90 40 70 30 Q60 10 50 30" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f3', 'גבעול ישר', '<line x1="50" y1="50" x2="50" y2="90" stroke="black" stroke-width="3"/>')
        ]
      },
      intermediate: {
        id: 'flower-int',
        steps: [
          createStep('f1', 'מרכז עם גרעינים', '<circle cx="50" cy="40" r="12" stroke="black" stroke-width="2" fill="none"/><circle cx="48" cy="38" r="1"/><circle cx="52" cy="42" r="1"/>'),
          createStep('f2', 'שכבה כפולה של עלי כותרת', '<path d="M50 28 Q55 10 65 25 M62 38 Q85 30 80 45" stroke="black" stroke-width="2" fill="none"/><path d="M50 52 Q55 70 65 55 M38 42 Q15 35 20 50" stroke="black" stroke-width="2" fill="none"/>'),
          createStep('f3', 'גבעול מעוקל ועלה גדול', '<path d="M50 52 Q45 75 50 95" stroke="black" stroke-width="3" fill="none"/><path d="M48 75 Q65 70 70 80 Q65 90 48 85" stroke="black" stroke-width="2" fill="none"/>')
        ]
      },
      advanced: {
        id: 'flower-adv',
        steps: [
          createStep('f1', 'מרכז תלת-ממדי (חמנייה)', '<ellipse cx="50" cy="40" rx="15" ry="12" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f2', 'עלי כותרת צפופים ומחודדים', '<path d="M50 28 L55 5 L60 28 M68 35 L90 20 L75 42 M50 52 L55 80 L60 52 M32 35 L10 20 L25 42" stroke="black" stroke-width="2" fill="none"/>'),
          createStep('f3', 'גבעול עם קוצים ועלים משוננים', '<path d="M50 52 V95" stroke="black" stroke-width="3"/><path d="M48 65 L45 62 M52 75 L55 72" stroke="black" stroke-width="2"/>'),
          createStep('f4', 'חרק קטן (פרת משה רבנו) על עלה', '<circle cx="65" cy="75" r="3" fill="red"/><circle cx="65" cy="75" r="1" fill="black"/>'),
          createStep('f5', 'טיפת טל על עלה הכותרת', '<ellipse cx="55" cy="15" rx="1" ry="2" stroke="blue" fill="white"/>'),
          createStep('f6', 'טקסטורת עורקים בעלי הכותרת', '<path d="M55 20 L55 10 M75 35 L85 30" stroke="#ccc"/>')
        ]
      }
    }
  },
  {
    id: 'sun',
    title: 'שמש',
    icon: '☀️',
    versions: {
      beginner: {
        id: 'sun-beg',
        steps: [
          createStep('s1', 'עיגול גדול', '<circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('s2', 'קרניים פשוטות', '<path d="M50 10 V20 M50 80 V90 M10 50 H20 M80 50 H90" stroke="black" stroke-width="3"/>'),
          createStep('s3', 'חיוך ועיניים', '<circle cx="42" cy="45" r="3" fill="black"/><circle cx="58" cy="45" r="3" fill="black"/><path d="M40 60 Q50 70 60 60" stroke="black" stroke-width="3" fill="none"/>')
        ]
      },
      intermediate: {
        id: 'sun-int',
        steps: [
          createStep('s1', 'עיגול עם הילה', '<circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="none"/><circle cx="50" cy="50" r="35" stroke="#ffeaa7" stroke-dasharray="5,5"/>'),
          createStep('s2', 'קרניים משולשות', '<path d="M50 5 L55 15 L45 15 Z M95 50 L85 45 L85 55 Z M50 95 L45 85 L55 85 Z M5 50 L15 55 L15 45 Z" fill="none" stroke="black" stroke-width="2"/>'),
          createStep('s3', 'פנים עם לחיים ומשקפי שמש', '<rect x="35" y="40" width="12" height="8" rx="2" fill="black"/><rect x="53" y="40" width="12" height="8" rx="2" fill="black"/><line x1="47" y1="44" x2="53" y2="44" stroke="black"/><circle cx="35" cy="55" r="4" fill="#ff7675" opacity="0.5"/>')
        ]
      },
      advanced: {
        id: 'sun-adv',
        steps: [
          createStep('s1', 'שמש בוערת עם להבות', '<circle cx="50" cy="50" r="25" stroke="black" stroke-width="3" fill="none"/><path d="M50 25 Q55 10 65 20 Q75 30 55 35" stroke="orange" fill="none"/>'),
          createStep('s2', 'קרניים באורכים שונים', '<path d="M50 5 V20 M80 20 L70 30 M95 50 H80" stroke="black" stroke-width="2"/>'),
          createStep('s3', 'עננים חולפים ליד השמש', '<path d="M10 40 Q20 30 35 40 Q50 30 60 40" stroke="blue" fill="none" opacity="0.3"/>'),
          createStep('s4', 'פנים מפורטות עם ריסים', '<path d="M40 45 Q42 43 44 45 M56 45 Q58 43 60 45" stroke="black"/><path d="M45 55 Q50 65 55 55" stroke="black"/>'),
          createStep('s5', 'אפקט נצנוץ סביב', '<path d="M20 20 L25 25 M75 75 L80 80" stroke="gold" stroke-width="1"/>'),
          createStep('s6', 'צבעים מדורגים (סימון קווים)', '<path d="M40 30 Q50 25 60 30" stroke="#f1c40f" stroke-dasharray="2,2"/>')
        ]
      }
    }
  },
  {
    id: 'fish',
    title: 'דג',
    icon: '🐟',
    versions: {
      beginner: {
        id: 'fish-beg',
        steps: [
          createStep('f1', 'גוף בצורת עין', '<path d="M10 50 Q50 20 90 50 Q50 80 10 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f2', 'זנב משולש', '<path d="M10 50 L-5 35 L-5 65 Z" stroke="black" stroke-width="3" fill="none" transform="translate(15,0)"/>'),
          createStep('f3', 'עין אחת ובועה', '<circle cx="75" cy="45" r="3" fill="black"/><circle cx="95" cy="30" r="4" stroke="blue" fill="none"/>')
        ]
      },
      intermediate: {
        id: 'fish-int',
        steps: [
          createStep('f1', 'גוף עם סנפירים', '<path d="M10 50 Q50 15 90 50 Q50 85 10 50" stroke="black" stroke-width="3" fill="none"/><path d="M40 30 Q50 10 60 30 M40 70 Q50 90 60 70" stroke="black" fill="none"/>'),
          createStep('f2', 'זנב מפוצל', '<path d="M25 50 L5 30 Q15 50 5 70 Z" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f3', 'קשקשים פשוטים', '<path d="M40 45 Q45 50 40 55 M50 40 Q55 45 50 50" stroke="#ccc"/>'),
          createStep('f4', 'עין גדולה ופה פתוח', '<circle cx="75" cy="45" r="5" stroke="black"/><circle cx="77" cy="43" r="2" fill="black"/><path d="M90 50 H80" stroke="black"/>')
        ]
      },
      advanced: {
        id: 'fish-adv',
        steps: [
          createStep('f1', 'דג טרופי מפורט', '<path d="M10 50 Q30 5 80 40 Q95 50 80 60 Q30 95 10 50" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('f2', 'סנפירים ארוכים ומתנופפים', '<path d="M40 20 Q60 0 80 30 M40 80 Q60 100 80 70" stroke="black" stroke-width="2" fill="none"/>'),
          createStep('f3', 'זנב דמוי מניפה', '<path d="M10 50 L-10 20 Q0 50 -10 80 Z" stroke="black" stroke-width="2" fill="none" transform="translate(10,0)"/><path d="M0 40 L-5 40 M0 60 L-5 60" stroke="black"/>'),
          createStep('f4', 'פסים ודוגמאות על הגוף', '<path d="M30 30 Q40 50 30 70 M50 25 Q60 50 50 75" stroke="black" stroke-dasharray="5,5"/>'),
          createStep('f5', 'צמחיית מים סביב (אצות)', '<path d="M5 95 Q15 70 5 50" stroke="green" stroke-width="3"/>'),
          createStep('f6', 'בועות בגדלים שונים', '<circle cx="90" cy="20" r="5" stroke="blue"/><circle cx="85" cy="10" r="2" stroke="blue"/>')
        ]
      }
    }
  },
  {
    id: 'butterfly',
    title: 'פרפר',
    icon: '🦋',
    versions: {
      beginner: {
        id: 'butt-beg',
        steps: [
          createStep('b1', 'גוף ומחושים', '<ellipse cx="50" cy="50" rx="5" ry="30" stroke="black" stroke-width="3" fill="none"/><path d="M48 20 Q40 10 35 15 M52 20 Q60 10 65 15" stroke="black"/>'),
          createStep('b2', 'כנפיים גדולות', '<path d="M55 40 Q80 10 80 40 Q80 70 55 60 M45 40 Q20 10 20 40 Q20 70 45 60" stroke="black" stroke-width="3" fill="none"/>')
        ]
      },
      intermediate: {
        id: 'butt-int',
        steps: [
          createStep('b1', 'ראש וגוף מחולק', '<circle cx="50" cy="20" r="8" stroke="black" stroke-width="2"/><ellipse cx="50" cy="50" rx="8" ry="25" stroke="black" stroke-width="2"/><line x1="42" y1="45" x2="58" y2="45" stroke="black"/>'),
          createStep('b2', 'כנפיים עם קישוטים', '<path d="M58 35 Q90 5 90 40 Q90 80 58 65 M42 35 Q10 5 10 40 Q10 80 42 65" stroke="black" stroke-width="3" fill="none"/><circle cx="75" cy="35" r="5" fill="purple"/><circle cx="25" cy="35" r="5" fill="purple"/>'),
          createStep('b3', 'מחושים ארוכים עם קצוות', '<path d="M45 15 Q40 0 30 5 M55 15 Q60 0 70 5" stroke="black"/><circle cx="30" cy="5" r="2" fill="black"/><circle cx="70" cy="5" r="2" fill="black"/>')
        ]
      },
      advanced: {
        id: 'butt-adv',
        steps: [
          createStep('b1', 'גוף פרוותי מפורט', '<ellipse cx="50" cy="50" rx="7" ry="30" stroke="black" stroke-width="3"/><path d="M45 40 L43 42 M55 40 L57 42" stroke="black" stroke-width="1"/>'),
          createStep('b2', 'כנפיים עם עורקים', '<path d="M57 30 Q95 -10 90 45 Q85 90 57 60 M43 30 Q5 -10 10 45 Q15 90 43 60" stroke="black" stroke-width="2" fill="none"/><path d="M65 40 L85 30 M65 50 L80 60" stroke="#ccc"/>'),
          createStep('b3', 'דוגמאות מורכבות על הכנפיים', '<path d="M75 30 Q80 35 75 40 Q70 35 75 30" fill="orange"/><circle cx="25" cy="50" r="4" fill="blue" stroke="black"/>'),
          createStep('b4', 'ראש עם עיניים מורכבות', '<circle cx="50" cy="15" r="7" stroke="black"/><circle cx="47" cy="13" r="2" fill="black"/><circle cx="53" cy="13" r="2" fill="black"/>'),
          createStep('b5', 'פרח קטן ברקע', '<circle cx="15" cy="85" r="5" stroke="pink"/><line x1="15" y1="90" x2="15" y2="100" stroke="green"/>'),
          createStep('b6', 'אפקט תנועה/אבקת כנפיים', '<circle cx="85" cy="65" r="1" fill="gold"/><circle cx="90" cy="70" r="0.5" fill="gold"/>')
        ]
      }
    }
  },
  {
    id: 'robot',
    title: 'רובוט',
    icon: '🤖',
    versions: {
      beginner: {
        id: 'robot-beg',
        steps: [
          createStep('r1', 'ראש וגוף מרובעים', '<rect x="35" y="10" width="30" height="25" stroke="black" stroke-width="3" fill="none"/><rect x="25" y="35" width="50" height="40" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('r2', 'עיניים וכפתורים', '<circle cx="42" cy="22" r="3" fill="black"/><circle cx="58" cy="22" r="3" fill="black"/><circle cx="50" cy="55" r="4" fill="red"/>'),
          createStep('r3', 'ידיים ורגליים ישרות', '<line x1="25" y1="55" x2="5" y2="55" stroke="black" stroke-width="3"/><line x1="75" y1="55" x2="95" y2="55" stroke="black" stroke-width="3"/><line x1="40" y1="75" x2="40" y2="95" stroke="black" stroke-width="3"/><line x1="60" y1="75" x2="60" y2="95" stroke="black" stroke-width="3"/>')
        ]
      },
      intermediate: {
        id: 'robot-int',
        steps: [
          createStep('r1', 'גוף עם פינות מעוגלות', '<rect x="30" y="10" width="40" height="30" rx="5" stroke="black" stroke-width="3" fill="none"/><rect x="20" y="40" width="60" height="45" rx="8" stroke="black" stroke-width="3" fill="none"/>'),
          createStep('r2', 'ידיים קפיציות', '<path d="M20 50 Q10 40 5 50 Q10 60 5 70" stroke="black" stroke-width="2" fill="none"/><path d="M80 50 Q90 40 95 50 Q90 60 95 70" stroke="black" stroke-width="2" fill="none"/>'),
          createStep('r3', 'פנל בקרה מפורט', '<rect x="35" y="50" width="30" height="20" stroke="black" fill="#eee"/><circle cx="40" cy="55" r="2" fill="green"/><circle cx="50" cy="55" r="2" fill="blue"/><rect x="40" y="62" width="20" height="3" fill="red"/>'),
          createStep('r4', 'אנטנה עם נורה', '<line x1="50" y1="10" x2="50" y2="2" stroke="black"/><circle cx="50" cy="2" r="3" fill="yellow"/>')
        ]
      },
      advanced: {
        id: 'robot-adv',
        steps: [
          createStep('r1', 'רובוט עתידני (מבנה גוף מורכב)', '<path d="M35 15 L65 15 L70 40 L30 40 Z" stroke="black" stroke-width="3" fill="none"/><rect x="25" y="40" width="50" height="40" stroke="black" fill="none"/>'),
          createStep('r2', 'מפרקים מכניים בידיים וברגליים', '<circle cx="25" cy="50" r="5" stroke="black"/><path d="M20 50 L5 40 L10 70" stroke="black" stroke-width="2" fill="none"/><circle cx="75" cy="50" r="5" stroke="black"/><path d="M80 50 L95 40 L90 70" stroke="black" stroke-width="2" fill="none"/>'),
          createStep('r3', 'מסך פנים עם גרפיקה', '<rect x="40" y="20" width="20" height="15" fill="black"/><path d="M42 27 H58" stroke="lime" stroke-width="1"/>'),
          createStep('r4', 'מערכת גלגלי שיניים חשופה', '<circle cx="50" cy="60" r="10" stroke="#ccc"/><path d="M50 50 L50 70 M40 60 L60 60" stroke="#aaa"/>'),
          createStep('r5', 'כנפי סילון או תרמיל גב', '<rect x="15" y="45" width="10" height="30" stroke="black"/><path d="M20 75 L15 85 L25 85 Z" fill="orange"/>'),
          createStep('r6', 'ברגים וחיבורים על כל הגוף', '<circle cx="30" cy="18" r="1" fill="gray"/><circle cx="70" cy="18" r="1" fill="gray"/><circle cx="30" cy="78" r="1" fill="gray"/>')
        ]
      }
    }
  }
];
