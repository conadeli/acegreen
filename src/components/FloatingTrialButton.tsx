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
    <button
      onClick={scrollToTrialForm}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50 md:hidden flex items-center"
    >
      <Phone className="w-5 h-5 mr-2" />
      <span className="text-sm">무료체험신청</span>
    </button>
  );
};

export default FloatingTrialButton;