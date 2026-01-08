
import React from 'react';
import { DrawingSubject } from '../types';

interface SidebarProps {
  subjects: DrawingSubject[];
  onSelect: (subject: DrawingSubject) => void;
  onBack: () => void;
  activeId?: string;
  translations: any;
  languageDir: 'rtl' | 'ltr';
  onSettings: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ subjects, onSelect, onBack, activeId, translations, languageDir, onSettings }) => {
  return (
    <aside className="w-full md:w-72 bg-white border-x border-gray-200 p-6 flex flex-col h-auto md:h-screen shadow-xl z-10 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
            🎨
          </div>
          <h1 className="text-2xl font-bold text-gray-800">DrawBuddy</h1>
        </div>
        <button onClick={onBack} className="md:hidden text-gray-400 hover:text-blue-600 font-bold">
          {languageDir === 'rtl' ? '➔' : '⬅'}
        </button>
      </div>

      <button onClick={onBack} className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-700 mb-6 transition-colors">
        <span>{languageDir === 'rtl' ? '➔' : '⬅'}</span>
        <span>{translations.backToDiff || 'Back'}</span>
      </button>
      
      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">{translations.chooseSubject}</p>
      
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 flex-1 custom-scrollbar">
        {subjects.map((subject) => (
          <button 
            key={subject.id} 
            onClick={() => onSelect(subject)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all min-w-[140px] md:min-w-0 ${activeId === subject.id ? 'bg-blue-600 text-white shadow-lg scale-[1.02]' : 'bg-blue-50 text-gray-700 hover:bg-blue-100'}`}
          >
            <span className="text-3xl">{subject.icon}</span>
            <div className="flex-1 overflow-hidden">
              <div className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">{translations[subject.titleKey] || subject.titleKey}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-auto pt-6 space-y-4 border-t border-gray-100">
        <button onClick={onSettings} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 font-bold transition-all transform active:scale-95 shadow-sm">
          <span>⚙️</span>
          <span>{translations.settings}</span>
        </button>
        
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100 hidden md:block">
          <p className="text-xs text-yellow-800 font-black mb-1">✨ {translations.tipTitle || 'Tip'}</p>
          <p className="text-xs text-yellow-700 leading-tight">{translations.tipDesc || 'Enjoy your creative journey!'}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
