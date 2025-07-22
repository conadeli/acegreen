import React, { useState } from 'react';

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState('small');

  const smallBusinessProducts = [
    {
      id: 1,
      name: '싱크대 설치형',
      image: '/images/gallery/싱크대설치형.png',
      specs: '/images/gallery/싱크대설치형설명.png'
    },
    {
      id: 2,
      name: '스탠드형 AGL',
      image: '/images/gallery/스탠드형AGL.png',
      specs: '/images/gallery/스탠드형AGL설명.png'
    },
    {
      id: 3,
      name: '스탠드형 AGS02',
      image: '/images/gallery/스탠드형AGS02.png',
      specs: '/images/gallery/스탠드형AGS02설명.png'
    },
    {
      id: 4,
      name: '스탠드형 AG50',
      image: '/images/gallery/스탠드형AG50.png',
      specs: '/images/gallery/스탠드형AG50설명.png'
    }
  ];

  const largeVolumeProducts = [
    {
      id: 1,
      name: 'LV-500 대형처리기',
      image: '/images/products/lv-500.jpg',
      specs: '/images/products/lv-500-spec.jpg'
    },
    {
      id: 2,
      name: 'LV-1000 산업용처리기',
      image: '/images/products/lv-1000.jpg',
      specs: '/images/products/lv-1000-spec.jpg'
    },
    {
      id: 3,
      name: 'LV-2000 초대형처리기',
      image: '/images/products/lv-2000.jpg',
      specs: '/images/products/lv-2000-spec.jpg'
    }
  ];

  const currentProducts = activeTab === 'small' ? smallBusinessProducts : largeVolumeProducts;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">제품 안내</h2>
          <p className="text-xl text-gray-600">
            다양한 규모의 업체에 맞는 최적의 처리 솔루션을 제공합니다
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('small')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'small'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              소형업소용
            </button>
            <button
              onClick={() => setActiveTab('large')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'large'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              다량배출용
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">제품 스펙</h4>
                  <img
                    src={product.specs}
                    alt={`${product.name} 스펙`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;