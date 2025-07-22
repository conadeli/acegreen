import React, { useState } from 'react';

const TrialTabs = () => {
  const [activeTab, setActiveTab] = useState('guide');

  const tabs = [
    { id: 'guide', name: '무료체험안내' },
    { id: 'process', name: '무료체험절차' }
  ];

  const tabContent = {
    guide: {
      mobile: '/images/gallery/무료체험신청2mo.png',
      desktop: '/images/gallery/무료체험신청컴퓨터2.png'
    },
    process: {
      mobile: '/images/gallery/무료체험신청1mo.png',
      desktop: '/images/gallery/무료체험신청컴퓨터1.png'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-1">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">무료체험 서비스</h2>
          <p className="text-xl text-gray-600">
            부담 없이 체험해보세요. 전문가가 직접 방문하여 상담해드립니다
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-1">
          {/* 모바일 이미지 */}
          <img
            src={tabContent[activeTab as keyof typeof tabContent].mobile}
            alt={tabs.find(tab => tab.id === activeTab)?.name}
            className="w-full h-64 object-cover rounded-lg shadow-md block md:hidden"
          />
          {/* PC 이미지 */}
          <img
            src={tabContent[activeTab as keyof typeof tabContent].desktop}
            alt={tabs.find(tab => tab.id === activeTab)?.name}
            className="w-full h-96 object-cover rounded-lg shadow-md hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default TrialTabs;
