import { useState, useEffect } from "react";
import { Cookie, X, Check, Shield, Settings } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "kerjaajadulu_cookie_consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleReject = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof Omit<CookiePreferences, "essential">) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl transition-transform duration-500 ${
          showBanner ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Kami Menghargai Privasi Anda
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda, menyediakan konten yang dipersonalisasi, dan menganalisis lalu lintas kami. Dengan mengklik &quot;Terima Semua&quot;, Anda menyetujui penggunaan cookie.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:ml-4">
              <button
                onClick={handleAcceptAll}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Check className="w-4 h-4" />
                Terima Semua
              </button>
              <button
                onClick={handleReject}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Tolak
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sky-600 text-sm font-medium rounded-lg hover:bg-sky-50 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Kelola Preferensi
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-sky-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Pengaturan Cookie
                </h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Cookie Essensial
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Diperlukan untuk situs web berfungsi dengan baik. Tidak dapat dinonaktifkan.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="w-11 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Cookie Fungsional
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Memungkinkan fitur personalisasi seperti pengingat dan preferensi.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => togglePreference("functional")}
                    className={`w-11 h-6 rounded-full flex items-center transition-colors ${
                      preferences.functional
                        ? "bg-green-500 justify-end px-1"
                        : "bg-gray-300 justify-start px-1"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Cookie Analitik
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Membantu kami memahami cara pengunjung berinteraksi dengan situs.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => togglePreference("analytics")}
                    className={`w-11 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics
                        ? "bg-green-500 justify-end px-1"
                        : "bg-gray-300 justify-start px-1"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Cookie Pemasaran
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Digunakan untuk menyajikan iklan yang relevan dengan minat Anda.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => togglePreference("marketing")}
                    className={`w-11 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing
                        ? "bg-green-500 justify-end px-1"
                        : "bg-gray-300 justify-start px-1"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-6 border-t border-gray-100">
              <button
                onClick={handleSavePreferences}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Check className="w-4 h-4" />
                Simpan Preferensi
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                Terima Semua
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
