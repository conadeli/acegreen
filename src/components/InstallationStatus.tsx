import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstallationStatus = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // PC용
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0); // 모바일용

// PC용 이미지 (3:1 비율, 2장)
const pcInstallations = [
{
id: 1,
title: '일반문의1',
image: '/images/gallery/문의PC1.png',
location: '공간 | 가격 | 합법'
},
{
id: 2,
title: '일반문의2',
image: '/images/gallery/문의PC1.png',
location: '용량 | 체험 | 형태'
}
];

// 모바일용 이미지 (1:1 비율, 6장)
const mobileInstallations = [
{
id: 1,
title: '일반문의',
image: '/images/gallery/문의모바일1.png',
location: '공간문의'
},
{
id: 2,
title: '일반문의',
image: '/images/gallery/문의모바일2.png',
location: '가격문의'
},
{
id: 3,
title: '일반문의',
image: '/images/gallery/문의모바일3.png',
location: '합법문의'
},
{
id: 4,
title: '일반문의',
image: '/images/gallery/문의모바일4.png',
location: '처리용량문의'
},
{
id: 5,
title: '일반문의',
image: '/images/gallery/문의모바일5.png',
location: '무료체험문의'
},
{
id: 6,
title: '일반문의',
image: '/images/gallery/문의모바일6.png',
location: '설치형태문의'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">설치 현황</h2>
          <p className="text-xl text-gray-600">
            전국 다양한 업체에서 이미 경험하고 있는 효과적인 솔루션
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
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '3/1', height: '350px' }}>
                    <img
                      src={installation.image}
                      alt={installation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end">
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
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <img
                      src={installation.image}
                      alt={installation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
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