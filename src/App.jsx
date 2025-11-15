import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Bike, Sparkles, Shield, Battery, ShoppingCart, Star } from 'lucide-react'

function Navbar() {
  return (
    <div className="w-full z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Bike className="h-5 w-5 text-white" />
          </div>
          <div className="text-white">
            <div className="text-lg font-semibold tracking-wide">VeloNova</div>
            <div className="text-xs text-white/60 -mt-1">Affordable Bikes</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#models" className="text-white/80 hover:text-white transition">Models</a>
          <a href="#reviews" className="text-white/80 hover:text-white transition">Reviews</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md text-white/90 hover:text-white transition">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white backdrop-blur border border-white/10 transition">
            <ShoppingCart className="h-4 w-4" />
            Shop
          </button>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,0,255,0.25),transparent),radial-gradient(40%_60%_at_100%_100%,rgba(0,120,255,0.15),transparent)]" />
      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.25\\'/></svg>')" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-purple-300" />
              Futuristic design. Friendly prices.
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }} className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Ride bold. Pay less.
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">Affordable performance bicycles</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-5 text-white/70 max-w-lg">
            Explore lightweight city bikes and all‑terrain rides built for everyday adventures. Premium feel without the premium price tag.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#models" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500 transition">
              <ShoppingCart className="h-4 w-4" />
              Shop bikes from $299
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Learn more
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-300" />
              <span>4.8 rating</span>
            </div>
            <div className="text-white/50">•</div>
            <div>2-year warranty</div>
          </motion.div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[46vh] sm:h-[52vh] md:h-[60vh] lg:h-[70vh] w-full">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-white font-medium">{title}</div>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_0%,rgba(120,0,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built to thrill. Priced to chill.</h2>
          <p className="mt-3 text-white/70">Carefully crafted frames, dependable components, and battery options on select models — all tuned for real‑world riding.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Shield} title="2‑Year Warranty" desc="Ride with confidence. Comprehensive coverage on all core components." />
          <Feature icon={Battery} title="E‑Assist Option" desc="Zip through the city with efficient batteries and smart power delivery." />
          <Feature icon={Sparkles} title="Lightweight Frames" desc="Responsive handling with durable, high‑grade alloys." />
          <Feature icon={Bike} title="Everyday Ready" desc="Fenders, racks, and lights compatible across our lineup." />
        </div>
      </div>
    </section>
  )
}

const bikes = [
  {
    name: 'CityLite 2',
    price: 299,
    accent: 'from-purple-600 to-indigo-600',
    desc: 'Urban commuter with 7‑speed drivetrain and comfort saddle.',
    img: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'TrailOne',
    price: 399,
    accent: 'from-fuchsia-600 to-purple-600',
    desc: 'All‑terrain hardtail with suspension fork and wide tires.',
    img: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Velo E‑Assist',
    price: 699,
    accent: 'from-indigo-600 to-blue-600',
    desc: 'Electric boost for effortless hills and longer rides.',
    img: 'https://images.unsplash.com/photo-1549194389-88c4aa6b2159?q=80&w=1200&auto=format&fit=crop'
  }
]

function ProductCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
      <img src={item.img} alt={item.name} className="h-56 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">{item.name}</h3>
          <div className={`rounded-md px-2 py-1 text-xs text-white bg-gradient-to-r ${item.accent}`}>${item.price}</div>
        </div>
        <p className="mt-2 text-sm text-white/70">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white hover:bg-white/15 transition">
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </button>
          <button className="text-sm text-white/70 hover:text-white transition">View details →</button>
        </div>
      </div>
    </div>
  )
}

function Models() {
  return (
    <section id="models" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(0,120,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Popular models</h2>
            <p className="mt-2 text-white/70">Curated picks that balance value and performance.</p>
          </div>
          <a href="#" className="text-sm text-white/80 hover:text-white">See all models →</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((b) => (
            <ProductCard key={b.name} item={b} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_100%,rgba(160,80,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Riders love the feel</h2>
          <p className="mt-2 text-white/70">Real feedback from everyday commutes and weekend trails.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-1 text-yellow-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <p className="mt-3 text-white/80 text-sm">“Excellent value for the quality. Smooth ride, great brakes, and looks stunning in person.”</p>
              <div className="mt-4 text-xs text-white/60">Verified buyer</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(100,0,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-800/60 via-fuchsia-700/40 to-indigo-800/50 p-10 md:p-14 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to roll?</h3>
              <p className="mt-2 text-white/80">Join thousands of riders who switched to smarter, more affordable bikes.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a href="#models" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-semibold shadow">
                Browse models
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white/15 transition">
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <div className="flex items-center gap-2">
          <Bike className="h-5 w-5 text-white/80" />
          <span>© {new Date().getFullYear()} VeloNova</span>
        </div>
        <div className="text-sm">Built for everyday riders • Black + purple aesthetic</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Global dark background */}
      <div className="absolute inset-0 -z-0 bg-[#0a0a0b]" />

      <Navbar />
      <Hero />
      <Features />
      <Models />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  )
}
