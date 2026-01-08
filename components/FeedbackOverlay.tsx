
import React from 'react';

interface FeedbackOverlayProps {
  text: string;
  onClose: () => void;
}

const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({ text, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] p-8 max-w-lg w-full shadow-2xl relative border-4 border-yellow-400 transform animate-in zoom-in slide-in-from-bottom-4 duration-500">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl">
          🌟
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 italic">המשוב של DrawBuddy:</h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {text}
          </p>
          
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95"
          >
            איזה כיף! בוא נמשיך
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackOverlay;
