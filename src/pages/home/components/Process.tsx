export default function Process() {
  const steps = [
    {
      icon: "ri-search-line",
      title: "Įžanginis pokalbis",
      description: "Tikslai, ribos, dabartiniai duomenys.",
      time: "30 min."
    },
    {
      icon: "ri-flow-chart",
      title: "Procesų ir duomenų žemėlapis",
      description: "Esama eiga, laikas ir sąnaudos (€), klaidų vietos.",
      time: "2–3 dienos"
    },
    {
      icon: "ri-rocket-line",
      title: "Greita nauda",
      description: "1–2 bandomieji sprendimai su aiškiais rodikliais.",
      time: "2–4 savaitės"
    },
    {
      icon: "ri-tools-line",
      title: "Sprendimo kelias (kurti ar pirkti)",
      description: "Architektūra be tiekėjo pririšimo; parinktys ir kaštai.",
      time: "1 savaitė"
    },
    {
      icon: "ri-team-line",
      title: "Pokyčiai ir mokymai",
      description: "DI higiena, vaidmenys ir atsakomybės, trumpos gairės.",
      time: "2–3 savaitės"
    },
    {
      icon: "ri-line-chart-line",
      title: "Investicijų grąžos stebėsena",
      description: "Rodiklių suvestinė, mėnesio ataskaita, naujų idėjų sąrašas.",
      time: "Nuolatinis"
    }
  ];

  return (
    <section id="procesas" className="py-16 sm:py-20 lg:py-24 bg-[#EBE1CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#0A4834]/10 rounded-full mb-4 sm:mb-6">
            <i className="ri-roadmap-line text-[#0A4834]"></i>
            <span className="text-xs sm:text-sm font-semibold text-[#0A4834]">Kaip Dirbu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4834] mb-4 sm:mb-6 px-4">
            6 Žingsniai iki Rezultato
          </h2>
          <p className="text-lg sm:text-xl text-[#0A4834]/80 max-w-3xl mx-auto px-4">
            Aiškus procesas nuo idėjos iki pamatuojamos investicijų grąžos (ROI)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#0A4834]/10 hover:border-[#9F8151] group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0A4834] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#9F8151] transition-all">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className="text-sm font-bold text-[#9F8151]">Žingsnis {index + 1}</span>
                    <span className="text-xs text-[#0A4834]/60 bg-[#0A4834]/5 px-2 py-1 rounded-full inline-block w-fit">{step.time}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A4834] mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-[#0A4834]/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0A4834] rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9F8151] rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Be tiekėjo pririšimo</h3>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Nepriklausomas vertinimas — visada kliento pusėje</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9F8151] rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-focus-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Pirmiausia – procesai</h3>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Pirmiau eiga ir rodikliai, tik po to įrankiai</p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#9F8151] rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-speed-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Greiti rezultatai</h3>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Bandomieji sprendimai per 2–4 savaites + aiškus planas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
