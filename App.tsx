
import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import DrawingBoard from './components/DrawingBoard';
import Sidebar from './components/Sidebar';
import FeedbackOverlay from './components/FeedbackOverlay';
import { DrawingSubject, Lesson, Difficulty, LanguageCode } from './types';
import { subjects as initialSubjects } from './constants';
import { languages, uiTranslations } from './translations';

const ART_STYLES = [
  { id: 'realistic', emoji: '📸', labelKey: 'style_realistic', prompt: 'a realistic, high-quality 3D material render' },
  { id: 'cartoonish', emoji: '🎬', labelKey: 'style_cartoonish', prompt: 'a clean, vibrant 3D stylized cartoon character look' },
  { id: 'oil', emoji: '🎨', labelKey: 'style_oil', prompt: 'a professional oil painting texture' },
  { id: 'superhero', emoji: '⚡', labelKey: 'style_superhero', prompt: 'a bold, high-contrast comic book illustration style' },
];

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('beginner');
  const [activeSubject, setActiveSubject] = useState<DrawingSubject | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGuideEnlarged, setIsGuideEnlarged] = useState(false);
  const [showImproveOptions, setShowImproveOptions] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [improvedImageUrl, setImprovedImageUrl] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  
  const [isCustomInputVisible, setIsCustomInputVisible] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGeneratingTutorial, setIsGeneratingTutorial] = useState(false);
  
  const [dynamicLessons, setDynamicLessons] = useState<Record<string, Record<Difficulty, Lesson>>>({});

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const t = useMemo(() => uiTranslations[selectedLanguage] || uiTranslations.en, [selectedLanguage]);
  
  const getT = useCallback((key: string) => {
    return t[key] || uiTranslations.en[key] || key;
  }, [t]);

  const activeLangDir = useMemo(() => {
    const lang = languages.find(l => l.code === selectedLanguage);
    return lang?.dir || 'ltr';
  }, [selectedLanguage]);

  useEffect(() => {
    document.documentElement.dir = activeLangDir;
    document.documentElement.lang = selectedLanguage;
  }, [activeLangDir, selectedLanguage]);

  const allSubjects = useMemo(() => [...initialSubjects], []);

  const activeLesson = useMemo(() => {
    if (!activeSubject) return null;
    const predefined = activeSubject.versions[selectedDifficulty];
    if (predefined && predefined.steps && predefined.steps.length > 0) return predefined;
    const dynamic = dynamicLessons[activeSubject.id]?.[selectedDifficulty];
    if (dynamic && dynamic.steps.length > 0) return dynamic;
    return null; 
  }, [activeSubject, selectedDifficulty, dynamicLessons]);

  const generateMissingLevel = async (subject: DrawingSubject, difficulty: Difficulty) => {
    setIsGeneratingTutorial(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stepCount = difficulty === 'beginner' ? 3 : difficulty === 'intermediate' ? 5 : 7;
      const langLabel = languages.find(l => l.code === selectedLanguage)?.label || 'English';
      const subjectName = getT(subject.titleKey);

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a ${stepCount}-step drawing tutorial for a ${subjectName} at ${difficulty} level. Show each step cumulative.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    instruction: { type: Type.STRING },
                    svgContent: { type: Type.STRING },
                    prevSvgContent: { type: Type.STRING },
                    newSvgContent: { type: Type.STRING }
                  },
                  required: ["instruction", "svgContent", "prevSvgContent", "newSvgContent"]
                }
              }
            },
            required: ["steps"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      const newLesson: Lesson = {
        id: `gen-${subject.id}-${difficulty}`,
        steps: data.steps.map((s: any, i: number) => {
          const content = `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${s.prevSvgContent || ''}</g>
              <g stroke="#3b82f6" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">${s.newSvgContent || s.svgContent}</g>
            </svg>
          `;
          return {
            id: `step-${i}`,
            instructionKey: s.instruction,
            guideImage: `data:image/svg+xml;utf8,${encodeURIComponent(content.trim())}`
          };
        })
      };

      setDynamicLessons(prev => ({
        ...prev,
        [subject.id]: {
          ...(prev[subject.id] || {}),
          [difficulty]: newLesson
        }
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingTutorial(false);
    }
  };

  useEffect(() => {
    if (activeSubject && !activeLesson && !isGeneratingTutorial) {
      generateMissingLevel(activeSubject, selectedDifficulty);
    }
  }, [activeSubject, activeLesson, selectedDifficulty, isGeneratingTutorial]);

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
    if (!customPrompt.trim()) return;
    setIsGeneratingTutorial(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stepCount = selectedDifficulty === 'beginner' ? 3 : selectedDifficulty === 'intermediate' ? 5 : 7;
      const langLabel = languages.find(l => l.code === selectedLanguage)?.label || 'English';
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a step-by-step drawing tutorial for: ${customPrompt}. Level: ${selectedDifficulty}. Language: ${langLabel}. Provide ${stepCount} steps. Highlight current step in blue.`,
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
                    prevSvg: { type: Type.STRING },
                    currSvg: { type: Type.STRING }
                  },
                  required: ["instruction", "prevSvg", "currSvg"]
                }
              }
            },
            required: ["title", "emoji", "steps"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      const customId = `custom-${Date.now()}`;
      const newSubject: DrawingSubject = {
        id: customId,
        titleKey: data.title || customPrompt,
        icon: data.emoji || '✨',
        versions: { beginner: { id: '', steps: [] }, intermediate: { id: '', steps: [] }, advanced: { id: '', steps: [] } }
      };

      const newLesson: Lesson = {
        id: `custom-lesson-${Date.now()}`,
        steps: data.steps.map((s: any, i: number) => {
          const content = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#cbd5e1" stroke-width="2" fill="none">${s.prevSvg || ''}</g><g stroke="#3b82f6" stroke-width="4" fill="none">${s.currSvg}</g></svg>`;
          return { id: `step-${i}`, instructionKey: s.instruction, guideImage: `data:image/svg+xml;utf8,${encodeURIComponent(content.trim())}` };
        })
      };

      setDynamicLessons(prev => ({ ...prev, [customId]: { beginner: { id: '', steps: [] }, intermediate: { id: '', steps: [] }, advanced: { id: '', steps: [] }, [selectedDifficulty]: newLesson } }));
      handleSubjectSelect(newSubject);
      setCustomPrompt('');
    } catch (error) { console.error(error); } finally { setIsGeneratingTutorial(false); }
  };

  const getGeminiFeedback = async () => {
    if (!canvasRef.current || !activeLesson || !activeSubject) return;
    setIsAnalyzing(true);
    const canvas = canvasRef.current;
    const base64Image = canvas.toDataURL('image/png').split(',')[1];
    const currentStep = activeLesson.steps[currentStepIndex];
    const langLabel = languages.find(l => l.code === selectedLanguage)?.label || 'English';
    const instruction = getT(currentStep.instructionKey);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are a friendly art teacher for children. Analyze their sketch of a ${getT(activeSubject.titleKey)}. Target Level: ${selectedDifficulty}. Current Step Instruction: "${instruction}". Respond in ${langLabel}. Be extremely encouraging. Max 2 short sentences.`;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts: [{ inlineData: { mimeType: 'image/png', data: base64Image } }, { text: "Give feedback on my drawing." }] },
        config: { systemInstruction }
      });
      setFeedback(response.text || 'Great job!');
      setShowFeedback(true);
    } catch (error) { setFeedback("Beautiful work!"); setShowFeedback(true); } finally { setIsAnalyzing(false); }
  };

  const handleImproveImage = async (stylePrompt: string) => {
    if (!canvasRef.current || !activeSubject) return;
    setIsImproving(true);
    setShowImproveOptions(false);
    const canvas = canvasRef.current;
    const base64Image = canvas.toDataURL('image/png').split(',')[1];
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ inlineData: { mimeType: 'image/png', data: base64Image } }, { text: `High quality artistic rendering of a child's sketch of a ${getT(activeSubject.titleKey)}. Style: ${stylePrompt}.` }] }
      });
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) { setImprovedImageUrl(`data:image/png;base64,${part.inlineData.data}`); break; }
      }
    } catch (error) { console.error(error); } finally { setIsImproving(false); }
  };

  const nextStep = () => { if (activeLesson && currentStepIndex < activeLesson.steps.length - 1) { setCurrentStepIndex(prev => prev + 1); setShowFeedback(false); setImprovedImageUrl(null); } };
  const prevStep = () => { if (currentStepIndex > 0) { setCurrentStepIndex(prev => prev - 1); setShowFeedback(false); setImprovedImageUrl(null); } };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-blue-50 overflow-hidden font-sans select-none">
      {/* Sidebar - Hidden when subject is active on mobile to give more space */}
      <div className={`${activeSubject ? 'hidden md:block' : 'block'}`}>
        <Sidebar subjects={allSubjects} onSelect={handleSubjectSelect} activeId={activeSubject?.id} onBack={() => setActiveSubject(null)} translations={t} languageDir={activeLangDir} onSettings={() => setShowSettings(true)} />
      </div>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {isCustomInputVisible ? (
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-center max-w-2xl mx-auto overflow-y-auto">
            <div className="text-6xl md:text-7xl mb-6 animate-pulse">🪄</div>
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">{getT('customPromptTitle')}</h2>
            <div className="w-full bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-blue-100">
              <input type="text" value={customPrompt} onChange={(e) => setCustomPrompt(e.target.value)} placeholder={getT('customPlaceholder')} className="w-full text-xl md:text-2xl p-4 md:p-6 rounded-2xl bg-blue-50 border-2 border-transparent focus:border-blue-400 outline-none mb-6 text-center text-slate-900 font-bold placeholder-slate-400 shadow-inner" />
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsCustomInputVisible(false)} className="order-2 sm:order-1 flex-1 py-4 md:py-5 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors">{getT('cancel')}</button>
                <button onClick={generateCustomTutorial} disabled={isGeneratingTutorial || !customPrompt.trim()} className="order-1 sm:order-2 flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-black py-4 md:py-5 rounded-2xl shadow-xl transition-all disabled:opacity-50 text-lg md:text-xl active:scale-95">{isGeneratingTutorial ? getT('creating') : getT('createGuide')}</button>
              </div>
            </div>
          </div>
        ) : !activeSubject ? (
          <div className="flex-1 flex flex-col relative overflow-y-auto p-4 sm:p-10 custom-scrollbar">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 md:mb-12 gap-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">{getT('welcome')}</h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs md:text-sm font-bold text-gray-500 bg-white/50 px-4 py-2 rounded-2xl border border-white/50 shadow-sm backdrop-blur-sm">
                  <span>{getT('languageLabel')}: <span className="text-blue-600">{languages.find(l => l.code === selectedLanguage)?.label} {languages.find(l => l.code === selectedLanguage)?.flag}</span></span>
                  <span className="text-gray-300">|</span>
                  <span>{getT('levelLabel')}: <span className="text-blue-600">{getT(`diff_${selectedDifficulty}`)}</span></span>
                </div>
              </div>
              <button onClick={() => setShowSettings(true)} className="bg-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all border border-blue-50 text-blue-600 font-bold flex items-center gap-2 hover:scale-105 active:scale-95">
                <span className="text-2xl">⚙️</span>
                <span className="hidden sm:inline">{getT('settings')}</span>
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-blue-900/40 mb-6 md:mb-8 uppercase tracking-widest text-center md:text-left">{getT('chooseSubject')}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
              <button onClick={() => setIsCustomInputVisible(true)} className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 group text-white border-b-8 border-blue-800 active:scale-95">
                <span className="text-5xl md:text-6xl block mb-4 group-hover:rotate-12 transition-transform">🪄</span>
                <span className="text-xl md:text-2xl font-black">{getT('magicCard')}</span>
                <p className="text-xs md:text-sm opacity-90 mt-2 font-bold">{getT('magicCardDesc')}</p>
              </button>

              {allSubjects.map(s => (
                <button key={s.id} onClick={() => handleSubjectSelect(s)} className="bg-white p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-md hover:shadow-xl transition-all border-b-8 border-transparent hover:border-blue-400 transform hover:-translate-y-1 flex flex-col items-center justify-center group active:scale-95">
                  <span className="text-5xl md:text-6xl block mb-4 group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="text-lg md:text-xl font-black text-gray-800">{getT(s.titleKey)}</span>
                </button>
              ))}
            </div>
          </div>
        ) : activeLesson ? (
          <>
            {/* Header for Active Drawing - Compact on Mobile */}
            <div className="bg-white/80 backdrop-blur-md sticky top-0 md:static p-3 md:p-4 shadow-sm border-b-4 border-blue-100 flex flex-col items-center z-50">
              <div className="w-full flex justify-between items-center px-2 md:px-4 mb-2">
                <button onClick={() => setActiveSubject(null)} className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 md:w-auto md:px-4 md:py-2 rounded-xl text-sm font-bold flex items-center justify-center transition-colors">
                  <span className="md:mr-1">✕</span> <span className="hidden md:inline">{getT('close')}</span>
                </button>
                <div className="flex gap-1 md:gap-2 max-w-[50%] overflow-hidden">
                  {activeLesson.steps.map((_, i) => (<div key={i} className={`h-1.5 md:h-2 flex-1 min-w-[12px] md:w-8 rounded-full transition-colors ${i === currentStepIndex ? 'bg-blue-500' : i < currentStepIndex ? 'bg-green-400' : 'bg-gray-200'}`} />))}
                </div>
                <div className="text-blue-600 font-bold bg-blue-50 px-2 py-1 md:px-3 rounded-lg text-xs md:text-sm whitespace-nowrap">
                  {getT('stepXofY').replace('{x}', (currentStepIndex + 1).toString()).replace('{y}', activeLesson.steps.length.toString())}
                </div>
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-blue-900 text-center px-4 line-clamp-1">
                {getT(activeLesson.steps[currentStepIndex].instructionKey)}
              </h2>
            </div>

            {/* Drawing Board and Guide Area */}
            <div className="flex-1 relative flex flex-col md:block">
              <div className="flex-1 md:absolute md:inset-0 bg-white rounded-b-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden md:border-8 border-white">
                <DrawingBoard ref={canvasRef} languageDir={activeLangDir} />
                
                {/* Guide Thumbnail - Responsive sizing */}
                <div onClick={() => setIsGuideEnlarged(!isGuideEnlarged)} className={`absolute top-4 ${activeLangDir === 'rtl' ? 'right-4' : 'left-4'} transition-all duration-300 cursor-zoom-in z-20 ${isGuideEnlarged ? 'fixed inset-4 md:inset-20 md:w-[600px] md:h-[600px] m-auto scale-100' : 'w-32 h-32 md:w-64 md:h-64'} bg-white rounded-2xl md:rounded-3xl border-4 border-blue-200 shadow-2xl p-2 group`}>
                  <img src={activeLesson.steps[currentStepIndex].guideImage} alt="guide" className="w-full h-full object-contain rounded-xl" />
                  {!isGuideEnlarged && (<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors rounded-3xl pointer-events-none" />)}
                  {isGuideEnlarged && (
                    <button className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg font-bold">✕</button>
                  )}
                </div>

                {/* Step Navigations - Desktop/Tablet layout */}
                <div className="hidden md:flex absolute inset-y-0 left-0 right-0 pointer-events-none justify-between items-center px-4">
                  <button onClick={prevStep} disabled={currentStepIndex === 0} className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all active:scale-90 ${currentStepIndex === 0 ? 'bg-gray-100 text-gray-300 opacity-50' : 'bg-white hover:bg-blue-50 text-blue-600'}`}>
                    <span className="text-2xl">{activeLangDir === 'rtl' ? '➔' : '⬅'}</span>
                  </button>
                  <button onClick={nextStep} disabled={currentStepIndex === activeLesson.steps.length - 1} className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all active:scale-90 ${currentStepIndex === activeLesson.steps.length - 1 ? 'bg-gray-100 text-gray-300 opacity-50' : 'bg-white hover:bg-blue-50 text-blue-600'}`}>
                    <span className="text-2xl">{activeLangDir === 'rtl' ? '⬅' : '➔'}</span>
                  </button>
                </div>

                {/* Control Bar - Floating at bottom */}
                <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 px-4 z-30 pointer-events-none">
                  <div className="flex gap-3 pointer-events-auto w-full md:w-auto">
                    <button onClick={getGeminiFeedback} disabled={isAnalyzing} className={`flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-sm md:text-xl shadow-lg active:translate-y-1 transition-all flex items-center justify-center gap-3 ${isAnalyzing ? 'bg-gray-400 text-white' : 'bg-yellow-400 hover:bg-yellow-300 text-blue-900 border-b-4 border-yellow-600'}`}>
                      {isAnalyzing ? <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></div> : getT('showMe')}
                    </button>
                    
                    {/* Mobile Only: Prev/Next Buttons in control bar */}
                    <button onClick={prevStep} disabled={currentStepIndex === 0} className={`md:hidden p-3 rounded-full shadow-lg transition-all active:scale-90 ${currentStepIndex === 0 ? 'bg-gray-100 text-gray-300' : 'bg-white text-blue-600 border-b-4 border-gray-200'}`}>
                      <span className="text-xl">{activeLangDir === 'rtl' ? '➔' : '⬅'}</span>
                    </button>
                    <button onClick={nextStep} disabled={currentStepIndex === activeLesson.steps.length - 1} className={`md:hidden p-3 rounded-full shadow-lg transition-all active:scale-90 ${currentStepIndex === activeLesson.steps.length - 1 ? 'bg-gray-100 text-gray-300' : 'bg-white text-blue-600 border-b-4 border-gray-200'}`}>
                      <span className="text-xl">{activeLangDir === 'rtl' ? '⬅' : '➔'}</span>
                    </button>
                  </div>

                  <div className="pointer-events-auto w-full md:w-auto">
                    {currentStepIndex < activeLesson.steps.length - 1 ? (
                      <button onClick={nextStep} className="w-full bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold shadow-lg active:translate-y-1 transition-all text-sm md:text-lg border-b-4 border-green-700">
                        {getT('nextStep')}
                      </button>
                    ) : (
                      <button onClick={() => setShowImproveOptions(true)} disabled={isImproving} className="w-full bg-purple-600 hover:bg-purple-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold shadow-lg active:translate-y-1 transition-all text-sm md:text-lg flex items-center justify-center gap-2 border-b-4 border-purple-800">
                        {isImproving ? getT('improving') : getT('magicImprove')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
             <div className="text-8xl md:text-9xl animate-spin-slow mb-8">🎩</div>
             <h2 className="text-2xl md:text-4xl font-black text-blue-900">{getT('creating')}</h2>
          </div>
        )}
      </main>

      {/* Overlays - Full screen modals */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6 overflow-y-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 max-w-4xl w-full shadow-2xl border-4 md:border-8 border-blue-100 flex flex-col max-h-[90vh]">
            <h3 className="text-2xl md:text-4xl font-black text-blue-900 mb-6 md:mb-10 text-center">{getT('settings')}</h3>
            
            <div className="flex-1 overflow-y-auto space-y-8 md:space-y-12 pr-2 custom-scrollbar">
              <section>
                <h4 className="text-sm md:text-xl font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-6 border-b pb-2">{getT('languageLabel')}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => setSelectedLanguage(lang.code)} className={`p-4 md:p-6 rounded-2xl flex items-center justify-center lg:justify-start gap-2 md:gap-4 transition-all transform ${selectedLanguage === lang.code ? 'bg-blue-600 text-white shadow-xl ring-4 ring-blue-100' : 'bg-blue-50 text-gray-700 hover:bg-blue-100'} active:scale-95`}>
                      <span className="text-2xl md:text-4xl">{lang.flag}</span>
                      <span className="font-bold text-sm md:text-lg">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-sm md:text-xl font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-6 border-b pb-2">{getT('levelLabel')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {['beginner', 'intermediate', 'advanced'].map(lvl => (
                    <button key={lvl} onClick={() => setSelectedDifficulty(lvl as Difficulty)} className={`p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center text-center transition-all transform ${selectedDifficulty === lvl ? 'bg-blue-600 text-white shadow-xl ring-4 ring-blue-100' : 'bg-blue-50 text-gray-700 hover:bg-blue-100'} active:scale-95`}>
                      <span className="text-4xl md:text-5xl mb-2 md:mb-4">{lvl === 'beginner' ? '🌱' : lvl === 'intermediate' ? '🌿' : '🌳'}</span>
                      <span className="font-black text-base md:text-xl mb-1 md:mb-2">{getT(`diff_${lvl}`)}</span>
                      <span className={`text-[10px] md:text-xs opacity-80 ${selectedDifficulty === lvl ? 'text-blue-50' : 'text-gray-500'}`}>{getT(`diff_${lvl}_desc`)}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="pt-6 md:pt-8 mt-4">
              <button onClick={() => { setShowSettings(false); setActiveSubject(null); setCurrentStepIndex(0); }} className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 md:py-6 rounded-2xl md:rounded-3xl text-xl md:text-2xl shadow-xl transition-all active:scale-95 border-b-4 border-green-700">
                {getT('saveSettings')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showImproveOptions && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[60] p-4 md:p-6">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 max-w-2xl w-full shadow-2xl text-center border-4 md:border-8 border-purple-200 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl md:text-3xl font-black text-purple-900 mb-2">{getT('magicTitle')}</h3>
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">{getT('magicStyleDesc')}</p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {ART_STYLES.map(style => (
                <button key={style.id} onClick={() => handleImproveImage(style.prompt)} className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-purple-50 hover:bg-purple-100 border-2 border-purple-100 hover:border-purple-300 transition-all transform group active:scale-95">
                  <span className="text-5xl md:text-6xl group-hover:rotate-12 transition-transform">{style.emoji}</span>
                  <span className="font-bold text-sm md:text-lg text-purple-900">{getT(style.labelKey)}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setShowImproveOptions(false)} className="mt-6 md:mt-8 text-gray-400 font-bold hover:text-gray-600">{getT('cancel')}</button>
          </div>
        </div>
      )}

      {improvedImageUrl && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[70] p-4 md:p-10 overflow-y-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 max-w-4xl w-full flex flex-col items-center relative my-auto">
            <h3 className="text-2xl md:text-4xl font-black text-blue-900 mb-6 md:mb-8">{getT('resultTitle')}</h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full items-center justify-center">
              <div className="flex-1 w-full max-w-[300px] md:max-w-none text-center">
                <canvas ref={(el) => { if (el && canvasRef.current) { el.width = canvasRef.current.width; el.height = canvasRef.current.height; el.getContext('2d')?.drawImage(canvasRef.current, 0, 0); } }} className="w-full aspect-square bg-gray-100 rounded-2xl md:rounded-3xl border-2 md:border-4 border-gray-200 shadow-inner" />
              </div>
              <div className="text-3xl md:text-4xl transform rotate-90 md:rotate-0 text-blue-400">➔</div>
              <div className="flex-1 w-full max-w-[300px] md:max-w-none text-center">
                <img src={improvedImageUrl} className="w-full aspect-square object-cover rounded-2xl md:rounded-3xl border-2 md:border-4 border-purple-400 shadow-2xl" />
              </div>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full">
              <button onClick={() => setImprovedImageUrl(null)} className="order-2 sm:order-1 flex-1 bg-blue-600 text-white font-black py-4 md:py-5 rounded-2xl text-lg md:text-xl shadow-lg active:scale-95">{getT('backToDraw')}</button>
              <button onClick={() => { const link = document.createElement('a'); link.href = improvedImageUrl; link.download = 'magic.png'; link.click(); }} className="order-1 sm:order-2 bg-green-500 text-white font-black px-8 py-4 md:py-5 rounded-2xl text-xl shadow-lg active:scale-95 flex items-center justify-center gap-2">
                <span>💾</span> <span className="sm:hidden">Save</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showFeedback && <FeedbackOverlay text={feedback} onClose={() => setShowFeedback(false)} translations={t} />}

      {(isImproving || isGeneratingTutorial) && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center z-[150] p-4 text-center">
          <div className="text-7xl md:text-9xl animate-spin-slow mb-8">{isImproving ? '🔮' : '🎩'}</div>
          <h2 className="text-2xl md:text-3xl font-black text-purple-900 animate-pulse">{isImproving ? getT('improving') : getT('creating')}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
