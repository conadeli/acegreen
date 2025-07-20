import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstallationStatus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const installations = [
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
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % installations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + installations.length) % installations.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">설치 현황</h2>
          <p className="text-xl text-gray-600">
            전국 다양한 업체에서 이미 경험하고 있는 효과적인 솔루션
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {installations.map((installation) => (
                <div key={installation.id} className="w-full flex-shrink-0">
                  <div className="relative h-96">
                    <img
                      src={installation.image}
                      alt={installation.title}
                      className="w-full h-full object-cover"
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
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {installations.map((_, index) => (
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
      </div>
    </section>
  );
};

export default InstallationStatus;