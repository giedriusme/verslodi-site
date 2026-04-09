import { useEffect } from "react";
import Navigation from "../home/components/Navigation";
import Footer from "../home/components/Footer";

export default function InternetoSvetainesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const siteUrl = import.meta.env.VITE_SITE_URL || "https://verslodi.lt";
    document.title = "Interneto svetainių kūrimas | VersloDI";

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interneto svetainių kūrimas",
      description:
        "Modernių interneto svetainių kūrimas verslui: vieno puslapio svetainės, kelių puslapių verslo svetainės ir išplėstiniai sprendimai.",
      provider: {
        "@type": "Organization",
        name: "VersloDI",
        url: siteUrl,
      },
      areaServed: {
        "@type": "Country",
        name: "Lietuva",
      },
      url: `${siteUrl}/interneto-svetaines`,
    };

    const existingScript = document.getElementById("interneto-svetaines-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "interneto-svetaines-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("interneto-svetaines-schema")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />

      <main className="pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A4834] via-[#0f6a4d] to-slate-900 opacity-95" />
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
                Interneto svetainių kūrimas
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Moderni interneto svetainė tavo verslui
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/85 md:text-xl">
                Kuriu tvarkingas, šiuolaikiškas ir patikimai atrodančias interneto
                svetaines, kurios padeda aiškiai pristatyti veiklą, sustiprina
                pasitikėjimą ir padeda lengviau gauti užklausų iš klientų.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#kontaktai"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0A4834] transition hover:bg-slate-100"
                >
                  Aptarkime tavo svetainę
                </a>

                <a
                  href="#kainos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Peržiūrėti kainas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kainos" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4834]">
                  Paprastas startas
                </p>
                <h2 className="mt-2 text-2xl font-bold">Vieno puslapio svetainė</h2>
                <p className="mt-3 text-4xl font-bold text-slate-900">99 €</p>
              </div>

              <p className="text-slate-600">
                Tinka tiems, kuriems reikia greito, tvarkingo ir aiškaus sprendimo.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Vienas informacinis puslapis</li>
                <li>• Šiuolaikiškas dizainas</li>
                <li>• Pritaikymas telefonams</li>
                <li>• Kontaktų forma</li>
                <li>• Socialinių tinklų nuorodos</li>
                <li>• Vienas taisymų etapas</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4834]">
                  Tvirtas pagrindas
                </p>
                <h2 className="mt-2 text-2xl font-bold">Pradinis verslo variantas</h2>
                <p className="mt-3 text-4xl font-bold text-slate-900">199 €</p>
              </div>

              <p className="text-slate-600">
                Tinka mažam verslui, kuris nori tvarkingos ir patikimos interneto
                svetainės.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Iki 3 puslapių</li>
                <li>• Pagrindinis puslapis</li>
                <li>• Apie mus</li>
                <li>• Kontaktai</li>
                <li>• Kontaktų forma</li>
                <li>• Žemėlapio įterpimas</li>
                <li>• Bazinis paruošimas paieškos sistemoms</li>
                <li>• Vienas taisymų etapas</li>
              </ul>
            </div>

            <div className="relative rounded-3xl border-2 border-[#0A4834] bg-[#0A4834] p-8 text-white shadow-xl">
              <div className="absolute -top-3 left-6 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
                Dažniausiai pasirenkamas
              </div>

              <div className="mb-6 pt-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Geriausia vertė
                </p>
                <h2 className="mt-2 text-2xl font-bold">Verslo augimo variantas</h2>
                <p className="mt-3 text-4xl font-bold">249 €</p>
              </div>

              <p className="text-white/85">
                Tinka verslui, kuris nori solidesnio įvaizdžio ir stipresnio
                pristatymo klientui.
              </p>

              <ul className="mt-6 space-y-3 text-white/90">
                <li>• Iki 5 puslapių</li>
                <li>• Aiškesnė struktūra klientų pritraukimui</li>
                <li>• Dažniausiai užduodamų klausimų skiltis arba atsiliepimų skiltis</li>
                <li>• Stipresni raginimai susisiekti</li>
                <li>• Kontaktų forma</li>
                <li>• Pritaikymas telefonams</li>
                <li>• Bazinis paruošimas paieškos sistemoms</li>
                <li>• Du taisymų etapai</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Papildomos galimybės
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Jeigu reikia daugiau nei numatyta pasirinktame variante, svetainę
                galima išplėsti pagal tavo veiklą ir poreikius.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "Papildomas puslapis — nuo 29 €",
                "Antra kalba — nuo 79 €",
                "Privatumo politika ir slapukų puslapis — nuo 39 €",
                "Tekstų sutvarkymas ar perrašymas — nuo 49 €",
                "Rezervacijos forma arba kalendoriaus prijungimas — nuo 79 €",
                "Susirašinėjimo mygtuko įdėjimas — nuo 19 €",
                "Svetainės priežiūra po paleidimo — nuo 29 € / mėn.",
                "Papildomi funkcionalumai pagal poreikį — individualiai",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Kodėl verta rinktis mane?</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Kuriu šiuolaikiškai atrodančias svetaines</li>
                <li>• Prisitaikau prie tavo veiklos pobūdžio</li>
                <li>• Svetainės pritaikytos telefonams</li>
                <li>• Viskas aiškiai, tvarkingai ir be nereikalingo sudėtingumo</li>
                <li>• Galima pradėti nuo mažesnio varianto ir vėliau plėsti</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Kam tai tinka?</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Grožio srities specialistams</li>
                <li>• Meistrams ir paslaugų teikėjams</li>
                <li>• Konsultantams ir treneriams</li>
                <li>• Mažoms įmonėms</li>
                <li>• Vietiniam verslui</li>
                <li>• Tiems, kurie nori atsinaujinti arba startuoti internete</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#0A4834] p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold tracking-tight">
                Nori savo verslui modernios interneto svetainės?
              </h3>
              <p className="mt-4 text-lg leading-8 text-white/85">
                Parašyk man, ir pasiūlysiu tinkamiausią variantą pagal tavo veiklą,
                poreikius ir tikslą.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#kontaktai"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0A4834] transition hover:bg-slate-100"
                >
                  Susisiekti
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Grįžti į pagrindinį puslapį
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}