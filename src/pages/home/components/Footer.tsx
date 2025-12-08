
export default function Footer() {
  return (
    <footer className="bg-[#EBE1CF] border-t-2 border-[#0A4834]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A4834] mb-4">VersloDI</h3>
            <p className="text-sm sm:text-base text-[#0A4834]/70 mb-4">
              Nepriklausomas DI konsultantas – nuo idėjų iki pamatuojamo ROI per 4–8 savaites.
            </p>
            <a 
              href="mailto:giedrius@versloDI.lt" 
              className="text-[#9F8151] hover:underline font-semibold inline-flex items-center space-x-2 text-sm sm:text-base break-all"
            >
              <i className="ri-mail-line flex-shrink-0"></i>
              <span>giedrius@versloDI.lt</span>
            </a>
          </div>

          <div>
            <h4 className="font-bold text-[#0A4834] mb-4">Greita Navigacija</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#procesas" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  Kaip Dirbu
                </a>
              </li>
              <li>
                <a href="#pritaikymas" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  Pritaikymas
                </a>
              </li>
              <li>
                <a href="#paketai" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  Paketai
                </a>
              </li>
              <li>
                <a href="#rezultatai" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  Rezultatai
                </a>
              </li>
              <li>
                <a href="#duk" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  DUK
                </a>
              </li>
              <li>
                <a href="#kontaktai" className="text-[#0A4834]/70 hover:text-[#9F8151] transition-colors">
                  Kontaktai
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-[#0A4834] mb-4">Paslaugos</h4>
            <ul className="space-y-2 text-sm sm:text-base text-[#0A4834]/70">
              <li>• DI Greitas Auditas</li>
              <li>• Galimybių Studija</li>
              <li>• Fractional AI PMO</li>
              <li>• Mokymai ir Politika</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t-2 border-[#0A4834]/10 gap-4">
          <p className="text-[#0A4834]/60 text-xs sm:text-sm text-center md:text-left">
            © 2025 VersloDI. Visos teisės saugomos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="/privatumo-politika"
              className="text-[#0A4834]/60 hover:text-[#9F8151] text-xs sm:text-sm transition-colors"
            >
              Privatumo politika
            </a>
            <a 
              href="/slapuku-politika"
              className="text-[#0A4834]/60 hover:text-[#9F8151] text-xs sm:text-sm transition-colors"
            >
              Slapukų politika
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
