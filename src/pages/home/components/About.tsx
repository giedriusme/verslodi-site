export default function About() {
  return (
    <section id="apie" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Apie Mane
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-slate-200">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-user-line text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Nepriklausomas DI Konsultantas
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  Esu nepriklausomas DI konsultantas. Mano tikslas — <strong>objektyvi analizė</strong>, <strong>greiti laimėjimai</strong> ir <strong>aiškus planas</strong>, dirbant jūsų pusėje ir be tiekėjo priklausomybės.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Mano darbas – objektyviai išanalizuoti tavo procesus, rasti 2–3 didžiausios grąžos vietas ir padėti jas įgyvendinti su patikimais partneriais, be tiekėjo priklausomybės.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-star-line text-2xl text-indigo-600"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Nepriklausomumas</h4>
                <p className="text-sm text-slate-600">
                  Nesi susijęs su pardavėjais – pateikiu 2–3 variantus su pliusais/minusais ir kaina
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-team-line text-2xl text-indigo-600"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Partnerių Tinklas</h4>
                <p className="text-sm text-slate-600">
                  Kai reikia – surandu patikimus įgyvendintojus ir prižiūriu projektą
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lock-password-line text-2xl text-indigo-600"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Sauga ir Etika</h4>
                <p className="text-sm text-slate-600">
                  Rolės-bazė, minimalios prieigos, privatumo taisyklės, AI politikos šablonai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
