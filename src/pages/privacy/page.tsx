import { useEffect } from 'react';
import Navigation from '../home/components/Navigation';
import Footer from '../home/components/Footer';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://verslodi.lt';
    
    // WebPage Schema for Privacy Policy
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privatumo Politika",
      "description": "VersloDI privatumo politika - kaip tvarkome jūsų asmens duomenis pagal BDAR reikalavimus",
      "url": `${siteUrl}/privacy`,
      "inLanguage": "lt",
      "isPartOf": {
        "@type": "WebSite",
        "name": "VersloDI",
        "url": siteUrl
      },
      "about": {
        "@type": "Thing",
        "name": "Privatumo Politika"
      },
      "datePublished": "2025-11-27",
      "dateModified": "2025-11-27"
    };

    const existingScript = document.getElementById('privacy-schema');
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'privacy-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(webPageSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('privacy-schema')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-[#EBE1CF]/30 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0A4834]/5 rounded-full mb-6">
              <i className="ri-shield-check-line text-[#9F8151]"></i>
              <span className="text-sm font-semibold text-[#0A4834]">Privatumas</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A4834] mb-6">
              Privatumo Politika
            </h1>
            <p className="text-lg text-[#0A4834]/70">
              Galioja nuo: 2025-11-27 | Paskutinis atnaujinimas: 2025-11-27
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#0A4834]/10 p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                1. Kas mes esame
              </h2>
              <div className="space-y-3 text-[#0A4834]/70 leading-relaxed">
                <p><strong className="text-[#0A4834]">Duomenų valdytojas:</strong> MB „Tavo finansų partneris"</p>
                <p><strong className="text-[#0A4834]">Įmonės kodas:</strong> 305125587</p>
                <p><strong className="text-[#0A4834]">Adresas:</strong> Vytenio g. 50-415, LT-03229 Vilnius, Lietuva</p>
                <p><strong className="text-[#0A4834]">Telefonas:</strong> +370 626 82335</p>
                <p><strong className="text-[#0A4834]">El. paštas privatumo klausimais:</strong> <a href="mailto:labas@versloDI.lt" className="text-[#9F8151] hover:underline">labas@versloDI.lt</a></p>
                <p><strong className="text-[#0A4834]">Svetainė:</strong> versloDI.lt</p>
                <p className="mt-4">Duomenų apsaugos pareigūno neskiriame. Visais klausimais kreipkitės aukščiau nurodytu el. paštu.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                2. Kam taikoma ši politika
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Ši politika taikoma:
              </p>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>svetainės lankytojams;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>užklausas teikiantiems asmenims (formos, el. paštas, telefonas);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>konsultacijų registracijoms (pvz., per Calendly);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>klientams ir jų atstovams (pasiūlymai, sutartys, sąskaitos);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>bandomųjų projektų/pilotų dalyviams (kai vykdomi su klientu).</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Kai kliento vardu tvarkome jo klientų ar darbuotojų asmens duomenis, veikiame kaip duomenų tvarkytojas pagal atskirą Duomenų tvarkymo susitarimą (DPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                3. Kokius duomenis renkame ir iš kur
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3">3.1. Lankytojai ir užklausos</h3>
                  <ul className="space-y-2 text-[#0A4834]/70">
                    <li className="flex items-start space-x-3">
                      <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                      <span>Vardas, el. paštas, tel. numeris, įmonė, pareigos, žinutės turinys.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                      <span>Techniniai įrašai: IP adresas, naršyklės tipas/versija, kūrimo data/laikas, slapukai (žr. 10 skyrių).</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3">3.2. Konsultacijų registracijos (Calendly)</h3>
                  <p className="text-[#0A4834]/70">
                    Vardas, el. paštas, tel. numeris (nebūtinas), įmonė, pasirinktas laikas, pastabos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3">3.3. Sutartys, sąskaitos ir buhalterija</h3>
                  <ul className="space-y-2 text-[#0A4834]/70">
                    <li className="flex items-start space-x-3">
                      <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                      <span>Įmonės rekvizitai, atstovų vardai ir pareigos, el. paštai, paslaugų aprašai.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                      <span>Apmokėjimų informacija (mokėjimo suma/data, mokėjimo identifikatorius). Kortelių duomenų nesaugome; jei naudojamas Stripe, matome tik tiek, kiek būtina apmokėjimui identifikuoti.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0A4834] mb-3">3.4. Pilotai ir bandomieji sprendimai</h3>
                  <p className="text-[#0A4834]/70">
                    Tik tiek duomenų, kiek būtina bandymui: procesų pavyzdžiai, testiniai ar pseudonimizuoti įrašai. Realūs asmens duomenys naudojami tik kliento nurodymu ir su apibrėžtomis prieigomis bei trynimo terminais.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                4. Tikslai ir teisiniai pagrindai
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-[#0A4834]/10">
                  <thead className="bg-[#EBE1CF]/30">
                    <tr>
                      <th className="text-left p-4 border-b-2 border-[#0A4834]/10 font-bold text-[#0A4834]">Tikslas</th>
                      <th className="text-left p-4 border-b-2 border-[#0A4834]/10 font-bold text-[#0A4834]">Teisinis pagrindas (BDAR 6 str.)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#0A4834]/70">
                    <tr>
                      <td className="p-4 border-b border-[#0A4834]/10">Atsakyti į užklausas, suorganizuoti konsultaciją</td>
                      <td className="p-4 border-b border-[#0A4834]/10">Sutarties sudarymas ir vykdymas (b) / teisėtas interesas (f)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[#0A4834]/10">Pasiūlymų rengimas, sutarčių ir paslaugų vykdymas</td>
                      <td className="p-4 border-b border-[#0A4834]/10">Sutartis (b)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[#0A4834]/10">Sąskaitos, apskaita, mokesčių vykdymas</td>
                      <td className="p-4 border-b border-[#0A4834]/10">Teisinė prievolė (c)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[#0A4834]/10">Ryšių palaikymas su esamais klientais, paslaugų tobulinimas</td>
                      <td className="p-4 border-b border-[#0A4834]/10">Teisėtas interesas (f)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[#0A4834]/10">Tiesioginė rinkodara el. paštu (jei siunčiame)</td>
                      <td className="p-4 border-b border-[#0A4834]/10">Sutikimas (a) arba teisėtas interesas (f) B2B</td>
                    </tr>
                    <tr>
                      <td className="p-4">Svetainės veikimas, statistika, slapukai</td>
                      <td className="p-4">Sutikimas (a) nebūtiniems slapukams</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Sutikimą galite bet kada atšaukti; tai neturės įtakos iki atšaukimo vykdytam tvarkymui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                5. Saugojimo terminai
              </h2>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Užklausos ir konsultacijų registracijos</strong> – 12 mėn. nuo paskutinio kontakto (nebent tampate klientu).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Klientų dokumentai, sutartys, sąskaitos</strong> – 10 metų (pagal buhalterinę tvarką).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Rinkodaros sutikimai</strong> – iki atsisakymo.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-time-line text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Pilotų/testų duomenys</strong> – pagal sutartį, bet ne ilgiau kaip 90 d. po piloto pabaigos, jei nesusitarta kitaip.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                6. Gavėjai ir duomenų perdavimas
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Duomenys gali būti perduodami šiems gavėjams tik tiek, kiek būtina paslaugoms suteikti:
              </p>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Vercel, Inc.</strong> – svetainės priegloba ir veikimas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Tally BV (tally.so)</strong> – užklausų/formų priėmimas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Calendly, LLC</strong> – susitikimų rezervavimas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Google Ireland Ltd. (Google Workspace)</strong> – el. paštas ir dokumentų saugykla.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Stripe Payments Europe, Ltd.</strong> – mokėjimų surinkimas (jei naudojamas).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Buhalterinės apskaitos paslaugų teikėjas</strong> – finansinių dokumentų tvarkymas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Teisininkai/auditoriai</strong>, kai to pagrįstai reikia.</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Su visais tvarkytojais esame sudarę/ sudarysime duomenų tvarkymo sutartis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                7. Perdavimas už EEE
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Kai kurie paslaugų teikėjai gali būti už Europos ekonominės erdvės ribų (pvz., Calendly, Stripe, Google). Tokiu atveju duomenys perduodami tik taikant ES standartines sutarčių sąlygas (SCC) ir kitas tinkamas apsaugos priemones. Daugiau informacijos suteiksime paprašius.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                8. Jūsų teisės
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Turite teisę:
              </p>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>gauti patvirtinimą, ar tvarkome jūsų duomenis, ir kopiją;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>prašyti ištaisyti ar papildyti netikslius duomenis;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>prašyti ištrinti (kai nebėra pagrindo tvarkyti);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>apriboti tvarkymą;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>prieštarauti tvarkymui, kai grindžiama teisėtu interesu (įskaitant tiesioginę rinkodarą);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>gauti duomenis perkelti (kai tvarkoma sutikimu ar sutartimi ir automatizuotai);</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#9F8151] mt-1"></i>
                  <span>atšaukti sutikimą.</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Prašymus siųskite el. paštu <a href="mailto:labas@versloDI.lt" className="text-[#9F8151] hover:underline font-semibold">labas@versloDI.lt</a>. Atsakysime per 1 mėn. (prireikus gali būti pratęsta dar iki 2 mėn., apie tai informuojant).
              </p>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Taip pat turite teisę pateikti skundą Valstybinei duomenų apsaugos inspekcijai (<a href="https://ada.lt" target="_blank" rel="noopener noreferrer" className="text-[#9F8151] hover:underline">ada.lt</a>).
              </p>
            </section>

            <section className="bg-[#EBE1CF]/30 rounded-xl p-6 border-2 border-[#9F8151]/20">
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                9. Rinkodara
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Naujienas ir pasiūlymus el. paštu siunčiame tik gavę Jūsų sutikimą (kurį galite bet kada atšaukti paspausdami „atsisakyti" laiške arba parašę mums <a href="mailto:labas@versloDI.lt" className="text-[#9F8151] hover:underline font-semibold">labas@versloDI.lt</a>).
              </p>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Jei naudojame reklamos žymas (pvz., „Facebook Pixel", „Google Ads"), jos įjungtos tik Jūsų slapukų sutikimu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                10. Slapukai („cookies")
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed mb-4">
                Naudojame slapukus, kad svetainė veiktų ir būtų patogesnė.
              </p>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Būtini slapukai</strong> – svetainės funkcijoms (teisėtas interesas).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Analitiniai/statistiniai</strong> – lankomumo analizei ir tobulinimui (pagrindas – sutikimas).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Trečiųjų šalių</strong> – įterpiant paslaugas (pvz., Calendly, Tally) jie gali nustatyti savo slapukus.</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Nebūtiniems slapukams taikomas sutikimo baneris; sutikimą galite keisti svetainės slapukų nustatymuose arba naršyklėje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                11. Saugumas
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Taikome pagrįstas technines ir organizacines priemones: prieigų valdymas pagal roles, dviejų žingsnių tapatybės patvirtinimas, HTTPS, veiksmų žurnalai, riboti eksportai ir nustatyti trynimo terminai. Apie reikšmingus duomenų saugumo pažeidimus pranešime teisės aktų nustatyta tvarka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                12. Vaikų duomenys
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Paslaugos skirtos verslui. Sąmoningai nerenkame vaikų (iki 16 m.) duomenų.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                13. Politikos pakeitimai
              </h2>
              <p className="text-[#0A4834]/70 leading-relaxed">
                Šią politiką galime atnaujinti. Naujausia versija skelbiama versloDI.lt; viršuje nurodome įsigaliojimo datą.
              </p>
            </section>

            <section className="bg-[#EBE1CF]/30 rounded-xl p-6 border-2 border-[#9F8151]/20">
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                14. Kontaktai
              </h2>
              <div className="space-y-2 text-[#0A4834]/70">
                <p><strong className="text-[#0A4834]">MB „Tavo finansų partneris"</strong></p>
                <p>Vytenio g. 50-415, LT-03229 Vilnius</p>
                <p>Tel. <a href="tel:+37062682335" className="text-[#9F8151] hover:underline">+370 626 82335</a></p>
                <p>El. paštas <a href="mailto:labas@versloDI.lt" className="text-[#9F8151] hover:underline font-semibold">labas@versloDI.lt</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                PRIEDAS A. Naudojami duomenų tvarkytojai (subtiekėjai)
              </h2>
              <ul className="space-y-3 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Vercel, Inc.</strong> – svetainės priegloba ir pasirodymo paslaugos (SCC, galimas perdavimas už EEE).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Tally BV (tally.so)</strong> – formų pateikimas ir saugojimas (ES).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Calendly, LLC</strong> – susitikimų rezervavimas (SCC, galimas perdavimas už EEE).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Google Ireland Ltd. (Google Workspace)</strong> – el. paštas, dokumentai, kalendorius (ES/EEE su galimu perdavimu; SCC).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">Stripe Payments Europe, Ltd.</strong> – mokėjimų surinkimas ir apdorojimas (SCC; kortelių duomenų nesaugome).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-fill text-[#9F8151] mt-1"></i>
                  <span><strong className="text-[#0A4834]">[Buhalterinės apskaitos paslaugų teikėjas]</strong> – finansinių dokumentų tvarkymas (ES).</span>
                </li>
              </ul>
              <p className="text-[#0A4834]/70 leading-relaxed mt-4">
                Aktualų tvarkytojų sąrašą pateiksime paprašius el. paštu <a href="mailto:labas@versloDI.lt" className="text-[#9F8151] hover:underline font-semibold">labas@versloDI.lt</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A4834] mb-4">
                PRIEDAS B. Pilotų/bandomųjų projektų taisyklės (jei taikoma)
              </h2>
              <ul className="space-y-2 text-[#0A4834]/70">
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>Pagal nutylėjimą naudojami testiniai ar pseudonimizuoti duomenys.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>Prieigos suteikiamos tik reikalingiems asmenims; veiksmai žurnaluojami.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-fill text-[#9F8151] mt-1"></i>
                  <span>Pilotui pasibaigus, duomenys ištrinami per 90 d., jei sutartyje nenumatyta kitaip.</span>
                </li>
              </ul>
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
