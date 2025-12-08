export default function CaseStudies() {
  const cases = [
    {
      industry: "E-komercija",
      icon: "ri-shopping-cart-line",
      problem: "3 žmonės × 20 h/mėn. rankiniam užsakymų apdorojimui",
      solution: "Užsakymų tikrinimas ir tvirtinimas + PDF → struktūra + automatinės ataskaitos",
      results: [
        "Apdorojimo laikas −75% (60 h → 15 h)",
        "Produktyvumas +300% (4× greičiau)",
        "45 h/mėn. → ≈ €10 800/metus",
        "Klaidų sumažinimas 90%"
      ],
      quote: "Dabar galime sutelkti dėmesį į klientų aptarnavimą, o ne į dokumentų tvarkymą."
    },
    {
      industry: "AI Balso Agentas",
      icon: "ri-phone-line",
      problem: "25% praleistų skambučių iš 20 sk./d. ⇒ ~5/d. prarasta",
      solution: "24/7 AI agentas, kuris nepraleidžia skambučių + automatinis perskambinimas jeigu nutrūksta ryšys",
      results: [
        "0 praleistų skambučių",
        "≥80% praleistų skambučių atgaunama perskambinant",
        "+0,8–1,2 papildomo pardavimo per dieną",
        "ROI ~850% per metus"
      ],
      quote: "Klientai džiaugiasi, kad visada atsiliepiame. Mes – kad nė vienas skambutis neprarandamas."
    },
    {
      industry: "Profesionalios Paslaugos",
      icon: "ri-briefcase-line",
      problem: "Dokumentų analizė ir sutarčių peržiūra užima daug laiko",
      solution: "Automatinis dokumentų skaitmeninimas + sutarčių palyginimas + ataskaitos",
      results: [
        "60 h/mėn. sutaupoma",
        "Klaidų sumažinimas −85%",
        "ROI ≈ 140% per metus",
        "Projektų apyvarta +25% (~€3 600/mėn.)"
      ],
      quote: "Galime priimti daugiau klientų be papildomų darbuotojų."
    }
  ];

  const moreCases = [
    {
      industry: "Sandėlis / Logistika",
      icon: "ri-truck-line",
      problem: "Lėtas komplektavimas, klaidos važtaraščiuose, maršrutai dėliojami ranka",
      solution: "Skenavimo kontroliniai sąrašai, teksto atpažinimas važtaraščiams, automatinis maršrutų sudarymas",
      results: [
        "Apdorojimo laikas −30–50%",
        "Klaidų važtaraščiuose −80–90%",
        "Sutaupoma 1–2 val./dieną planavimui",
        "Trumpėja pristatymo terminas"
      ],
      benefit: "€1 500–€3 000/mėn."
    },
    {
      industry: "Pardavimai (B2B)",
      icon: "ri-line-chart-line",
      problem: "Prarandami „šilti\" kontaktai, vėluoja atsakymai, daug laiko klientų sistemai",
      solution: "Automatinis potencialių klientų įvertinimas, priminimai, pakartotiniai laiškai, susitikimų rezervacijos",
      results: [
        "Susitikimų skaičius +20–30%",
        "Reakcija į užklausas – per minutes",
        "Administravimas −40%",
        "Tikslesnės pardavimų prognozės"
      ],
      benefit: "€1 000–€1 800/mėn."
    },
    {
      industry: "Personalo Atranka",
      icon: "ri-team-line",
      problem: "Gyvenimo aprašymų peržiūra trunka dienas, dažni neatėjimai į pokalbius",
      solution: "Automatinis CV nuskaitymas ir sugrupavimas, kandidato pagalbininkas, pokalbių rezervacijos",
      results: [
        "Atrankos laikas −50–70%",
        "Kandidatų atsakymų rodiklis +30–50%",
        "Administravimas −60%",
        "Greitesnis priėmimas į darbą"
      ],
      benefit: "€1 500–€3 000/mėn."
    },
    {
      industry: "Apskaita ir Finansai",
      icon: "ri-calculator-line",
      problem: "Sąskaitos suvedamos ranka, sudengimai ir uždarymas vėluoja",
      solution: "Sąskaitų nuskaitymas, automatiniai sudengimai, išimčių sąrašas buhalteriui",
      results: [
        "Rankinis darbas −70–90%",
        "Klaidų kiekis −80%",
        "Mėnesio uždarymas greitėja 1–2 dienomis",
        "Geresnis atsekamumas ir kontrolė"
      ],
      benefit: "€1 250–€2 500/mėn."
    },
    {
      industry: "Klinika / Grožio Centras",
      icon: "ri-heart-pulse-line",
      problem: "Daug praleistų skambučių, daug neatvykimų",
      solution: "Balso pagalbininkas 24/7, priminimai žinutėmis, savitarnos rezervacijos",
      results: [
        "0 praleistų skambučių",
        "Neatvykimai −20–40%",
        "Registratūros apkrova −50%",
        "Klientų pasitenkinimas auga"
      ],
      benefit: "€1 000–€2 000/mėn."
    },
    {
      industry: "Nekilnojamas Turtas",
      icon: "ri-home-4-line",
      problem: "Užklausos apdirbamos per lėtai, daug pasikartojančių klausimų",
      solution: "Užklausų surinkimas iš kanalų, automatinis įvertinimas, apžiūrų rezervacijos",
      results: [
        "Reakcija – per minutes",
        "Apžiūrų skaičius +10–20%",
        "Administracijos −8–12 h/sav.",
        "Vienoda komunikacija per visus kanalus"
      ],
      benefit: "€1 000–€1 800/mėn."
    },
    {
      industry: "Gamyba",
      icon: "ri-settings-3-line",
      problem: "Prastovos, brokas, pasikartojančios klaidos linijoje",
      solution: "Jutiklių duomenų analizė, prognozuojamoji priežiūra, kokybės kontrolė",
      results: [
        "Prastovos −10–15%",
        "Brokas −5–10%",
        "Greitesnis pagrindinės priežasties nustatymas",
        "Pamainų rodikliai realiu laiku"
      ],
      benefit: "€1 500–€2 500/mėn."
    },
    {
      industry: "Klientų Palaikymas",
      icon: "ri-customer-service-2-line",
      problem: "Ilgas pirmojo atsakymo laikas, daug „kopijuok–įklijuok\"",
      solution: "Vidinis žinių pagalbininkas, automatinis užklausų rūšiavimas, atsakymų šablonai",
      results: [
        "Pirmasis atsakymas < 1 min",
        "Sprendimo laikas −25–40%",
        "Specialisto našumas +30–50%",
        "Daugiakalbiai atsakymai iš karto"
      ],
      benefit: "€1 200–€2 000/mėn."
    },
    {
      industry: "E-komercija – Grąžinimai",
      icon: "ri-refund-2-line",
      problem: "Daug pasikartojančių klausimų, grąžinimų apdorojimas ilgas",
      solution: "Pokalbių pagalbininkas su užsakymo paieška, automatinis grąžinimo kelias",
      results: [
        "Pasikartojančių klausimų apkrova −60–70%",
        "Grąžinimų apdorojimo laikas −50%",
        "Didesnis pirkėjų pasitenkinimas",
        "Vienoda atsakymų kokybė"
      ],
      benefit: "€1 400–€1 800/mėn."
    },
    {
      industry: "Teisinės Paslaugos",
      icon: "ri-scales-3-line",
      problem: "Sutarčių peržiūra ir palyginimas atima daug valandų",
      solution: "Palyginimas, rizikų iškėlimas, santraukos ir šablonai",
      results: [
        "Peržiūros laikas −50–70%",
        "Mažiau praleistų rizikingų punktų",
        "Vienodi, patikrinti šablonai",
        "Didesnis projektų apyvartumas"
      ],
      benefit: "€800–€1 600/mėn."
    },
    {
      industry: "Rinkodara ir Turinys",
      icon: "ri-article-line",
      problem: "Daug laiko trunka tekstai, pasiūlymai, naujienlaiškiai; sunku įvertinti grąžą",
      solution: "Mėnesio turinio planas, „balso\" nustatymai, automatiniai juodraščiai, įrašų kalendorius",
      results: [
        "Tekstų rengimo laikas −60%",
        "Turinio kiekis ir nuoseklumas didėja",
        "Aiškūs rodikliai (atidarymai, paspaudimai)",
        "Greitesnis pasiūlymų parengimas"
      ],
      benefit: "€1 000–€1 250/mėn."
    },
    {
      industry: "Pirkimai / Tiekėjų Konkursai",
      icon: "ri-auction-line",
      problem: "Daug laiko užima pasiūlymų rinkimas ir palyginimas, sprendimai vėluoja, praleidžiamos geresnės kainos",
      solution: "Vieninga užduoties forma, automatinis pasiūlymų surinkimas, palyginimo lentelė su svoriais ir aiškia rekomendacija",
      results: [
        "Palyginimo ir derinimo laikas −50–70%",
        "Aiškesni kriterijai, mažiau klaidų ir ginčų",
        "Greitesnis sprendimas, geresnės kainos",
        "Skaidri istorija ir atsekamumas"
      ],
      benefit: "€1 050–€2 300/mėn."
    },
    {
      industry: "Statyba / Objektų Valdymas",
      icon: "ri-building-line",
      problem: "Brigadų grafikai ir ataskaitos vėluoja, daug prastovų dėl informacijos stokos, klaidos medžiagų užsakymuose",
      solution: "Nuotraukomis paremtos užduotys telefone, automatiniai dienos žurnalai, medžiagų užsakymų šablonai, darbo laiko apskaita",
      results: [
        "Ataskaitų rengimo laikas −50–70%",
        "Prastovos objektuose −10–15%",
        "Mažiau klaidų medžiagų užsakymuose",
        "Skaidri brigadų darbo laiko apskaita"
      ],
      benefit: "€1 800–€3 000/mėn."
    },
    {
      industry: "Restoranas / Kavinė",
      icon: "ri-restaurant-line",
      problem: "Praleisti skambučiai rezervacijoms, dvigubos rezervacijos, dažni neatvykimai, daug pasikartojančių klausimų apie meniu ir laikus",
      solution: "24/7 balso pagalbininkas, savitarnos rezervacijos su patvirtinimais, laukiančiųjų sąrašas, priminimai trumposiomis žinutėmis",
      results: [
        "0 praleistų skambučių",
        "Neatvykimai −20–30%",
        "Rezervacijų administravimo laikas −70%",
        "Personalo apkrova priėmime ir telefone mažėja"
      ],
      benefit: "€1 000–€2 000/mėn."
    },
    {
      industry: "Lauko Darbai / Meistrai",
      icon: "ri-tools-line",
      problem: "Daug skambučių ir perskambučių, chaotiškas grafikų derinimas, vėlavimai dėl prasto maršrutų planavimo, pasikartojantys klausimai",
      solution: "Balso pagalbininkas su gedimo klausimynu, automatinis meistro paskyrimas pagal zonas ir užimtumą, priminimai trumposiomis žinutėmis, nuotraukų priėmimas prieš vizitą",
      results: [
        "Daugiau užsakymų per dieną (mažiau „langų\" grafike)",
        "Vėlavimų ir persikėlimų mažėja aiškiai",
        "Pakartotinių vizitų mažėja (geresnė pirminė diagnostika)",
        "Dispečerio darbo krūvis mažėja"
      ],
      benefit: "€1 400–€3 200/mėn."
    },
    {
      industry: "Mokymai / Kursai / Akademijos",
      icon: "ri-graduation-cap-line",
      problem: "Daug pasikartojančių klausimų apie programas ir kainas, rankinis registracijų ir mokėjimų derinimas, sertifikatų išdavimas užtrunka",
      solution: "DUK pagalbininkas, registracijų srautas su automatiniais patvirtinimais, priminimai, dalyvių sąrašai, automatinis sertifikatų generavimas",
      results: [
        "Administravimo laikas mažėja žymiai (registracijos, sąrašai, sertifikatai)",
        "Daugėja užsiregistravusių, mažėja neatvykimų",
        "Aiškesnė komunikacija, mažiau el. laiškų „pirmyn–atgal\"",
        "Greitesnė ataskaita vadovybei"
      ],
      benefit: "€1 000–€3 200/mėn."
    }
  ];

  return (
    <>
      <section id="rezultatai" className="py-16 sm:py-20 lg:py-24 bg-[#0A4834]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#EBE1CF]/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
              <i className="ri-trophy-line text-[#9F8151]"></i>
              <span className="text-xs sm:text-sm font-semibold text-[#EBE1CF]">Rezultatai</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Realūs Rezultatai
            </h2>
            <p className="text-lg sm:text-xl text-[#EBE1CF] max-w-3xl mx-auto px-4">
              Konkretūs pavyzdžiai su pamatuojamais skaičiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-[#EBE1CF] rounded-xl p-6 sm:p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#0A4834] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${caseStudy.icon} text-2xl text-[#9F8151]`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A4834]">{caseStudy.industry}</h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-[#0A4834] mb-2 flex items-center text-sm sm:text-base">
                    <i className="ri-error-warning-line text-red-600 mr-2 flex-shrink-0"></i>
                    Problema:
                  </h4>
                  <p className="text-sm sm:text-base text-[#0A4834]/80">{caseStudy.problem}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-[#0A4834] mb-2 flex items-center text-sm sm:text-base">
                    <i className="ri-lightbulb-line text-[#9F8151] mr-2 flex-shrink-0"></i>
                    Sprendimas:
                  </h4>
                  <p className="text-sm sm:text-base text-[#0A4834]/80">{caseStudy.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-[#0A4834] mb-3 flex items-center text-sm sm:text-base">
                    <i className="ri-line-chart-line text-green-600 mr-2 flex-shrink-0"></i>
                    Rezultatai:
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <i className="ri-checkbox-circle-fill text-[#0A4834] flex-shrink-0"></i>
                        <span className="text-sm sm:text-base text-[#0A4834]/80 font-semibold">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0A4834]/5 rounded-lg p-4 border-l-4 border-[#9F8151]">
                  <p className="text-sm sm:text-base text-[#0A4834]/80 italic">"{caseStudy.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Business Solutions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#0A4834]/5 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
              <i className="ri-lightbulb-flash-line text-[#9F8151]"></i>
              <span className="text-xs sm:text-sm font-semibold text-[#0A4834]">Daugiau Sprendimų</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4834] mb-4 sm:mb-6 px-4">
              Keletas Daugiau Galimų Verslo Sprendimų
            </h2>
            <p className="text-lg sm:text-xl text-[#0A4834]/70 max-w-3xl mx-auto px-4">
              Kiekvienas verslas unikalus – štai dar keletas pavyzdžių, kaip DI gali padėti jūsų sektoriuje
            </p>
          </div>

          {/* Scrollable container with visible overflow hint */}
          <div className="relative">
            <div className="overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-[#9F8151] scrollbar-track-[#EBE1CF]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {moreCases.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-[#EBE1CF] to-[#EBE1CF]/80 rounded-xl p-6 hover:shadow-xl transition-all border-2 border-[#0A4834]/5 hover:border-[#9F8151]/30"
                  >
                    <div className="flex items-center space-x-3 mb-5">
                      <div className="w-10 h-10 bg-[#0A4834] rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-xl text-[#9F8151]`}></i>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0A4834] leading-tight">{item.industry}</h3>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-[#0A4834] mb-2 flex items-center text-xs sm:text-sm">
                        <i className="ri-error-warning-line text-red-600 mr-1.5 flex-shrink-0 text-sm"></i>
                        Problema:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#0A4834]/70 leading-relaxed">{item.problem}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-[#0A4834] mb-2 flex items-center text-xs sm:text-sm">
                        <i className="ri-lightbulb-line text-[#9F8151] mr-1.5 flex-shrink-0 text-sm"></i>
                        Sprendimas:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#0A4834]/70 leading-relaxed">{item.solution}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-[#0A4834] mb-2 flex items-center text-xs sm:text-sm">
                        <i className="ri-bar-chart-box-line text-green-600 mr-1.5 flex-shrink-0 text-sm"></i>
                        Rezultatai:
                      </h4>
                      <ul className="space-y-1.5">
                        {item.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <i className="ri-checkbox-circle-fill text-[#0A4834] flex-shrink-0 text-xs mt-0.5"></i>
                            <span className="text-xs sm:text-sm text-[#0A4834]/70 leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#0A4834] rounded-lg p-3 mt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#EBE1CF]">Numatoma nauda:</span>
                        <span className="text-sm sm:text-base font-bold text-[#9F8151]">{item.benefit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-2">
              <div className="animate-bounce">
                <i className="ri-arrow-down-s-line text-2xl text-[#0A4834]/50"></i>
              </div>
            </div>
          </div>

          {/* Note and Assumptions */}
          <div className="mt-12 sm:mt-16 space-y-6">
            <div className="bg-[#EBE1CF]/50 rounded-xl p-6 border-2 border-[#0A4834]/10">
              <p className="text-xs sm:text-sm text-[#0A4834]/70 text-center italic">
                <i className="ri-information-line mr-1"></i>
                Skaičiai – orientaciniai. Tikslią grąžą paskaičiuojame per 30 min. konsultaciją arba 3 dienų „GROWTH" analizę.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0A4834]/5 to-[#0A4834]/10 rounded-xl p-6 sm:p-8 border border-[#0A4834]/20">
              <h4 className="font-bold text-[#0A4834] mb-4 text-base sm:text-lg flex items-center">
                <i className="ri-calculator-line text-[#9F8151] mr-2"></i>
                Bendros prielaidos (konservatyvios):
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-[#0A4834]/80">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-[#9F8151] flex-shrink-0 mt-0.5"></i>
                  <span>Administracinė valanda: <strong className="text-[#0A4834]">~€20</strong></span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-[#9F8151] flex-shrink-0 mt-0.5"></i>
                  <span>Specialisto valanda: <strong className="text-[#0A4834]">~€30–€40</strong></span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-[#9F8151] flex-shrink-0 mt-0.5"></i>
                  <span>Papildomo užsakymo/paslaugos marža: <strong className="text-[#0A4834]">pagal jūsų veiklą</strong></span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-[#0A4834]/60 mt-4 italic">
                (Įrašykite savo įkainius – skaičiai bus tikslesni.)
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0A4834] to-[#0A4834]/90 rounded-2xl p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Nematote Savo Sektoriaus?
              </h3>
              <p className="text-base sm:text-lg text-[#EBE1CF] mb-6 sm:mb-8 max-w-2xl mx-auto">
                Kiekvienas verslas unikalus. Susitikime ir aptarkime, kaip DI gali padėti būtent jūsų įmonei.
              </p>
              <a
                href="#kontaktai"
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#9F8151] text-white rounded-xl hover:bg-[#9F8151]/90 transition-all font-bold text-base sm:text-lg whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('kontaktai');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Rezervuoti Konsultaciją</span>
                <i className="ri-calendar-check-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
