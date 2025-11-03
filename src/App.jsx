import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounters from './components/ImpactCounters';
import Footer from './components/Footer';
import { Heart, Users, Book, Leaf, Shield, Check, MapPin, Phone, Mail } from 'lucide-react';

function PillarCard({ icon: Icon, title, description, color }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-neutral-50 p-3" style={{ color }}>
          <Icon />
        </div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{description}</p>
      <a href="#causes" className="mt-4 inline-block text-sm font-semibold text-[#FF6B00] hover:underline">Learn more</a>
    </div>
  );
}

function Tier({ amount, text }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="text-3xl font-bold text-neutral-900">₹{amount}</div>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="text-neutral-900">
      <Navbar />
      <main>
        <Hero />

        <ImpactCounters />

        {/* Intro and Pillars */}
        <section id="about" className="bg-[#FFFDF6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">About VAJRA</h2>
                <p className="mt-4 text-neutral-700">
                  VAJRA Charitable Trust & Foundation is a registered NGO based in Chennai, Tamil Nadu. We focus on Women Empowerment, Animal Welfare, Child Education, and Community Welfare — serving with compassion, integrity, and action.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2"><Check className="text-[#6DBE45] mt-0.5" size={18} /> Vision: An equitable, compassionate society where every life thrives.</li>
                  <li className="flex items-start gap-2"><Check className="text-[#6DBE45] mt-0.5" size={18} /> Mission: Empower, protect, and educate through impactful, transparent programs.</li>
                  <li className="flex items-start gap-2"><Check className="text-[#6DBE45] mt-0.5" size={18} /> Motto: With the Strength of Vajra — We Serve, Protect, and Educate.</li>
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-2"><MapPin size={16} /> 632/2, Gandhi Salai, Manimangalam, Chennai - 601301</span>
                  <a className="inline-flex items-center gap-2 hover:underline" href="tel:+918608080609"><Phone size={16} /> +91 86080 80609</a>
                  <a className="inline-flex items-center gap-2 hover:underline" href="mailto:contact@vajra.org"><Mail size={16} /> contact@vajra.org</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img className="h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" alt="Women empowerment" />
                <img className="h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmltYWwlMjB3ZWxmYXJlfGVufDB8MHx8fDE3NjIxODI3NzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Animal welfare" />
                <img className="h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" alt="Child education" />
                <img className="h-40 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1200&auto=format&fit=crop" alt="Community welfare" />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold">Our Pillars</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <PillarCard icon={Users} title="Women Empowerment" description="Safety, dignity, and livelihood through skills, legal aid, and support circles." color="#FF6B00" />
                <PillarCard icon={Heart} title="Animal Welfare" description="Rescue, care, and adoption with a network of shelters and volunteers." color="#6DBE45" />
                <PillarCard icon={Book} title="Education for All" description="Scholarships and rural learning centers bridging access and quality." color="#FF6B00" />
                <PillarCard icon={Leaf} title="Community Welfare" description="Health camps, environment drives, and social awareness programs." color="#6DBE45" />
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section id="causes" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-2">
              <Shield className="text-[#FF6B00]" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">Causes We Champion</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[{
                title: 'Women Empowerment',
                img: 'https://images.unsplash.com/photo-1520975940704-911cc3e0d9a7?q=80&w=1600&auto=format&fit=crop',
                story: 'From self-defense to entrepreneurship, we help women reclaim agency and opportunity.',
              }, {
                title: 'Animal Welfare',
                img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1600&auto=format&fit=crop',
                story: 'Rescue, treatment, and lifelong care for animals through gowshalas and adoption.',
              }, {
                title: 'Education for All',
                img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
                story: 'Rural schooling, scholarships, and mentoring to keep children learning.',
              }, {
                title: 'Community Welfare',
                img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop',
                story: 'Health, environment, and social awareness programs that uplift communities.',
              }].map((c) => (
                <div key={c.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <img src={c.img} alt={c.title} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{c.story}</p>
                    <a href="#donate" className="mt-4 inline-block rounded-full bg-[#6DBE45] px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">Support This Cause</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section id="involved" className="bg-[#FFFDF6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Get Involved</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">Volunteer with us, collaborate through CSR, or join as a recurring donor — Become a Vajra Guardian.</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Skills</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" placeholder="E.g., Teaching, Vet care, Design" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">City</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" placeholder="Your city" />
                  </div>
                </div>
                <button type="button" className="mt-6 inline-flex rounded-full bg-[#6DBE45] px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600">Submit</button>
                <div className="mt-4 text-xs text-neutral-500">By submitting, you agree to be contacted about volunteer opportunities.</div>
              </form>

              <div className="grid gap-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">Corporate CSR Collaborations</h3>
                  <p className="mt-2 text-sm text-neutral-600">Partner with us for sustainable, transparent CSR initiatives across Tamil Nadu.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">Student Internships</h3>
                  <p className="mt-2 text-sm text-neutral-600">Real-world impact projects for college and school students year-round.</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">Become a Vajra Guardian</h3>
                  <p className="mt-2 text-sm text-neutral-600">Join our recurring donor community to power long-term programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media & Impact */}
        <section id="media" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Media & Impact</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop" alt="Fieldwork" />
                <div className="p-6">
                  <h3 className="font-semibold">Success Stories</h3>
                  <p className="mt-2 text-sm text-neutral-600">Read about women entrepreneurs, rescued animals, and students who found their spark.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/1QUZ8Se4J7k"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">In the Field</h3>
                  <p className="mt-2 text-sm text-neutral-600">A glimpse into our on-ground programs and the communities we serve.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#transparency" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-50">Download Reports</a>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section id="donate" className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF6] via-white to-[#FFFDF6] py-16 sm:py-24">
          <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full bg-[#FF6B00]/10 blur-3xl" />
          <div className="absolute -right-28 -bottom-28 h-56 w-56 rounded-full bg-[#6DBE45]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Donate</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">Every contribution makes a real difference. Choose a tier or enter a custom amount at checkout. Recurring donations help us plan long-term programs.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <Tier amount={500} text="Books for a child for 1 month." />
              <Tier amount={1000} text="Animal feed for 10 days." />
              <Tier amount={2500} text="Women’s skill training." />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://rzp.io/l/donate"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#FF6B00] px-6 py-3 font-semibold text-white shadow hover:bg-orange-600"
              >
                Donate via Razorpay
              </a>
              <div className="text-xs text-neutral-500">UPI supported. Secure payments.</div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section id="transparency" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Transparency</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">Annual Reports & Audits</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                  <li><a className="hover:underline" href="#">FY 2023-24 Report (PDF)</a></li>
                  <li><a className="hover:underline" href="#">FY 2022-23 Report (PDF)</a></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">Where Your Donations Go</h3>
                <div className="mt-3 text-sm text-neutral-700">
                  <div className="flex items-center justify-between"><span>Programs</span><span>78%</span></div>
                  <div className="flex items-center justify-between"><span>Operations</span><span>15%</span></div>
                  <div className="flex items-center justify-between"><span>Fundraising</span><span>7%</span></div>
                  <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[78%] bg-[#6DBE45]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#FFFDF6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Contact Us</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" rows={4} placeholder="How can we help?" />
                  </div>
                </div>
                <button type="button" className="mt-6 inline-flex rounded-full bg-[#FF6B00] px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Send Inquiry</button>
              </form>

              <div className="grid gap-6">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                  <iframe
                    title="Vajra location"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Manimangalam%2C+Chennai+601301&output=embed"
                  />
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <a href="https://wa.me/918608080609" className="rounded-full border border-neutral-300 px-4 py-2 font-semibold hover:bg-neutral-50">WhatsApp</a>
                    <a href="tel:+918608080609" className="rounded-full border border-neutral-300 px-4 py-2 font-semibold hover:bg-neutral-50">Call</a>
                    <a href="mailto:contact@vajra.org" className="rounded-full border border-neutral-300 px-4 py-2 font-semibold hover:bg-neutral-50">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Donate Button */}
      <a href="#donate" className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-5 py-3 font-semibold text-white shadow-xl hover:bg-orange-600">
        <Heart size={18} /> Donate
      </a>

      <Footer />
    </div>
  );
}

export default App;
