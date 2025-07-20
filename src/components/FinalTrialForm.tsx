import React, { useState } from 'react';
import { CheckCircle, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FinalTrialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    termsAccepted: false,
    privacyAccepted: false
  });

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
    
    // EmailJS로 이메일 전송
    const templateParams = {
      to_email: 'your-email@gmail.com', // 여기에 받을 이메일 주소 입력
      from_name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      message: `
무료체험 신청이 접수되었습니다.

신청자 정보:
- 성함: ${formData.name}
- 업체명: ${formData.company}
- 연락처: ${formData.phone}
- 이메일: ${formData.email}
- 지역: ${formData.location}

약관 동의:
- 이용약관 동의: ${formData.termsAccepted ? '동의' : '미동의'}
- 개인정보 수집 동의: ${formData.privacyAccepted ? '동의' : '미동의'}

신청일시: ${new Date().toLocaleString('ko-KR')}
      `
    };

    // EmailJS 설정값들 (실제 값으로 교체 필요)
    const serviceId = 'service_ya8xa52';  // 확인된 Service ID
    const templateId = 'YOUR_TEMPLATE_ID';  // 여기에 Template ID 입력
    const publicKey = 'YOUR_PUBLIC_KEY';    // 여기에 Public Key 입력

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('이메일 전송 성공:', response);
        alert('무료체험 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        // 폼 초기화
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          location: '',
          termsAccepted: false,
          privacyAccepted: false
        });
      })
      .catch((error) => {
        console.error('이메일 전송 실패:', error);
        alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <section id="trial-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">무료체험 신청</h2>
          <p className="text-xl text-gray-600">
            지금 신청하시면 전문 상담원이 직접 방문하여 무료 체험 서비스를 제공합니다
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">성함 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="성함을 입력해주세요"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">업체명 *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="업체명을 입력해주세요"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">지역 *</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">지역을 선택해주세요</option>
                <option value="서울">서울특별시</option>
                <option value="부산">부산광역시</option>
                <option value="대구">대구광역시</option>
                <option value="인천">인천광역시</option>
                <option value="광주">광주광역시</option>
                <option value="대전">대전광역시</option>
                <option value="울산">울산광역시</option>
                <option value="경기">경기도</option>
                <option value="강원">강원도</option>
                <option value="충북">충청북도</option>
                <option value="충남">충청남도</option>
                <option value="전북">전라북도</option>
                <option value="전남">전라남도</option>
                <option value="경북">경상북도</option>
                <option value="경남">경상남도</option>
                <option value="제주">제주특별자치도</option>
              </select>
            </div>

            {/* Terms and Privacy */}
            <div className="space-y-4">
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">약관 동의</h3>
                
                {/* Terms of Service */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        무료체험 이용약관 동의 (필수)
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowTerms(!showTerms)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      내용보기
                    </button>
                  </div>
                  {showTerms && (
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 max-h-32 overflow-y-auto">
                      <p className="font-semibold mb-2">무료체험 이용약관</p>
                      <p>1. 무료체험 서비스는 1회 한정으로 제공됩니다.</p>
                      <p>2. 체험 기간은 최대 7일간 제공됩니다.</p>
                      <p>3. 체험 중 발생하는 모든 비용은 당사에서 부담합니다.</p>
                      <p>4. 체험 종료 후 장비 회수에 협조해주셔야 합니다.</p>
                      <p>5. 기타 자세한 사항은 상담 시 안내해드립니다.</p>
                    </div>
                  )}
                </div>

                {/* Privacy Policy */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        개인정보 수집 및 활용 동의 (필수)
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(!showPrivacy)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      내용보기
                    </button>
                  </div>
                  {showPrivacy && (
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 max-h-32 overflow-y-auto">
                      <p className="font-semibold mb-2">개인정보 수집 및 활용 동의</p>
                      <p><strong>수집 목적:</strong> 무료체험 서비스 제공 및 상담</p>
                      <p><strong>수집 항목:</strong> 성명, 연락처, 이메일, 업체명, 지역</p>
                      <p><strong>보유 기간:</strong> 서비스 완료 후 3개월</p>
                      <p><strong>제3자 제공:</strong> 원칙적으로 제공하지 않음</p>
                      <p>개인정보 수집 동의를 거부할 권리가 있으나, 거부 시 서비스 이용이 제한될 수 있습니다.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!formData.termsAccepted || !formData.privacyAccepted}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-lg flex items-center justify-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              무료체험 신청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalTrialForm;