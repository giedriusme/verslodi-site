export default function Packages() {
  const packages = [
    {
      name: "STARTER",
      subtitle: "Greitas įvertinimas",
      price: "€500",
      description: "Greitas įėjimas, kad per kelias dienas pamatytume didžiausią naudą",
      features: [
        "45–60 min. įvadinis pokalbis + tavo užklausos formos peržiūra",
        "2–3 greitų patobulinimų idėjos su preliminaria laiko ir eurų nauda",
        {
          main: "Pirminė tiekėjų apžvalga (2–3): ar gali įgyvendinti, per kiek laiko, kaina, ar tai mėnesinis planas ar individualus kūrimas",
          sub: "Ribos: iki 2–3 tiekėjų, 1 užklausa + 1 priminimas, be derybų"
        },
        "1 puslapio santrauka + 15 min. kito žingsnio aptarimas",
        "Įskaitymas: €500 į GROWTH, jei pasirenkate per 14 d."
      ],
      time: "48–72 valandos (nuotolinis)",
      summary: "Per 2–3 dienas sužinote, kur sutaupysite daugiausia",
      target: "Kam tinka: mikro ir mažoms įmonėms arba kai reikia greito, aiškaus \"ar verta\" atsakymo.",
      highlight: false,
      buttonText: "Aptarti STARTER (30 min.)"
    },
    {
      name: "GROWTH",
      subtitle: "3 dienų bazė",
      price: "€1 500",
      description: "Per 3 dienas – skaičiai, aiškumas ir 90 dienų planas",
      features: [
        "Procesų žemėlapis (3 svarbiausi srautai) su laiko ir kaštų skaičiuokle",
        "3–5 patobulinimų idėjos (skaitmeninimas, automatizavimas, DI) su numatoma nauda",
        "Aukšto lygio integracijų planas (\"kurti ar pirkti\") su 12 mėn. bendra kaina",
        {
          main: "Pirminė tiekėjų apžvalga (2–3) su svertine lentele (suderinamumas, įdiegimo terminas, kaina) ir trumpa rekomendacija pilotui",
          sub: "Ribos: be derybų; pilna atranka – atskirai"
        },
        "Investicijų grąžos skaičiavimai ir 90 dienų veiksmų planas",
        "1 psl. santrauka + 4–6 psl. planas, pristatymas vadovybei",
        "Įskaitymas: iki €500 į IMPACT, jei pasirenkate per 30 d."
      ],
      time: "3 darbo dienos",
      summary: "Per 3 dienas turėsite aiškų 90 dienų planą ir skaičius",
      target: "Kam tinka: mažoms ir vidutinėms įmonėms, kai norisi aiškaus plano ir skaičių prieš bandomąjį projektą.",
      addon: "Tiekėjų atrankos konkursas + €1 200",
      highlight: true,
      buttonText: "Aptarti GROWTH (30 min.)"
    },
    {
      name: "IMPACT",
      subtitle: "Galimybių studija",
      price: "€5 900",
      description: "Kai sprendimas palies kelias komandas ar sistemas",
      features: [
        "Išsamus integracijų planas (jungtys, trigeriai, klaidų tvarkymas, atsakomybės) + 12–24 mėn. bendra kaina",
        {
          main: "Pirminė tiekėjų apžvalga (2–3): realūs atsakymai, svertinė lentelė ir aiški rekomendacija, ką testuoti bandomajame projekte",
          sub: "Ribos: be derybų; pilna atranka – atskirai"
        },
        "Pagrindinių rodiklių (laikas, klaidos, sąnaudos/pajamos) scenarijai",
        "6–12 mėn. kelias: etapai, grafikas, atsakomybės, rizikų suvaldymas",
        "10–15 psl. dokumentas + 1 psl. santrauka vadovams"
      ],
      time: "5–10 dienų",
      summary: "Per savaitę–dvi gaunate pilną sprendimo kelią ir paskaičiuotą biudžetą",
      target: "Kam tinka: kai reikia tvirto pagrindo platesniam diegimui ir biudžeto tvirtinimui.",
      addon: "Tiekėjų atrankos konkursas + €1 200",
      addonDetails: "Parengiama užduotis, kviečiami 3–5 tiekėjai, surenkami pasiūlymai, vertinimo lentelė, suvestinė ir 60 min. pristatymas. Derybų turas, bandomasis bandymas, sutarties derinimas – pagal atskirą sąmatą.",
      highlight: false,
      buttonText: "Aptarti IMPACT (30 min.)"
    }
  ];

  return (
    <section id="paketai" className="py-16 sm:py-20 lg:py-24 bg-[#EBE1CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#0A4834]/10 rounded-full mb-4 sm:mb-6">
            <i className="ri-price-tag-3-line text-[#0A4834]"></i>
            <span className="text-xs sm:text-sm font-semibold text-[#0A4834]">Planai</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4834] mb-4 sm:mb-6 px-4">
            Planai ir Kainos
          </h2>
          <p className="text-lg sm:text-xl text-[#0A4834]/80 max-w-3xl mx-auto px-4">
            Aiškios kainos, aiškūs rezultatai – be paslėptų mokesčių
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-6 sm:p-8 ${
                pkg.highlight 
                  ? 'bg-[#0A4834] border-4 border-[#9F8151] shadow-2xl lg:transform lg:scale-105' 
                  : 'bg-white border-2 border-[#0A4834]/20'
              }`}
            >
              {pkg.highlight && (
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#9F8151] rounded-full mb-4">
                  <i className="ri-star-fill text-white text-sm"></i>
                  <span className="text-xs font-bold text-white">POPULIARIAUSIAS</span>
                </div>
              )}
              
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-[#0A4834]'}`}>
                {pkg.name}
              </h3>
              <p className={`text-base sm:text-lg mb-4 ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]/70'}`}>
                {pkg.subtitle}
              </p>
              
              <div className="mb-6">
                <div className={`text-3xl sm:text-4xl font-bold mb-1 ${pkg.highlight ? 'text-[#9F8151]' : 'text-[#0A4834]'}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm mt-2 ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]/70'}`}>
                  <i className="ri-time-line mr-1"></i>
                  {pkg.time}
                </div>
              </div>

              <p className={`mb-6 leading-relaxed text-sm sm:text-base ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]/80'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <i className={`ri-checkbox-circle-fill text-xl mt-0.5 flex-shrink-0 ${
                      pkg.highlight ? 'text-[#9F8151]' : 'text-[#0A4834]'
                    }`}></i>
                    <div className="flex-1">
                      {typeof feature === 'string' ? (
                        <span className={`text-sm ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]/80'}`}>
                          {feature}
                        </span>
                      ) : (
                        <>
                          <span className={`text-sm ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]/80'}`}>
                            {feature.main}
                          </span>
                          <div className={`text-xs mt-1 italic ${pkg.highlight ? 'text-[#EBE1CF]/70' : 'text-[#0A4834]/60'}`}>
                            {feature.sub}
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {pkg.addon && (
                <div className={`mb-6 p-4 rounded-xl border ${
                  pkg.highlight 
                    ? 'bg-[#9F8151]/20 border-[#9F8151]/50' 
                    : 'bg-[#9F8151]/10 border-[#9F8151]/30'
                }`}>
                  <p className={`text-sm font-semibold ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]'}`}>
                    <i className="ri-add-circle-line mr-1"></i>
                    Pasirenkamas priedas:
                  </p>
                  <p className={`text-sm mt-1 ${pkg.highlight ? 'text-[#EBE1CF]/90' : 'text-[#0A4834]/80'}`}>
                    {pkg.addon}
                  </p>
                  {pkg.addonDetails && (
                    <p className={`text-xs mt-2 ${pkg.highlight ? 'text-[#EBE1CF]/70' : 'text-[#0A4834]/60'}`}>
                      {pkg.addonDetails}
                    </p>
                  )}
                </div>
              )}

              <div className={`mb-6 p-4 rounded-xl ${
                pkg.highlight 
                  ? 'bg-[#EBE1CF]/10' 
                  : 'bg-[#0A4834]/5'
              }`}>
                <p className={`text-sm font-semibold ${pkg.highlight ? 'text-[#EBE1CF]' : 'text-[#0A4834]'}`}>
                  <i className="ri-lightbulb-line mr-1"></i>
                  {pkg.summary}
                </p>
              </div>

              {pkg.target && (
                <div className={`mb-6 p-4 rounded-xl border ${
                  pkg.highlight 
                    ? 'bg-[#EBE1CF]/10 border-[#9F8151]/30' 
                    : 'bg-[#0A4834]/5 border-[#0A4834]/20'
                }`}>
                  <p className={`text-sm ${pkg.highlight ? 'text-[#EBE1CF]/90' : 'text-[#0A4834]/80'}`}>
                    <i className="ri-group-line mr-1"></i>
                    {pkg.target}
                  </p>
                </div>
              )}

              <a 
                href="#kontaktai"
                className={`block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all whitespace-nowrap cursor-pointer text-center ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-[#9F8151] to-[#B89968] text-white hover:shadow-2xl hover:scale-105'
                    : 'bg-[#0A4834] text-white hover:bg-[#0A4834]/90'
                }`}
              >
                {pkg.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#0A4834]/10 mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <i className="ri-information-line text-[#0A4834]"></i>
            <p className="text-sm font-semibold text-[#0A4834]">Svarbu žinoti:</p>
          </div>
          <p className="text-sm text-[#0A4834]/80">
            "Įskaitymas" reiškia, kad sumokėta suma atimama iš aukštesnio plano kainos nurodytu laikotarpiu.
          </p>
        </div>

        <div className="bg-[#0A4834] rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">ROI Skaičiavimo Pavyzdys</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#EBE1CF]/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-[#9F8151]/30">
              <h4 className="font-bold text-[#9F8151] mb-4 text-base sm:text-lg">Situacija:</h4>
              <ul className="space-y-2 text-sm sm:text-base text-[#EBE1CF]">
                <li>• 2 darbuotojai po 30 h/mėn. rankinio darbo</li>
                <li>• Valandos kaštas: €20</li>
                <li>• Metinis sutaupymas: 60 × 20 × 12 = <strong className="text-white">€14 400</strong></li>
              </ul>
            </div>
            <div className="bg-[#EBE1CF]/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-[#9F8151]/30">
              <h4 className="font-bold text-[#9F8151] mb-4 text-base sm:text-lg">Investicija:</h4>
              <ul className="space-y-2 text-sm sm:text-base text-[#EBE1CF]">
                <li>• Įrankiai + įgyvendinimas: €6 000</li>
                <li>• Grynas metinis efektas: <strong className="text-white">€8 400</strong></li>
                <li>• ROI: <strong className="text-[#9F8151] text-xl sm:text-2xl">~140%</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
