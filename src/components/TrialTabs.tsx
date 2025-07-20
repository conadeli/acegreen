import React, { useState } from 'react';

const TrialTabs = () => {
  const [activeTab, setActiveTab] = useState('guide');

  const tabs = [
    { id: 'guide', name: '무료체험안내' },
    { id: 'process', name: '무료체험절차' },
    { id: 'status', name: '무료체험현황' },
    { id: 'apply', name: '무료체험신청' }
  ];

  const tabContent = {
    guide: '/images/trial-guide.jpg',
    process: '/images/trial-process.jpg',
    status: '/images/trial-status.jpg',
    apply: '/images/trial-apply.jpg'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">무료체험 서비스</h2>
          <p className="text-xl text-gray-600">
            부담 없이 체험해보세요. 전문가가 직접 방문하여 상담해드립니다
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-gray-100 p-2 rounded-lg max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 m-1 ${
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
        <div className="bg-gray-50 rounded-xl p-8">
          <img
            src={tabContent[activeTab as keyof typeof tabContent]}
            alt={tabs.find(tab => tab.id === activeTab)?.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TrialTabs;