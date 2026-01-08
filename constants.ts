
import { DrawingSubject, Step, Lesson } from './types';

const svgToUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`)}`;

const createStep = (id: string, instructionKey: string, svg: string): Step => ({
  id,
  instructionKey,
  guideImage: svgToUri(svg)
});

// --- SUN ---
const SUN_BASE = '<circle cx="50" cy="50" r="25" stroke="black" stroke-width="3" fill="none"/>';
const SUN_RAYS_4 = '<path d="M50 10V20 M50 80V90 M10 50H20 M80 50H90" stroke="black" stroke-width="3"/>';
const SUN_RAYS_8 = SUN_RAYS_4 + '<path d="M22 22L28 28 M72 72L78 78 M22 78L28 72 M72 28L78 22" stroke="black" stroke-width="3"/>';
const SUN_FACE = '<circle cx="42" cy="45" r="2" fill="black"/><circle cx="58" cy="45" r="2" fill="black"/><path d="M42 60Q50 68 58 60" stroke="black" stroke-width="2" fill="none"/>';

const sunBeg: Lesson = { id: 'sun-b', steps: [
  createStep('s1', 'Draw a big circle', SUN_BASE),
  createStep('s2', 'Add 4 long rays', SUN_BASE + SUN_RAYS_4),
  createStep('s3', 'Add a happy face', SUN_BASE + SUN_RAYS_4 + SUN_FACE)
]};
const sunInt: Lesson = { id: 'sun-i', steps: [
  createStep('s1', 'Draw a circle', SUN_BASE),
  createStep('s2', 'Add 8 rays', SUN_BASE + SUN_RAYS_8),
  createStep('s3', 'Draw big eyes', SUN_BASE + SUN_RAYS_8 + '<circle cx="40" cy="45" r="4"/><circle cx="60" cy="45" r="4"/>'),
  createStep('s4', 'Add a wide smile', SUN_BASE + SUN_RAYS_8 + '<circle cx="40" cy="45" r="4"/><circle cx="60" cy="45" r="4"/><path d="M35 60Q50 75 65 60" stroke="black" stroke-width="2" fill="none"/>'),
  createStep('s5', 'Add rosy cheeks', SUN_BASE + SUN_RAYS_8 + '<circle cx="40" cy="45" r="4"/><circle cx="60" cy="45" r="4"/><path d="M35 60Q50 75 65 60" stroke="black" stroke-width="2" fill="none"/><circle cx="32" cy="55" r="3" fill="#ffcccc" opacity="0.6"/><circle cx="68" cy="55" r="3" fill="#ffcccc" opacity="0.6"/>')
]};
const sunAdv: Lesson = { id: 'sun-a', steps: [
  createStep('s1', 'Draw the sun body', SUN_BASE),
  createStep('s2', 'Add wavy rays', SUN_BASE + '<path d="M50 5Q55 15 50 25 M50 75Q55 85 50 95 M5 50Q15 45 25 50 M75 50Q85 45 95 50" stroke="black" stroke-width="2" fill="none"/>'),
  createStep('s3', 'Fill extra rays', SUN_BASE + '<path d="M50 5Q55 15 50 25 M50 75Q55 85 50 95 M5 50Q15 45 25 50 M75 50Q85 45 95 50 M20 20Q30 25 35 35 M65 65Q70 75 80 80" stroke="black" stroke-width="2" fill="none"/>'),
  createStep('s4', 'Draw detailed eyes', SUN_BASE + '<circle cx="43" cy="45" r="5"/><circle cx="57" cy="45" r="5"/><circle cx="44" cy="44" r="2" fill="black"/><circle cx="58" cy="44" r="2" fill="black"/>'),
  createStep('s5', 'Add a nose and mouth', SUN_BASE + '<path d="M48 52Q50 55 52 52" fill="none" stroke="black"/><path d="M38 62Q50 72 62 62" fill="none" stroke="black"/>'),
  createStep('s6', 'Add eyebrows and lashes', SUN_BASE + '<path d="M40 38Q43 35 46 38 M54 38Q57 35 60 38" fill="none" stroke="black"/><path d="M38 43L35 40 M62 43L65 40" stroke="black" stroke-width="1"/>'),
  createStep('s7', 'Add sparkles around the sun', SUN_BASE + '<circle cx="20" cy="15" r="1"/><circle cx="85" cy="20" r="1.5"/><circle cx="15" cy="80" r="1"/>')
]};

// --- FLOWER ---
const flowerBeg: Lesson = { id: 'f-b', steps: [
  createStep('f1', 'Draw a small circle center', '<circle cx="50" cy="40" r="10" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('f2', 'Add 4 big petals', '<g stroke="black" stroke-width="3" fill="none"><circle cx="50" cy="40" r="10"/><circle cx="50" cy="22" r="12"/><circle cx="50" cy="58" r="12"/><circle cx="32" cy="40" r="12"/><circle cx="68" cy="40" r="12"/></g>'),
  createStep('f3', 'Draw the stem and leaf', '<g stroke="black" stroke-width="3" fill="none"><circle cx="50" cy="40" r="10"/><circle cx="50" cy="22" r="12"/><circle cx="50" cy="58" r="12"/><circle cx="32" cy="40" r="12"/><circle cx="68" cy="40" r="12"/><line x1="50" y1="70" x2="50" y2="95"/><path d="M50 85Q65 75 70 85"/></g>')
]};
const flowerInt: Lesson = { id: 'f-i', steps: [
  createStep('f1', 'Draw a center circle', '<circle cx="50" cy="35" r="8" stroke="black" fill="none"/>'),
  createStep('f2', 'Add 5 oval petals', '<g stroke="black" fill="none"><circle cx="50" cy="35" r="8"/><ellipse cx="50" cy="20" rx="8" ry="12"/><ellipse cx="35" cy="30" rx="12" ry="8"/><ellipse cx="65" cy="30" rx="12" ry="8"/><ellipse cx="40" cy="50" rx="10" ry="8"/><ellipse cx="60" cy="50" rx="10" ry="8"/></g>'),
  createStep('f3', 'Draw the long stem', '<line x1="50" y1="43" x2="50" y2="95" stroke="black" stroke-width="2"/>'),
  createStep('f4', 'Add a leaf on the left', '<path d="M50 70Q35 60 30 75Z" stroke="black" fill="none"/>'),
  createStep('f5', 'Add a leaf on the right', '<path d="M50 70Q35 60 30 75Z"/><path d="M50 80Q65 70 70 85Z" stroke="black" fill="none"/>')
]};
const flowerAdv: Lesson = { id: 'f-a', steps: [
  createStep('f1', 'Draw textured center', '<circle cx="50" cy="30" r="6" stroke="black" fill="none"/><path d="M47 27L48 28 M52 32L53 33" stroke="black" stroke-width="1"/>'),
  createStep('f2', 'Layered inner petals', '<path d="M50 24Q40 10 30 24 T50 36 T70 24 T50 24" stroke="black" fill="none"/>'),
  createStep('f3', 'Broad outer petals', '<path d="M50 24Q40 10 30 24 T50 36 T70 24 T50 24"/><path d="M30 24Q10 24 15 45 Q30 55 50 36" stroke="black" fill="none"/>'),
  createStep('f4', 'Thick tapering stem', '<path d="M50 36Q55 60 50 95" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('f5', 'Veined large leaf', '<path d="M52 65Q75 55 85 75Q65 85 52 70" stroke="black" fill="none"/><line x1="55" y1="70" x2="80" y2="72" stroke="black" stroke-width="1"/>'),
  createStep('f6', 'Small budding leaf', '<path d="M52 80Q40 85 45 92Z" stroke="black" fill="none"/>'),
  createStep('f7', 'Garden soil and grass', '<path d="M30 95H70 M35 95L32 90 M65 95L68 90" stroke="black" stroke-width="2"/>')
]};

// --- HOUSE ---
const houseBeg: Lesson = { id: 'h-b', steps: [
  createStep('h1', 'Draw a square base', '<rect x="30" y="50" width="40" height="40" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('h2', 'Add a triangle roof', '<path d="M30 50L50 20L70 50Z" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('h3', 'Add a door', '<rect x="45" y="70" width="10" height="20" stroke="black" stroke-width="3" fill="none"/>')
]};
const houseInt: Lesson = { id: 'h-i', steps: [
  createStep('h1', 'Draw house rectangle', '<rect x="25" y="50" width="50" height="40" stroke="black" fill="none"/>'),
  createStep('h2', 'Add peaked roof', '<path d="M20 50L50 15L80 50Z" stroke="black" fill="none"/>'),
  createStep('h3', 'Add central door', '<rect x="42" y="70" width="16" height="20" stroke="black" fill="none"/>'),
  createStep('h4', 'Add two square windows', '<rect x="30" y="58" width="10" height="10" stroke="black"/><rect x="60" y="58" width="10" height="10" stroke="black"/>'),
  createStep('h5', 'Add a chimney', '<path d="M60 25V15H70V37" stroke="black" fill="none"/>')
]};
const houseAdv: Lesson = { id: 'h-a', steps: [
  createStep('h1', 'Draw 3D house walls', '<path d="M20 50H60V90H20Z M60 50L80 40V80L60 90" stroke="black" fill="none"/>'),
  createStep('h2', 'Add the 3D roof', '<path d="M15 50L40 15L65 50 M40 15L70 10L85 40" stroke="black" fill="none"/>'),
  createStep('h3', 'Add paneled door', '<rect x="35" y="70" width="12" height="20" stroke="black"/><circle cx="45" cy="80" r="1"/>'),
  createStep('h4', 'Add window shutters', '<rect x="25" y="55" width="8" height="12" stroke="black"/><line x1="29" y1="55" x2="29" y2="67"/>'),
  createStep('h5', 'Add brick chimney', '<rect x="65" y="15" width="10" height="15" stroke="black"/><line x1="65" y1="20" x2="75" y2="20"/><line x1="65" y1="25" x2="75" y2="25"/>'),
  createStep('h6', 'Draw garden fence', '<path d="M10 90H20V80H10Z M20 90H30V80H20Z" stroke="black" fill="none"/>'),
  createStep('h7', 'Add roof tiles', '<path d="M25 45Q30 42 35 45 M45 45Q50 42 55 45" stroke="black" opacity="0.4" fill="none"/>')
]};

// --- CAT ---
const catBeg: Lesson = { id: 'c-b', steps: [
  createStep('c1', 'Draw a circle head', '<circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('c2', 'Add triangle ears', '<path d="M25 25L30 10L45 20 M75 25L70 10L55 20" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('c3', 'Draw a happy face', '<circle cx="40" cy="45" r="2" fill="black"/><circle cx="60" cy="45" r="2" fill="black"/><path d="M45 60Q50 65 55 60" stroke="black" stroke-width="2" fill="none"/>')
]};
const catInt: Lesson = { id: 'c-i', steps: [
  createStep('c1', 'Draw a head oval', '<ellipse cx="50" cy="40" rx="25" ry="20" stroke="black" fill="none"/>'),
  createStep('c2', 'Add pointed ears', '<path d="M30 25L25 5L45 20 M70 25L75 5L55 20" stroke="black" fill="none"/>'),
  createStep('c3', 'Draw a sitting body', '<ellipse cx="50" cy="75" rx="15" ry="20" stroke="black" fill="none"/>'),
  createStep('c4', 'Add a long tail', '<path d="M65 85Q85 85 80 60" stroke="black" fill="none"/>'),
  createStep('c5', 'Draw eyes and whiskers', '<circle cx="42" cy="38" r="2" fill="black"/><circle cx="58" cy="38" r="2" fill="black"/><path d="M30 45H10 M70 45H90" stroke="black"/>')
]};
const catAdv: Lesson = { id: 'c-a', steps: [
  createStep('c1', 'Draw specialized head', '<path d="M30 30Q50 15 70 30V45Q50 60 30 45Z" stroke="black" fill="none"/>'),
  createStep('c2', 'Add inner ears', '<path d="M35 25L30 10L45 20 M65 25L70 10L55 20"/><path d="M32 20L35 25 M68 20L65 25" stroke="black" opacity="0.3"/>'),
  createStep('c3', 'Draw sitting body frame', '<path d="M35 50Q20 95 50 95Q80 95 65 50" stroke="black" fill="none"/>'),
  createStep('c4', 'Add paws and toes', '<path d="M42 95V85 M58 95V85" stroke="black"/><circle cx="42" cy="95" r="2"/><circle cx="58" cy="95" r="2"/>'),
  createStep('c5', 'Draw bushy curved tail', '<path d="M65 80Q95 80 85 40Q80 30 75 40" stroke="black" fill="none"/>'),
  createStep('c6', 'Draw detailed face', '<circle cx="40" cy="35" r="4"/><circle cx="60" cy="35" r="4"/><path d="M45 50Q50 55 55 50" fill="none" stroke="black"/>'),
  createStep('c7', 'Add fur texture lines', '<path d="M25 60L20 65 M75 60L80 65" stroke="black" opacity="0.3"/>')
]};

// --- ROBOT ---
const robotBeg: Lesson = { id: 'r-b', steps: [
  createStep('r1', 'Draw a square head', '<rect x="35" y="20" width="30" height="30" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('r2', 'Draw a rectangular body', '<rect x="30" y="50" width="40" height="40" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('r3', 'Add stick arms and legs', '<line x1="30" y1="60" x2="10" y2="80" stroke-black stroke-width="3"/><line x1="70" y1="60" x2="90" y2="80" stroke-black stroke-width="3"/>')
]};
const robotInt: Lesson = { id: 'r-i', steps: [
  createStep('r1', 'Draw blocky head', '<rect x="30" y="20" width="40" height="30" stroke="black" fill="none"/>'),
  createStep('r2', 'Add larger body', '<rect x="25" y="50" width="50" height="40" stroke="black" fill="none"/>'),
  createStep('r3', 'Add flexible arms', '<path d="M25 60Q10 60 10 80 M75 60Q90 60 90 80" stroke="black" fill="none"/>'),
  createStep('r4', 'Draw square eyes', '<rect x="38" y="28" width="6" height="6"/><rect x="56" y="28" width="6" height="6"/>'),
  createStep('r5', 'Add top antenna', '<line x1="50" y1="20" x2="50" y2="5" stroke="black"/><circle cx="50" cy="5" r="2"/>')
]};
const robotAdv: Lesson = { id: 'r-a', steps: [
  createStep('r1', 'Draw complex head frame', '<path d="M30 20H70V50H30Z M40 20V15H60V20" stroke="black" fill="none"/>'),
  createStep('r2', 'Dual-part body', '<rect x="25" y="50" width="50" height="30" stroke="black"/><rect x="30" y="80" width="40" height="15" stroke="black"/>'),
  createStep('r3', 'Add jointed arms', '<path d="M25 55H10V85H20 M75 55H90V85H80" stroke="black" fill="none"/>'),
  createStep('r4', 'Draw chest controls', '<rect x="35" y="60" width="8" height="8"/><circle cx="55" cy="64" r="3"/><circle cx="65" cy="64" r="3"/>'),
  createStep('r5', 'Add digital glow eyes', '<rect x="35" y="30" width="10" height="4"/><rect x="55" y="30" width="10" height="4"/>'),
  createStep('r6', 'Draw sturdy feet', '<rect x="35" y="95" width="10" height="5"/><rect x="55" y="95" width="10" height="5"/>'),
  createStep('r7', 'Add glowing wires', '<path d="M30 35H70 M30 40H70" stroke="black" opacity="0.2"/>')
]};

// --- SPACESHIP ---
const spaceBeg: Lesson = { id: 's-b', steps: [
  createStep('s1', 'Draw a long oval', '<ellipse cx="50" cy="50" rx="15" ry="40" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('s2', 'Add triangle fins', '<path d="M35 70L20 90L35 90 M65 70L80 90L65 90" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('s3', 'Add fire at the bottom', '<path d="M40 90Q50 110 60 90" stroke="black" stroke-width="3" fill="none"/>')
]};
const spaceInt: Lesson = { id: 's-i', steps: [
  createStep('s1', 'Draw sleek rocket body', '<path d="M35 80Q50 0 65 80Z" stroke="black" fill="none"/>'),
  createStep('s2', 'Add curved fins', '<path d="M35 60Q20 70 20 90H35 M65 60Q80 70 80 90H65" stroke="black" fill="none"/>'),
  createStep('s3', 'Add round windows', '<circle cx="50" cy="40" r="5"/><circle cx="50" cy="55" r="5"/>'),
  createStep('s4', 'Draw engine nozzle', '<rect x="42" y="80" width="16" height="5" stroke="black"/>'),
  createStep('s5', 'Add smoke trail', '<path d="M40 95Q45 105 40 110 M60 95Q55 105 60 110" stroke="black" opacity="0.3" fill="none"/>')
]};
const spaceAdv: Lesson = { id: 's-a', steps: [
  createStep('s1', 'Draw sleek fuselage', '<path d="M30 80Q50 -10 70 80Z" stroke="black" fill="none"/>'),
  createStep('s2', 'Add aero-wings', '<path d="M30 50L10 80V95H30 M70 50L90 80V95H70" stroke="black" fill="none"/>'),
  createStep('s3', 'Draw cockpit glass', '<path d="M38 30Q50 20 62 30V45Q50 55 38 45Z" stroke="black" fill="none"/>'),
  createStep('s4', 'Add fuel lines', '<path d="M35 60H65 M35 70H65" stroke="black" opacity="0.3"/><circle cx="40" cy="65" r="1" opacity="0.3"/>'),
  createStep('s5', 'Powerful thrusters', '<rect x="35" y="80" width="10" height="10"/><rect x="55" y="80" width="10" height="10"/>'),
  createStep('s6', 'Multi-stage engine fire', '<path d="M35 90Q50 120 65 90 M40 90Q50 110 60 90" stroke="black" fill="none"/>'),
  createStep('s7', 'Surrounding stars', '<circle cx="10" cy="20" r="1"/><circle cx="90" cy="30" r="1"/><circle cx="15" cy="60" r="1"/>')
]};

// --- CAR ---
const carBeg: Lesson = { id: 'car-b', steps: [
  createStep('c1', 'Draw rectangle body', '<rect x="20" y="50" width="60" height="25" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('c2', 'Add cabin on top', '<path d="M35 50L45 35H65L75 50" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('c3', 'Draw 2 round wheels', '<circle cx="35" cy="75" r="8" stroke="black" stroke-width="3"/><circle cx="65" cy="75" r="8" stroke="black" stroke-width="3"/>')
]};
const carInt: Lesson = { id: 'car-i', steps: [
  createStep('c1', 'Draw car base base', '<path d="M15 70H85V55Q85 50 80 50H20Q15 50 15 55Z" stroke="black" fill="none"/>'),
  createStep('c2', 'Add curved roof', '<path d="M30 50Q50 30 70 50" stroke="black" fill="none"/>'),
  createStep('c3', 'Draw 2 detailed wheels', '<circle cx="30" cy="70" r="8" stroke="black"/><circle cx="30" cy="70" r="3"/><circle cx="70" cy="70" r="8" stroke="black"/><circle cx="70" cy="70" r="3"/>'),
  createStep('c4', 'Add side window', '<path d="M35 48V38Q50 30 65 38V48Z" stroke="black" fill="none"/>'),
  createStep('c5', 'Add headlights', '<circle cx="82" cy="58" r="3" stroke="black"/>')
]};
const carAdv: Lesson = { id: 'car-a', steps: [
  createStep('c1', 'Sports car frame', '<path d="M10 75H90V60L80 50H25L10 65Z" stroke="black" fill="none"/>'),
  createStep('c2', 'Angled sleek roof', '<path d="M30 50L45 35H70L80 50" stroke="black" fill="none"/>'),
  createStep('c3', 'Alloy wheels', '<circle cx="30" cy="75" r="10"/><path d="M30 65V85 M20 75H40" opacity="0.3"/><circle cx="75" cy="75" r="10"/><path d="M75 65V85 M65 75H85" opacity="0.3"/>'),
  createStep('c4', 'Door handle and lines', '<line x1="10" y1="65" x2="90" y2="65" stroke="black"/><rect x="45" y="60" width="8" height="3" stroke="black"/>'),
  createStep('c5', 'Front/rear lights', '<rect x="85" y="60" width="5" height="10"/><rect x="10" y="60" width="5" height="8"/>'),
  createStep('c6', 'Side mirror', '<path d="M30 45Q25 40 30 35" stroke="black" fill="none"/>'),
  createStep('c7', 'Road and speed lines', '<line x1="5" y1="85" x2="95" y2="85" stroke="black"/><line x1="10" y1="90" x2="30" y2="90" opacity="0.3"/>')
]};

// --- DOG ---
const dogBeg: Lesson = { id: 'd-b', steps: [
  createStep('d1', 'Draw a round head', '<circle cx="50" cy="40" r="25" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('d2', 'Add floppy ears', '<path d="M30 30Q20 50 30 60 M70 30Q80 50 70 60" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('d3', 'Add eyes and nose', '<circle cx="42" cy="35" r="2" fill="black"/><circle cx="58" cy="35" r="2" fill="black"/><circle cx="50" cy="45" r="3" fill="black"/>')
]};
const dogInt: Lesson = { id: 'd-i', steps: [
  createStep('d1', 'Draw head oval', '<ellipse cx="50" cy="35" rx="25" ry="20" stroke="black" fill="none"/>'),
  createStep('d2', 'Add big floppy ears', '<path d="M25 30Q10 30 15 60 M75 30Q90 30 85 60" stroke="black" fill="none"/>'),
  createStep('d3', 'Draw oval body', '<ellipse cx="50" cy="70" rx="20" ry="25" stroke="black" fill="none"/>'),
  createStep('d4', 'Add wagging tail', '<path d="M65 80Q85 75 80 60" stroke="black" fill="none"/>'),
  createStep('d5', 'Draw snout and nose', '<ellipse cx="50" cy="42" rx="10" ry="8" stroke="black" fill="none"/><circle cx="50" cy="40" r="2" fill="black"/>')
]};
const dogAdv: Lesson = { id: 'd-a', steps: [
  createStep('d1', 'Structured head frame', '<path d="M30 30Q50 15 70 30V45Q50 60 30 45Z" stroke="black" fill="none"/>'),
  createStep('d2', 'Long drooping ears', '<path d="M30 35Q15 35 20 75 M70 35Q85 35 80 75" stroke="black" fill="none"/>'),
  createStep('d3', 'Sitting body frame', '<path d="M35 55Q25 100 50 100Q75 100 65 55" stroke="black" fill="none"/>'),
  createStep('d4', 'Front paws and toes', '<path d="M42 100V85 M58 100V85" stroke="black"/><circle cx="42" cy="100" r="2"/><circle cx="58" cy="100" r="2"/>'),
  createStep('d5', 'Bushy tail', '<path d="M68 85Q95 85 85 50Q75 45 70 55" stroke="black" fill="none"/>'),
  createStep('d6', 'Detailed face eyes', '<circle cx="42" cy="35" r="3"/><circle cx="58" cy="35" r="3"/><path d="M45 45Q50 55 55 45" fill="none" stroke="black"/>'),
  createStep('d7', 'Add dog collar', '<path d="M38 58Q50 62 62 58" stroke="black" stroke-width="2" fill="none"/><circle cx="50" cy="62" r="2"/>')
]};

// --- TREE ---
const treeBeg: Lesson = { id: 't-b', steps: [
  createStep('t1', 'Draw thick trunk', '<path d="M45 100V60 M55 100V60" stroke="black" stroke-width="4" fill="none"/>'),
  createStep('t2', 'Big cloud for leaves', '<path d="M30 65Q10 40 30 20Q50 0 70 20Q90 40 70 65Z" stroke="black" stroke-width="3" fill="none"/><path d="M45 100V60 M55 100V60" stroke="black" stroke-width="4" fill="none"/>'),
  createStep('t3', 'Add small apples', '<path d="M30 65Q10 40 30 20Q50 0 70 20Q90 40 70 65Z" stroke="black" stroke-width="3" fill="none"/><path d="M45 100V60 M55 100V60" stroke="black" stroke-width="4" fill="none"/><circle cx="40" cy="30" r="2" fill="black"/><circle cx="60" cy="40" r="2" fill="black"/><circle cx="50" cy="50" r="2" fill="black"/>')
]};
const treeInt: Lesson = { id: 't-i', steps: [
  createStep('t1', 'Tapering trunk', '<path d="M40 100Q50 90 45 60 M60 100Q50 90 55 60" stroke="black" fill="none"/>'),
  createStep('t2', 'Two main branches', '<path d="M45 65L30 50 M55 65L70 50" stroke="black" fill="none"/>'),
  createStep('t3', 'Cloud-like leaf top', '<path d="M30 50Q10 30 30 10Q50 -10 70 10Q90 30 70 50Z" stroke="black" fill="none"/>'),
  createStep('t4', 'Inner leaf clusters', '<path d="M40 40Q50 30 60 40" stroke="black" fill="none" opacity="0.3"/>'),
  createStep('t5', 'Grass at base', '<path d="M35 100L38 95L41 100M59 100L62 95L65 100" stroke="black" fill="none"/>')
]};
const treeAdv: Lesson = { id: 't-a', steps: [
  createStep('t1', 'Gnarled trunk', '<path d="M40 100Q45 80 40 50 M60 100Q55 80 60 50" stroke="black" fill="none"/>'),
  createStep('t2', 'Add split branches', '<path d="M40 50L25 35 M25 35L15 30 M60 50L75 35 M75 35L85 30" stroke="black" fill="none"/>'),
  createStep('t3', 'Leaf bunches 1', '<path d="M20 35Q5 20 25 5Q45 -10 50 20" stroke="black" fill="none"/>'),
  createStep('t4', 'Leaf canopy full', '<path d="M20 35Q5 20 25 5Q45 -10 50 20"/><path d="M50 20Q75 5 85 30Q95 55 70 50" stroke="black" fill="none"/>'),
  createStep('t5', 'Bark textures', '<line x1="48" y1="90" x2="48" y2="70" opacity="0.3"/><line x1="52" y1="85" x2="52" y2="75" opacity="0.3"/>'),
  createStep('t6', 'Hollow knot hole', '<circle cx="50" cy="80" r="3" stroke="black" fill="none"/>'),
  createStep('t7', 'Falling leaves', '<path d="M20 70Q25 75 20 80 M80 60Q85 65 80 70" stroke="black" fill="none"/>')
]};

// --- FISH ---
const fishBeg: Lesson = { id: 'f-b', steps: [
  createStep('f1', 'Draw oval body', '<ellipse cx="50" cy="50" rx="35" ry="20" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('f2', 'Add triangle tail', '<path d="M15 50L5 35V65Z" stroke="black" stroke-width="3" fill="none"/><ellipse cx="50" cy="50" rx="35" ry="20" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('f3', 'Eye and smile', '<ellipse cx="50" cy="50" rx="35" ry="20" stroke="black" stroke-width="3" fill="none"/><path d="M15 50L5 35V65Z" stroke="black" stroke-width="3" fill="none"/><circle cx="70" cy="45" r="2" fill="black"/><path d="M75 55Q80 60 75 65" stroke="black" fill="none"/>')
]};
const fishInt: Lesson = { id: 'f-i', steps: [
  createStep('f1', 'Almond-shaped body', '<path d="M20 50Q50 20 80 50Q50 80 20 50" stroke="black" fill="none"/>'),
  createStep('f2', 'Notched tail fin', '<path d="M20 50Q50 20 80 50Q50 80 20 50"/><path d="M20 50L5 35Q15 50 5 65Z" stroke="black" fill="none"/>'),
  createStep('f3', 'Add top/bottom fins', '<path d="M50 35Q55 25 65 35 M50 65Q55 75 65 65" stroke="black" fill="none"/>'),
  createStep('f4', 'Eye and gill line', '<circle cx="70" cy="45" r="3" fill="black"/><path d="M60 40Q65 50 60 60" stroke="black" fill="none"/>'),
  createStep('f5', 'Add air bubbles', '<circle cx="85" cy="40" r="2"/><circle cx="92" cy="30" r="3"/>')
]};
const fishAdv: Lesson = { id: 'f-a', steps: [
  createStep('f1', 'Sleek body frame', '<path d="M15 50Q45 15 85 50Q45 85 15 50" stroke="black" fill="none"/>'),
  createStep('f2', 'Elegant split tail', '<path d="M15 50L5 30Q15 40 10 50Q15 60 5 70Z" stroke="black" fill="none"/>'),
  createStep('f3', 'Dorsal fin detail', '<path d="M40 30Q55 10 70 30" stroke="black" fill="none"/><line x1="45" y1="20" x2="45" y2="28" opacity="0.3"/>'),
  createStep('f4', 'Add scales pattern', '<path d="M30 45Q35 40 40 45 M30 55Q35 50 40 55" opacity="0.3" fill="none" stroke="black"/>'),
  createStep('f5', 'Detailed eye highlight', '<circle cx="75" cy="45" r="4" stroke="black"/><circle cx="76" cy="44" r="1.5" fill="black"/>'),
  createStep('f6', 'Pectoral fin', '<path d="M45 55Q35 65 45 75" stroke="black" fill="none"/>'),
  createStep('f7', 'Bottom coral', '<path d="M10 100Q15 85 20 100 M30 100Q35 90 40 100" stroke="black" fill="none"/>')
]};

// --- BUTTERFLY ---
const bfBeg: Lesson = { id: 'bf-b', steps: [
  createStep('bf1', 'Thin oval body', '<ellipse cx="50" cy="50" rx="4" ry="30" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('bf2', 'Two big side wings', '<g stroke="black" stroke-width="3" fill="none"><ellipse cx="50" cy="50" rx="4" ry="30"/><circle cx="30" cy="45" r="18"/><circle cx="70" cy="45" r="18"/></g>'),
  createStep('bf3', 'Add antenna and spots', '<g stroke="black" stroke-width="3" fill="none"><ellipse cx="50" cy="50" rx="4" ry="30"/><circle cx="30" cy="45" r="18"/><circle cx="70" cy="45" r="18"/><path d="M48 20Q45 5 40 10 M52 20Q55 5 60 10"/><circle cx="25" cy="40" r="3" fill="black"/><circle cx="75" cy="40" r="3" fill="black"/></g>')
]};
const bfInt: Lesson = { id: 'bf-i', steps: [
  createStep('bf1', 'Segmented body', '<circle cx="50" cy="35" r="4"/><circle cx="50" cy="45" r="4"/><circle cx="50" cy="55" r="4"/><circle cx="50" cy="65" r="4"/>'),
  createStep('bf2', 'Add upper wings', '<path d="M50 35Q15 10 15 45Q35 50 50 45 M50 35Q85 10 85 45Q65 50 50 45" stroke="black" fill="none"/>'),
  createStep('bf3', 'Add lower wings', '<path d="M50 55Q25 80 30 65 M50 55Q75 80 70 65" stroke="black" fill="none"/>'),
  createStep('bf4', 'Add wing patterns', '<circle cx="30" cy="35" r="3"/><circle cx="70" cy="35" r="3"/>'),
  createStep('bf5', 'Draw long antennae', '<path d="M48 32Q40 15 30 20 M52 32Q60 15 70 20" stroke="black" fill="none"/>')
]};
const bfAdv: Lesson = { id: 'bf-a', steps: [
  createStep('bf1', 'Detailed body/head', '<ellipse cx="50" cy="50" rx="3" ry="20" stroke="black"/><circle cx="50" cy="28" r="3"/>'),
  createStep('bf2', 'Elegant upper wings', '<path d="M50 30Q10 0 10 40Q30 55 50 50"/><path d="M50 30Q90 0 90 40Q70 55 50 50" stroke="black" fill="none"/>'),
  createStep('bf3', 'Shapely lower wings', '<path d="M50 50Q20 90 40 70 M50 50Q80 90 60 70" stroke="black" fill="none"/>'),
  createStep('bf4', 'Intricate patterns', '<path d="M25 35L35 40 M75 35L65 40" opacity="0.3"/><circle cx="20" cy="25" r="4"/><circle cx="80" cy="25" r="4"/>'),
  createStep('bf5', 'Add wing borders', '<path d="M15 35Q20 40 15 45" opacity="0.3" stroke="black" fill="none"/>'),
  createStep('bf6', 'Curled antennae', '<path d="M48 26Q35 10 25 15Q30 20 35 15 M52 26Q65 10 75 15" stroke="black" fill="none"/>'),
  createStep('bf7', 'Tiny eye dots', '<circle cx="49" cy="27" r="0.5"/><circle cx="51" cy="27" r="0.5"/>')
]};

// --- SNAIL ---
const snailBeg: Lesson = { id: 'sn-b', steps: [
  createStep('s1', 'Draw spiral shell', '<path d="M50 50Q70 30 50 10Q20 30 50 70" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('s2', 'Add long flat body', '<path d="M50 50Q70 30 50 10Q20 30 50 70" stroke="black" stroke-width="3" fill="none"/><path d="M10 80H85Q95 80 95 70" stroke="black" stroke-width="3" fill="none"/>'),
  createStep('s3', 'Add eye stalks', '<path d="M50 50Q70 30 50 10Q20 30 50 70" stroke="black" stroke-width="3" fill="none"/><path d="M10 80H85Q95 80 95 70" stroke="black" stroke-width="3" fill="none"/><line x1="88" y1="70" x2="88" y2="55"/><line x1="93" y1="70" x2="93" y2="55"/>')
]};
const snailInt: Lesson = { id: 'sn-i', steps: [
  createStep('s1', 'Large shell circle', '<circle cx="40" cy="60" r="30" stroke="black" fill="none"/>'),
  createStep('s2', 'Spiral inside shell', '<circle cx="40" cy="60" r="30"/><path d="M40 60Q55 45 40 30Q25 45 40 60" stroke="black" fill="none"/>'),
  createStep('s3', 'Draw fleshy body', '<path d="M10 90Q50 80 85 90Q95 90 95 80L80 60" stroke="black" fill="none"/>'),
  createStep('s4', 'Add two eye stalks', '<line x1="88" y1="75" x2="88" y2="55"/><line x1="93" y1="75" x2="93" y2="55"/>'),
  createStep('s5', 'Draw tiny eyes on top', '<circle cx="88" cy="55" r="2"/><circle cx="93" cy="55" r="2"/>')
]};
const snailAdv: Lesson = { id: 'sn-a', steps: [
  createStep('s1', 'Detailed shell circle', '<circle cx="40" cy="60" r="25" stroke="black" fill="none"/><circle cx="40" cy="60" r="20" stroke="black" opacity="0.3"/>'),
  createStep('s2', 'Complex inner spiral', '<circle cx="40" cy="60" r="25"/><path d="M40 60Q55 45 40 30Q25 45 40 60" stroke="black" fill="none"/>'),
  createStep('s3', 'Textured body shape', '<path d="M5 90Q50 80 80 90Q95 90 95 70" stroke="black" fill="none"/><line x1="15" y1="88" x2="25" y2="86" stroke="black" opacity="0.2"/>'),
  createStep('s4', 'Draw tapering stalks', '<path d="M85 75Q90 50 85 45 M95 75Q90 50 95 45" stroke="black" fill="none"/>'),
  createStep('s5', 'Add eyes and mouth', '<circle cx="85" cy="45" r="2"/><circle cx="95" cy="45" r="2"/><path d="M88 80Q90 82 92 80" stroke="black" fill="none"/>'),
  createStep('s6', 'Add shell markings', '<path d="M30 45L25 50 M50 45L55 50" stroke="black" opacity="0.2"/>'),
  createStep('s7', 'Draw a slime trail', '<path d="M0 95H80" stroke="black" opacity="0.1" stroke-width="4"/>')
]};

const createSubject = (id: string, icon: string, b: Lesson, i: Lesson, a: Lesson): DrawingSubject => ({
  id, titleKey: id, icon, versions: { beginner: b, intermediate: i, advanced: a }
});

export const subjects: DrawingSubject[] = [
  createSubject('sun', '☀️', sunBeg, sunInt, sunAdv),
  createSubject('flower', '🌸', flowerBeg, flowerInt, flowerAdv),
  createSubject('house', '🏠', houseBeg, houseInt, houseAdv),
  createSubject('cat', '🐱', catBeg, catInt, catAdv),
  createSubject('robot', '🤖', robotBeg, robotInt, robotAdv),
  createSubject('spaceship', '🚀', spaceBeg, spaceInt, spaceAdv),
  createSubject('car', '🚗', carBeg, carInt, carAdv),
  createSubject('dog', '🐶', dogBeg, dogInt, dogAdv),
  createSubject('tree', '🌳', treeBeg, treeInt, treeAdv),
  createSubject('fish', '🐟', fishBeg, fishInt, fishAdv),
  createSubject('butterfly', '🦋', bfBeg, bfInt, bfAdv),
  createSubject('snail', '🐌', snailBeg, snailInt, snailAdv)
];
