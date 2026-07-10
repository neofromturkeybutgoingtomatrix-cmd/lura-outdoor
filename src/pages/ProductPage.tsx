import { useParams, Link } from 'react-router-dom'
import { products, contentPlan } from '../data/catalog'

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)
  if (!product) return (
    <div className="pt-32 px-6 text-center">
      <p className="text-white/50">Product not found</p>
      <Link to="/products" className="text-lura-gold mt-4 inline-block">← Back</Link>
    </div>
  )

  const assets = contentPlan.filter(c => c.productId === id)

  return (
    <div className="pb-24">
      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={`/products/${product.id}-hero.jpg`} alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lura-black via-lura-black/30 to-lura-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/products" className="text-white/40 hover:text-lura-gold text-sm transition mb-6 inline-block">← Back to Collection</Link>
            <p className="text-lura-gold text-xs tracking-[0.2em] uppercase mb-2">{product.segment}</p>
            <h1 className="font-display text-5xl md:text-7xl mb-4">{product.name}</h1>
            <p className="text-2xl md:text-3xl text-white/60 font-light">{product.tagline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main: Specs & Description */}
          <div className="lg:col-span-2">
            <p className="text-white/60 text-lg leading-relaxed mb-16">{product.description}</p>

            {/* Specs Grid */}
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
              {product.specs.map(s => (
                <div key={s} className="border border-white/5 p-4 text-sm text-white/60 hover:border-lura-gold/20 transition">
                  {s}
                </div>
              ))}
            </div>

            {/* USPs */}
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">Why Lura {product.name}</h3>
            <div className="space-y-4 mb-16">
              {product.usp.map((u, i) => (
                <div key={i} className="flex items-start gap-4 border-l-2 border-lura-gold/30 pl-4 py-1">
                  <span className="text-lura-gold text-sm mt-0.5">0{i+1}</span>
                  <p className="text-white/70">{u}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Price + Content */}
          <div className="space-y-8">
            {/* Price Card */}
            <div className="border border-lura-gold/20 bg-white/[0.02] p-8 sticky top-24">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Pricing</p>
              <div className="mb-6">
                <p className="text-3xl font-light text-lura-gold">{product.priceRange}</p>
                <p className="text-sm text-white/30 mt-1">Direct-to-dealer</p>
              </div>
              <div className="border-t border-white/5 pt-4 mb-6">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Competitor Range</p>
                <p className="text-lg text-white/30 line-through">{product.competitorPrice}</p>
              </div>
              <Link to="/dealer" className="block text-center py-3 bg-lura-gold text-lura-black font-medium text-sm tracking-wide hover:bg-white transition uppercase">
                Find a Dealer
              </Link>
            </div>

            {/* Content Pipeline */}
            <div className="border border-white/5 bg-white/[0.02] p-8">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Content Pipeline</p>
              <div className="space-y-3">
                {assets.map(a => (
                  <div key={a.id} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${a.status === 'ready' ? 'bg-green-500' : a.status === 'rendering' ? 'bg-yellow-500 animate-pulse' : 'bg-white/10'}`} />
                    <div>
                      <p className="text-white/70">{a.setting}</p>
                      <p className="text-xs text-white/30">{a.type} · {a.season}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}