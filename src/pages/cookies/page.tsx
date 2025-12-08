import { useEffect } from 'react';
import Navigation from '../home/components/Navigation';
import Footer from '../home/components/Footer';

export default function CookiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://verslodi.lt';
    
    // WebPage Schema for Cookies Policy
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Slapukų Politika",
      "description": "VersloDI slapukų politika - kaip naudojame slapukus svetainėje",
      "url": `${siteUrl}/cookies`,
      "inLanguage": "lt",
      "isPartOf": {
        "@type": "WebSite",
        "name": "VersloDI",
        "url": siteUrl
      },
      "about": {
        "@type": "Thing",
        "name": "Slapukų Politika"
      },
      "datePublished": "2025-11-27",
      "dateModified": "2025-11-27"
    };

    const existingScript = document.getElementById('cookies-schema');
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'cookies-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(webPageSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('cookies-schema')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-[#EBE1CF]/30 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0A4834]/5 rounded-full mb-6">
              <i className="ri-cookie-line text-[#9F8151]"></i>
              <span className="text-sm font-semibold text-[#0A4834]">Slapukai</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A4834] mb-6">
              Slapukų Politika
            </h1>
            <p className="text-lg text-[#0A4834]/70">
              Galioja nuo: 2025-11-27
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#0A4834]/10 p-8 lg:p-12 space-y-8">
            <section>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Šioje politikoje paaiškiname, kokius slapukus naudoja MB „Tavo finansų partneris" (svetainė versloDI.lt), kokiais tikslais ir kaip galite valdyti savo pasirinkimus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                1. Kas yra slapukai?
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Slapukai – tai maži failai, saugomi jūsų įrenginyje. Jie padeda užtikrinti svetainės veikimą, prisiminti nustatymus ir, gavus jūsų sutikimą, rinkti statistiką ar rodyti suasmenintą turinį.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                2. Kaip naudojame slapukus
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#EBE1CF]/20 rounded-xl p-6 border-2 border-[#0A4834]/10">
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3 flex items-center space-x-2">
                    <i className="ri-shield-check-line text-[#9F8151]"></i>
                    <span>Būtinieji</span>
                  </h3>
                  <p className="text-[#0A4834]/70 mb-2">
                    Reikalingi svetainei ir formoms veikti (saugumas, sesija).
                  </p>
                  <p className="text-sm text-[#0A4834]/60">
                    <strong>Teisinis pagrindas:</strong> teisėtas interesas.
                  </p>
                </div>

                <div className="bg-[#EBE1CF]/20 rounded-xl p-6 border-2 border-[#0A4834]/10">
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3 flex items-center space-x-2">
                    <i className="ri-tools-line text-[#9F8151]"></i>
                    <span>Funkciniai (trečiųjų šalių įskiepiai)</span>
                  </h3>
                  <p className="text-[#0A4834]/70 mb-2">
                    Pvz., Calendly (susitikimų rezervavimas), Tally (formos), kurie gali nustatyti savus slapukus, kad veiktų įterpti valdikliai.
                  </p>
                  <p className="text-sm text-[#0A4834]/60">
                    <strong>Teisinis pagrindas:</strong> jūsų sutikimas.
                  </p>
                </div>

                <div className="bg-[#EBE1CF]/20 rounded-xl p-6 border-2 border-[#0A4834]/10">
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3 flex items-center space-x-2">
                    <i className="ri-bar-chart-line text-[#9F8151]"></i>
                    <span>Analitiniai/statistiniai </span>
                  </h3>
                  <p className="text-[#0A4834]/70 mb-2">
                    Lankomumo ir naudojimo statistikai gerinti.
                  </p>
                  <p className="text-sm text-[#0A4834]/60">
                    <strong>Teisinis pagrindas:</strong> jūsų sutikimas.
                  </p>
                </div>

                <div className="bg-[#EBE1CF]/20 rounded-xl p-6 border-2 border-[#0A4834]/10">
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3 flex items-center space-x-2">
                    <i className="ri-megaphone-line text-[#9F8151]"></i>
                    <span>Rinkodaros slapukai</span>
                  </h3>
                  <p className="text-[#0A4834]/70 mb-3">
                    Naudojami reklamos tikslams (pvz., rodyti suasmenintus skelbimus ir matuoti kampanijų rezultatus). Šiuos slapukus įjungiame tik gavę Jūsų sutikimą.
                  </p>
                  <p className="text-[#0A4834]/70 mb-2">
                    <strong className="text-[#0A4834]">Pavyzdžiai:</strong>
                  </p>
                  <ul className="space-y-2 text-[#0A4834]/70 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#9F8151] mt-1">•</span>
                      <span>Meta (Facebook) Pixel – konversijų ir auditorijų kūrimui;</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#9F8151] mt-1">•</span>
                      <span>Google Ads žymos – konversijoms ir remarketingui.</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#0A4834]/60">
                    <strong>Pastaba:</strong> Sutikimą galite bet kada keisti ar atšaukti per „Slapukų nustatymus".
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#EBE1CF]/30 rounded-xl p-6 border-2 border-[#9F8151]/20">
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                3. Jūsų pasirinkimai
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Nebūtinus slapukus įjungiame tik gavę jūsų sutikimą. Sutikimą galite duoti, keisti ar atšaukti per „Slapukų nustatymai" valdiklį (banerio mygtukas) arba naršyklės nustatymuose ištrindami slapukus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                4. Slapukų galiojimas
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Slapukai gali būti sesijos (iki naršyklės uždarymo) arba ilgiau galiojantys (iki 13 mėn., nebent nurodyta kitaip).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                5. Trečiosios šalys
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Svetainėje gali veikti šių tiekėjų slapukai (tik gavus sutikimą, kai jie įkeliami):
              </p>
              <ul className="space-y-3 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Calendly, LLC</strong> – susitikimų rezervavimas (įterptas kalendorius).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Tally BV (tally.so)</strong> – užklausų formos.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Vercel, Inc.</strong> – priegloba ir našumo paslaugos.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Stripe Payments Europe, Ltd.</strong> – mokėjimų apdorojimas (jei mokėjimai atliekami svetainėje).</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Kiekvienas tiekėjas turi savo privatumo/slapukų taisykles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                6. Politikos pakeitimai
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Gali būti atnaujinimų. Naujausia versija visada pateikiama versloDI.lt/slapuku-politika.
              </p>
            </section>

            <section className="bg-[#EBE1CF]/30 rounded-xl p-6 border-2 border-[#9F8151]/20">
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                7. Kontaktai
              </h2>
              <div className="space-y-2 text-[#0A4834]/70">
                <p><strong className="text-[#0A4834]">Klausimams:</strong> <a href="mailto:giedrius@versloDI.lt" className="text-[#9F8151] hover:underline font-semibold">giedrius@versloDI.lt</a>, tel. <a href="tel:+37062682335" className="text-[#9F8151] hover:underline">+370 626 82335</a></p>
                <p><strong className="text-[#0A4834]">Duomenų valdytojas:</strong> MB „Tavo finansų partneris", Vytenio g. 50-415, LT-03229 Vilnius.</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-flex items-center space-x-2 text-[#9F8151] hover:text-[#0A4834] transition-colors font-semibold"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Grįžti į pagrindinį</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
