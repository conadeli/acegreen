import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* 고객문의 섹션 */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold mb-3">고객문의</h3>
          <a 
            href="tel:010-8678-0842"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-2"
          >
            <Phone className="w-5 h-5 mr-2" />
            010-8678-0842
          </a>
          <div className="flex items-center justify-center text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            <span>평일: 09:00 ~ 18:00</span>
          </div>
        </div>

        {/* 링크 섹션 */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-6 md:mb-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
            개인정보처리방침
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
            제휴 및 대리점 문의
          </a>
        </div>

        {/* 회사 정보 */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="text-center space-y-1 text-xs md:text-sm text-gray-400">
            <p>상호명 : 주식회사 킨하트</p>
            <p>사업자등록번호 : 521-88-02783</p>
            <p>주소: 경기도 김포시 김포한강 10로 133번길 107</p>
            <p className="mt-3 md:mt-4">주식회사 킨하트 All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;