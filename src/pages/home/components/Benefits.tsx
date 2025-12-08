export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-rocket-line',
      title: 'Greitas ROI',
      description: 'DI sprendimai atsiperkantys per 3-6 mėnesius su aiškiai išmatuojamais rezultatais'
    },
    {
      icon: 'ri-time-line',
      title: 'Sutaupytas Laikas',
      description: 'Automatizuokite rutinines užduotis ir sutaupykite iki 40% darbo laiko'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Didesni Rezultatai',
      description: 'Padidinkite efektyvumą ir pajamas naudodami duomenimis pagrįstus sprendimus'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Saugūs Sprendimai',
      description: 'Visiškai saugūs ir privatūs įrankiai, atitinkantys GDPR reikalavimus'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <i className="ri-star-line text-indigo-600"></i>
            <span className="text-sm font-semibold text-indigo-700">Kodėl Pasirinkti Tinkamus Sprendimus?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Privalumai, Kurie <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Keičia Žaidimą</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            <strong>Automatizavimas</strong>, <strong>skaitmenizacija</strong> ar <strong>dirbtinis intelektas</strong> – tai ne ateitis, tai dabartis. Įmonės, kurios investuoja į tinkamus sprendimus šiandien, tampa rytojaus lyderėmis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <article 
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
