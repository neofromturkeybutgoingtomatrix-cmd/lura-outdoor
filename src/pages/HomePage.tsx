import { Link } from 'react-router-dom'
import { products } from '../data/catalog'

export function HomePage() {
  return (
    <div>
      {/* Hero with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-lura-black/60 via-lura-black/40 to-lura-black" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-lura-gold text-sm tracking-[0.3em] uppercase mb-6 font-medium">European Design · American Living</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[0.95]">
            Outdoor Living<br />
            <span className="text-lura-gold italic">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Pergola and shade systems engineered in Türkiye.<br />
            Priced for the American home.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/products" className="px-10 py-4 bg-lura-gold text-lura-black font-medium tracking-wide hover:bg-white transition text-sm uppercase">
              Explore Collection
            </Link>
            <Link to="/dealer" className="px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/60 transition text-sm uppercase">
              Become a Dealer
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Product Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <p className="text-lura-gold text-xs tracking-[0.3em] uppercase mb-4">Four Systems</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Infinite Spaces</h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg font-light">From poolside shade to hilltop panoramic glass walls — one system for every outdoor vision.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <Link key={p.id} to={`/products/${p.id}`}
              className="group relative overflow-hidden border border-white/5 hover:border-lura-gold/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img src={`/products/${p.id}-hero.jpg`} alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lura-black via-lura-black/20 to-transparent" />
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-lura-gold text-xs tracking-[0.2em] uppercase mb-2">{p.segment}</p>
                    <h3 className="font-display text-3xl mb-1">{p.name}</h3>
                    <p className="text-white/60 text-sm">{p.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lura-gold text-lg font-light">{p.priceRange}</p>
                    <p className="text-white/30 text-xs line-through">{p.competitorPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* USP Section */}
      <section className="border-t border-white/5 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-lura-gold text-xs tracking-[0.3em] uppercase mb-4">Why Lura</p>
            <h2 className="font-display text-4xl md:text-5xl">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-lura-gold text-4xl mb-6 font-light">01</div>
              <h3 className="font-display text-2xl mb-4">European Engineering</h3>
              <p className="text-white/50 leading-relaxed">Designed and manufactured in Türkiye to CE standards. Every system tested for wind, snow, and UV resistance. 5-year structural warranty.</p>
            </div>
            <div className="text-center">
              <div className="text-lura-gold text-4xl mb-6 font-light">02</div>
              <h3 className="font-display text-2xl mb-4">Direct-to-Dealer</h3>
              <p className="text-white/50 leading-relaxed">No distributor markup. Dealers buy factory-direct and keep 40-50% margin. Our prices are 30-50% below US competitors.</p>
            </div>
            <div className="text-center">
              <div className="text-lura-gold text-4xl mb-6 font-light">03</div>
              <h3 className="font-display text-2xl mb-4">Content-First</h3>
              <p className="text-white/50 leading-relaxed">We provide photo-real renders, installation videos, and social content. Dealers can sell before they stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lura-blue to-lura-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Partner?</h2>
          <p className="text-white/50 text-lg mb-10 font-light">We're launching with 5 strategic US dealers. Florida, Texas, California, Arizona, New York. First movers get exclusive territory rights.</p>
          <Link to="/dealer" className="inline-block px-10 py-4 bg-lura-gold text-lura-black font-medium tracking-wide hover:bg-white transition text-sm uppercase">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}