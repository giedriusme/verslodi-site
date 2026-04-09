import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../home/components/Navigation";
import Footer from "../home/components/Footer";

const projectList = [
  {
    title: "GiedriusPetrauskas.com",
    url: "https://giedriuspetrauskas.com/",
    image: "/uploads/project-giedriuspetrauskas.png",
    category: "Asmeninis / profesinis puslapis",
    description:
      "Modernus asmeninis ir profesinis puslapis su aiškiu paslaugų bei darbų pristatymu, orientuotas į pasitikėjimą ir tvarkingą įvaizdį.",
    features: [
      "Švarus ir modernus dizainas",
      "Aiški struktūra",
      "Profesinis pozicionavimas",
    ],
  },
  {
    title: "ŠiltosŽvakės.lt",
    url: "https://siltoszvakes.lt/",
    image: "/uploads/project-siltoszvakes.png",
    category: "Elektroninė parduotuvė",
    description:
      "Pilnai veikianti elektroninė parduotuvė su prekių pateikimu, krepšeliu, atsiskaitymu ir aiškia struktūra.",
    features: [
      "Elektroninė prekyba",
      "Produktų katalogas",
      "Krepšelis ir atsiskaitymas",
    ],
  },
  {
    title: "Ubukire.com",
    url: "https://ubukire.com/",
    image: "/uploads/project-ubukire.png",
    category: "Pardavimo puslapis",
    description:
      "Dvikalbis pardavimo puslapis skaitmeniniam produktui su aiškiu pasiūlymu, mokėjimų integracija ir stipria pardavimo struktūra.",
    features: [
      "Dvi kalbos",
      "Skaitmeninio produkto pardavimas",
      "Aiškūs raginimai veikti",
    ],
  },
];

export default function InternetoSvetainesPage() {
  const [state, handleSubmit] = useForm("xbdpepae", {
    data: {
      requestSource: "interneto-svetaines",
      pageTitle: "Interneto svetainių kūrimas | VersloDI",
    },
  });

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
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
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
                  href="#uzklausa"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0A4834] transition hover:bg-slate-100"
                >
                  Pateikti užklausą
                </a>

                <a
                  href="#projektai"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Peržiūrėti pavyzdžius
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kainos" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Kainų variantai
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Gali pasirinkti paprastesnį variantą pradžiai arba stipresnį
              sprendimą verslui, kuris nori solidesnio įvaizdžio ir daugiau
              užklausų.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4834]">
                  Paprastas startas
                </p>
                <h3 className="mt-2 text-2xl font-bold">Vieno puslapio svetainė</h3>
                <p className="mt-3 text-4xl font-bold text-slate-900">99 €</p>
              </div>

              <p className="text-slate-600">
                Tinka tiems, kuriems reikia greito, tvarkingo ir aiškaus
                sprendimo.
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
                <h3 className="mt-2 text-2xl font-bold">Pradinis verslo variantas</h3>
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
                <h3 className="mt-2 text-2xl font-bold">Verslo augimo variantas</h3>
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

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Papildomos galimybės
              </h2>
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
                "Tekstų paruošimas ar sutvarkymas — nuo 49 €",
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

        <section id="projektai" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Svetainės, kurias jau sukūriau
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Žemiau gali pamatyti keletą mano sukurtų projektų. Taip lengviau
              įvertinsi stilių, struktūrą ir bendrą kokybę.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projectList.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover object-top"
                    loading="lazy"
                  />
                </a>

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4834]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-slate-700">
                    {project.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0A4834] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083b2c]"
                  >
                    Peržiūrėti svetainę
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="uzklausa" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#0A4834] p-8 text-white">
              <h2 className="text-3xl font-bold tracking-tight">
                Papasakok, kokios svetainės tau reikia
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Užpildyk trumpą užklausą, ir pagal tavo veiklą pasiūlysiu
                tinkamiausią sprendimą, kainą bei tolimesnius žingsnius.
              </p>

              <ul className="mt-8 space-y-3 text-white/90">
                <li>• Kuo aiškesnė užklausa, tuo tikslesnį pasiūlymą gausi</li>
                <li>• Gali rašyti paprastai, be techninių terminų</li>
                <li>• Jei dar neturi tekstų ar nuotraukų, vis tiek pildyk formą</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              {state.succeeded ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-2xl font-bold text-[#0A4834]">
                    Ačiū, tavo užklausa išsiųsta
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Gavau tavo užklausą dėl interneto svetainės. Peržiūrėsiu
                    informaciją ir susisieksiu su tavimi artimiausiu metu.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0A4834] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083b2c]"
                  >
                    Pildyti dar kartą
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Užklausos forma
                    </h3>
                    <p className="mt-2 text-slate-600">
                      Užpildyk pagrindinę informaciją, ir aš paruošiu tau tinkamą
                      pasiūlymą.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Vardas, Pavardė *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                        placeholder="Tavo vardas"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        El. paštas *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                        placeholder="tavo@elpastas.lt"
                      />
                      <ValidationError
                        prefix="El. paštas"
                        field="email"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Telefono numeris
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                        placeholder="+370..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Veiklos arba įmonės pavadinimas
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        name="businessName"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                        placeholder="Įmonės arba veiklos pavadinimas"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="activityDescription"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Kuo užsiimate? *
                    </label>
                    <textarea
                      id="activityDescription"
                      name="activityDescription"
                      required
                      rows={4}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      placeholder="Trumpai aprašyk savo veiklą, klientus ir ką norėtum pristatyti svetainėje."
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="websiteType"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Kokios svetainės reikia? *
                      </label>
                      <select
                        id="websiteType"
                        name="websiteType"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="vieno-puslapio">Vieno puslapio svetainės</option>
                        <option value="keliu-puslapiu">Kelių puslapių svetainės</option>
                        <option value="dar-nezinau">Dar nežinau</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="pageCount"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Kiek puslapių maždaug reikės?
                      </label>
                      <select
                        id="pageCount"
                        name="pageCount"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="1">1 puslapis</option>
                        <option value="2-3">2–3 puslapiai</option>
                        <option value="4-5">4–5 puslapiai</option>
                        <option value="6+">6 ar daugiau</option>
                        <option value="nezinau">Dar nežinau</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Planuojamas biudžetas
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="iki-150">Iki 150 €</option>
                        <option value="150-250">150–250 €</option>
                        <option value="250-500">250–500 €</option>
                        <option value="500+">500 € ir daugiau</option>
                        <option value="reikia-pasiulymo">Reikia pasiūlymo</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Kada norėtumėte paleisti svetainę?
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="kuo-greiciau">Kuo greičiau</option>
                        <option value="1-2-savaites">Per 1–2 savaites</option>
                        <option value="2-4-savaites">Per 2–4 savaites</option>
                        <option value="veliau">Vėliau</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="hasTexts"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Ar jau turite tekstus?
                      </label>
                      <p className="mb-2 text-sm text-slate-500">
                        Nebūtina jų turėti iš anksto — prireikus padėsiu su
                        tekstais ir jų struktūra.
                      </p>
                      <select
                        id="hasTexts"
                        name="hasTexts"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="taip">Taip</option>
                        <option value="dalinai">Dalinai</option>
                        <option value="ne">Ne</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="hasLogo"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Ar jau turite logotipą?
                      </label>
                      <p className="mb-2 text-sm text-slate-500">
                        Jei jo dar neturite, sprendimą galėsime numatyti vėliau.
                      </p>
                      <select
                        id="hasLogo"
                        name="hasLogo"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="taip">Taip</option>
                        <option value="ne">Ne</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="hasImages"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Ar jau turite nuotraukas?
                      </label>
                      <p className="mb-2 text-sm text-slate-500">
                        Nebūtina jų turėti iš anksto — prireikus padėsiu
                        susidėlioti, kokių nuotraukų reikės tavo svetainei.
                      </p>
                      <select
                        id="hasImages"
                        name="hasImages"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="taip">Taip</option>
                        <option value="dalinai">Dalinai</option>
                        <option value="ne">Ne</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="needsSecondLanguage"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Ar reikės antros kalbos?
                      </label>
                      <p className="mb-2 text-sm text-slate-500">
                        Jei dar neapsisprendei, tai galėsime išsigryninti vėliau.
                      </p>
                      <select
                        id="needsSecondLanguage"
                        name="needsSecondLanguage"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="taip">Taip</option>
                        <option value="ne">Ne</option>
                        <option value="dar-nezinau">Dar nežinau</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="needsBooking"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Ar reikės registracijos / rezervacijos formos?
                      </label>
                      <p className="mb-2 text-sm text-slate-500">
                        Jei dar nežinai, vis tiek pildyk formą — padėsiu
                        pasirinkti tinkamiausią variantą.
                      </p>
                      <select
                        id="needsBooking"
                        name="needsBooking"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      >
                        <option value="" disabled>
                          Pasirinkite
                        </option>
                        <option value="taip">Taip</option>
                        <option value="ne">Ne</option>
                        <option value="dar-nezinau">Dar nežinau</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="websiteGoal"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Koks pagrindinis svetainės tikslas?
                    </label>
                    <textarea
                      id="websiteGoal"
                      name="websiteGoal"
                      rows={4}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      placeholder="Pavyzdžiui: pristatyti paslaugas, rinkti užklausas, didinti pasitikėjimą, gauti registracijas."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="examples"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Patinkančių svetainių pavyzdžiai
                    </label>
                    <textarea
                      id="examples"
                      name="examples"
                      rows={4}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      placeholder="Jei turi, įklijuok nuorodas į svetaines, kurių stilius ar struktūra tau patinka."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Papildoma informacija
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A4834] focus:ring-2 focus:ring-[#0A4834]/15"
                      placeholder="Parašyk viską, kas gali padėti geriau suprasti tavo poreikį."
                    />
                  </div>

                  <ValidationError
                    errors={state.errors}
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">
                      Gavęs užklausą, susisieksiu su tavimi artimiausiu metu.
                    </p>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="inline-flex items-center justify-center rounded-xl bg-[#0A4834] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#083b2c] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {state.submitting ? "Siunčiama..." : "Siųsti užklausą"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Kodėl verta rinktis mane?</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Kuriu šiuolaikiškai atrodančias svetaines</li>
                <li>• Prisitaikau prie tavo veiklos pobūdžio</li>
                <li>• Svetainės pritaikytos telefonams</li>
                <li>• Viskas aiškiai, tvarkingai ir be nereikalingo sudėtingumo</li>
                <li>• Galiu padėti ir su tekstais bei turinio struktūra</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Kam tai tinka?</h2>
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

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#0A4834] p-8 text-white md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Nori savo verslui modernios interneto svetainės?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/85">
                Užpildyk formą aukščiau, ir paruošiu tau tinkamiausią pasiūlymą
                pagal tavo veiklą, poreikius ir tikslą.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#uzklausa"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0A4834] transition hover:bg-slate-100"
                >
                  Pildyti formą
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