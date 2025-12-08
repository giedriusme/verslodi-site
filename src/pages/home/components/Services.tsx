export default function Services() {
  const services = [
    {
      icon: 'ri-search-eye-line',
      title: 'Objektyvi Analizė: DI ar Automatizacija?',
      description: 'Nepriklausoma jūsų verslo procesų analizė. Ne visada reikia dirbtinio intelekto – kartais pakanka paprastos automatizacijos ar skaitmenizacijos. Identifikuoju, kas tikrai padės, o kur – tik išleistumėte pinigus veltui.',
      features: ['Procesų auditas', 'DI poreikio vertinimas', 'Automatizacijos galimybės', 'Skaitmenizacijos planas']
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Aiškus Veiksmų Planas',
      description: 'Po konsultacijos gausite detalų planą: ar reikia DI, ar pakaks automatizacijos, kokias technologijas naudoti, kokia tvarka diegti, kiek tai kainuos. Viskas aiškiai ir suprantamai.',
      features: ['Technologijų rekomendacijos', 'Diegimo etapai', 'Biudžeto planas', 'Rizikų įvertinimas']
    },
    {
      icon: 'ri-team-line',
      title: 'Patikrintų Partnerių Tinklas',
      description: 'Turiu patikrintų partnerių, kurie įgyvendina DI sprendimus, automatizaciją ir skaitmenizaciją. Galite kreiptis patys arba per mane gauti geriausią kainos ir kokybės santykį.',
      features: ['Patikrinti partneriai', 'Geriausi pasiūlymai', 'Kokybės garantija', 'Palaikymas po diegimo']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Jūsų Interesai Pirmoje Vietoje',
      description: 'Kadangi pats nedarau įrankių, mano tikslas – tik jūsų sėkmė. Rekomenduoju tai, kas tikrai veiks: ar tai būtų DI, automatizacija, ar skaitmenizacija. Ne tai, kas man naudinga parduoti.',
      features: ['Nepriklausoma nuomonė', 'Objektyvūs sprendimai', 'Ilgalaikė strategija', 'Nuolatinė pagalba']
    }
  ];

  return (
    <section id="paslaugos" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <i className="ri-service-line text-purple-600"></i>
            <span className="text-sm font-semibold text-purple-700">Kaip Aš Dirbu</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Kodėl <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Nepriklausomumas</span> Svarbu?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kai konsultantas neturi savo produktų, jis gali <strong>objektyviai įvertinti</strong> jūsų situaciją ir pasakyti tiesą: ar jums reikia <strong>dirbtinio intelekto</strong>, ar galbūt pakaks <strong>automatizacijos</strong> ar <strong>skaitmenizacijos</strong>. Ne visada reikia brangių DI sprendimų – kartais paprastesni įrankiai atneša geresnę grąžą.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-indigo-600 text-sm"></i>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <i className="ri-hand-heart-line text-3xl text-white"></i>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Kaip Tai Veikia Praktiškai?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Pirmiausia išanalizuojame jūsų verslo procesus ir <strong>objektyviai įvertiname</strong>, ar jums reikia <strong>dirbtinio intelekto</strong>, ar galbūt pakaks <strong>paprastos automatizacijos</strong> ar <strong>skaitmenizacijos</strong>. Kartais įmonei dar per anksti DI, o reikia pradėti nuo paprastesnių sprendimų.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Po konsultacijos ir aiškaus plano, jūs galite <strong>pasirinkti</strong>: kreiptis į sprendimus diegiančias įmones savarankiškai arba per mano <strong>patikrintų partnerių tinklą</strong> gauti turbūt geriausią kainos ir kokybės santykį rinkoje.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Aš neturiu pardavimų planų – mano tikslas, kad jūsų investicija į <strong>automatizaciją</strong>, <strong>skaitmenizaciją</strong> ar <strong>DI</strong> atneštų <strong>maksimalią grąžą</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const button = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
              if (button) button.click();
            }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg inline-flex items-center space-x-2 whitespace-nowrap cursor-pointer group"
          >
            <span>Užsisakyti Nemokamą Konsultaciją</span>
            <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
