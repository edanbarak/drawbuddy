
import React from 'react';
import { Lesson } from '../types';

interface SidebarProps {
  lessons: Lesson[];
  onSelect: (lesson: Lesson) => void;
  onBack: () => void;
  activeId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ lessons, onSelect, onBack, activeId }) => {
  return (
    <aside className="w-full md:w-72 bg-white border-l border-gray-200 p-6 flex flex-col h-auto md:h-screen shadow-lg z-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
            🎨
          </div>
          <h1 className="text-2xl font-bold text-gray-800">DrawBuddy</h1>
        </div>
        <button 
          onClick={onBack}
          className="md:hidden text-gray-400 hover:text-blue-600 font-bold"
        >
          ➔
        </button>
      </div>

      <button 
        onClick={onBack}
        className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-700 mb-6 transition-colors"
      >
        <span>➔</span>
        <span>חזרה לרמות</span>
      </button>
      
      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">בחר ציור</p>
      
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 scrollbar-hide">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelect(lesson)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-right min-w-[140px] md:min-w-0 ${
              activeId === lesson.id 
                ? 'bg-blue-600 text-white shadow-lg scale-[1.02]' 
                : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
            }`}
          >
            <span className="text-3xl">{lesson.icon}</span>
            <div className="flex-1">
              <div className="font-bold">{lesson.title}</div>
              <div className={`text-xs ${activeId === lesson.id ? 'text-blue-100' : 'text-gray-400'}`}>
                {lesson.steps.length} שלבים
              </div>
            </div>
          </button>
        ))}
        {lessons.length === 0 && (
          <p className="text-gray-400 italic text-sm">אין עדיין ציורים לרמה זו...</p>
        )}
      </div>

      <div className="mt-auto hidden md:block pt-6 border-t border-gray-100">
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
          <p className="text-xs text-yellow-800 font-medium">✨ טיפ של אומן:</p>
          <p className="text-xs text-yellow-700 mt-1">אל תפחדו לטעות, כל קו הוא התחלה של משהו יפה!</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
