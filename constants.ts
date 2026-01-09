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

// --- 1. SUN (Easiest) ---
const sunB = { id: 'sun-b', steps: createSteps('sun-b', 
  [
    '<circle cx="50" cy="50" r="25"/>', 
    '<path d="M50 10V22 M50 78V90 M10 50H22 M78 50H90 M22 22L30 30 M70 70L78 78 M22 78L30 70 M70 22L78 30"/>', 
    '<circle cx="42" cy="45" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="45" r="2" fill="currentColor" stroke="none"/><path d="M40 60Q50 70 60 60"/>'
  ],
  ['step_sun_circle', 'step_sun_rays', 'step_sun_face']) 
};
const sunI = { id: 'sun-i', steps: createSteps('sun-i',
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M50 10V20 M50 80V90 M10 50H20 M80 50H90"/>', '<path d="M22 22L28 28 M72 72L78 78 M22 78L28 72 M72 28L78 22"/>', '<circle cx="40" cy="45" r="3" fill="currentColor"/><circle cx="60" cy="45" r="3" fill="currentColor"/>', '<path d="M35 60Q50 75 65 60"/>'],
  ['step_sun_circle', 'step_sun_rays_main', 'step_sun_rays_diag', 'step_sun_eyes', 'step_sun_smile']) };
const sunA = { id: 'sun-a', steps: createSteps('sun-a',
  ['<circle cx="50" cy="50" r="25"/>', '<path d="M50 5Q55 15 50 25 M50 75Q55 85 50 95 M5 50Q15 45 25 50 M75 50Q85 45 95 50"/>', '<path d="M20 20Q30 25 35 35 M65 65Q70 75 80 80 M20 80Q25 70 35 65 M65 35Q75 30 80 20"/>', '<circle cx="43" cy="45" r="5"/><circle cx="57" cy="45" r="5"/>', '<circle cx="44" cy="44" r="2" fill="currentColor"/><circle cx="58" cy="44" r="2" fill="currentColor"/>', '<path d="M38 62Q50 72 62 62"/><path d="M48 52Q50 55 52 52"/>', '<circle cx="32" cy="55" r="3" fill="#ffcccc" stroke="none"/><circle cx="68" cy="55" r="3" fill="#ffcccc" stroke="none"/>'],
  ['step_sun_body', 'step_sun_rays_wavy', 'step_sun_rays_small', 'step_sun_eyes_outer', 'step_sun_pupils', 'step_sun_nose_mouth', 'step_sun_cheeks']) };

// --- 2. ICE CREAM ---
const iceCreamB = { id: 'ice-b', steps: createSteps('ice-b',
  ['<path d="M35 50L50 85L65 50Z"/>', '<circle cx="50" cy="40" r="18"/>', '<circle cx="50" cy="22" r="4" fill="#ef4444" stroke="none"/>'],
  ['step_ice_cone', 'step_ice_scoop', 'step_ice_cherry']) };
const iceCreamI = { id: 'ice-i', steps: createSteps('ice-i',
  ['<path d="M35 55L50 95L65 55Z"/>', '<path d="M30 55Q30 35 50 35Q70 35 70 55"/>', '<path d="M30 40Q30 20 50 20Q70 20 70 40"/>', '<line x1="38" y1="60" x2="62" y2="60"/><line x1="42" y1="75" x2="58" y2="75"/>', '<circle cx="45" cy="30" r="2"/><circle cx="55" cy="45" r="2"/>'],
  ['step_ice_cone_wafer', 'step_ice_scoop_bot', 'step_ice_scoop_top', 'step_ice_waffle', 'step_ice_chips']) };
const iceCreamA = { id: 'ice-a', steps: createSteps('ice-a',
  ['<path d="M30 50L50 95L70 50Z"/>', '<path d="M35 50Q35 25 50 25Q65 25 65 50Z"/>', '<path d="M35 30Q40 10 50 10Q60 10 65 30Z"/>', '<path d="M30 50Q50 60 70 50" stroke-width="5" stroke-opacity="0.3"/>', '<path d="M30 55L70 55 M35 65L65 65 M40 75L60 75" opacity="0.3"/>', '<path d="M45 15Q50 5 55 15Z"/>', '<path d="M70 40Q80 35 85 50"/>'],
  ['step_ice_cone_base', 'step_ice_scoop_mid', 'step_ice_scoop_top_a', 'step_ice_melting', 'step_ice_grid', 'step_ice_wafer_topper', 'step_ice_spoon']) };

// --- 3. FLOWER ---
const flowerB = { id: 'flower-b', steps: createSteps('flower-b', ['<circle cx="50" cy="50" r="10"/>', '<path d="M50 40Q60 30 70 40T50 60Q40 70 30 60T50 40"/>', '<line x1="50" y1="60" x2="50" y2="90"/>'], ['step_flower_center', 'step_flower_petals', 'step_flower_stem']) };
const flowerI = { id: 'flower-i', steps: createSteps('flower-i', ['<circle cx="50" cy="50" r="10"/>', '<path d="M50 40Q70 20 90 40T50 60Q30 80 10 60T50 40"/>', '<path d="M40 50Q20 30 40 10T60 50Q80 70 60 90T40 50"/>', '<line x1="50" y1="60" x2="50" y2="95"/>'], ['step_flower_center', 'step_flower_petals_h', 'step_flower_petals_v', 'step_flower_stem']) };
const flowerA = { id: 'flower-a', steps: createSteps('flower-a', ['<circle cx="50" cy="50" r="8"/>', '<path d="M50 42Q60 25 75 35T50 50"/>', '<path d="M58 50Q75 60 65 75T50 58"/>', '<path d="M50 58Q40 75 25 65T42 50"/>', '<path d="M42 50Q25 40 35 25T50 42"/>', '<line x1="50" y1="58" x2="50" y2="95"/>', '<path d="M50 80Q70 70 60 90"/>'], ['step_flower_center_det', 'step_flower_petal_t', 'step_flower_petal_r', 'step_flower_petal_b', 'step_flower_petal_l', 'step_flower_stem', 'step_flower_leaf']) };

// --- 4. HOUSE ---
const houseB = { id: 'house-b', steps: createSteps('house-b', ['<rect x="25" y="50" width="50" height="40"/>', '<path d="M25 50L50 25L75 50Z"/>', '<rect x="45" y="70" width="10" height="20"/>'], ['step_house_base', 'step_house_roof', 'step_house_door']) };
const houseI = { id: 'house-i', steps: createSteps('house-i', ['<rect x="20" y="50" width="60" height="40"/>', '<path d="M20 50L50 20L80 50Z"/>', '<rect x="45" y="70" width="12" height="20"/>', '<rect x="30" y="60" width="10" height="10"/><rect x="60" y="60" width="10" height="10"/>', '<rect x="65" y="25" width="8" height="15"/>'], ['step_house_walls', 'step_house_roof_i', 'step_house_door_i', 'step_house_windows', 'step_house_chimney']) };
const houseA = { id: 'house-a', steps: createSteps('house-a', ['<rect x="15" y="55" width="70" height="35"/>', '<path d="M15 55L50 20L85 55Z"/>', '<rect x="44" y="70" width="12" height="20"/>', '<rect x="25" y="65" width="12" height="12"/><rect x="63" y="65" width="12" height="12"/>', '<path d="M15 55H85 M25 71H37 M25 71V77 M63 71H75 M63 71V77"/>', '<rect x="68" y="28" width="8" height="18"/>', '<path d="M50 20V10H60"/>'], ['step_house_walls_a', 'step_house_roof_a', 'step_house_door_a', 'step_house_windows_a', 'step_house_window_det', 'step_house_chimney_a', 'step_house_attic_flag']) };

// --- 5. SNAIL ---
const snB = { id: 'sn-b', steps: createSteps('sn-b', ['<path d="M20 80H80Q80 70 70 70H30Q20 70 20 80Z"/>', '<circle cx="45" cy="60" r="20"/>', '<path d="M70 70L75 55 M80 75L85 60"/>'], ['step_snail_body', 'step_snail_shell', 'step_snail_stalks']) };
const snI = { id: 'sn-i', steps: createSteps('sn-i', ['<path d="M10 85H75Q90 85 90 70L80 70"/>', '<circle cx="45" cy="55" r="25"/>', '<path d="M45 55Q45 35 60 45Q70 55 45 55Z" stroke-width="1" opacity="0.5"/>', '<path d="M80 70V55 M90 70V55"/>', '<circle cx="80" cy="55" r="2"/><circle cx="90" cy="55" r="2"/>'], ['step_snail_foot', 'step_snail_shell_i', 'step_snail_spiral', 'step_snail_neck', 'step_snail_eyes']) };
const snA = { id: 'sn-a', steps: createSteps('sn-a', ['<path d="M5 90H80C100 90 100 60 80 60"/>', '<circle cx="40" cy="50" r="30"/>', '<path d="M40 50C40 20 70 20 70 50C70 80 10 80 40 50Z" opacity="0.4"/>', '<path d="M85 65Q90 30 80 30 M95 65Q100 35 105 35"/>', '<circle cx="80" cy="30" r="3"/><circle cx="105" cy="35" r="3"/>', '<path d="M5 90Q10 85 20 90" stroke-dasharray="2 2"/>', '<path d="M90 75Q95 75 95 80" opacity="0.5"/>'], ['step_snail_foot_a', 'step_snail_shell_a', 'step_snail_spiral_a', 'step_snail_stalks_a', 'step_snail_eyes_a', 'step_snail_trail', 'step_snail_mouth']) };

// --- 6. FISH ---
const fishB = { id: 'fish-b', steps: createSteps('fish-b', ['<path d="M20 50Q50 20 80 50Q50 80 20 50Z"/>', '<path d="M20 50L5 35V65Z"/>', '<circle cx="65" cy="45" r="2" fill="currentColor"/>'], ['step_fish_body', 'step_fish_tail', 'step_fish_eye']) };
const fishI = { id: 'fish-i', steps: createSteps('fish-i', ['<path d="M20 50Q50 15 85 50Q50 85 20 50Z"/>', '<path d="M20 50L0 30V70Z"/>', '<path d="M50 28V15L65 35 M50 72V85L65 65"/>', '<circle cx="70" cy="45" r="3"/><path d="M85 50L80 50"/>', '<path d="M40 50Q45 55 40 60" opacity="0.4"/>'], ['step_fish_body_i', 'step_fish_tail_i', 'step_fish_fins', 'step_fish_eye_mouth', 'step_fish_scales']) };
const fishA = { id: 'fish-a', steps: createSteps('fish-a', ['<path d="M15 50C30 15 70 15 90 50C70 85 30 85 15 50Z"/>', '<path d="M15 50Q0 20 0 50Q0 80 15 50Z"/>', '<path d="M45 23Q55 0 75 25 M45 77Q55 100 75 75"/>', '<circle cx="75" cy="42" r="5"/><circle cx="76" cy="41" r="2" fill="white"/>', '<path d="M90 50Q85 55 90 60"/>', '<path d="M40 40Q45 50 40 60 M50 40Q55 50 50 60" opacity="0.3"/>', '<circle cx="85" cy="30" r="3" opacity="0.3"/><circle cx="95" cy="20" r="2" opacity="0.2"/>'], ['step_fish_body_a', 'step_fish_tail_a', 'step_fish_fins_a', 'step_fish_eye_a', 'step_fish_lips', 'step_fish_scales_a', 'step_fish_bubbles']) };

// --- 7. CAR ---
const carB = { id: 'car-b', steps: createSteps('car-b', ['<rect x="20" y="50" width="60" height="20" rx="5"/>', '<path d="M30 50L40 35H60L70 50"/>', '<circle cx="35" cy="70" r="8"/><circle cx="65" cy="70" r="8"/>'], ['step_car_body', 'step_car_roof', 'step_car_wheels']) };
const carI = { id: 'car-i', steps: createSteps('car-i', ['<path d="M15 65H85V55Q85 45 75 45H25Q15 45 15 55Z"/>', '<path d="M30 45L40 30H60L70 45"/>', '<circle cx="30" cy="65" r="10"/><circle cx="70" cy="65" r="10"/>', '<rect x="15" y="55" width="10" height="5" fill="#fbbf24"/><rect x="75" y="55" width="10" height="5" fill="#ef4444"/>', '<line x1="50" y1="30" x2="50" y2="65"/>'], ['step_car_chassis', 'step_car_windshield', 'step_car_wheels_i', 'step_car_lights', 'step_car_door']) };
const carA = { id: 'car-a', steps: createSteps('car-a', ['<path d="M10 70H90V60Q90 50 80 50H20Q10 50 10 60Z"/>', '<path d="M25 50L35 30H65L75 50Z"/>', '<circle cx="30" cy="70" r="12"/><circle cx="70" cy="70" r="12"/>', '<circle cx="30" cy="70" r="5" fill="#94a3b8"/><circle cx="70" cy="70" r="5" fill="#94a3b8"/>', '<rect x="48" y="55" width="4" height="15" rx="1"/>', '<path d="M10 62H90" opacity="0.2"/>', '<path d="M85 70H95V75H85Z"/>'], ['step_car_frame_a', 'step_car_cabin', 'step_car_wheels_a', 'step_car_hubcaps', 'step_car_handle', 'step_car_trim', 'step_car_exhaust']) };

// --- 8. CAT (Beginner Face Focus) ---
const catB = { id: 'cat-b', steps: createSteps('cat-b', 
  [
    '<circle cx="50" cy="55" r="30"/>', 
    '<path d="M30 35L20 15L40 30 M70 35L80 15L60 30"/>', 
    '<circle cx="40" cy="50" r="2"/><circle cx="60" cy="50" r="2"/><path d="M42 65Q50 72 58 65" />'
  ], 
  ['step_cat_head', 'step_cat_ears', 'step_cat_face']) 
};
const catI = { id: 'cat-i', steps: createSteps('cat-i', ['<ellipse cx="50" cy="70" rx="25" ry="20"/>', '<circle cx="50" cy="40" r="18"/>', '<path d="M38 30L30 10L45 25 M62 30L70 10L55 25"/>', '<path d="M25 70Q10 70 10 50"/>', '<circle cx="43" cy="38" r="2"/><circle cx="57" cy="38" r="2"/><path d="M48 45Q50 48 52 45"/>'], ['step_cat_body_i', 'step_cat_head_i', 'step_cat_ears_i', 'step_cat_tail', 'step_cat_face']) };
const catA = { id: 'cat-a', steps: createSteps('cat-a', ['<path d="M30 80Q30 50 50 50H60Q80 50 80 80Z"/>', '<circle cx="75" cy="40" r="15"/>', '<path d="M65 30L60 10L75 25 M85 30L90 10L75 25"/>', '<path d="M30 80Q10 80 15 60"/>', '<circle cx="70" cy="40" r="2"/><circle cx="80" cy="40" r="2"/><path d="M72 45L78 45"/>', '<path d="M60 45H50 M60 48H50 M90 45H100 M90 48H100"/>', '<path d="M40 80V90 M70 80V90"/>'], ['step_cat_pose', 'step_cat_head_a', 'step_cat_ears_a', 'step_cat_tail_a', 'step_cat_eyes', 'step_cat_whiskers', 'step_cat_paws']) };

// --- 9. DOG (Beginner Face Focus) ---
const dogB = { id: 'dog-b', steps: createSteps('dog-b', 
  [
    '<circle cx="50" cy="50" r="30"/>', 
    '<path d="M25 40Q15 40 15 65Q15 80 25 75 M75 40Q85 40 85 65Q85 80 75 75"/>', 
    '<circle cx="40" cy="45" r="2"/><circle cx="60" cy="45" r="2"/><path d="M45 60L55 60L50 65Z" fill="currentColor"/><path d="M40 70Q50 80 60 70"/>'
  ], 
  ['step_dog_head', 'step_dog_ears', 'step_dog_face']) 
};
const dogI = { id: 'dog-i', steps: createSteps('dog-i', ['<ellipse cx="40" cy="70" rx="25" ry="18"/>', '<circle cx="65" cy="45" r="15"/>', '<path d="M55 35L50 55 M75 35L80 55" stroke-width="5"/>', '<path d="M20 70Q5 60 10 50"/>', '<circle cx="60" cy="42" r="2"/><circle cx="70" cy="42" r="2"/><path d="M63 50H67"/>'], ['step_dog_body_i', 'step_dog_head_i', 'step_dog_ears_i', 'step_dog_tail', 'step_dog_face']) };
const dogA = { id: 'dog-a', steps: createSteps('dog-a', ['<path d="M25 80Q25 50 45 50H55Q75 50 75 80Z"/>', '<circle cx="50" cy="35" r="18"/>', '<path d="M35 30Q30 45 35 60 M65 30Q70 45 65 60" stroke-width="6"/>', '<path d="M25 80Q10 75 20 60"/>', '<circle cx="45" cy="35" r="3"/><circle cx="55" cy="35" r="3"/><path d="M48 42L52 42"/>', '<path d="M50 42V48Q50 52 45 52 M50 48Q50 52 55 52"/>', '<path d="M35 80V95 M65 80V95"/>'], ['step_dog_pose', 'step_dog_head_a', 'step_dog_ears_a', 'step_dog_tail_a', 'step_dog_pupils', 'step_dog_muzzle', 'step_dog_paws']) };

// --- 10. BUTTERFLY ---
const bfB = { id: 'bf-b', steps: createSteps('bf-b', ['<ellipse cx="50" cy="50" rx="5" ry="30"/>', '<path d="M55 50Q80 20 80 50T55 80 M45 50Q20 20 20 50T45 80"/>', '<path d="M45 25L35 10 M55 25L65 10"/>'], ['step_bf_body', 'step_bf_wings', 'step_bf_antennae']) };
const bfI = { id: 'bf-i', steps: createSteps('bf-i', ['<ellipse cx="50" cy="50" rx="4" ry="35"/>', '<path d="M54 50Q90 10 90 45Q90 80 54 50 M46 50Q10 10 10 45Q10 80 46 50"/>', '<path d="M54 55Q80 90 60 90Q45 90 54 55 M46 55Q20 90 40 90Q55 90 46 55"/>', '<path d="M48 20Q40 5 30 15 M52 20Q60 5 70 15"/>', '<circle cx="75" cy="40" r="5" fill="#f472b6"/><circle cx="25" cy="40" r="5" fill="#f472b6"/>'], ['step_bf_body_i', 'step_bf_wings_t', 'step_bf_wings_b', 'step_bf_antennae_c', 'step_bf_spots']) };
const bfA = { id: 'bf-a', steps: createSteps('bf-a', ['<path d="M48 20Q50 15 52 20V80Q50 85 48 80Z"/>', '<path d="M52 40C80 0 100 30 52 60 M48 40C20 0 0 30 48 60"/>', '<path d="M52 60C80 100 60 100 52 65 M48 60C20 100 40 100 48 65"/>', '<path d="M48 25C40 10 20 10 15 30 M52 25C60 10 80 10 85 30"/>', '<circle cx="70" cy="35" r="8" stroke="#f472b6" stroke-width="2"/><circle cx="30" cy="35" r="8" stroke="#f472b6" stroke-width="2"/>', '<path d="M55 45L80 30 M45 45L20 30" opacity="0.3"/>', '<circle cx="50" cy="22" r="1"/><circle cx="50" cy="26" r="1"/>'], ['step_bf_thorax', 'step_bf_wings_gt', 'step_bf_wings_sl', 'step_bf_antennae_l', 'step_bf_patterns', 'step_bf_veins', 'step_bf_eyes']) };

// --- 11. SPACESHIP ---
const spaceB = { id: 'space-b', steps: createSteps('space-b', ['<path d="M50 10Q70 50 50 90Q30 50 50 10Z"/>', '<path d="M35 70L20 90L50 80 M65 70L80 90L50 80"/>', '<circle cx="50" cy="40" r="5"/>'], ['step_space_body', 'step_space_fins', 'step_space_window']) };
const spaceI = { id: 'space-i', steps: createSteps('space-i', ['<path d="M50 5Q75 40 50 85Q25 40 50 5Z"/>', '<path d="M30 70L15 95H40V80 M70 70L85 95H60V80"/>', '<circle cx="50" cy="35" r="8"/>', '<rect x="45" y="85" width="10" height="10" rx="2"/>', '<line x1="45" y1="95" x2="40" y2="100"/><line x1="55" y1="95" x2="60" y2="100"/>'], ['step_space_rocket', 'step_space_thrust_fins', 'step_space_porthole', 'step_space_engine', 'step_space_flames']) };
const spaceA = { id: 'space-a', steps: createSteps('space-a', ['<path d="M50 0C70 30 70 70 50 90C30 70 30 30 50 0Z"/>', '<path d="M32 60L10 95H35L35 75 M68 60L90 95H65L65 75"/>', '<circle cx="50" cy="30" r="10"/><circle cx="50" cy="30" r="7"/>', '<path d="M35 15H65" opacity="0.3"/>', '<path d="M40 90Q50 110 60 90" stroke="#f97316" stroke-width="5"/>', '<rect x="48" y="45" width="4" height="25" rx="2"/>', '<path d="M35 30H65" stroke-dasharray="2 2"/>'], ['step_space_command', 'step_space_stabilizers', 'step_space_dual_portholes', 'step_space_hull', 'step_space_ion_engine', 'step_space_fuel_tank', 'step_space_sensors']) };

// --- 12. ROBOT ---
const robotB = { id: 'robot-b', steps: createSteps('robot-b', ['<rect x="30" y="40" width="40" height="40"/>', '<rect x="35" y="20" width="30" height="20"/>', '<line x1="30" y1="50" x2="15" y2="50"/><line x1="70" y1="50" x2="85" y2="50"/>'], ['step_robot_body', 'step_robot_head', 'step_robot_arms']) };
const robotI = { id: 'robot-i', steps: createSteps('robot-i', ['<rect x="30" y="45" width="40" height="35" rx="5"/>', '<rect x="35" y="25" width="30" height="20" rx="2"/>', '<rect x="20" y="50" width="10" height="5"/><rect x="70" y="50" width="10" height="5"/>', '<rect x="40" y="80" width="8" height="15"/><rect x="52" y="80" width="8" height="15"/>', '<circle cx="42" cy="32" r="3"/><circle cx="58" cy="32" r="3"/>'], ['step_robot_body_i', 'step_robot_head_i', 'step_robot_shoulders', 'step_robot_legs', 'step_robot_eyes']) };
const robotA = { id: 'robot-a', steps: createSteps('robot-a', ['<rect x="30" y="40" width="40" height="40" rx="8"/>', '<rect x="35" y="15" width="30" height="25" rx="5"/>', '<path d="M30 50L15 40 M70 50L85 40"/>', '<rect x="40" y="80" width="10" height="18" rx="2"/><rect x="50" y="80" width="10" height="18" rx="2"/>', '<rect x="40" y="50" width="20" height="15" fill="#e2e8f0"/>', '<circle cx="43" cy="25" r="4" fill="#3b82f6"/><circle cx="57" cy="25" r="4" fill="#3b82f6"/>', '<path d="M50 15V5 M45 5H55"/>'], ['step_robot_chassis', 'step_robot_processor', 'step_robot_pivoting_arms', 'step_robot_heavy_legs', 'step_robot_screen', 'step_robot_led_eyes', 'step_robot_antenna']) };

// --- 13. DINOSAUR ---
const dinoB = { id: 'dino-b', steps: createSteps('dino-b',
  ['<path d="M20 70Q50 30 80 70Z"/>', '<path d="M75 55Q95 55 95 40H80Z"/>', '<path d="M35 70V85 M65 70V85"/>'],
  ['step_dino_hump', 'step_dino_head_neck', 'step_dino_legs']) };
const dinoI = { id: 'dino-i', steps: createSteps('dino-i',
  ['<path d="M15 75Q45 35 75 75Z"/>', '<path d="M15 75Q0 75 0 60"/>', '<path d="M75 60Q85 20 95 20H80Q70 20 70 50"/>', '<path d="M30 75V95 M60 75V95"/>', '<path d="M35 50L40 40L45 50 M50 45L55 35L60 45"/>'],
  ['step_dino_body', 'step_dino_tail', 'step_dino_head_neck_i', 'step_dino_legs_i', 'step_dino_spikes']) };
const dinoA = { id: 'dino-a', steps: createSteps('dino-a',
  ['<path d="M20 80Q50 40 80 80Z"/>', '<path d="M20 80Q-10 80 -10 50Q-10 40 0 50"/>', '<path d="M75 65Q80 10 95 10Q100 20 90 20Q85 20 80 50"/>', '<path d="M35 80Q35 100 30 100 M65 80Q65 100 70 100"/>', '<path d="M30 55L35 45L40 55 M45 50L50 40L55 50 M60 55L65 45L70 55"/>', '<circle cx="50" cy="70" r="2"/><circle cx="65" cy="75" r="2"/>', '<path d="M88 12L92 12"/>'],
  ['step_dino_torso', 'step_dino_whip_tail', 'step_dino_neck_a', 'step_dino_walking_legs', 'step_dino_scales', 'step_dino_spots', 'step_dino_eye']) };

// --- 14. CASTLE ---
const castleB = { id: 'castle-b', steps: createSteps('castle-b',
  ['<rect x="30" y="50" width="40" height="30"/>', '<rect x="25" y="40" width="10" height="20"/><rect x="65" y="40" width="10" height="20"/>', '<path d="M25 40L30 25L35 40 M65 40L70 25L75 40"/>'],
  ['step_castle_center', 'step_castle_towers', 'step_castle_roofs']) };
const castleI = { id: 'castle-i', steps: createSteps('castle-i',
  ['<rect x="35" y="55" width="30" height="35"/>', '<rect x="20" y="45" width="15" height="45"/><rect x="65" y="45" width="15" height="45"/>', '<path d="M20 45L27.5 25L35 45 M65 45L72.5 25L80 45"/>', '<path d="M40 55V50H45V55H50V50H55V55H60V50H65V55"/>', '<rect x="45" y="75" width="10" height="15" rx="5"/>'],
  ['step_castle_keep', 'step_castle_flanking', 'step_castle_spires', 'step_castle_battlements', 'step_castle_arch']) };
const castleA = { id: 'castle-a', steps: createSteps('castle-a',
  ['<rect x="25" y="60" width="50" height="30"/>', '<rect x="15" y="40" width="15" height="50"/><rect x="70" y="40" width="15" height="50"/>', '<rect x="40" y="20" width="20" height="40"/>', '<path d="M15 40L22 15L30 40 M70 40L77 15L85 40 M40 20L50 0L60 20"/>', '<rect x="45" y="70" width="10" height="20" rx="5"/>', '<rect x="20" y="50" width="5" height="8"/><rect x="75" y="50" width="5" height="8"/><rect x="48" y="30" width="4" height="6"/>', '<path d="M50 0V-10H60" stroke-width="1"/>'],
  ['step_castle_base_wall', 'step_castle_corner', 'step_castle_central', 'step_castle_sharp_spires', 'step_castle_portcullis', 'step_castle_windows', 'step_castle_flag']) };

// --- 15. UNICORN ---
const unicornB = { id: 'unicorn-b', steps: createSteps('unicorn-b',
  ['<ellipse cx="40" cy="50" rx="20" ry="12"/><circle cx="65" cy="35" r="10"/>', '<path d="M60 25L70 5L75 25"/>', '<path d="M35 62V75 M45 62V75 M62 45V55"/>'],
  ['step_uni_circles', 'step_uni_horn', 'step_uni_legs']) };
const unicornI = { id: 'unicorn-i', steps: createSteps('unicorn-i',
  ['<ellipse cx="40" cy="60" rx="22" ry="15"/><path d="M55 60Q65 30 75 30"/>', '<circle cx="78" cy="25" r="8"/>', '<path d="M78 18L85 0L88 15"/>', '<path d="M30 75V90 M45 75V90 M60 55V75 M70 55V75"/>', '<path d="M20 60Q0 40 20 20" stroke="#f472b6"/>'],
  ['step_uni_body_neck', 'step_uni_head', 'step_uni_spiral_horn', 'step_uni_four_legs', 'step_uni_tail']) };
const unicornA = { id: 'unicorn-a', steps: createSteps('unicorn-a',
  ['<path d="M30 60Q30 40 50 40H60Q80 40 80 60Q80 80 60 80H50Q30 80 30 60Z"/>', '<path d="M75 40Q80 15 90 15"/>', '<path d="M90 15Q95 5 85 5Q80 15 80 25Z"/>', '<path d="M85 5L95 -15L100 0"/>', '<path d="M40 80V95 M50 80V95 M70 80V95 M80 80V95"/>', '<path d="M30 50Q10 30 30 10 T50 30" stroke="#fb923c"/>', '<circle cx="88" cy="18" r="1" fill="currentColor"/>'],
  ['step_uni_horse_frame', 'step_uni_arched_neck', 'step_uni_horse_head', 'step_uni_long_horn', 'step_uni_slender_legs', 'step_uni_rainbow_mane', 'step_uni_eye']) };

// --- 16. PIRATE SHIP (Hardest) ---
const pirateB = { id: 'pirate-b', steps: createSteps('pirate-b',
  ['<path d="M20 50Q20 75 50 75Q80 75 80 50Z"/>', '<line x1="50" y1="50" x2="50" y2="15"/><rect x="50" y="20" width="20" height="15"/>', '<circle cx="40" cy="62" r="3"/><circle cx="60" cy="62" r="3"/>'],
  ['step_pirate_base', 'step_pirate_mast_sail', 'step_pirate_portholes']) };
const pirateI = { id: 'pirate-i', steps: createSteps('pirate-i',
  ['<path d="M15 45L25 70H75L85 45Z"/>', '<line x1="50" y1="45" x2="50" y2="10"/>', '<path d="M50 15Q75 15 70 35Q50 35 50 15"/>', '<rect x="47" y="5" width="6" height="4"/><path d="M10 70Q50 85 90 70"/>', '<circle cx="35" cy="55" r="4"/><circle cx="50" cy="55" r="4"/><circle cx="65" cy="55" r="4"/>'],
  ['step_pirate_hull', 'step_pirate_tall_mast', 'step_pirate_billowing', 'step_pirate_lookout', 'step_pirate_portholes_i']) };
const pirateA = { id: 'pirate-a', steps: createSteps('pirate-a',
  ['<path d="M10 40Q10 80 50 80Q90 80 90 40L80 40Q75 60 50 60Q25 60 20 40Z"/>', '<line x1="35" y1="40" x2="35" y2="10"/><line x1="65" y1="40" x2="65" y2="15"/>', '<path d="M35 15Q55 15 50 35H35 M65 20Q80 20 75 35H65"/>', '<path d="M42 22L47 28 M47 22L42 28" stroke-width="2"/>', '<path d="M5 80Q50 95 95 80" stroke-width="3"/>', '<path d="M10 40L5 35" stroke-width="3"/>', '<path d="M20 50H80" stroke-opacity="0.2"/>'],
  ['step_pirate_hull_a', 'step_pirate_masts', 'step_pirate_dual_sails', 'step_pirate_skull', 'step_pirate_waves', 'step_pirate_bowsprit', 'step_pirate_planks']) };

export const subjects: DrawingSubject[] = [
  { id: 'sun', titleKey: 'sun', icon: '☀️', versions: { beginner: sunB, intermediate: sunI, advanced: sunA } },
  { id: 'ice_cream', titleKey: 'ice_cream', icon: '🍦', versions: { beginner: iceCreamB, intermediate: iceCreamI, advanced: iceCreamA } },
  { id: 'flower', titleKey: 'flower', icon: '🌸', versions: { beginner: flowerB, intermediate: flowerI, advanced: flowerA } },
  { id: 'house', titleKey: 'house', icon: '🏠', versions: { beginner: houseB, intermediate: houseI, advanced: houseA } },
  { id: 'snail', titleKey: 'snail', icon: '🐌', versions: { beginner: snB, intermediate: snI, advanced: snA } },
  { id: 'fish', titleKey: 'fish', icon: '🐟', versions: { beginner: fishB, intermediate: fishI, advanced: fishA } },
  { id: 'car', titleKey: 'car', icon: '🚗', versions: { beginner: carB, intermediate: carI, advanced: carA } },
  { id: 'cat', titleKey: 'cat', icon: '🐱', versions: { beginner: catB, intermediate: catI, advanced: catA } },
  { id: 'dog', titleKey: 'dog', icon: '🐶', versions: { beginner: dogB, intermediate: dogI, advanced: dogA } },
  { id: 'butterfly', titleKey: 'butterfly', icon: '🦋', versions: { beginner: bfB, intermediate: bfI, advanced: bfA } },
  { id: 'spaceship', titleKey: 'spaceship', icon: '🚀', versions: { beginner: spaceB, intermediate: spaceI, advanced: spaceA } },
  { id: 'robot', titleKey: 'robot', icon: '🤖', versions: { beginner: robotB, intermediate: robotI, advanced: robotA } },
  { id: 'dinosaur', titleKey: 'dinosaur', icon: '🦖', versions: { beginner: dinoB, intermediate: dinoI, advanced: dinoA } },
  { id: 'castle', titleKey: 'castle', icon: '🏰', versions: { beginner: castleB, intermediate: castleI, advanced: castleA } },
  { id: 'unicorn', titleKey: 'unicorn', icon: '🦄', versions: { beginner: unicornB, intermediate: unicornI, advanced: unicornA } },
  { id: 'pirate_ship', titleKey: 'pirate_ship', icon: '🏴‍☠️', versions: { beginner: pirateB, intermediate: pirateI, advanced: pirateA } }
];