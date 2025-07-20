import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Star, ArrowRight } from 'lucide-react';

const TrialHighlightSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToTrialForm = () => {
    const trialForm = document.querySelector('#trial-form');
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = [
    {
      id: 1,
      image: '/images/trial-highlight-1.jpg',
      alt: '소규모 업장 설치 사례'
    },
    {
      id: 2,
      image: '/images/trial-highlight-2.jpg',
      alt: '대규모 업장 설치 사례'
    },
    {
      id: 3,
      image: '/images/trial-highlight-3.jpg',
      alt: '무료체험 진행 모습'
    }
  ];

  const features = [
    {
      number: '01',
      title: '소규모 업장도 OK\n대규모 업장도 OK',
      description: '• 소규모 업장용, 대규모 업소용 맞춤 구비\n• 설치 공간이 없어도 OK'
    },
    {
      number: '02',
      title: '업소용 불가능한\n가격 실현',
      description: '소규모 업소용 189만원\n(할부 49,000원)부터'
    },
    {
      number: '03',
      title: '무료체험 실시',
      description: '일단 사용해보고 결정하는 무료체험 실시'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            국내최초, 국내유일
          </div>
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4">
            가격은 내리고, 용량은 늘리고
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            합법 미생물처리방식 업소용 음식물 처리기
          </p>
          <div className="text-2xl md:text-3xl font-bold text-green-600 mt-4">
            무료체험 센터 AceGREEN PREMIUM
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 이미지 섹션 */}
          <div>
            {/* PC/모바일 공통 슬라이드 */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image) => (
                    <div key={image.id} className="w-full flex-shrink-0 px-2">
                      <div className="aspect-square md:aspect-[4/3]">
                        <img
                          src={image.image}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 네비게이션 버튼 */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* 인디케이터 */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 무료체험 내용 섹션 */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.number} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 whitespace-pre-line">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 추가 강조 메시지 */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">지금 바로 체험해보세요!</h3>
              <p className="mb-4 opacity-90">전문가가 직접 방문하여 무료로 설치해드립니다</p>
              <div className="flex items-center justify-center text-lg font-semibold">
                <span>완전 무료</span>
                <ArrowRight className="w-5 h-5 mx-2" />
                <span>7일 체험</span>
                <ArrowRight className="w-5 h-5 mx-2" />
                <span>만족 시 구매</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToTrialForm}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <Check className="w-5 h-5 mr-2 inline" />
            지금 무료체험 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrialHighlightSection;