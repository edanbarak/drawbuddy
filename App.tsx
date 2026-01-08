
import React, { useState, useRef, useMemo } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import DrawingBoard from './components/DrawingBoard';
import Sidebar from './components/Sidebar';
import FeedbackOverlay from './components/FeedbackOverlay';
import { DrawingSubject, Lesson, Difficulty } from './types';
import { subjects as initialSubjects } from './constants';

const ART_STYLES = [
  { id: 'realistic', label: 'מציאותי', icon: '📸', prompt: 'a realistic, high-quality 3D material render' },
  { id: 'cartoonish', label: 'מצויר', icon: '🎬', prompt: 'a clean, vibrant 3D stylized cartoon character look' },
  { id: 'oil', label: 'ציור שמן', icon: '🎨', prompt: 'a professional oil painting texture' },
  { id: 'superhero', label: 'גיבור על', icon: '⚡', prompt: 'a bold, high-contrast comic book illustration style' },
];

const DIFFICULTY_LEVELS: { id: Difficulty; label: string; icon: string; description: string; color: string }[] = [
  { id: 'beginner', label: 'מתחיל', icon: '🌱', description: 'צורות פשוטות וכיפיות', color: 'bg-green-500' },
  { id: 'intermediate', label: 'בינוני', icon: '🌿', description: 'ציורים עם קצת יותר פרטים', color: 'bg-blue-500' },
  { id: 'advanced', label: 'מתקדם', icon: '🌳', description: 'אתגר לאמנים אמיתיים', color: 'bg-purple-600' },
];

const App: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [activeSubject, setActiveSubject] = useState<DrawingSubject | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGuideEnlarged, setIsGuideEnlarged] = useState(false);
  const [showImproveOptions, setShowImproveOptions] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [improvedImageUrl, setImprovedImageUrl] = useState<string | null>(null);
  
  // Custom tutorial states
  const [isCustomInputVisible, setIsCustomInputVisible] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGeneratingTutorial, setIsGeneratingTutorial] = useState(false);
  const [customSubjects, setCustomSubjects] = useState<DrawingSubject[]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const allSubjects = useMemo(() => [...initialSubjects, ...customSubjects], [customSubjects]);

  const activeLesson = useMemo(() => {
    if (!activeSubject || !selectedDifficulty) return null;
    return activeSubject.versions[selectedDifficulty];
  }, [activeSubject, selectedDifficulty]);

  const handleSubjectSelect = (subject: DrawingSubject) => {
    setActiveSubject(subject);
    setCurrentStepIndex(0);
    setFeedback('');
    setShowFeedback(false);
    setImprovedImageUrl(null);
    setShowImproveOptions(false);
    setIsCustomInputVisible(false);
  };

  const generateCustomTutorial = async () => {
    if (!customPrompt.trim() || !selectedDifficulty) return;
    
    setIsGeneratingTutorial(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stepCount = selectedDifficulty === 'beginner' ? 3 : selectedDifficulty === 'intermediate' ? 4 : 5;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', // Switched to Flash for faster processing
        contents: `Create a step-by-step drawing tutorial for children. 
        Topic: ${customPrompt}. 
        Difficulty level: ${selectedDifficulty}. 
        Provide exactly ${stepCount} steps. 
        Each step must include:
        1. A Hebrew instruction.
        2. A simple black line-art SVG (viewBox="0 0 100 100", stroke="black", fill="none", stroke-width="2").
        IMPORTANT: The SVG for each step must include all lines from previous steps so it builds up cumulativeley. Use only simple shapes like <circle>, <rect>, <path>, <ellipse>.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              emoji: { type: Type.STRING },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    instruction: { type: Type.STRING },
                    svgContent: { type: Type.STRING, description: "The inner SVG elements only (no <svg> tag)" }
                  },
                  required: ["instruction", "svgContent"]
                }
              }
            },
            required: ["title", "emoji", "steps"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) throw new Error("Empty response from AI");
      
      const data = JSON.parse(responseText.trim());
      
      if (!data.steps || !Array.isArray(data.steps) || data.steps.length === 0) {
        throw new Error("Invalid tutorial structure");
      }

      const newSubject: DrawingSubject = {
        id: `custom-${Date.now()}`,
        title: data.title || customPrompt,
        icon: data.emoji || '✨',
        versions: {
          [selectedDifficulty]: {
            id: `lesson-${Date.now()}`,
            steps: data.steps.map((s: any, i: number) => ({
              id: `step-${i}`,
              instruction: s.instruction,
              guideImage: `data:image/svg+xml;base64,${btoa(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${s.svgContent}</svg>`)}`
            }))
          },
          // Populate other versions as empty shells to maintain type safety
          beginner: selectedDifficulty === 'beginner' ? { id: '', steps: [] } : { id: 'empty', steps: [] },
          intermediate: selectedDifficulty === 'intermediate' ? { id: '', steps: [] } : { id: 'empty', steps: [] },
          advanced: selectedDifficulty === 'advanced' ? { id: '', steps: [] } : { id: 'empty', steps: [] }
        }
      };
      
      // Ensure the newly created version is correctly placed
      newSubject.versions[selectedDifficulty] = {
        id: `lesson-${Date.now()}`,
        steps: data.steps.map((s: any, i: number) => ({
          id: `step-${i}`,
          instruction: s.instruction,
          guideImage: `data:image/svg+xml;base64,${btoa(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${s.svgContent}</svg>`)}`
        }))
      };

      setCustomSubjects(prev => [newSubject, ...prev]);
      handleSubjectSelect(newSubject);
      setCustomPrompt('');
    } catch (error) {
      console.error("Tutorial Generation Error:", error);
      alert("אופס! הקסם נכשל או לקח יותר מדי זמן. נסו לתאר משהו פשוט יותר או נסו שוב.");
    } finally {
      setIsGeneratingTutorial(false);
    }
  };

  const getGeminiFeedback = async () => {
    if (!canvasRef.current || !activeLesson || !activeSubject) return;

    setIsAnalyzing(true);
    const canvas = canvasRef.current;
    const base64Image = canvas.toDataURL('image/png').split(',')[1];
    
    const currentStep = activeLesson.steps[currentStepIndex];
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `אתה מורה לציור לילדים. הילד מצייר ${activeSubject.title} ברמת ${selectedDifficulty === 'beginner' ? 'מתחיל' : selectedDifficulty === 'intermediate' ? 'בינוני' : 'מתקדם'}. 
      השלב הנוכחי הוא: "${currentStep.instruction}".
      תסתכל על הציור שלו ותן משוב קצר (עד 2 משפטים), מעודד ומאוד חיובי בעברית. 
      אם הוא הצליח, תגיד לו לעבור לשלב הבא. אם יש מה לשפר, תן טיפ קטן אחד בטון חברי.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            { inlineData: { mimeType: 'image/png', data: base64Image } },
            { text: "אנא נתח את הציור שלי ותן משוב חיובי." }
          ]
        },
        config: {
          systemInstruction: systemInstruction
        }
      });

      const text = response.text || 'כל הכבוד! איזה יופי של ציור!';
      setFeedback(text);
      setShowFeedback(true);
    } catch (error) {
      console.error("Gemini Error:", error);
      setFeedback("וואו, איזה יופי! אתה מצייר נהדר, בוא נמשיך לשלב הבא!");
      setShowFeedback(true);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImproveImage = async (stylePrompt: string) => {
    if (!canvasRef.current || !activeSubject) return;

    setIsImproving(true);
    setShowImproveOptions(false);
    
    const canvas = canvasRef.current;
    const base64Image = canvas.toDataURL('image/png').split(',')[1];

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Task: Artistic Transformation of a child's sketch.
      Attached is a child's line drawing of a ${activeSubject.title}.
      
      CRITICAL INSTRUCTIONS:
      1. STRICT FIDELITY: Maintain the exact composition, pose, and structure of the original lines. Do not re-interpret the subject's shape.
      2. SUBJECT ONLY: Render the subject in the style of: ${stylePrompt}.
      3. BACKGROUND: Keep the background a single, solid, soft pastel color. DO NOT add any background elements, scenery, or environment.
      4. NO ADDITIONS: Do not add any extra objects, features, or details that are not present in the original sketch. 
      5. CLEAR INSPIRATION: It must be immediately obvious that this image is a direct improvement of the provided sketch. It should look like the child's own lines were given professional color and texture.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { mimeType: 'image/png', data: base64Image } },
            { text: prompt }
          ]
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setImprovedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Image Gen Error:", error);
      alert("אופס, משהו השתבש בקסם! נסו שוב מאוחר יותר.");
    } finally {
      setIsImproving(false);
    }
  };

  const nextStep = () => {
    if (activeLesson && currentStepIndex < activeLesson.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setShowFeedback(false);
      setImprovedImageUrl(null);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setShowFeedback(false);
      setImprovedImageUrl(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-blue-50 overflow-hidden">
      {selectedDifficulty && (
        <Sidebar 
          subjects={allSubjects} 
          onSelect={handleSubjectSelect} 
          activeId={activeSubject?.id} 
          onBack={() => {
            setSelectedDifficulty(null);
            setActiveSubject(null);
            setIsCustomInputVisible(false);
          }}
        />
      )}

      <main className="flex-1 flex flex-col relative p-4 overflow-hidden">
        {!selectedDifficulty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="text-8xl mb-6 animate-bounce">🎨</div>
            <h1 className="text-5xl font-extrabold text-blue-700 mb-4">DrawBuddy</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-md">בחרו את הרמה שלכם ונתחיל לצייר!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
              {DIFFICULTY_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedDifficulty(level.id)}
                  className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-blue-200 transform hover:-translate-y-2 flex flex-col items-center"
                >
                  <div className={`w-20 h-20 ${level.color} rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform text-white`}>
                    {level.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">{level.label}</h3>
                  <p className="text-gray-500 font-medium text-center">{level.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : isCustomInputVisible ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
            <div className="text-7xl mb-6 animate-pulse">🪄</div>
            <h2 className="text-4xl font-black text-blue-900 mb-4">מה תרצו ללמוד לצייר?</h2>
            <p className="text-xl text-gray-600 mb-8">תאר בכתב כל דבר שעולה על דעתך, וצייר-חבר יבנה לך מדריך!</p>
            
            <div className="w-full bg-white p-8 rounded-[3rem] shadow-2xl border-4 border-blue-100">
              <input 
                type="text" 
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="למשל: חללית עם חתול אסטרונאוט..."
                className="w-full text-2xl p-6 rounded-2xl bg-blue-50 border-2 border-transparent focus:border-blue-400 outline-none mb-6 text-right"
              />
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsCustomInputVisible(false)}
                  className="flex-1 py-5 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200"
                >
                  ביטול
                </button>
                <button 
                  onClick={generateCustomTutorial}
                  disabled={isGeneratingTutorial || !customPrompt.trim()}
                  className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 text-xl"
                >
                  {isGeneratingTutorial ? 'יוצר קסמים... 🎩' : 'צור מדריך! ✨'}
                </button>
              </div>
            </div>
          </div>
        ) : !activeSubject || !activeLesson ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 overflow-y-auto">
            <button 
              onClick={() => setSelectedDifficulty(null)}
              className="absolute top-8 right-8 text-gray-400 font-bold hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <span>חזרה לבחירת רמה</span>
              <span className="text-xl">➔</span>
            </button>
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-4xl font-extrabold text-blue-700 mb-4">מעולה! בחרתם רמת {DIFFICULTY_LEVELS.find(l => l.id === selectedDifficulty)?.label}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">עכשיו בחרו מהרשימה או צרו מדריך חדש!</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
               {/* Magic Creation Card */}
               <button 
                onClick={() => setIsCustomInputVisible(true)}
                className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group text-white border-b-8 border-blue-800"
               >
                 <span className="text-6xl block mb-4 group-hover:rotate-12 transition-transform">🪄</span>
                 <span className="text-2xl font-black">משהו אחר?</span>
                 <p className="text-sm opacity-90 mt-2 font-bold">צרו מדריך קסם אישי</p>
               </button>

               {allSubjects.map(s => (
                 <button 
                  key={s.id} 
                  onClick={() => handleSubjectSelect(s)}
                  className="bg-white p-6 rounded-[2.5rem] shadow-md hover:shadow-xl transition-all border-b-8 border-transparent hover:border-blue-400 transform hover:-translate-y-1 flex flex-col items-center justify-center"
                 >
                   <span className="text-6xl block mb-4">{s.icon}</span>
                   <span className="text-xl font-black text-gray-800">{s.title}</span>
                 </button>
               ))}
            </div>
          </div>
        ) : (
          <>
            {/* Step Progress & Navigation */}
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-4 border-b-4 border-blue-100 flex flex-col items-center">
              <div className="w-full flex justify-between items-center px-4 mb-2">
                <button 
                  onClick={() => setActiveSubject(null)} 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-bold"
                >
                  ✕ סגור ציור
                </button>
                <div className="flex gap-2">
                  {activeLesson.steps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 w-8 rounded-full transition-colors ${i === currentStepIndex ? 'bg-blue-500' : i < currentStepIndex ? 'bg-green-400' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
                <div className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-lg">
                  {currentStepIndex + 1} / {activeLesson.steps.length}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 text-center px-8">
                {activeLesson.steps[currentStepIndex].instruction}
              </h2>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white">
              <DrawingBoard ref={canvasRef} />
              
              {/* Reference Image */}
              <div 
                onClick={() => setIsGuideEnlarged(!isGuideEnlarged)}
                className={`absolute top-6 left-6 transition-all duration-300 cursor-zoom-in z-20 ${
                  isGuideEnlarged ? 'w-64 h-64 scale-110' : 'w-24 h-24'
                } bg-white rounded-2xl border-4 border-blue-200 shadow-xl p-2 group`}
              >
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  הגדל 🔍
                </div>
                <img 
                  src={activeLesson.steps[currentStepIndex].guideImage} 
                  alt="מדריך"
                  className="w-full h-full object-contain rounded-lg"
                />
                <p className="text-[10px] text-center text-gray-400 mt-1 font-bold">דוגמה</p>
              </div>

              {/* Step Navigation Controls */}
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex justify-between items-center px-4">
                <button 
                  onClick={prevStep}
                  disabled={currentStepIndex === 0}
                  className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all ${
                    currentStepIndex === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white hover:bg-blue-50 text-blue-600 hover:scale-110'
                  }`}
                >
                  <span className="text-2xl">➔</span>
                </button>
                <button 
                  onClick={nextStep}
                  disabled={currentStepIndex === activeLesson.steps.length - 1}
                  className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all ${
                    currentStepIndex === activeLesson.steps.length - 1 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white hover:bg-blue-50 text-blue-600 hover:scale-110'
                  }`}
                >
                  <span className="text-2xl">⬅</span>
                </button>
              </div>

              {/* Bottom Actions */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
                <button 
                  onClick={getGeminiFeedback}
                  disabled={isAnalyzing}
                  className={`group relative px-10 py-4 rounded-full font-black text-xl shadow-[0_8px_0_0_#ca8a04] active:shadow-none active:translate-y-2 transition-all flex items-center gap-3 ${
                    isAnalyzing ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-300 text-blue-900'
                  }`}
                >
                  {isAnalyzing ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
                  ) : 'תראי לי! ✨'}
                </button>

                {currentStepIndex < activeLesson.steps.length - 1 ? (
                  <button 
                    onClick={nextStep}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_0_0_#166534] active:shadow-none active:translate-y-2 transition-all text-lg"
                  >
                    המשך לשלב הבא
                  </button>
                ) : (
                  <button 
                    onClick={() => setShowImproveOptions(true)}
                    disabled={isImproving}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_0_0_#581c87] active:shadow-none active:translate-y-2 transition-all text-lg flex items-center gap-2"
                  >
                    {isImproving ? 'מפעיל קסמים... ✨' : '🪄 הפוך לקסם!'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Style Selection Modal */}
      {showImproveOptions && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[60] p-6">
          <div className="bg-white rounded-[3rem] p-8 max-w-2xl w-full shadow-2xl text-center border-8 border-purple-200">
            <h3 className="text-3xl font-black text-purple-900 mb-2">בחר סגנון קסום! ✨</h3>
            <p className="text-gray-600 mb-8 text-lg">איך תרצה שהציור שלך ייראה?</p>
            <div className="grid grid-cols-2 gap-6">
              {ART_STYLES.map(style => (
                <button
                  key={style.id}
                  onClick={() => handleImproveImage(style.prompt)}
                  className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-purple-50 hover:bg-purple-100 border-2 border-purple-100 hover:border-purple-300 transition-all transform hover:scale-105 active:scale-95 group"
                >
                  <span className="text-6xl group-hover:rotate-12 transition-transform">{style.icon}</span>
                  <span className="font-bold text-purple-900 text-xl">{style.label}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setShowImproveOptions(false)}
              className="mt-8 text-gray-400 font-bold hover:text-gray-600"
            >
              ביטול
            </button>
          </div>
        </div>
      )}

      {/* Improved Image Result Modal */}
      {improvedImageUrl && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[70] p-4 sm:p-10">
          <div className="bg-white rounded-[3rem] p-6 sm:p-10 max-w-4xl w-full flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
            
            <h3 className="text-4xl font-black text-blue-900 mb-8 text-center">🏆 היצירה הקסומה שלך!</h3>
            
            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase mb-2">הציור המקורי שלך</p>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border-4 border-gray-200 shadow-inner">
                  <canvas 
                    ref={(el) => {
                      if (el && canvasRef.current) {
                        const ctx = el.getContext('2d');
                        el.width = canvasRef.current.width;
                        el.height = canvasRef.current.height;
                        ctx?.drawImage(canvasRef.current, 0, 0);
                      }
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="text-4xl md:rotate-90">➡️</div>

              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-purple-400 uppercase mb-2">הקסם של DrawBuddy</p>
                <div className="aspect-square bg-purple-50 rounded-3xl overflow-hidden border-4 border-purple-400 shadow-2xl relative group">
                  <img src={improvedImageUrl} alt="Magic result" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4 w-full">
              <button 
                onClick={() => setImprovedImageUrl(null)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-xl"
              >
                חזרה לציור ✏️
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = improvedImageUrl;
                  link.download = 'my-magic-drawing.png';
                  link.click();
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-black px-8 py-5 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-xl"
                title="שמור תמונה"
              >
                💾
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay for AI Magic */}
      {isImproving && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center z-[100]">
          <div className="text-8xl animate-bounce mb-8">🔮</div>
          <h2 className="text-3xl font-black text-purple-900 animate-pulse">מפעיל קסמים על הציור שלך...</h2>
          <p className="text-xl text-purple-600 mt-4 font-bold">זה ייקח רק רגע!</p>
        </div>
      )}

      {/* Loading Overlay for Tutorial Generation */}
      {isGeneratingTutorial && (
        <div className="fixed inset-0 bg-blue-600/90 backdrop-blur-xl flex flex-col items-center justify-center z-[100] text-white">
          <div className="relative">
            <div className="text-9xl animate-pulse">🎩</div>
            <div className="text-5xl absolute -top-4 -right-4 animate-bounce">✨</div>
          </div>
          <h2 className="text-4xl font-black mt-8">החברים הציוריים בונים לך מדריך...</h2>
          <p className="text-xl mt-4 opacity-80">אנחנו מציירים את השלבים במיוחד בשבילך!</p>
        </div>
      )}

      {showFeedback && (
        <FeedbackOverlay 
          text={feedback} 
          onClose={() => setShowFeedback(false)} 
        />
      )}
    </div>
  );
};

export default App;
