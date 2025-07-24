import React, { useState } from 'react';
import { Play, Star, Quote } from 'lucide-react';

const TrialVideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoId = "8bXxFQvw6CM";
  
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const testimonial = {
    name: '최○○ 사장님',
    business: '안산 xx지산 식당',
    content: ' 식당이 너무 바쁜데 일부러 아침일찍오셔서 설치해주시고 설치시간도 매우 짧아서 음식준비하는데 문제가 되지않았습니다. 설치간단하고 무료체험이 된다고해서 체험후 만족도가 높아서 바로 선택했습니다. 도입후 직원들이 너무 좋아합니다',
    rating: 5,
    videoThumbnail: '/images/interview-thumbnail.jpg'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">업소 설치 이렇게 간단해?</h2>
          <p className="text-xl text-gray-600">
            식당 , 업소용 설치가 매우 간단합니다. 영상을통해 확인하세요          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 비디오 영역 */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={`${testimonial.name} 인터뷰`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <button
                        onClick={handlePlayVideo}
                        className="bg-red-600 hover:bg-red-700 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                      인터뷰 영상
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&playsinline=1&enablejsapi=1`}
                    title={`${testimonial.name} 인터뷰`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>

          {/* 인터뷰 내용 */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* 추가 후기 섹션 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">더 많은 설치및 사용 후기</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">"간단한 설치 냄새없어져서 좋아요!!."</p>
              <p className="text-sm text-gray-500">- 인천 xx식당 사장님</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">"마감때 음식물쓰레기 안버려서 좋아요."</p>
              <p className="text-sm text-gray-500">- XX 한식부페 직원</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">"체험하고 선택했어요!!"</p>
              <p className="text-sm text-gray-500">- 화성 xx 식당 사장님</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialVideoSection;