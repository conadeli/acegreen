import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstallationStatus = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // PC용
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0); // 모바일용

  // PC용 이미지 (3:1 비율, 2장)
  const pcInstallations = [
    {
      id: 1,
      title: '강남구 음식점',
      image: '/images/installations/gangnam-restaurant.jpg',
      location: '서울 강남구'
    },
    {
      id: 2,
      title: '부산 제조업체',
      image: '/images/installations/busan-factory.jpg',
      location: '부산광역시'
    }
  ];

  // 모바일용 이미지 (1:1 비율, 6장)
  const mobileInstallations = [
    {
      id: 1,
      title: '강남구 음식점',
      image: '/images/installations/gangnam-restaurant.jpg',
      location: '서울 강남구'
    },
    {
      id: 2,
      title: '부산 제조업체',
      image: '/images/installations/busan-factory.jpg',
      location: '부산광역시'
    },
    {
      id: 3,
      title: '대구 호텔',
      image: '/images/installations/daegu-hotel.jpg',
      location: '대구광역시'
    },
    {
      id: 4,
      title: '인천 카페',
      image: '/images/installations/incheon-cafe.jpg',
      location: '인천광역시'
    },
    {
      id: 5,
      title: '광주 펜션',
      image: '/images/installations/gwangju-pension.jpg',
      location: '광주광역시'
    },
    {
      id: 6,
      title: '대전 식당',
      image: '/images/installations/daejeon-restaurant.jpg',
      location: '대전광역시'
    }
  ];

  // PC용 슬라이드 네비게이션
  const nextPcSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pcInstallations.length);
  };

  const prevPcSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pcInstallations.length) % pcInstallations.length);
  };

  // 모바일용 슬라이드 네비게이션
  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % mobileInstallations.length);
  };

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + mobileInstallations.length) % mobileInstallations.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">저희도 될까요??</h2>
          <p className="text-xl font-bold text-orange-600">
            실제 고객님들이 가장 많이 물어보시는 내용입니다
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* PC용 레이아웃 (3:1 비율, 2장) */}
          <div className="hidden md:block overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pcInstallations.map((installation) => (
                <div key={installation.id} className="w-full flex-shrink-0">
                  <div className="relative w-full" style={{ aspectRatio: '3/1', height: '350px' }}>
                    <img
                      src={installation.image}
                      alt={installation.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{installation.title}</h3>
                        <p className="text-lg opacity-90">{installation.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC Navigation Buttons */}
            <button
              onClick={prevPcSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextPcSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* PC Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {pcInstallations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 모바일용 레이아웃 (1:1 비율, 6장) */}
          <div className="block md:hidden overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentMobileSlide * 100}%)` }}
            >
              {mobileInstallations.map((installation) => (
                <div key={installation.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-square">
                    <img
                      src={installation.image}
                      alt={installation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{installation.title}</h3>
                        <p className="text-sm opacity-90">{installation.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 모바일 Navigation Buttons */}
            <button
              onClick={prevMobileSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextMobileSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* 모바일 Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {mobileInstallations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMobileSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationStatus;