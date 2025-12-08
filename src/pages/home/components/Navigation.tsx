import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#apie', label: 'Apie' },
    { href: '#procesas', label: 'Procesas' },
    { href: '#pritaikymas', label: 'Pritaikymas' },
    { href: '#paketai', label: 'Paketai' },
    { href: '#rezultatai', label: 'Rezultatai' },
    { href: '#duk', label: 'DUK' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#0A4834]' : 'text-white'
            }`}
          >
            VersloDI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors hover:text-[#9F8151] ${
                  isScrolled ? 'text-[#0A4834]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#kontaktai"
              className="px-6 py-3 bg-[#0A4834] text-white rounded-xl hover:bg-[#9F8151] transition-all font-bold whitespace-nowrap cursor-pointer"
            >
              Rezervuok Pokalbį
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              isScrolled ? 'text-[#0A4834] hover:bg-[#0A4834]/10' : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-white border-t border-[#0A4834]/10 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-[#0A4834] font-semibold hover:bg-[#0A4834]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#kontaktai"
              onClick={handleLinkClick}
              className="block px-4 py-3 bg-[#0A4834] text-white rounded-xl hover:bg-[#9F8151] transition-all font-bold text-center whitespace-nowrap cursor-pointer"
            >
              Rezervuok Pokalbį
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
