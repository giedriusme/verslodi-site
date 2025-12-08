import { useEffect } from 'react';
import Hero from './components/Hero';
import Process from './components/Process';
import UseCases from './components/UseCases';
import Packages from './components/Packages';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CookieConsent from '../../components/feature/CookieConsent';

export default function HomePage() {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://verslodi.lt';
    
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "VersloDI",
      "description": "Nepriklausomas DI konsultantas verslui. Pirmiausia – procesai. Tada – DI. Pamatuojami rezultatai per 2–4 savaites, 6–12 mėn. veiksmų planas, investicijų grąžos skaičiavimas, sprendimai nepriklausomi nuo tiekėjų.",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "telephone": "+370-626-82335",
      "email": "giedrius@versloDI.lt",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vytenio g. 50-415",
        "addressLocality": "Vilnius",
        "postalCode": "LT-03229",
        "addressCountry": "LT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "LT"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Lietuva"
      },
      "priceRange": "€€",
      "sameAs": []
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "VersloDI",
      "url": siteUrl,
      "description": "Pirmiausia – procesai. Tada – DI. Pamatuojami rezultatai per 2–4 savaites, 6–12 mėn. veiksmų planas, investicijų grąžos skaičiavimas, sprendimai nepriklausomi nuo tiekėjų.",
      "publisher": {
        "@type": "Organization",
        "name": "VersloDI"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "DI Konsultavimas",
      "provider": {
        "@type": "ProfessionalService",
        "name": "VersloDI"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Lietuva"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "DI Konsultavimo Paketai",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "STARTER",
              "description": "Procesų auditas ir greiti laimėjimai per 4–8 sav."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GROWTH",
              "description": "Pilnas DI planas 6–12 mėn. su ROI skaičiuokle"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IMPACT",
              "description": "Strateginis DI transformacijos planas su pilotu"
            }
          }
        ]
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kuo skiriasi jūsų konsultavimas nuo kitų?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mes esame vendor-agnostic – nesiūlome konkrečių įrankių, o sprendžiame jūsų verslo problemas. Pradedame nuo procesų audito, ne nuo technologijų."
          }
        },
        {
          "@type": "Question",
          "name": "Ar reikia turėti didelį biudžetą DI diegimui?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ne! Mūsų STARTER paketas skirtas būtent mažoms ir vidutinėms įmonėms – pradedame nuo greito audito ir quick wins, kurie atsiperkantys per kelis mėnesius."
          }
        },
        {
          "@type": "Question",
          "name": "Kiek laiko užtrunka pamatyti rezultatus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pirmieji quick wins matomi per 2–4 sav. po audito. Pilnas planas įgyvendinamas per 6–12 mėn., priklausomai nuo jūsų tikslų."
          }
        },
        {
          "@type": "Question",
          "name": "Ar dirbate tik su didelėmis įmonėmis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ne! Dirbame su įmonėmis nuo 10 iki 500+ darbuotojų. Mūsų paketai pritaikyti skirtingo dydžio verslams."
          }
        },
        {
          "@type": "Question",
          "name": "Kaip skaičiuojate ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Naudojame tikslią ROI skaičiuoklę, kuri įvertina sutaupytą laiką, sumažintas klaidas, padidėjusį produktyvumą ir kitus matuojamus rodiklius."
          }
        },
        {
          "@type": "Question",
          "name": "Ar galiu pradėti nuo nemokamos konsultacijos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taip! Siūlome 30 min. nemokamą konsultaciją, kurioje aptarsime jūsų poreikius ir galimybes."
          }
        }
      ]
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(organizationSchema, 'organization-schema');
    addSchema(websiteSchema, 'website-schema');
    addSchema(serviceSchema, 'service-schema');
    addSchema(faqSchema, 'faq-schema');

    return () => {
      document.getElementById('organization-schema')?.remove();
      document.getElementById('website-schema')?.remove();
      document.getElementById('service-schema')?.remove();
      document.getElementById('faq-schema')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Process />
      <UseCases />
      <Packages />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}
