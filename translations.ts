
import { LanguageCode } from './types';

export const languages: { code: LanguageCode; label: string; flag: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'he', label: 'עברית', flag: '🇮🇱', dir: 'rtl' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'zh', label: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', dir: 'ltr' },
];

export const uiTranslations: Record<LanguageCode, any> = {
  en: {
    welcome: "Welcome to DrawBuddy!",
    settings: "Settings",
    levelLabel: "Level",
    languageLabel: "Language",
    chooseSubject: "What do you want to draw today?",
    currentSettings: "Your Current Setup",
    diff_beginner: "Beginner",
    diff_beginner_desc: "Simple shapes and fun drawings",
    diff_intermediate: "Intermediate",
    diff_intermediate_desc: "More details and complex shapes",
    diff_advanced: "Advanced",
    diff_advanced_desc: "Professional challenge for real artists",
    magicCard: "Magic Draw",
    magicCardDesc: "Describe anything!",
    close: "Close",
    showMe: "Show me! ✨",
    nextStep: "Next Step",
    magicImprove: "Magic Transform! 🪄",
    improving: "Casting spells...",
    analyzing: "Looking at your art...",
    resultTitle: "Your Magic Creation! 🏆",
    backToDraw: "Back to Drawing",
    save: "Save",
    customPromptTitle: "What's in your imagination?",
    customPlaceholder: "e.g. A dragon eating pizza...",
    createGuide: "Create Guide! ✨",
    creating: "Drawing your guide...",
    stepXofY: "Step {x} of {y}",
    saveSettings: "Done!",
    cancel: "Cancel",
    magicTitle: "Choose a Magic Style!",
    magicStyleDesc: "How should we transform your artwork?",
    feedbackTitle: "DrawBuddy's Advice:",
    tipTitle: "Artist Tip:",
    tipDesc: "Every line counts! Keep practicing to get even better.",
    style_realistic: "Realistic",
    style_cartoonish: "Cartoon",
    style_oil: "Oil Painting",
    style_superhero: "Comic Book",
    // Subjects
    cat: "Cat", house: "House", dog: "Dog", tree: "Tree", car: "Car", flower: "Flower", sun: "Sun", fish: "Fish", butterfly: "Butterfly", robot: "Robot", spaceship: "Spaceship", snail: "Snail", pirate_ship: "Pirate Ship", ice_cream: "Ice Cream", castle: "Castle", unicorn: "Unicorn", dinosaur: "Dinosaur",
    backToDiff: "Back",
    // Sun Steps
    step_sun_circle: "Draw a big circle", step_sun_rays: "Add the sunny rays", step_sun_face: "Draw a happy smiley face", step_sun_rays_main: "Add 4 main rays", step_sun_rays_diag: "Add 4 diagonal rays", step_sun_eyes: "Draw big eyes", step_sun_smile: "Add a wide smile", step_sun_body: "Draw the sun body", step_sun_rays_wavy: "Add wavy main rays", step_sun_rays_small: "Fill in smaller rays", step_sun_eyes_outer: "Draw outer eyes", step_sun_pupils: "Add pupils for sparkle", step_sun_nose_mouth: "Draw nose and mouth", step_sun_cheeks: "Add rosy cheeks",
    // Ice Cream Steps
    step_ice_cone: "Draw a triangle cone", step_ice_scoop: "Add a big round scoop", step_ice_cherry: "Top it with a cherry", step_ice_cone_wafer: "Draw the wafer cone", step_ice_scoop_bot: "Add the bottom scoop", step_ice_scoop_top: "Add the top scoop", step_ice_waffle: "Add waffle patterns", step_ice_chips: "Add chocolate chips", step_ice_cone_base: "Pointy cone base", step_ice_scoop_mid: "Middle flavor scoop", step_ice_scoop_top_a: "Top flavor scoop", step_ice_melting: "Add melting drips", step_ice_grid: "Detailed cone grid", step_ice_wafer_topper: "Add a topper wafer", step_ice_spoon: "Add a curved spoon",
    // Flower Steps
    step_flower_center: "Center circle", step_flower_petals: "Four petals", step_flower_stem: "Flower stem", step_flower_petals_h: "Horizontal petals", step_flower_petals_v: "Vertical petals", step_flower_center_det: "Detailed center", step_flower_petal_t: "Top petal", step_flower_petal_r: "Right petal", step_flower_petal_b: "Bottom petal", step_flower_petal_l: "Left petal", step_flower_leaf: "Leaf",
    // House Steps
    step_house_base: "Square base", step_house_roof: "Triangle roof", step_house_door: "Simple door", step_house_walls: "Walls", step_house_roof_i: "Roof", step_house_door_i: "Door", step_house_windows: "Windows", step_house_chimney: "Chimney", step_house_walls_a: "Base walls", step_house_roof_a: "Main roof", step_house_door_a: "Main door", step_house_windows_a: "Large windows", step_house_window_det: "Window details", step_house_chimney_a: "Brick chimney", step_house_attic_flag: "Attic flag",
    // Snail Steps
    step_snail_body: "Flat body", step_snail_shell: "Round shell", step_snail_stalks: "Two eye stalks", step_snail_foot: "Snail foot", step_snail_shell_i: "Large shell", step_snail_spiral: "Shell spiral", step_snail_neck: "Neck and stalks", step_snail_eyes: "Little eyes", step_snail_foot_a: "Long slimy foot", step_snail_shell_a: "Huge round home", step_snail_spiral_a: "Deep shell spiral", step_snail_stalks_a: "Flexible stalks", step_snail_eyes_a: "Observant eyes", step_snail_trail: "Trail marks", step_snail_mouth: "Happy mouth",
    // Fish Steps
    step_fish_body: "Fish body", step_fish_tail: "Triangle tail", step_fish_eye: "Little eye", step_fish_body_i: "Oval body", step_fish_tail_i: "Large tail", step_fish_fins: "Dorsal fins", step_fish_eye_mouth: "Eye and mouth", step_fish_scales: "Scale detail", step_fish_body_a: "Trout body", step_fish_tail_a: "Fan tail", step_fish_fins_a: "Elegant fins", step_fish_eye_a: "Sparkling eye", step_fish_lips: "Fishy lips", step_fish_scales_a: "Side scales", step_fish_bubbles: "Water bubbles",
    // Car Steps
    step_car_body: "Car body", step_car_roof: "Top roof", step_car_wheels: "Two wheels", step_car_chassis: "Chassis", step_car_windshield: "Windshield area", step_car_wheels_i: "Thick wheels", step_car_lights: "Lights", step_car_door: "Door line", step_car_frame_a: "Sports car frame", step_car_cabin: "Cabin roof", step_car_wheels_a: "Sport wheels", step_car_hubcaps: "Hubcaps", step_car_handle: "Door handle", step_car_trim: "Side trim", step_car_exhaust: "Exhaust pipe",
    // Cat Steps
    step_cat_body: "Body circle", step_cat_head: "Head circle", step_cat_ears: "Pointy ears", step_cat_body_i: "Large body", step_cat_head_i: "Head", step_cat_ears_i: "Sharp ears", step_cat_tail: "Long tail", step_cat_face: "Simple face", step_cat_pose: "Sitting pose", step_cat_head_a: "Head placement", step_cat_ears_a: "Detailed ears", step_cat_tail_a: "Curled tail", step_cat_eyes: "Cat eyes", step_cat_whiskers: "Whiskers", step_cat_paws: "Little paws",
    // Dog Steps
    step_dog_body: "Doggy body", step_dog_head: "Happy head", step_dog_ears: "Floppy ears", step_dog_body_i: "Medium body", step_dog_head_i: "Head", step_dog_ears_i: "Big ears", step_dog_tail: "Waggy tail", step_dog_face: "Dog face", step_dog_pose: "Sitting dog pose", step_dog_head_a: "Head shape", step_dog_ears_a: "Long ears", step_dog_tail_a: "Happy tail", step_dog_pupils: "Pupils", step_dog_muzzle: "Doggy muzzle", step_dog_paws: "Front paws",
    // Butterfly Steps
    step_bf_body: "Small body", step_bf_wings: "Two big wings", step_bf_antennae: "Two antennae", step_bf_body_i: "Thin body", step_bf_wings_t: "Top wing pair", step_bf_wings_b: "Bottom wing pair", step_bf_antennae_c: "Curly antennae", step_bf_spots: "Wing spots", step_bf_thorax: "Detailed thorax", step_bf_wings_gt: "Graceful top wings", step_bf_wings_sl: "Soft lower wings", step_bf_antennae_l: "Long antennae", step_bf_patterns: "Intricate wing patterns", step_bf_veins: "Wing veins", step_bf_eyes: "Tiny eyes",
    // Space Steps
    step_space_body: "Rocket body", step_space_fins: "Side fins", step_space_window: "Small window", step_space_rocket: "Sleek rocket", step_space_thrust_fins: "Thrust fins", step_space_porthole: "Porthole", step_space_engine: "Engine nozzle", step_space_flames: "Flame sparks", step_space_command: "Command module", step_space_stabilizers: "Stabilizer wings", step_space_dual_portholes: "Dual portholes", step_space_hull: "Hull plates", step_space_ion_engine: "Ion engine fire", step_space_fuel_tank: "Fuel tank line", step_space_sensors: "Sensor array",
    // Robot Steps
    step_robot_body: "Boxy body", step_robot_head: "Square head", step_robot_arms: "Stick arms", step_robot_body_i: "Rounded body", step_robot_head_i: "Head", step_robot_shoulders: "Shoulder joints", step_robot_legs: "Robot legs", step_robot_eyes: "Electronic eyes", step_robot_chassis: "Torso chassis", step_robot_processor: "Processor head", step_robot_pivoting_arms: "Pivoting arms", step_robot_heavy_legs: "Heavy duty legs", step_robot_screen: "Screen chest", step_robot_led_eyes: "LED eyes", step_robot_antenna: "Antenna",
    // Dino Steps
    step_dino_hump: "Draw a big hump body", step_dino_head_neck: "Add head and neck", step_dino_legs: "Add two thick legs", step_dino_body: "Oval dinosaur body", step_dino_tail: "Add a long tail", step_dino_head_neck_i: "Long neck and head", step_dino_legs_i: "Add two strong legs", step_dino_spikes: "Add spikes on back", step_dino_torso: "Large dinosaur torso", step_dino_whip_tail: "Tapered whip tail", step_dino_neck_a: "Graceful long neck", step_dino_walking_legs: "Add walking legs", step_dino_scales: "Row of sharp scales", step_dino_spots: "Add skin spots", step_dino_eye: "Add a friendly eye",
    // Castle Steps
    step_castle_center: "Draw a square center", step_castle_towers: "Add two side towers", step_castle_roofs: "Add pointy roofs", step_castle_keep: "Main castle keep", step_castle_flanking: "Add flanking towers", step_castle_spires: "Add triangle spires", step_castle_battlements: "Add battlements", step_castle_arch: "Draw the arched door", step_castle_base_wall: "Fortified base wall", step_castle_corner: "Sturdy corner towers", step_castle_central: "Add a central keep", step_castle_sharp_spires: "Add sharp spires", step_castle_portcullis: "Draw portcullis door", step_castle_windows: "Add window slits", step_castle_flag: "Fly a royal flag",
    // Uni Steps
    step_uni_circles: "Body and head circles", step_uni_horn: "Add a magic horn", step_uni_legs: "Add 3 simple legs", step_uni_body_neck: "Oval body and neck", step_uni_head: "Draw the head", step_uni_spiral_horn: "Add the spiral horn", step_uni_four_legs: "Add four sturdy legs", step_uni_tail: "Draw a flowing tail", step_uni_horse_frame: "Horse body frame", step_uni_arched_neck: "Graceful arched neck", step_uni_horse_head: "Elegant horse head", step_uni_long_horn: "Add the long horn", step_uni_slender_legs: "Add slender legs", step_uni_rainbow_mane: "Add a rainbow mane", step_uni_eye: "Draw the eye",
    // Pirate Steps
    step_pirate_base: "Draw the boat base", step_pirate_mast_sail: "Add a mast and sail", step_pirate_portholes: "Add two portholes", step_pirate_hull: "Draw the wooden hull", step_pirate_tall_mast: "Add the tall mast", step_pirate_billowing: "Add a billowing sail", step_pirate_lookout: "Add the lookout and waves", step_pirate_portholes_i: "Draw the portholes", step_pirate_hull_a: "Detailed boat hull", step_pirate_masts: "Draw two masts", step_pirate_dual_sails: "Add dual curved sails", step_pirate_skull: "Draw the Jolly Roger skull", step_pirate_waves: "Add heavy ocean waves", step_pirate_bowsprit: "Add the bowsprit tip", step_pirate_planks: "Add wood plank lines",
  },
  he: {
    welcome: "ברוכים הבאים ל-DrawBuddy!",
    settings: "הגדרות",
    levelLabel: "רמה",
    languageLabel: "שפה",
    chooseSubject: "מה תרצו לצייר היום?",
    currentSettings: "ההגדרות שלך",
    diff_beginner: "מתחיל",
    diff_beginner_desc: "צורות פשוטות וציורים קלים",
    diff_intermediate: "בינוני",
    diff_intermediate_desc: "יותר פרטים וצורות מורכבות",
    diff_advanced: "מתקדם",
    diff_advanced_desc: "אתגר אמיתי לאמנים מקצועיים",
    magicCard: "ציור קסם",
    magicCardDesc: "תאר כל דבר!",
    close: "סגור",
    showMe: "תראי לי! ✨",
    nextStep: "השלב הבא",
    magicImprove: "🪄 הפוך לקסם!",
    improving: "מפעיל קסמים...",
    analyzing: "מסתכלת על הציור...",
    resultTitle: "🏆 היצירה הקסומה שלך!",
    backToDraw: "חזרה לציור",
    save: "שמור",
    customPromptTitle: "מה יש לך בדמיון?",
    customPlaceholder: "למשל: דרקון אוכל פיצה...",
    createGuide: "צור מדריך! ✨",
    creating: "מציירים לך מדריך...",
    stepXofY: "שלב {x} מתוך {y}",
    saveSettings: "סיום",
    cancel: "ביטול",
    magicTitle: "בחר סגנון קסום!",
    magicStyleDesc: "איך להפוך את הציור שלך ליצירת מופת?",
    feedbackTitle: "העצה של DrawBuddy:",
    tipTitle: "טיפ של אומן:",
    tipDesc: "כל קו חשוב! תמשיכו להתאמן כדי להשתפר.",
    style_realistic: "מציאותי",
    style_cartoonish: "מצויר",
    style_oil: "ציור שמן",
    style_superhero: "קומיקס",
    cat: "חתול", house: "בית", dog: "כלב", tree: "עץ", car: "מכונית", flower: "פרח", sun: "שמש", fish: "דג", butterfly: "פרפר", robot: "רובוט", spaceship: "חללית", snail: "שבלול", pirate_ship: "ספינת פיראטים", ice_cream: "גלידה", castle: "טירה", unicorn: "חד קרן", dinosaur: "דינוזאור",
    backToDiff: "חזרה",
    // Sun Steps
    step_sun_circle: "ציירו עיגול גדול", step_sun_rays: "הוסיפו קרני שמש", step_sun_face: "ציירו חיוך שמח", step_sun_rays_main: "הוסיפו 4 קרניים ראשיות", step_sun_rays_diag: "הוסיפו 4 קרניים אלכסוניות", step_sun_eyes: "ציירו עיניים גדולות", step_sun_smile: "הוסיפו חיוך רחב", step_sun_body: "ציירו את גוף השמש", step_sun_rays_wavy: "הוסיפו קרניים גליות", step_sun_rays_small: "מלאו בקרניים קטנות", step_sun_eyes_outer: "ציירו את קווי המתאר של העיניים", step_sun_pupils: "הוסיפו אישונים נוצצים", step_sun_nose_mouth: "ציירו אף ופה", step_sun_cheeks: "הוסיפו לחיים ורודות",
    // Ice Cream Steps
    step_ice_cone: "ציירו גביע משולש", step_ice_scoop: "הוסיפו כדור גלידה גדול", step_ice_cherry: "שימו דובדבן למעלה", step_ice_cone_wafer: "ציירו את גביע הוופל", step_ice_scoop_bot: "הוסיפו את הכדור התחתון", step_ice_scoop_top: "הוסיפו את הכדור העליון", step_ice_waffle: "הוסיפו דוגמת וופל", step_ice_chips: "הוסיפו שבבי שוקולד", step_ice_cone_base: "בסיס גביע מחודד", step_ice_scoop_mid: "כדור טעם מרכזי", step_ice_scoop_top_a: "כדור טעם עליון", step_ice_melting: "הוסיפו טיפות נמסות", step_ice_grid: "דוגמת רשת מפורטת לגביע", step_ice_wafer_topper: "הוסיפו וופל לקישוט", step_ice_spoon: "הוסיפו כפית מעוקלת",
    // Flower Steps
    step_flower_center: "עיגול מרכזי", step_flower_petals: "ארבעה עלי כותרת", step_flower_stem: "גבעול הפרח", step_flower_petals_h: "עלי כותרת אופקיים", step_flower_petals_v: "עלי כותרת אנכיים", step_flower_center_det: "מרכז מפורט", step_flower_petal_t: "עלה כותרת עליון", step_flower_petal_r: "עלה כותרת ימני", step_flower_petal_b: "עלה כותרת תחתון", step_flower_petal_l: "עלה כותרת שמאלי", step_flower_leaf: "עלה",
    // House Steps
    step_house_base: "בסיס מרובע", step_house_roof: "גג משולש", step_house_door: "דלת פשוטה", step_house_walls: "קירות", step_house_roof_i: "גג", step_house_door_i: "דלת", step_house_windows: "חלונות", step_house_chimney: "ארובה", step_house_walls_a: "קירות בסיס", step_house_roof_a: "גג ראשי", step_house_door_a: "דלת ראשית", step_house_windows_a: "חלונות גדולים", step_house_window_det: "פרטים לחלונות", step_house_chimney_a: "ארובת לבנים", step_house_attic_flag: "דגל על הגג",
    // Snail Steps
    step_snail_body: "גוף שטוח", step_snail_shell: "קונכייה עגולה", step_snail_stalks: "שני מחושים לעיניים", step_snail_foot: "רגל השבלול", step_snail_shell_i: "קונכייה גדולה", step_snail_spiral: "ספירלת הקונכייה", step_snail_neck: "צוואר ומחושים", step_snail_eyes: "עיניים קטנות", step_snail_foot_a: "רגל רירית ארוכה", step_snail_shell_a: "בית עגול ענק", step_snail_spiral_a: "ספירלת קונכייה עמוקה", step_snail_stalks_a: "מחושים גמישים", step_snail_eyes_a: "עיניים מתבוננות", step_snail_trail: "סימני שביל", step_snail_mouth: "פה שמח",
    // Fish Steps
    step_fish_body: "גוף הדג", step_fish_tail: "זנב משולש", step_fish_eye: "עין קטנה", step_fish_body_i: "גוף אליפטי", step_fish_tail_i: "זנב גדול", step_fish_fins: "סנפירים גביים", step_fish_eye_mouth: "עין ופה", step_fish_scales: "פרטי קשקשים", step_fish_body_a: "גוף של דג פורל", step_fish_tail_a: "זנב פרוש", step_fish_fins_a: "סנפירים אלגנטיים", step_fish_eye_a: "עין נוצצת", step_fish_lips: "שפתי דג", step_fish_scales_a: "קשקשים צדדיים", step_fish_bubbles: "בועות מים",
    // Car Steps
    step_car_body: "גוף המכונית", step_car_roof: "גג עליון", step_car_wheels: "שני גלגלים", step_car_chassis: "שלדה", step_car_windshield: "אזור השמשה", step_car_wheels_i: "גלגלים עבים", step_car_lights: "פנסים", step_car_door: "קו הדלת", step_car_frame_a: "שלדת מכונית ספורט", step_car_cabin: "גג תא הנוסעים", step_car_wheels_a: "גלגלי ספורט", step_car_hubcaps: "צלחות גלגלים", step_car_handle: "ידית דלת", step_car_trim: "קישוטי צד", step_car_exhaust: "צינור פליטה",
    // Cat Steps
    step_cat_body: "עיגול הגוף", step_cat_head: "עיגול הראש", step_cat_ears: "אוזניים מחודדות", step_cat_body_i: "גוף גדול", step_cat_head_i: "ראש", step_cat_ears_i: "אוזניים חדות", step_cat_tail: "זנב ארוך", step_cat_face: "פנים פשוטות", step_cat_pose: "תנוחת ישיבה", step_cat_head_a: "מיקום הראש", step_cat_ears_a: "אוזניים מפורטות", step_cat_tail_a: "זנב מסולסל", step_cat_eyes: "עיני חתול", step_cat_whiskers: "שפם", step_cat_paws: "כפות רגליים קטנות",
    // Dog Steps
    step_dog_body: "גוף הכלבלב", step_dog_head: "ראש שמח", step_dog_ears: "אוזניים שמוטות", step_dog_body_i: "גוף בינוני", step_dog_head_i: "ראש", step_dog_ears_i: "אוזניים גדולות", step_dog_tail: "זנב מכשכש", step_dog_face: "פני כלב", step_dog_pose: "תנוחת כלב יושב", step_dog_head_a: "צורת הראש", step_dog_ears_a: "אוזניים ארוכות", step_dog_tail_a: "זנב שמח", step_dog_pupils: "אישונים", step_dog_muzzle: "זרבובית של כלב", step_dog_paws: "כפות רגליים קדמיות",
    // Butterfly Steps
    step_bf_body: "גוף קטן", step_bf_wings: "שתי כנפיים גדולות", step_bf_antennae: "שני מחושים", step_bf_body_i: "גוף דק", step_bf_wings_t: "זוג כנפיים עליון", step_bf_wings_b: "זוג כנפיים תחתי", step_bf_antennae_c: "מחושים מסולסלים", step_bf_spots: "כתמים על הכנפיים", step_bf_thorax: "חזה מפורט", step_bf_wings_gt: "כנפיים עליונות חינניות", step_bf_wings_sl: "כנפיים תחתונות רכות", step_bf_antennae_l: "מחושים ארוכים", step_bf_patterns: "דוגמאות כנפיים מורכבות", step_bf_veins: "עורקי כנפיים", step_bf_eyes: "עיניים זעירות",
    // Space Steps
    step_space_body: "גוף הטיל", step_space_fins: "סנפירי צד", step_space_window: "חלון קטן", step_space_rocket: "טיל חלק", step_space_thrust_fins: "סנפירי דחף", step_space_porthole: "צוהר", step_space_engine: "נחיר מנוע", step_space_flames: "גיצי להבה", step_space_command: "תא פיקוד", step_space_stabilizers: "כנפי מייצב", step_space_dual_portholes: "צוהרים כפולים", step_space_hull: "לוחות גוף", step_space_ion_engine: "אש מנוע יונים", step_space_fuel_tank: "קו מיכל דלק", step_space_sensors: "מערך חיישנים",
    // Robot Steps
    step_robot_body: "גוף קופסתי", step_robot_head: "ראש מרובע", step_robot_arms: "זרועות דקות", step_robot_body_i: "גוף מעוגל", step_robot_head_i: "ראש", step_robot_shoulders: "מפרקי כתפיים", step_robot_legs: "רגלי רובוט", step_robot_eyes: "עיניים אלקטרוניות", step_robot_chassis: "שלדת גוף", step_robot_processor: "ראש מעבד", step_robot_pivoting_arms: "זרועות מסתובבות", step_robot_heavy_legs: "רגליים חזקות", step_robot_screen: "מסך על החזה", step_robot_led_eyes: "עיני לד", step_robot_antenna: "אנטנה",
    // Dino Steps
    step_dino_hump: "ציירו גוף עם דבשת גדולה", step_dino_head_neck: "הוסיפו ראש וצוואר", step_dino_legs: "הוסיפו שתי רגליים עבות", step_dino_body: "גוף דינוזאור אליפטי", step_dino_tail: "הוסיפו זנב ארוך", step_dino_head_neck_i: "צוואר וראש ארוכים", step_dino_legs_i: "הוסיפו שתי רגליים חזקות", step_dino_spikes: "הוסיפו קוצים על הגב", step_dino_torso: "גוף דינוזאור גדול", step_dino_whip_tail: "זנב ארוך ודק", step_dino_neck_a: "צוואר ארוך וחינני", step_dino_walking_legs: "הוסיפו רגלי הליכה", step_dino_scales: "שורה של קשקשים חדים", step_dino_spots: "הוסיפו כתמי עור", step_dino_eye: "הוסיפו עין ידידותית",
    // Castle Steps
    step_castle_center: "ציירו מרכז מרובע", step_castle_towers: "הוסיפו שני מגדלי צד", step_castle_roofs: "הוסיפו גגות מחודדים", step_castle_keep: "מגדל הטירה הראשי", step_castle_flanking: "הוסיפו מגדלי איגוף", step_castle_spires: "הוסיפו צריחים משולשים", step_castle_battlements: "הוסיפו חומות משוננות", step_castle_arch: "ציירו את הדלת המוקשת", step_castle_base_wall: "חומת בסיס מבוצרת", step_castle_corner: "מגדלי פינה חזקים", step_castle_central: "הוסיפו מגדל מרכזי", step_castle_sharp_spires: "הוסיפו צריחים חדים", step_castle_portcullis: "ציירו דלת סורג", step_castle_windows: "הוסיפו חריצי חלונות", step_castle_flag: "הניפו דגל מלכותי",
    // Uni Steps
    step_uni_circles: "עיגולי גוף וראש", step_uni_horn: "הוסיפו קרן קסומה", step_uni_legs: "הוסיפו 3 רגליים פשוטות", step_uni_body_neck: "גוף וצוואר אליפטיים", step_uni_head: "ציירו את הראש", step_uni_spiral_horn: "הוסיפו את הקרן הספירלית", step_uni_four_legs: "הוסיפו ארבע רגליים חזקות", step_uni_tail: "ציירו זנב זורם", step_uni_horse_frame: "שלדת גוף של סוס", step_uni_arched_neck: "צוואר קשתי חינני", step_uni_horse_head: "ראש סוס אלגנטי", step_uni_long_horn: "הוסיפו את הקרן הארוכה", step_uni_slender_legs: "הוסיפו רגליים דקות", step_uni_rainbow_mane: "הוסיפו רעמת קשת", step_uni_eye: "ציירו את העין",
    // Pirate Steps
    step_pirate_base: "ציירו את בסיס הסירה", step_pirate_mast_sail: "הוסיפו תורן ומפרש", step_pirate_portholes: "הוסיפו שני צוהרים", step_pirate_hull: "ציירו את גוף העץ", step_pirate_tall_mast: "הוסיפו את התורן הגבוה", step_pirate_billowing: "הוסיפו מפרש מתנפח", step_pirate_lookout: "הוסיפו עמדת תצפית וגלים", step_pirate_portholes_i: "ציירו את הצוהרים", step_pirate_hull_a: "גוף סירה מפורט", step_pirate_masts: "ציירו שני תרנים", step_pirate_dual_sails: "הוסיפו מפרשים מעוקלים כפולים", step_pirate_skull: "ציירו גולגולת של פיראטים", step_pirate_waves: "הוסיפו גלי אוקיינוס חזקים", step_pirate_bowsprit: "הוסיפו את חרטום הסירה", step_pirate_planks: "הוסיפו קווי קרשי עץ",
  },
  es: { 
    welcome: "¡Bienvenido a DrawBuddy!", settings: "Ajustes", levelLabel: "Nivel", languageLabel: "Idioma", chooseSubject: "¿Qué quieres dibujar hoy?", diff_beginner: "Principiante", diff_intermediate: "Intermedio", diff_advanced: "Avanzado", magicCard: "Dibujo Mágico", cat: "Gato", house: "Casa", dog: "Perro", tree: "Árbol", car: "Coche", flower: "Flor", sun: "Sol", fish: "Pez", butterfly: "Mariposa", robot: "Robot", spaceship: "Cohete", snail: "Caracol",
    pirate_ship: "Barco Pirata", ice_cream: "Helado", castle: "Castillo", unicorn: "Unicornio", dinosaur: "Dinosaurio"
  },
  ar: { 
    welcome: "مرحباً بك في DrawBuddy!", settings: "الإعدادات", levelLabel: "المستوى", languageLabel: "اللغة", chooseSubject: "ماذا تريد أن ترسم اليوم؟", diff_beginner: "مبتدئ", diff_intermediate: "متوسط", diff_advanced: "متقدم", magicCard: "الرسم السحري", cat: "قطة", house: "بيت", dog: "كلב", tree: "شجرة", car: "سيارة", flower: "زهرة", sun: "شمس", fish: "سمكة", butterfly: "فراشة", robot: "رובוט", spaceship: "سفينة فضائية", snail: "حلزون",
    pirate_ship: "سفينة قراصنة", ice_cream: "آيس كريم", castle: "قلعة", unicorn: "وحيد القرن", dinosaur: "ديناصور"
  },
  zh: { 
    welcome: "欢迎来到 DrawBuddy！", settings: "设置", levelLabel: "级别", languageLabel: "语言", chooseSubject: "今天你想画什么？", diff_beginner: "初级", diff_intermediate: "中级", diff_advanced: "高级", magicCard: "魔法绘画", cat: "小猫", house: "房子", dog: "小狗", tree: "树", car: "汽车", flower: "花朵", sun: "太阳", fish: "小鱼", butterfly: "蝴蝶", robot: "机器人", spaceship: "航天飞机", snail: "蜗牛",
    pirate_ship: "海盗船", ice_cream: "冰淇淋", castle: "城堡", unicorn: "独角兽", dinosaur: "恐龙"
  },
  hi: { 
    welcome: "DrawBuddy में स्वागत है!", settings: "सेटिंग्स", levelLabel: "स्तर", languageLabel: "भाषा", chooseSubject: "आज आप क्या बनाना चाहते हैं?", diff_beginner: "शुरुआती", diff_intermediate: "मध्यम", diff_advanced: "उन्नत", magicCard: "जादुई चित्र", cat: "बिल्ली", house: "घर", dog: "कुत्ता", tree: "पेड़", car: "कार", flower: "फूल", sun: "सूरज", fish: "मछली", butterfly: "तितली", robot: "रोबोट", spaceship: "अंतरिक्ष यान", snail: "घोंघा",
    pirate_ship: "समुद्री डाकू जहाज", ice_cream: "आइसक्रीम", castle: "महल", unicorn: "एकशृंगी", dinosaur: "डायनासोर"
  },
  fr: { 
    welcome: "Bienvenue sur DrawBuddy !", settings: "Paramètres", levelLabel: "Niveau", languageLabel: "Langue", chooseSubject: "Que veux-tu dessiner aujourd'hui ?", diff_beginner: "Débutant", diff_intermediate: "Intermédiaire", diff_advanced: "Avancé", magicCard: "Dessin Magique", cat: "Chat", house: "Maison", dog: "Chien", tree: "Arbre", car: "Voiture", flower: "Fleur", sun: "Soleil", fish: "Poisson", butterfly: "Papillon", robot: "Robot", spaceship: "Fusée", snail: "Escargot",
    pirate_ship: "Bateau Pirate", ice_cream: "Glace", castle: "Château", unicorn: "Licorne", dinosaur: "Dinosaure"
  },
  de: { 
    welcome: "Willkommen bei DrawBuddy!", settings: "Einstellungen", levelLabel: "Stufe", languageLabel: "Sprache", chooseSubject: "Was möchtest du heute zeichnen?", diff_beginner: "Anfänger", diff_intermediate: "Mittel", diff_advanced: "Fortgeschritten", magicCard: "Magisches Zeichnen", cat: "Katze", house: "Haus", dog: "Hund", tree: "Baum", car: "Auto", flower: "Blume", sun: "Sonne", fish: "Fisch", butterfly: "Schmetterling", robot: "Roboter", spaceship: "Raumschiff", snail: "Schnecke",
    pirate_ship: "Piratenschiff", ice_cream: "Eiscreme", castle: "Schloss", unicorn: "Einhorn", dinosaur: "Dinosaurier"
  },
  ja: { 
    welcome: "DrawBuddy へようこそ！", settings: "設定", levelLabel: "レベル", languageLabel: "言語", chooseSubject: "今日は何を描きますか？", diff_beginner: "初級", diff_intermediate: "中級", diff_advanced: "上級", magicCard: "マジックドロー", cat: "猫", house: "家", dog: "犬", tree: "木", car: "車", flower: "花", sun: "太陽", fish: "魚", butterfly: "蝶", robot: "ロボット", spaceship: "宇宙船", snail: "カタツムリ",
    pirate_ship: "海賊船", ice_cream: "アイスクリーム", castle: "お城", unicorn: "ユニコーン", dinosaur: "恐竜"
  }
};
