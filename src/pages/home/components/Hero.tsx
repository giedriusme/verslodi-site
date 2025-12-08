export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern minimalist office interior with natural elements */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20minimalist%20business%20office%20interior%20design%20with%20large%20floor%20to%20ceiling%20windows%20natural%20daylight%20wooden%20desk%20plants%20greenery%20clean%20workspace%20architectural%20photography%20professional%20contemporary%20scandinavian%20style%20bright%20airy%20space%20geometric%20shapes%20minimal%20furniture%20elegant%20business%20environment%20neutral%20tones%20beige%20cream%20white%20natural%20materials%20sophisticated%20corporate%20interior&width=1920&height=1080&seq=hero-office-interior-minimal-008&orientation=landscape"
          alt="Modern office interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - dark green on left, lighter green on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A4834]/90 via-[#0A4834]/70 to-[#0A4834]/50"></div>
      </div>

      {/* Subtle animated data points overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#9F8151] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#EBE1CF] rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#9F8151] rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#EBE1CF] rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="text-center">
          {/* Badge with modern design */}
          <div className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#9F8151]/40 shadow-lg hover:shadow-xl transition-all">
            <div className="w-2 h-2 bg-[#9F8151] rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Nepriklausomas • 3 d. planas • Darbai, ne prezentacijos</span>
          </div>

          {/* Main Headline with modern typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-[1.1] px-2 tracking-tight">
            VersloDI —<br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#9F8151] via-[#C4A574] to-[#9F8151] bg-clip-text text-transparent animate-gradient">
                DI konsultantas
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#9F8151]/30 blur-xl"></div>
            </span>
            <br />
            <span className="text-[#EBE1CF]">jūsų verslui</span>
          </h1>

          {/* Subheadline with better spacing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#EBE1CF]/90 mb-10 sm:mb-14 max-w-4xl mx-auto leading-relaxed px-4 font-light">
            Nuo idėjų iki pamatuojamo ROI per <span className="font-bold text-white">4–8 savaites</span> — be tiekėjo priklausomybės.<br />
            Rekomenduoju tai, kas duoda <span className="font-bold text-white">didžiausią grąžą</span>: skaitmeninimą, automatizaciją ar DI.
          </p>

          {/* Modern benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14 max-w-6xl mx-auto px-4">
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 hover:bg-white/10 hover:border-[#9F8151]/50 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#9F8151] to-[#C4A574] rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <p className="text-white font-bold text-lg sm:text-xl mb-2">2–4 savaitės</p>
              <p className="text-sm text-[#EBE1CF]/80 leading-relaxed">Bandomasis projektas su greita nauda</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 hover:bg-white/10 hover:border-[#9F8151]/50 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#9F8151] to-[#C4A574] rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-map-pin-time-line text-2xl text-white"></i>
              </div>
              <p className="text-white font-bold text-lg sm:text-xl mb-2">6–12 mėn.</p>
              <p className="text-sm text-[#EBE1CF]/80 leading-relaxed">Aiškus DI įgyvendinimo kelias</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 hover:bg-white/10 hover:border-[#9F8151]/50 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#9F8151] to-[#C4A574] rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <p className="text-white font-bold text-lg sm:text-xl mb-2">ROI skaičiuoklė</p>
              <p className="text-sm text-[#EBE1CF]/80 leading-relaxed">Pagrindinių rodiklių suvestinė</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 hover:bg-white/10 hover:border-[#9F8151]/50 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#9F8151] to-[#C4A574] rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <p className="text-white font-bold text-lg sm:text-xl mb-2">Be tiekėjo pririšimo</p>
              <p className="text-sm text-[#EBE1CF]/80 leading-relaxed">Saugūs sprendimai ir etikos gairės</p>
            </div>
          </div>

          {/* Modern CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-8">
            <a 
              href="#kontaktai"
              className="group relative w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-[#9F8151] to-[#C4A574] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#9F8151]/50 transition-all font-bold text-lg sm:text-xl inline-flex items-center justify-center space-x-3 whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C4A574] to-[#9F8151] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Nemokama 30 min. konsultacija</span>
              <i className="relative ri-calendar-check-line text-2xl group-hover:rotate-12 transition-transform"></i>
            </a>
          </div>

          {/* Trust Badge with modern design */}
          <div className="inline-flex items-center space-x-6 text-[#EBE1CF]/80 text-sm sm:text-base px-4">
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-[#9F8151]"></i>
              <span>Nemokama konsultacija</span>
            </div>
            <div className="w-1 h-1 bg-[#9F8151] rounded-full"></div>
            <div className="flex items-center space-x-2">
              <i className="ri-bar-chart-line text-[#9F8151]"></i>
              <span>Aiškūs skaičiai</span>
            </div>
            <div className="w-1 h-1 bg-[#9F8151] rounded-full hidden sm:block"></div>
            <div className="flex items-center space-x-2 hidden sm:flex">
              <i className="ri-shield-check-line text-[#9F8151]"></i>
              <span>Be įsipareigojimų</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-[#EBE1CF]/60 font-semibold tracking-wider uppercase">Scroll</span>
          <i className="ri-arrow-down-line text-2xl text-[#9F8151]"></i>
        </div>
      </div>
    </section>
  );
}
