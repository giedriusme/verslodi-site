import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ar esi susijęs su konkrečiais pardavėjais?",
      answer: "Ne. Esu nepriklausomas konsultantas. Kai reikia įrankių – pasiūlau 2–3 variantus su pliusais/minusais ir kaina. Mano tikslas – rasti geriausią sprendimą jūsų verslui, o ne parduoti konkrečią technologiją."
    },
    {
      question: "Kiek tai kainuos ir kiek sutaupysime?",
      answer: "Duodu kainų intervalą prieš startą ir tikslų paskaičiavimą po greito audito. Sutaupymai skaičiuojami valandomis ir €. Pavyzdžiui: 60 h/mėn. × €20 × 12 = €14 400/metus sutaupymas."
    },
    {
      question: "Kas su duomenų sauga ir privatumu?",
      answer: "Dirbama su rolėmis, minimaliu prieigos principu, nenaudojama atvirų duomenų šaltinių be sutikimo. Pateikiu DI politikos šablonus ir saugumo gaires. Jūsų duomenys lieka jūsų."
    },
    {
      question: "Ar gali padėti įgyvendinti sprendimą?",
      answer: "Taip. Perimu projekto valdymą pagal poreikį: parenku ir suderinu vykdytojus, organizuoju tiekėjų atrankos konkursą, planuoju iteracijas (sprintus), atlieku vartotojų priėmimo bandymus ir nuolat stebiu pagrindinius rodiklius."
    },
    {
      question: "Ar tinka, jei turime daug skambučių ar registracijų?",
      answer: "Tinka, ypač ten, kur daug skambučių ar registracijų – klientų aptarnavimas, paslaugų įmonės, e-komercija, klinikos, logistikos dispečeriai, autoservisai, NT brokeriai, grožio centrai. DI balso agentas užtikrina 0 praleistų skambučių, 30–90 s perskambinimą, atsako į dažnus klausimus ir užregistruoja vizitus, todėl sutaupomos valandos ir neprarandami potencialūs klientai."
    },
    {
      question: "Ar gali būti be DI?",
      answer: "Taip! Rekomenduoju tai, kas duoda didžiausią grąžą. Jei šiandien pakanka skaitmeninimo ar paprastos automatizacijos – taip ir darome. DI diegiame tik ten, kur jis iš tiesų kuria vertę."
    },
    {
      question: "Kam tai tinka?",
      answer: "Tinka smulkioms ir vidutinėms įmonėms (1–200 darbuotojų), kurios nori per 90 dienų pamatyti pamatuojamą naudą: mažoms – greiti patobulinimai be ilgų diegimų, augančioms – aiškus 90 d. planas ir 6–12 mėn. kelias.\nYpač tinka: e-komercijai, profesinėms paslaugoms, gamybai ir sveikatos bei aptarnavimo sektoriams.",
      cta: "Turite 1–9 darbuotojų? Pradėkite nuo STARTER (500 €) – per 48–72 val. gausite aiškią kryptį."
    }
  ];

  return (
    <section id="duk" className="py-16 sm:py-20 lg:py-24 bg-[#EBE1CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#0A4834]/10 rounded-full mb-4 sm:mb-6">
            <i className="ri-question-line text-[#0A4834]"></i>
            <span className="text-xs sm:text-sm font-semibold text-[#0A4834]">DUK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4834] mb-4 sm:mb-6">
            Dažnai Užduodami Klausimai
          </h2>
          <p className="text-lg sm:text-xl text-[#0A4834]/80">
            Atsakymai į svarbiausius klausimus
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border-2 border-[#0A4834]/10 overflow-hidden hover:border-[#9F8151] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="text-base sm:text-lg font-bold text-[#0A4834] pr-4 group-hover:text-[#9F8151] transition-colors">
                  {faq.question}
                </span>
                <i className={`ri-arrow-down-s-line text-2xl text-[#0A4834] transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[600px]' : 'max-h-0'
              }`}>
                <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                  <div className="text-sm sm:text-base text-[#0A4834]/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                  {faq.cta && (
                    <div className="mt-4 pt-4 border-t border-[#0A4834]/10">
                      <p className="text-xs sm:text-sm text-[#0A4834]/60 italic">
                        {faq.cta}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
