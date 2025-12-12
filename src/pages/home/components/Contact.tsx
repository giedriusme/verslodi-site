import { useState, useEffect } from 'react';

// ⬇️ ČIA PALIK savo Web App URL iš Google Apps Script
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxD20X-PtTjfNlStdu3cJ7xgkpvEF_hU-W6XDppl1bQPPm-m4Cqtu1ibea-7K7qeIS7/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    size: '',
    processes: '',
    pain: '',
    tools: '',
    kpi: '',
    budget: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Įkeliame Calendly skriptą
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      alert('Prašome susipažinti su privatumo politika');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // svarbu, kad naršyklė neblokuotų užklausos
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // šiuos raktus naudos Apps Script
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          sector: formData.sector,
          size: formData.size,
          processes: formData.processes,
          pain: formData.pain,
          tools: formData.tools,
          kpi: formData.kpi,
          budget: formData.budget,
          timeline: formData.timeline,
          newsletterAccepted: newsletterAccepted,
        }),
      });

      // Jei iki čia atėjom – laikome, kad išsiuntėm sėkmingai
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Išvalom formą
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        size: '',
        processes: '',
        pain: '',
        tools: '',
        kpi: '',
        budget: '',
        timeline: '',
      });
      setNewsletterAccepted(false);
      setPrivacyAccepted(false);
    } catch (err) {
      console.error('Formos siuntimo klaida', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontaktai" className="py-16 sm:py-20 lg:py-24 bg-[#0A4834]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#EBE1CF]/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <i className="ri-mail-line text-[#9F8151]"></i>
            <span className="text-xs sm:text-sm font-semibold text-[#EBE1CF]">
              Kontaktai
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Pradėkime Pokalbį
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Calendly Widget */}
          <div className="bg-[#EBE1CF] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#9F8151] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-calendar-check-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A4834]">
                  Rezervuokite Laiką
                </h3>
                <p className="text-sm text-[#0A4834]/70">
                  30 min. konsultacija
                </p>
              </div>
            </div>

            <div
              className="calendly-inline-widget rounded-xl overflow-hidden"
              data-url="https://calendly.com/giedriusme/30min"
              style={{ minWidth: '100%', height: '700px' }}
            ></div>

            {/* Alternative Options */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-[#0A4834]/10 text-center space-y-4">
              <p className="text-sm sm:text-base text-[#0A4834] font-semibold">
                Negalite pasirinkti laiko?{' '}
                <button
                  onClick={() => setShowForm(true)}
                  className="text-[#9F8151] hover:underline font-bold cursor-pointer"
                >
                  Užpildykite trumpą užklausą
                </button>
              </p>
              <p className="text-sm sm:text-base text-[#0A4834]">
                Arba rašykite:{' '}
                <a
                  href="mailto:giedrius@versloDI.lt"
                  className="text-[#9F8151] hover:underline font-bold break-all"
                >
                  giedrius@versloDI.lt
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-[#EBE1CF] rounded-2xl p-6 sm:p-8 lg:p-10 max-w-3xl w-full my-8 relative">
              <button
                onClick={() => setShowForm(false)}
                className="sticky top-0 float-right w-10 h-10 flex items-center justify-center bg-[#0A4834]/10 hover:bg-[#0A4834]/20 rounded-xl transition-colors cursor-pointer z-10 mb-4"
              >
                <i className="ri-close-line text-2xl text-[#0A4834]"></i>
              </button>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0A4834] mb-6 clear-both">
                Užklausos Forma
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Kontaktiniai duomenys */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Vardas *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="Vardas Pavardė"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      El. paštas *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="vardas@imone.lt"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Tel. numeris *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="+370..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Įmonės pavadinimas *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="UAB Pavyzdys"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Sektorius *
                    </label>
                    <input
                      type="text"
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="E-komercija, Paslaugos..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Įmonės dydis *
                    </label>
                    <select
                      name="size"
                      required
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834] pr-8 cursor-pointer"
                    >
                      <option value="">Pasirinkite...</option>
                      <option value="1-10">1–10 darbuotojų</option>
                      <option value="11-50">11–50 darbuotojų</option>
                      <option value="51-200">51–200 darbuotojų</option>
                      <option value="200+">200+ darbuotojų</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0A4834] mb-2">
                    Top-3 procesai, kuriuos norėtumėte optimizuoti *
                  </label>
                  <textarea
                    name="processes"
                    required
                    value={formData.processes}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834] resize-none"
                    placeholder="Pvz.: užsakymų apdorojimas, klientų aptarnavimas..."
                  ></textarea>
                  <p className="text-xs text-[#0A4834]/60 mt-1">
                    Maksimaliai 500 simbolių
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0A4834] mb-2">
                    Pagrindiniai skausmai / iššūkiai *
                  </label>
                  <textarea
                    name="pain"
                    required
                    value={formData.pain}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834] resize-none"
                    placeholder="Kur stringa? Kas užima daugiausiai laiko?"
                  ></textarea>
                  <p className="text-xs text-[#0A4834]/60 mt-1">
                    Maksimaliai 500 simbolių
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Dabartiniai įrankiai
                    </label>
                    <input
                      type="text"
                      name="tools"
                      value={formData.tools}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="CRM, ERP, Excel..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      KPI tikslai
                    </label>
                    <input
                      type="text"
                      name="kpi"
                      value={formData.kpi}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834]"
                      placeholder="Sutaupyti 20h/sav..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Biudžeto intervalas
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834] pr-8 cursor-pointer"
                    >
                      <option value="">Pasirinkite...</option>
                      <option value="<5k">&lt; €5 000</option>
                      <option value="5-15k">€5 000 – €15 000</option>
                      <option value="15-30k">€15 000 – €30 000</option>
                      <option value="30k+">€30 000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0A4834] mb-2">
                      Norimas terminas
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#0A4834]/20 rounded-xl focus:border-[#9F8151] focus:outline-none text-[#0A4834] pr-8 cursor-pointer"
                    >
                      <option value="">Pasirinkite...</option>
                      <option value="urgent">Skubu (1–2 sav.)</option>
                      <option value="normal">Normalus (1 mėn.)</option>
                      <option value="flexible">Lankstus (2–3 mėn.)</option>
                    </select>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 pt-4 border-t-2 border-[#0A4834]/10">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-2 border-[#0A4834]/30 text-[#0A4834] focus:ring-[#9F8151] cursor-pointer flex-shrink-0"
                      required
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-[#0A4834] cursor-pointer"
                    >
                      Susipažinau su{' '}
                      <a
                        href="/privatumo-politika"
                        target="_blank"
                        className="text-[#9F8151] font-bold hover:underline"
                      >
                        privatumo politika
                      </a>{' '}
                      <span className="text-red-600">*</span>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletterAccepted}
                      onChange={(e) =>
                        setNewsletterAccepted(e.target.checked)
                      }
                      className="mt-1 w-5 h-5 rounded border-2 border-[#0A4834]/30 text-[#0A4834] focus:ring-[#9F8151] cursor-pointer flex-shrink-0"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-[#0A4834] cursor-pointer"
                    >
                      Sutinku gauti naujienas ir pasiūlymus apie naudingiausius
                      DI įrankius ir sprendimus verslui
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0A4834] text-white rounded-xl hover:bg-[#0A4834]/90 transition-all font-bold text-lg inline-flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-xl"></i>
                      <span>Siunčiama...</span>
                    </>
                  ) : (
                    <>
                      <span>Siųsti Užklausą</span>
                      <i className="ri-send-plane-fill text-xl"></i>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border-2 border-green-500 rounded-xl p-4 flex items-center space-x-3">
                    <i className="ri-checkbox-circle-fill text-2xl text-green-600"></i>
                    <p className="text-green-800 font-semibold">
                      Ačiū! Susisieksiu per 24 valandas.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border-2 border-red-500 rounded-xl p-4 flex items-center space-x-3">
                    <i className="ri-error-warning-fill text-2xl text-red-600"></i>
                    <p className="text-red-800 font-semibold">
                      Įvyko klaida siunčiant formą. Pamėginkite dar kartą arba
                      parašykite tiesiogiai el. paštu.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
