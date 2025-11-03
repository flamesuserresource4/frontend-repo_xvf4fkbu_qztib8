import { useState, useEffect } from 'react';
import { Heart, Shield, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#causes', label: 'Causes' },
    { href: '#involved', label: 'Get Involved' },
    { href: '#media', label: 'Media & Impact' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      isScrolled ? 'bg-white/90 backdrop-blur border-b border-neutral-200' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
            <Shield className="text-[#FF6B00]" size={24} />
            <span className="tracking-wide">VAJRA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-[#FF6B00] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 transition-colors"
            >
              <Heart size={16} /> Donate
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-neutral-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-neutral-800 hover:bg-neutral-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600"
            >
              <Heart size={16} /> Donate
            </a>
            <a href="tel:+918608080609" className="flex items-center gap-2 text-sm text-neutral-700 pt-2">
              <Phone size={16} /> +91 86080 80609
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
