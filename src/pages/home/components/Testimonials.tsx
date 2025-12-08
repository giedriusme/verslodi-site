export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tomas Kazlauskas',
      role: 'Generalinis Direktorius',
      company: 'TechVision LT',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20business%20executive%20man%20in%20modern%20office%2C%20confident%20smile%2C%20business%20suit%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-001&orientation=squarish',
      text: 'DI konsultanto pagalba įdiegėme automatizuotą klientų aptarnavimo sistemą, kuri sutaupė mums 35% laiko ir padidino klientų pasitenkinimą 40%. Investicija atsipirko per 4 mėnesius!',
      rating: 5
    },
    {
      name: 'Laura Petraitienė',
      role: 'Marketingo Vadovė',
      company: 'Digital Growth',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20business%20woman%20executive%20in%20modern%20office%2C%20warm%20smile%2C%20elegant%20business%20attire%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-002&orientation=squarish',
      text: 'Profesionalumas ir ekspertizė – tai, kas labiausiai nustebino. Strategija buvo pritaikyta būtent mūsų verslui, o rezultatai viršijo lūkesčius. Dabar konkurentai klausia, kaip mums tai pavyko.',
      rating: 5
    },
    {
      name: 'Mindaugas Jankauskas',
      role: 'Verslo Savininkas',
      company: 'E-Commerce Pro',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20entrepreneur%20businessman%20in%20modern%20workspace%2C%20friendly%20expression%2C%20smart%20casual%20business%20attire%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-003&orientation=squarish',
      text: 'Nuo pirmos konsultacijos supratau, kad esu tinkamose rankose. Sprendimai, kuriuos įdiegėme, padidino mūsų pardavimus 28% ir sumažino operacines išlaidas. Rekomenduoju visiems!',
      rating: 5
    },
    {
      name: 'Rūta Valančiūtė',
      role: 'Operacijų Vadovė',
      company: 'LogiTech Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20business%20woman%20manager%20in%20contemporary%20office%2C%20confident%20smile%2C%20professional%20business%20clothing%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-004&orientation=squarish',
      text: 'Automatizavome dokumentų valdymą ir duomenų analizę. Tai, kas anksčiau užimdavo valandas, dabar užtrunka minutes. Komanda gali sutelkti dėmesį į strateginius darbus. Puiku!',
      rating: 5
    },
    {
      name: 'Vytautas Rimkus',
      role: 'IT Vadovas',
      company: 'FinTech Baltic',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20IT%20executive%20man%20in%20modern%20tech%20office%2C%20intelligent%20expression%2C%20business%20casual%20attire%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-005&orientation=squarish',
      text: 'Kaip IT specialistas buvau skeptiškas, bet konsultanto žinios ir praktiniai sprendimai mane įtikino. Integracija buvo sklandži, o rezultatai – išmatuojami. Tikras profesionalas!',
      rating: 5
    },
    {
      name: 'Greta Stonkutė',
      role: 'Klientų Aptarnavimo Vadovė',
      company: 'Service Excellence',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Lithuanian%20customer%20service%20manager%20woman%20in%20modern%20office%2C%20warm%20friendly%20smile%2C%20professional%20business%20outfit%2C%20corporate%20headshot%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography&width=400&height=400&seq=test-006&orientation=squarish',
      text: 'DI chatbotas, kurį įdiegėme, aptarnauja 70% užklausų automatiškai, o mūsų komanda gali sutelkti dėmesį į sudėtingesnius atvejus. Klientai patenkinti, darbuotojai laimingi!',
      rating: 5
    }
  ];

  return (
    <section id="atsiliepimai" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <i className="ri-chat-quote-line text-purple-600"></i>
            <span className="text-sm font-semibold text-purple-700">Klientų Atsiliepimai</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ką Sako <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Mano Klientai</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Realūs rezultatai ir patenkinti klientai – geriausias <strong>nepriklausomo konsultanto</strong> įvertinimas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role} ${testimonial.company}`}
                  title={`${testimonial.name} atsiliepimas apie DI konsultantą`}
                  className="w-14 h-14 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="flex items-center space-x-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <div className="text-sm text-slate-600 mt-1">Vidutinis įvertinimas</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-300"></div>
            <div className="text-left">
              <div className="text-3xl font-bold text-slate-900">150+</div>
              <div className="text-sm text-slate-600">Patenkintų klientų</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
