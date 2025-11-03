import { useEffect, useState } from 'react';
import { Users, Heart, Book, Leaf } from 'lucide-react';

const counters = [
  { label: 'Women Empowered', icon: Users, value: 2500, color: '#FF6B00' },
  { label: 'Animals Rescued', icon: Heart, value: 1800, color: '#6DBE45' },
  { label: 'Children Educated', icon: Book, value: 5200, color: '#FF6B00' },
  { label: 'Communities Supported', icon: Leaf, value: 325, color: '#6DBE45' },
];

export default function ImpactCounters() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const durations = counters.map(() => 1200); // ms
    const start = performance.now();

    const tick = () => {
      const now = performance.now();
      const progress = Math.min(1, (now - start) / Math.max(...durations));
      setCounts(
        counters.map((c, i) => Math.floor(c.value * progress))
      );
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((c, i) => (
            <div key={c.label} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <c.icon style={{ color: c.color }} />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    {counts[i].toLocaleString()}+
                  </div>
                  <div className="text-sm text-neutral-600">{c.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
