import React from 'react';
import { Phone } from 'lucide-react';

const FloatingTrialButton = () => {
  const scrollToTrialForm = () => {
    const trialForm = document.querySelector('#trial-form');
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] block md:hidden">
      <button
        onClick={scrollToTrialForm}
        className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center whitespace-nowrap"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 9999,
          display: 'flex'
        }}
      >
        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="text-sm font-semibold">무료체험신청</span>
      </button>
    </div>
  );
};

export default FloatingTrialButton;