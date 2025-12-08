
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A4834] border-t-4 border-[#9F8151] shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-12 h-12 flex items-center justify-center bg-[#9F8151]/20 rounded-xl flex-shrink-0">
              <i className="ri-cookie-line text-2xl text-[#9F8151]"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                Slapukai („Cookies")
              </h3>
              <p className="text-[#EBE1CF] text-sm leading-relaxed">
                Naudojame slapukus, kad svetainė veiktų sklandžiai ir būtų patogesnė. Būtini slapukai reikalingi svetainės funkcijoms, o analitiniai padeda mums tobulinti paslaugas. Daugiau informacijos rasite{' '}
                <a 
                  href="/slapuku-politika" 
                  target="_blank"
                  className="text-[#9F8151] font-bold hover:underline"
                >
                  slapukų politikoje
                </a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            >
              Tik būtini
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-[#9F8151] text-white rounded-xl hover:bg-[#9F8151]/90 hover:shadow-xl transition-all font-bold text-sm whitespace-nowrap cursor-pointer"
            >
              Sutinku su visais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
