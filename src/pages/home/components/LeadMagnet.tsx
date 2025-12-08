export default function LeadMagnet() {
  return (
    <section id="kontrolinis-sarasas" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <i className="ri-gift-line text-indigo-600"></i>
                <span className="text-sm font-semibold text-indigo-700">Nemokamas Išteklius</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                DI Audito Kontrolinis Sąrašas
              </h2>
              
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Atsisiųskite <strong>18 punktų kontrolinį sąrašą</strong>, kuris padės įvertinti jūsų įmonės DI galimybes ir nustatyti prioritetus.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-xl text-indigo-600 mt-1"></i>
                  <p className="text-slate-700"><strong>Procesai:</strong> Kur DI gali sukurti didžiausią vertę</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-xl text-indigo-600 mt-1"></i>
                  <p className="text-slate-700"><strong>Duomenys:</strong> Kokybės ir prieinamumo vertinimas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-xl text-indigo-600 mt-1"></i>
                  <p className="text-slate-700"><strong>Saugumas:</strong> Privatumo ir etikos gairės</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-xl text-indigo-600 mt-1"></i>
                  <p className="text-slate-700"><strong>Greiti laimėjimai:</strong> 2–4 savaičių pilotų idėjos</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  const button = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
                  if (button) button.click();
                }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg inline-flex items-center space-x-2 whitespace-nowrap cursor-pointer group"
              >
                <span>Atsisiųsti Kontrolinį Sąrašą</span>
                <i className="ri-download-cloud-line text-xl group-hover:scale-110 transition-transform"></i>
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-8 border-2 border-indigo-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className="ri-file-list-3-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">DI Audito Sąrašas</h3>
                    <p className="text-sm text-slate-600">18 punktų • 4 skyriai</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                    <i className="ri-checkbox-blank-circle-line text-indigo-600"></i>
                    <span className="text-sm text-slate-700">Procesų vertinimas ir prioritizavimas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                    <i className="ri-checkbox-blank-circle-line text-indigo-600"></i>
                    <span className="text-sm text-slate-700">Duomenų kokybės ir prieinamumo tikrinimas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                    <i className="ri-checkbox-blank-circle-line text-indigo-600"></i>
                    <span className="text-sm text-slate-700">Saugumo ir privatumo reikalavimai</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                    <i className="ri-checkbox-blank-circle-line text-indigo-600"></i>
                    <span className="text-sm text-slate-700">Quick wins identifikavimas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                    <i className="ri-checkbox-blank-circle-line text-indigo-600"></i>
                    <span className="text-sm text-slate-700">ROI skaičiavimo metodika</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 italic">
                    + Nemokama 30 min. konsultacija po atsisiuntimo
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="text-white font-bold text-sm">PDF</p>
                  <p className="text-white text-xs">Nemokamas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
