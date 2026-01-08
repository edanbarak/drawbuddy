
import React from 'react';

interface FeedbackOverlayProps {
  text: string;
  onClose: () => void;
  translations: any;
}

const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({ text, onClose, translations }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200] p-6">
      <div className="bg-white rounded-[2rem] p-8 max-w-lg w-full shadow-2xl relative border-4 border-yellow-400">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl">🌟</div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-4">{translations.feedbackTitle || 'Feedback!'}</h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{text}</p>
          <button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all">
            {translations.close || 'OK!'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackOverlay;
