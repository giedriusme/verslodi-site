export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">Pradėkime Šiandien</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pasiruošę Optimizuoti<br />
            Savo Verslą su <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Tinkamais Sprendimais?</span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nesvarbu, ar reikia <strong>automatizacijos</strong>, <strong>skaitmenizacijos</strong> ar <strong>dirbtinio intelekto</strong> – aš padėsiu objektyviai įvertinti ir pasirinkti geriausią kelią. Užsiregistruokite <strong>nemokamam konsultacijai</strong> ir sužinokite, kas tikrai padės jūsų verslui.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="#kontaktai"
              className="px-10 py-5 bg-white text-slate-900 rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg inline-flex items-center space-x-3 whitespace-nowrap cursor-pointer group"
            >
              <i className="ri-calendar-line text-2xl"></i>
              <span>Nemokama Konsultacija</span>
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#kontaktai"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all font-bold text-lg inline-flex items-center space-x-3 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-chat-3-line text-2xl"></i>
              <span>Susisiekite Dabar</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-green-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-white">100% Konfidencialumas</div>
                <div className="text-sm text-slate-300">Jūsų duomenys saugūs</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-2xl text-blue-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Greitas Atsakymas</div>
                <div className="text-sm text-slate-300">Per 24 valandas</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <i className="ri-gift-line text-2xl text-purple-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Nemokama Konsultacija</div>
                <div className="text-sm text-slate-300">Be jokių įsipareigojimų</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
