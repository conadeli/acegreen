import React from 'react';
import { Play, Clock, CheckCircle } from 'lucide-react';

const TrialVideoSection = () => {
  const scrollToTrialForm = () => {
    const trialForm = document.querySelector('#trial-form');
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">무료체험 안내 영상</h2>
          <p className="text-xl text-gray-600">
            3분만 투자하여 무료체험 서비스에 대해 자세히 알아보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 비디오 플레이어 영역 */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-blue-600 hover:bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">무료체험 안내 영상</p>
                  <div className="flex items-center justify-center mt-2 text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">3분 25초</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 비디오 설명 */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">이 영상에서 확인하실 수 있습니다</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  무료체험 신청부터 설치까지의 전 과정
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  실제 장비 작동 모습과 효과
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  전문 상담원의 친절한 서비스
                </li>
              </ul>
            </div>
          </div>

          {/* 안내 내용 */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">무료체험 서비스 특징</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">완전 무료 체험</h4>
                    <p className="text-gray-600">설치부터 회수까지 모든 비용이 무료입니다</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">전문가 직접 방문</h4>
                    <p className="text-gray-600">숙련된 전문 상담원이 직접 방문하여 설치 및 교육</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">7일간 체험</h4>
                    <p className="text-gray-600">충분한 시간 동안 실제 효과를 직접 확인</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={scrollToTrialForm}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                지금 무료체험 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialVideoSection;