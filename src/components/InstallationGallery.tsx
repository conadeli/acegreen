import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstallationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 25개의 이미지 배열
  const galleryImages = [
    '/images/gallery/설치1.png',
    '/images/gallery/설치2.png',
    '/images/gallery/설치3.png',
    '/images/gallery/설치4.png',
    '/images/gallery/설치5.png',
    '/images/gallery/설치6.png',
    '/images/gallery/설치7.png',
    '/images/gallery/설치8.png',
    '/images/gallery/설치9.png',
    '/images/gallery/설치10.png',
    '/images/gallery/설치11.png',
    '/images/gallery/설치12.png',
    '/images/gallery/설치13.png',
    '/images/gallery/설치14.png',
    '/images/gallery/설치15.png',
    '/images/gallery/설치16.png',
    '/images/gallery/설치17.png',
    '/images/gallery/설치18.png',
    '/images/gallery/설치19.png',
    '/images/gallery/설치20.png',
    '/images/gallery/설치21.png'
  ];

  // PC용 페이지 구성 (3x3 그리드)
  const getDesktopPages = () => {
    const pages = [];
    for (let i = 0; i < galleryImages.length; i += 9) {
      pages.push(galleryImages.slice(i, i + 9));
    }
    return pages;
  };

  const [currentPage, setCurrentPage] = useState(0);
  const desktopPages = getDesktopPages();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % desktopPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + desktopPages.length) % desktopPages.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">설치 현황 갤러리</h2>
          <p className="text-xl text-gray-600">
            전국 각지의 다양한 설치 사례를 확인해보세요
          </p>
        </div>

        <div className="relative">
          {/* 모바일용 단일 이미지 스와이프 */}
          <div className="block md:hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`설치 현황 ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 모바일 네비게이션 버튼 */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* 모바일 이미지 카운터 */}
            <div className="flex justify-center mt-6">
              <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          {/* PC용 3x3 그리드 */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {desktopPages.map((page, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-6">
                      {page.map((image, imageIndex) => (
                        <div key={imageIndex} className="aspect-square">
                          <img
                            src={image}
                            alt={`설치 현황 ${pageIndex * 9 + imageIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PC 네비게이션 버튼 */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* PC 페이지 인디케이터 */}
            <div className="flex justify-center mt-8 space-x-2">
              {desktopPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-blue-600' : 'bg-gray-300'
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

export default InstallationGallery;