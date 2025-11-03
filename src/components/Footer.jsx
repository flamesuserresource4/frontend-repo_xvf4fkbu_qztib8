import { Mail, MapPin, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-white">VAJRA Charitable Trust & Foundation</h3>
          <p className="mt-3 text-sm text-neutral-400 max-w-md">
            With the Strength of Vajra — We Serve, Protect, and Educate.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#donate" className="rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">Donate</a>
            <a href="#involved" className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Volunteer</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5" size={18} /> 632/2, Gandhi Salai, Near Indian Oil Petrol Bunk, Manimangalam, Chennai - 601301, Tamil Nadu</li>
            <li className="flex items-center gap-2"><Phone size={18} /> <a href="tel:+918608080609" className="hover:underline">+91 86080 80609</a></li>
            <li className="flex items-center gap-2"><Mail size={18} /> <a href="mailto:contact@vajra.org" className="hover:underline">contact@vajra.org</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Follow</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-neutral-700 p-2 hover:bg-neutral-800"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-neutral-700 p-2 hover:bg-neutral-800"><Youtube size={18} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-neutral-700 p-2 hover:bg-neutral-800"><Facebook size={18} /></a>
          </div>
          <p className="mt-4 text-xs text-neutral-500">Made with compassion in Chennai, Tamil Nadu.</p>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} VAJRA Charitable Trust & Foundation. All rights reserved.
      </div>
    </footer>
  );
}
