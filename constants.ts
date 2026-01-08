
import { DrawingSubject, Step, Lesson } from './types';

/**
 * Generates an SVG data URI with specific coloring for learning.
 * @param prevParts - SVG elements from previous steps (light gray)
 * @param currentPart - SVG element for the current step (bold blue)
 */
const svgToUri = (prevParts: string, currentPart: string) => {
  const content = `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        ${prevParts}
      </g>
      <g stroke="#3b82f6" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
        ${currentPart}
      </g>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(content.trim())}`;
};

const createSteps = (idPrefix: string, parts: string[], instructions: string[]): Step[] => {
  return parts.map((part, index) => {
    const prevParts = parts.slice(0, index).join(' ');
    return {
      id: `${idPrefix}-s${index}`,
      instructionKey: instructions[index] || `Step ${index + 1}`,
      guideImage: svgToUri(prevParts, part)
    };
  });
};

// --- SUN ---
const sunB = { id: 'sun-b', steps: createSteps('sun-b', 
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M50 10V20 M50 80V90 M10 50H20 M80 50H90"/>', '<path d="M42 45Q50 48 58 45 M42 60Q50 68 58 60"/>'],
  ['Draw a big circle', 'Add 4 long rays', 'Draw a happy face']) };
const sunI = { id: 'sun-i', steps: createSteps('sun-i',
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M50 10V20 M50 80V90 M10 50H20 M80 50H90"/>', '<path d="M22 22L28 28 M72 72L78 78 M22 78L28 72 M72 28L78 22"/>', '<circle cx="40" cy="45" r="3" fill="currentColor"/><circle cx="60" cy="45" r="3" fill="currentColor"/>', '<path d="M35 60Q50 75 65 60"/>'],
  ['Draw a sun circle', 'Add 4 main rays', 'Add 4 diagonal rays', 'Draw big eyes', 'Add a wide smile']) };
const sunA = { id: 'sun-a', steps: createSteps('sun-a',
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M50 5Q55 15 50 25 M50 75Q55 85 50 95 M5 50Q15 45 25 50 M75 50Q85 45 95 50"/>', '<path d="M20 20Q30 25 35 35 M65 65Q70 75 80 80 M20 80Q25 70 35 65 M65 35Q75 30 80 20"/>', '<circle cx="43" cy="45" r="5"/><circle cx="57" cy="45" r="5"/>', '<circle cx="44" cy="44" r="2" fill="currentColor"/><circle cx="58" cy="44" r="2" fill="currentColor"/>', '<path d="M38 62Q50 72 62 62"/><path d="M48 52Q50 55 52 52"/>', '<circle cx="32" cy="55" r="3" fill="#ffcccc" stroke="none"/><circle cx="68" cy="55" r="3" fill="#ffcccc" stroke="none"/>'],
  ['Draw the sun body', 'Add wavy main rays', 'Fill in smaller rays', 'Draw outer eyes', 'Add pupils for sparkle', 'Draw nose and mouth', 'Add rosy cheeks']) };

// --- FLOWER ---
const flowerB = { id: 'fl-b', steps: createSteps('fl-b',
  ['<circle cx="50" cy="40" r="10"/>', '<circle cx="50" cy="22" r="12"/><circle cx="50" cy="58" r="12"/><circle cx="32" cy="40" r="12"/><circle cx="68" cy="40" r="12"/>', '<line x1="50" y1="70" x2="50" y2="95"/><path d="M50 85Q65 75 70 85"/>'],
  ['Draw center circle', 'Add 4 big petals', 'Draw stem and leaf']) };
const flowerI = { id: 'fl-i', steps: createSteps('fl-i',
  ['<circle cx="50" cy="35" r="8"/>', '<ellipse cx="50" cy="20" rx="8" ry="12"/><ellipse cx="35" cy="30" rx="12" ry="8"/><ellipse cx="65" cy="30" rx="12" ry="8"/>', '<ellipse cx="40" cy="50" rx="10" ry="8"/><ellipse cx="60" cy="50" rx="10" ry="8"/>', '<line x1="50" y1="43" x2="50" y2="95"/>', '<path d="M50 70Q35 60 30 75Z"/><path d="M50 80Q65 70 70 85Z"/>'],
  ['Draw small center', 'Add top petals', 'Add bottom petals', 'Draw long stem', 'Add two leaves']) };
const flowerA = { id: 'fl-a', steps: createSteps('fl-a',
  ['<circle cx="50" cy="30" r="6"/><path d="M47 27L48 28 M52 32L53 33"/>', '<path d="M50 24Q40 10 30 24 T50 36 T70 24 T50 24"/>', '<path d="M30 24Q10 24 15 45 Q30 55 50 36"/>', '<path d="M50 36Q55 60 50 95"/>', '<path d="M52 65Q75 55 85 75Q65 85 52 70"/><line x1="55" y1="70" x2="80" y2="72"/>', '<path d="M52 80Q40 85 45 92Z"/>', '<path d="M30 95H70 M35 95L32 90 M65 95L68 90"/>'],
  ['Textured center', 'Inner petals', 'Broad outer petals', 'Thick stem', 'Veined large leaf', 'Small budding leaf', 'Garden soil']) };

// --- HOUSE ---
const houseB = { id: 'ho-b', steps: createSteps('ho-b',
  ['<rect x="30" y="50" width="40" height="40"/>', '<path d="M30 50L50 20L70 50Z"/>', '<rect x="45" y="70" width="10" height="20"/>'],
  ['Draw a square base', 'Add triangle roof', 'Add a door']) };
const houseI = { id: 'ho-i', steps: createSteps('ho-i',
  ['<rect x="25" y="50" width="50" height="40"/>', '<path d="M20 50L50 15L80 50Z"/>', '<rect x="42" y="70" width="16" height="20"/>', '<rect x="30" y="58" width="10" height="10"/><rect x="60" y="58" width="10" height="10"/>', '<path d="M60 25V15H70V37"/>'],
  ['Draw rectangle base', 'Add peaked roof', 'Draw central door', 'Add two windows', 'Draw a chimney']) };
const houseA = { id: 'ho-a', steps: createSteps('ho-a',
  ['<path d="M20 50H60V90H20Z M60 50L80 40V80L60 90"/>', '<path d="M15 50L40 15L65 50 M40 15L70 10L85 40"/>', '<rect x="35" y="70" width="12" height="20"/><circle cx="45" cy="80" r="1"/>', '<rect x="25" y="55" width="8" height="12"/><line x1="29" y1="55" x2="29" y2="67"/>', '<rect x="65" y="15" width="10" height="15"/>', '<path d="M10 90H20V80H10Z M20 90H30V80H20Z"/>', '<path d="M25 45Q30 42 35 45 M45 45Q50 42 55 45" opacity="0.4"/>'],
  ['Draw 3D walls', 'Add 3D roof', 'Paneled door', 'Add window shutters', 'Brick chimney', 'Garden fence', 'Roof tile details']) };

// --- CAT ---
const catB = { id: 'cat-b', steps: createSteps('cat-b',
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M30 30L25 15L45 28 M70 30L75 15L55 28"/>', '<circle cx="42" cy="45" r="2" fill="currentColor"/><circle cx="58" cy="45" r="2" fill="currentColor"/><path d="M45 60Q50 65 55 60"/>'],
  ['Draw a round head', 'Add triangle ears', 'Add the face']) };
const catI = { id: 'cat-i', steps: createSteps('cat-i',
  ['<circle cx="50" cy="40" r="20"/>', '<path d="M35 25L30 10L45 22 M65 25L70 10L55 22"/>', '<ellipse cx="50" cy="70" rx="15" ry="25"/>', '<path d="M65 80Q85 80 80 50"/>', '<circle cx="43" cy="38" r="2" fill="currentColor"/><circle cx="57" cy="38" r="2" fill="currentColor"/><path d="M30 45H15 M70 45H85"/>'],
  ['Draw the head', 'Add pointy ears', 'Draw the body', 'Add a long tail', 'Add face and whiskers']) };
const catA = { id: 'cat-a', steps: createSteps('cat-a',
  ['<path d="M30 30Q50 15 70 30V45Q50 60 30 45Z"/>', '<path d="M35 25L30 5L45 20 M65 25L70 5L55 20"/>', '<path d="M35 50Q20 95 50 95Q80 95 65 50"/>', '<path d="M42 95V85 M58 95V85"/>', '<path d="M65 80Q95 80 85 40Q80 30 75 40"/>', '<circle cx="42" cy="35" r="3"/><circle cx="58" cy="35" r="3"/><path d="M30 42H10 M70 42H90"/>', '<path d="M45 50Q50 55 55 50"/>'],
  ['Detailed head frame', 'Sharp inner ears', 'Sitting body frame', 'Add paws', 'Bushy curved tail', 'Eyes and whiskers', 'Final nose and mouth']) };

// --- ROBOT ---
const robotB = { id: 'robot-b', steps: createSteps('robot-b',
  ['<rect x="35" y="20" width="30" height="30"/>', '<rect x="30" y="50" width="40" height="40"/>', '<line x1="30" y1="60" x2="15" y2="75"/><line x1="70" y1="60" x2="85" y2="75"/>'],
  ['Draw a square head', 'Draw a blocky body', 'Add stick arms']) };
const robotI = { id: 'robot-i', steps: createSteps('robot-i',
  ['<rect x="30" y="15" width="40" height="30"/>', '<rect x="25" y="45" width="50" height="45"/>', '<path d="M25 55Q10 55 10 75 M75 55Q90 55 90 75"/>', '<rect x="38" y="25" width="6" height="6"/><rect x="56" y="25" width="6" height="6"/>', '<line x1="50" y1="15" x2="50" y2="5"/><circle cx="50" cy="5" r="2"/>'],
  ['Draw a robot head', 'Add a large body', 'Draw flexy arms', 'Add square eyes', 'Add top antenna']) };
const robotA = { id: 'robot-a', steps: createSteps('robot-a',
  ['<path d="M30 20H70V50H30Z"/>', '<rect x="25" y="50" width="50" height="35"/><rect x="30" y="85" width="40" height="10"/>', '<path d="M25 55H10V80 M75 55H90V80"/>', '<rect x="35" y="60" width="10" height="10"/><circle cx="55" cy="65" r="3"/><circle cx="65" cy="65" r="3"/>', '<rect x="35" y="30" width="10" height="4"/><rect x="55" y="30" width="10" height="4"/>', '<line x1="45" y1="20" x2="45" y2="10"/><line x1="55" y1="20" x2="55" y2="10"/>', '<path d="M30 40H70" opacity="0.3"/>'],
  ['Chassis head', 'Tiered body', 'Jointed arms', 'Chest controls', 'Digital eyes', 'Dual antennas', 'Panel detail']) };

// --- SPACESHIP ---
const spaceB = { id: 'space-b', steps: createSteps('space-b',
  ['<ellipse cx="50" cy="50" rx="15" ry="40"/>', '<path d="M35 70L20 90L35 90 M65 70L80 90L65 90"/>', '<path d="M40 90Q50 110 60 90"/>'],
  ['Draw a long oval', 'Add triangle fins', 'Add blast-off fire']) };
const spaceI = { id: 'space-i', steps: createSteps('space-i',
  ['<path d="M35 80Q50 0 65 80Z"/>', '<path d="M35 60Q20 70 20 90H35 M65 60Q80 70 80 90H65"/>', '<circle cx="50" cy="40" r="5"/><circle cx="50" cy="55" r="5"/>', '<rect x="42" y="80" width="16" height="5"/>', '<path d="M40 95Q45 105 40 110 M60 95Q55 105 60 110" opacity="0.5"/>'],
  ['Sleek rocket body', 'Curved wings', 'Porthole windows', 'Engine nozzle', 'Smoke trail']) };
const spaceA = { id: 'space-a', steps: createSteps('space-a',
  ['<path d="M30 80Q50 -10 70 80Z"/>', '<path d="M30 50L10 80V95H30 M70 50L90 80V95H70"/>', '<path d="M38 30Q50 20 62 30V45Q50 55 38 45Z"/>', '<path d="M35 65H65 M35 75H65" opacity="0.3"/>', '<rect x="35" y="80" width="12" height="10"/><rect x="53" y="80" width="12" height="10"/>', '<path d="M35 90Q50 125 65 90 M40 90Q50 110 60 90"/>', '<circle cx="15" cy="20" r="1"/><circle cx="85" cy="35" r="1"/>'],
  ['Main fuselage', 'Stabilizer wings', 'Cockpit window', 'Panel sections', 'Dual thrusters', 'Intense fire blast', 'Background stars']) };

// --- CAR ---
const carB = { id: 'car-b', steps: createSteps('car-b',
  ['<rect x="20" y="50" width="60" height="25"/>', '<path d="M35 50L45 35H65L75 50"/>', '<circle cx="35" cy="75" r="8"/><circle cx="65" cy="75" r="8"/>'],
  ['Draw rectangle body', 'Add cabin top', 'Add two wheels']) };
const carI = { id: 'car-i', steps: createSteps('car-i',
  ['<path d="M15 70H85V55Q85 50 80 50H20Q15 50 15 55Z"/>', '<path d="M30 50Q50 30 70 50"/>', '<circle cx="30" cy="70" r="8"/><circle cx="70" cy="70" r="8"/>', '<path d="M35 48V38Q50 30 65 38V48Z"/>', '<circle cx="82" cy="58" r="3"/>'],
  ['Car base', 'Curved roof', 'Add wheels', 'Side window', 'Front headlight']) };
const carA = { id: 'car-a', steps: createSteps('car-a',
  ['<path d="M10 75H90V60L80 50H25L10 65Z"/>', '<path d="M30 50L45 35H70L80 50"/>', '<circle cx="30" cy="75" r="10"/><circle cx="75" cy="75" r="10"/>', '<line x1="10" y1="65" x2="90" y2="65"/><rect x="45" y="60" width="8" height="3"/>', '<rect x="85" y="60" width="5" height="10"/><rect x="10" y="60" width="5" height="8"/>', '<path d="M30 45Q25 40 30 35"/>', '<line x1="5" y1="85" x2="95" y2="85" opacity="0.3"/>'],
  ['Sports frame', 'Sleek roofline', 'Alloy wheels', 'Door detailing', 'Head/Tail lights', 'Side mirror', 'Road surface']) };

// --- DOG ---
const dogB = { id: 'dog-b', steps: createSteps('dog-b',
  ['<circle cx="50" cy="40" r="22"/>', '<path d="M32 30Q15 30 20 60 M68 30Q85 30 80 60"/>', '<circle cx="43" cy="35" r="2" fill="currentColor"/><circle cx="57" cy="35" r="2" fill="currentColor"/><circle cx="50" cy="45" r="3" fill="currentColor"/>'],
  ['Draw a round head', 'Add floppy ears', 'Add face details']) };
const dogI = { id: 'dog-i', steps: createSteps('dog-i',
  ['<ellipse cx="50" cy="35" rx="22" ry="18"/>', '<path d="M30 30Q15 25 20 65 M70 30Q85 25 80 65"/>', '<ellipse cx="50" cy="70" rx="18" ry="22"/>', '<path d="M65 80Q85 75 80 60"/>', '<ellipse cx="50" cy="42" rx="8" ry="6"/><circle cx="50" cy="40" r="2" fill="currentColor"/>'],
  ['Head oval', 'Long floppy ears', 'Sitting body', 'Wagging tail', 'Snout and nose']) };
const dogA = { id: 'dog-a', steps: createSteps('dog-a',
  ['<path d="M30 30Q50 15 70 30V45Q50 60 30 45Z"/>', '<path d="M30 35Q15 35 20 75 M70 35Q85 35 80 75"/>', '<path d="M35 55Q25 100 50 100Q75 100 65 55"/>', '<path d="M42 100V85 M58 100V85"/>', '<path d="M68 85Q95 85 85 50Q75 45 70 55"/>', '<circle cx="42" cy="35" r="3"/><circle cx="58" cy="35" r="3"/>', '<path d="M45 45Q50 55 55 45"/><path d="M38 58Q50 62 62 58"/>'],
  ['Strong head frame', 'Drooping heavy ears', 'Full body posture', 'Paw detail', 'Bushy tail', 'Alert eyes', 'Collar and mouth']) };

// --- TREE ---
const treeB = { id: 'tree-b', steps: createSteps('tree-b',
  ['<path d="M45 100V60 M55 100V60"/>', '<path d="M30 65Q10 40 30 20Q50 0 70 20Q90 40 70 65Z"/>', '<circle cx="40" cy="30" r="2" fill="currentColor"/><circle cx="60" cy="40" r="2" fill="currentColor"/>'],
  ['Draw trunk lines', 'Add leaf cloud', 'Add some fruit']) };
const treeI = { id: 'tree-i', steps: createSteps('tree-i',
  ['<path d="M40 100Q50 90 45 60 M60 100Q50 90 55 60"/>', '<path d="M45 65L30 50 M55 65L70 50"/>', '<path d="M30 50Q10 30 30 10Q50 -10 70 10Q90 30 70 50Z"/>', '<path d="M40 40Q50 30 60 40" opacity="0.3"/>', '<path d="M35 100L40 95L45 100"/>'],
  ['Tapered trunk', 'Main branches', 'Canopy shape', 'Leaf texture', 'Grass at base']) };
const treeA = { id: 'tree-a', steps: createSteps('tree-a',
  ['<path d="M40 100Q45 80 40 50 M60 100Q55 80 60 50"/>', '<path d="M40 50L25 35 M60 50L75 35"/>', '<path d="M20 35Q5 20 25 5Q45 -10 50 20"/>', '<path d="M50 20Q75 5 85 30Q95 55 70 50"/>', '<line x1="48" y1="90" x2="48" y2="70" opacity="0.3"/><circle cx="50" cy="80" r="2"/>', '<path d="M35 100H65"/><path d="M40 98L38 92 M60 98L62 92"/>', '<path d="M10 70Q15 75 10 80"/>'],
  ['Gnarled trunk', 'Detailed branches', 'Left canopy', 'Right canopy', 'Bark and knot hole', 'Roots and grass', 'Falling leaves']) };

// --- FISH ---
const fishB = { id: 'fish-b', steps: createSteps('fish-b',
  ['<ellipse cx="50" cy="50" rx="35" ry="20"/>', '<path d="M15 50L5 35V65Z"/>', '<circle cx="70" cy="45" r="2" fill="currentColor"/><path d="M75 55Q80 60 75 65"/>'],
  ['Oval fish body', 'Triangle tail', 'Add eye and smile']) };
const fishI = { id: 'fish-i', steps: createSteps('fish-i',
  ['<path d="M20 50Q50 20 80 50Q50 80 20 50"/>', '<path d="M20 50L5 35Q15 50 5 65Z"/>', '<path d="M50 35Q55 25 65 35 M50 65Q55 75 65 65"/>', '<circle cx="70" cy="45" r="3" fill="currentColor"/><path d="M60 40Q65 50 60 60"/>', '<circle cx="85" cy="40" r="2"/><circle cx="92" cy="30" r="3"/>'],
  ['Almond body', 'Notched tail', 'Fins', 'Eye and gill', 'Air bubbles']) };
const fishA = { id: 'fish-a', steps: createSteps('fish-a',
  ['<path d="M15 50Q45 15 85 50Q45 85 15 50"/>', '<path d="M15 50L5 30Q15 40 10 50Q15 60 5 70Z"/>', '<path d="M40 30Q55 10 70 30"/>', '<path d="M30 45Q35 40 40 45 M30 55Q35 50 40 55" opacity="0.3"/>', '<circle cx="75" cy="45" r="4"/><circle cx="76" cy="44" r="1.5" fill="currentColor"/>', '<path d="M45 55Q35 65 45 75"/>', '<path d="M10 100Q15 85 20 100"/>'],
  ['Sleek body', 'Fancy split tail', 'Dorsal fin', 'Scale pattern', 'Detailed eye', 'Side fin', 'Sea coral base']) };

// --- BUTTERFLY ---
const bfB = { id: 'bf-b', steps: createSteps('bf-b',
  ['<ellipse cx="50" cy="50" rx="4" ry="25"/>', '<circle cx="30" cy="45" r="18"/><circle cx="70" cy="45" r="18"/>', '<path d="M48 25Q45 5 40 10 M52 25Q55 5 60 10"/>'],
  ['Thin body oval', 'Two large wings', 'Add antennae']) };
const bfI = { id: 'bf-i', steps: createSteps('bf-i',
  ['<circle cx="50" cy="35" r="4"/><circle cx="50" cy="45" r="4"/><circle cx="50" cy="55" r="4"/>', '<path d="M50 35Q15 10 15 45Q35 50 50 45"/>', '<path d="M50 35Q85 10 85 45Q65 50 50 45"/>', '<path d="M50 55Q25 80 30 65 M50 55Q75 80 70 65"/>', '<path d="M48 32Q40 15 30 20 M52 32Q60 15 70 20"/>'],
  ['Segmented body', 'Left top wing', 'Right top wing', 'Bottom wings', 'Long antennae']) };
const bfA = { id: 'bf-a', steps: createSteps('bf-a',
  ['<ellipse cx="50" cy="50" rx="3" ry="20"/><circle cx="50" cy="28" r="3"/>', '<path d="M50 30Q10 0 10 40Q30 55 50 50"/>', '<path d="M50 30Q90 0 90 40Q70 55 50 50"/>', '<path d="M50 50Q20 90 40 70 M50 50Q80 90 60 70"/>', '<circle cx="20" cy="25" r="4"/><circle cx="80" cy="25" r="4"/>', '<path d="M48 26Q35 10 25 15Q30 20 35 15 M52 26Q65 10 75 15"/>', '<path d="M25 35L35 40 M75 35L65 40" opacity="0.3"/>'],
  ['Body and head', 'Left wing frame', 'Right wing frame', 'Bottom wing curves', 'Wing patterns', 'Curled antennae', 'Wing details']) };

// --- SNAIL ---
const snB = { id: 'sn-b', steps: createSteps('sn-b',
  ['<path d="M50 50Q70 30 50 10Q20 30 50 70"/>', '<path d="M10 80H85Q95 80 95 70"/>', '<line x1="88" y1="70" x2="88" y2="55"/><line x1="93" y1="70" x2="93" y2="55"/>'],
  ['Spiral shell line', 'Flat snail body', 'Eye stalks']) };
const snI = { id: 'sn-i', steps: createSteps('sn-i',
  ['<circle cx="40" cy="60" r="30"/>', '<path d="M40 60Q55 45 40 30Q25 45 40 60"/>', '<path d="M10 90Q50 80 85 90Q95 90 95 80L80 60"/>', '<line x1="88" y1="75" x2="88" y2="55"/><line x1="93" y1="75" x2="93" y2="55"/>', '<circle cx="88" cy="55" r="2"/><circle cx="93" cy="55" r="2"/>'],
  ['Shell circle', 'Spiral detail', 'Body and tail', 'Talk stalks', 'Add eyes']) };
const snA = { id: 'sn-a', steps: createSteps('sn-a',
  ['<circle cx="40" cy="60" r="25"/><circle cx="40" cy="60" r="20" opacity="0.2"/>', '<path d="M40 60Q55 45 40 30Q25 45 40 60"/>', '<path d="M5 90Q50 80 80 90Q95 90 95 70"/>', '<path d="M85 75Q90 50 85 45 M95 75Q90 50 95 45"/>', '<circle cx="85" cy="45" r="2"/><circle cx="95" cy="45" r="2"/><path d="M88 80Q90 82 92 80"/>', '<path d="M30 45L25 50 M50 45L55 50" opacity="0.3"/>', '<path d="M0 95H80" opacity="0.1" stroke-width="4"/>'],
  ['Detailed shell', 'Complex spiral', 'Textured body', 'Tapered stalks', 'Face details', 'Shell markings', 'Slime trail']) };

export const subjects: DrawingSubject[] = [
  { id: 'sun', titleKey: 'sun', icon: '☀️', versions: { beginner: sunB, intermediate: sunI, advanced: sunA } },
  { id: 'flower', titleKey: 'flower', icon: '🌸', versions: { beginner: flowerB, intermediate: flowerI, advanced: flowerA } },
  { id: 'house', titleKey: 'house', icon: '🏠', versions: { beginner: houseB, intermediate: houseI, advanced: houseA } },
  { id: 'cat', titleKey: 'cat', icon: '🐱', versions: { beginner: catB, intermediate: catI, advanced: catA } },
  { id: 'robot', titleKey: 'robot', icon: '🤖', versions: { beginner: robotB, intermediate: robotI, advanced: robotA } },
  { id: 'spaceship', titleKey: 'spaceship', icon: '🚀', versions: { beginner: spaceB, intermediate: spaceI, advanced: spaceA } },
  { id: 'car', titleKey: 'car', icon: '🚗', versions: { beginner: carB, intermediate: carI, advanced: carA } },
  { id: 'dog', titleKey: 'dog', icon: '🐶', versions: { beginner: dogB, intermediate: dogI, advanced: dogA } },
  { id: 'tree', titleKey: 'tree', icon: '🌳', versions: { beginner: treeB, intermediate: treeI, advanced: treeA } },
  { id: 'fish', titleKey: 'fish', icon: '🐟', versions: { beginner: fishB, intermediate: fishI, advanced: fishA } },
  { id: 'butterfly', titleKey: 'butterfly', icon: '🦋', versions: { beginner: bfB, intermediate: bfI, advanced: bfA } },
  { id: 'snail', titleKey: 'snail', icon: '🐌', versions: { beginner: snB, intermediate: snI, advanced: snA } }
];
