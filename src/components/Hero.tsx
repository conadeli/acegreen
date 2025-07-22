import React from 'react';

const Hero = () => {
  const scrollToTrialForm = () => {
    const trialForm = document.querySelector('#trial-form');
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-screen text-white">
{/* ✅ 배경 이미지 그대로 표시 */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.jpg"
          alt="산업장비"
          className="w-full h-full object-cover"
        />
      </div>

{/* ✅ 블랙 오버레이 추가 */}
      <div className="absolute inset-0 bg-black bg-opacity-0" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight text-center">
  7일 사용하고 맘에안들면  
  <br />
  <span className="block text-center">그냥 반환!</span>
</h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 opacity-90 leading-relaxed">
           장사하시면서 음식물처리 고민되셨죠? 음식처리비용도 아끼고 최적의 환경도 만들어보세요!          </p>
          <button 
            onClick={scrollToTrialForm}
            className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            무료체험 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
