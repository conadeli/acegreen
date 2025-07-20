import React from 'react';

const Hero = () => {
  const scrollToTrialForm = () => {
    const trialForm = document.querySelector('#trial-form');
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="산업장비"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            혁신적인 폐기물 처리 솔루션
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            환경을 생각하는 차세대 처리 장비로 효율적인 업무 환경을 만들어보세요
          </p>
          <button 
            onClick={scrollToTrialForm}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            무료체험 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;