
export default function UseCases() {
  const useCases = [
    {
      icon: "ri-shopping-cart-line",
      title: "E-komercija",
      items: [
        "Užsakymų apdorojimas ir validacija",
        "Klientų aptarnavimo automatizacija",
        "SEO turinio kūrimas ir optimizavimas",
        "Produktų aprašymų generavimas"
      ]
    },
    {
      icon: "ri-briefcase-line",
      title: "Profesionalios Paslaugos",
      items: [
        "Dokumentų tvarkymas ir analizė",
        "Sutarčių peržiūra ir palyginimas",
        "Klientų užklausų klasifikavimas",
        "Ataskaitų automatizavimas"
      ]
    },
    {
      icon: "ri-settings-line",
      title: "Gamyba/Dirbtuvės",
      items: [
        "Užsakymų srautų optimizavimas",
        "Sandėlio valdymo automatizacija",
        "Kokybės patikros procesai",
        "Priežiūros planavimas"
      ]
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Sveikatos Klinikos",
      items: [
        "Registracijų valdymas",
        "Dokumentų skaitmeninimas",
        "Pacientų užklausų apdorojimas",
        "Vidinė žinių bazė"
      ]
    }
  ];

  return (
    <section id="pritaikymas" className="py-16 sm:py-20 lg:py-24 bg-[#0A4834]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#EBE1CF]/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <i className="ri-lightbulb-line text-[#9F8151]"></i>
            <span className="text-xs sm:text-sm font-semibold text-[#EBE1CF]">Pritaikymas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Kur DI Kuria Vertę
          </h2>
          <p className="text-lg sm:text-xl text-[#EBE1CF] max-w-3xl mx-auto px-4">
            Ne tik DI – rekomenduoju tai, kas duoda didžiausią grąžą:<br />
            <strong className="text-white">skaitmeninimą, automatizaciją ar DI</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-[#EBE1CF] rounded-xl p-6 sm:p-8 hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-[#0A4834] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${useCase.icon} text-3xl text-[#9F8151]`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A4834]">{useCase.title}</h3>
              </div>
              <ul className="space-y-3">
                {useCase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-xl text-[#0A4834] mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-[#0A4834]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-[#EBE1CF]/10 backdrop-blur-sm border border-[#9F8151]/30 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#9F8151] mb-2">Skaitmeninimas</div>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Formos, duomenų struktūra, ataskaitos</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#9F8151] mb-2">Automatizavimas</div>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Darbo eigos, integracijos, patikros</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-[#9F8151] mb-2">DI sprendimai</div>
              <p className="text-sm sm:text-base text-[#EBE1CF]">Analizė, klausimai–atsakymai, klasifikavimas, rekomendacijos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
