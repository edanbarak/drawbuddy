
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
    <aside className="w-full md:w-72 lg:w-80 bg-white border-b md:border-b-0 md:border-x border-gray-200 flex flex-col h-auto md:h-screen shadow-xl z-10 overflow-hidden transition-all duration-300">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 md:p-6 bg-white z-20">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl shadow-md rotate-3">
            🎨
          </div>
          <h1 className="text-xl md:text-2xl font-black text-blue-900 tracking-tight">DrawBuddy</h1>
        </div>
        <button onClick={onSettings} className="md:hidden text-gray-500 hover:text-blue-600 p-2 bg-gray-50 rounded-lg">
          <span className="text-xl">⚙️</span>
        </button>
      </div>

      <div className="px-4 md:px-6 mb-4 hidden md:block">
         <button onClick={onBack} className="flex items-center gap-2 text-sm font-black text-blue-500 hover:text-blue-700 transition-colors bg-blue-50/50 px-4 py-2 rounded-xl">
          <span className={`transform transition-transform group-hover:scale-125 ${languageDir === 'rtl' ? 'rotate-0' : 'rotate-0'}`}>
            {languageDir === 'rtl' ? '➔' : '⬅'}
          </span>
          <span>{translations.backToDiff || 'Back'}</span>
        </button>
      </div>
      
      <div className="px-4 md:px-6 mb-2">
        <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">{translations.chooseSubject}</p>
      </div>
      
      {/* Horizontal Scroll on Mobile, Vertical on Desktop */}
      <div className="flex md:flex-col gap-3 px-4 md:px-6 py-2 md:py-0 overflow-x-auto md:overflow-y-auto pb-4 md:pb-6 flex-1 custom-scrollbar no-scrollbar-mobile">
        {subjects.map((subject) => (
          <button 
            key={subject.id} 
            onClick={() => onSelect(subject)}
            className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl transition-all min-w-[150px] md:min-w-0 flex-shrink-0 group active:scale-95 border-b-4 ${
              activeId === subject.id 
              ? 'bg-blue-600 text-white shadow-lg border-blue-800 translate-y-[-2px]' 
              : 'bg-blue-50 text-gray-700 hover:bg-blue-100 border-blue-100 hover:border-blue-200'
            }`}
          >
            <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{subject.icon}</span>
            <div className="flex-1 overflow-hidden">
              <div className="font-black text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis text-left rtl:text-right">
                {translations[subject.titleKey] || subject.titleKey}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="hidden md:block mt-auto p-6 space-y-4 border-t border-gray-100 bg-gray-50/50">
        <button onClick={onSettings} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-white text-gray-600 hover:bg-blue-100 hover:text-blue-700 font-bold transition-all transform active:scale-95 shadow-sm border border-gray-100">
          <span>⚙️</span>
          <span>{translations.settings}</span>
        </button>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-100/50 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">✨</span>
            <p className="text-[10px] text-yellow-800 font-black uppercase tracking-tighter">{translations.tipTitle || 'Artist Tip'}</p>
          </div>
          <p className="text-xs text-yellow-700 leading-snug font-medium italic">{translations.tipDesc || 'Every master was once a beginner. Keep drawing!'}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .no-scrollbar-mobile::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar-mobile {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
