import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[86vh] w-full overflow-hidden bg-neutral-900">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src="https://cdn.coverr.co/videos/coverr-volunteer-hands-6067/1080p.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight"
        >
          With the Strength of Vajra —
          <br />
          We Serve, Protect, and Educate.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-neutral-200"
        >
          Strength in Service. Compassion in Action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#donate"
            className="rounded-full bg-[#FF6B00] px-6 py-3 font-semibold text-white shadow hover:bg-orange-600"
          >
            Donate Now
          </a>
          <a
            href="#involved"
            className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Volunteer
          </a>
          <a
            href="#causes"
            className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Explore Causes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
