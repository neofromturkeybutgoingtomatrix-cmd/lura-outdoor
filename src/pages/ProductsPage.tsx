import { Link } from 'react-router-dom'
import { products } from '../data/catalog'

export function ProductsPage() {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-lura-gold text-xs tracking-[0.3em] uppercase mb-4">Collection</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our Systems</h1>
          <p className="text-white/50 text-lg max-w-xl font-light">Four architectural systems. One standard of quality. Explore the full line.</p>
        </div>

        <div className="space-y-24">
          {products.map((p, i) => (
            <Link key={p.id} to={`/products/${p.id}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={`/products/${p.id}-hero.jpg`} alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-lura-gold text-xs tracking-[0.2em] uppercase mb-3">{p.segment}</p>
                  <h2 className="font-display text-4xl md:text-5xl mb-3 group-hover:text-lura-gold transition-colors">{p.name}</h2>
                  <p className="text-2xl text-white/50 font-light mb-6">{p.tagline}</p>
                  <p className="text-white/60 leading-relaxed mb-8">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.specs.map(s => (
                      <span key={s} className="text-xs px-3 py-1.5 border border-white/10 text-white/50 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Lura Price</p>
                      <p className="text-2xl font-light text-lura-gold">{p.priceRange}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Competitor</p>
                      <p className="text-lg text-white/30 line-through">{p.competitorPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}