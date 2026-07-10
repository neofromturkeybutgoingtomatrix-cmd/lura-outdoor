import { dealers, products } from '../data/catalog'

export function DealerPortal() {
  return (
    <div className="min-h-screen bg-lura-black font-lura text-white p-6">
      <div className="max-w-7xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-display text-3xl">Dealer Portal</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-lura-stone">Miami Outdoor Living</span>
            <div className="w-8 h-8 rounded-full bg-lura-gold/20 border border-lura-gold/40 flex items-center justify-center text-xs text-lura-gold">M</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 mb-8">
          {['Catalog', 'Pricing', 'Orders', 'Training'].map(tab => (
            <button key={tab} className={`px-6 py-3 text-sm tracking-wide transition border-b-2 -mb-[1px] ${tab === 'Catalog' ? 'border-lura-gold text-lura-gold' : 'border-transparent text-lura-stone hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Catalog */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="border border-white/5 bg-white/[0.02] p-6">
              <div className="text-xs text-lura-gold uppercase tracking-[0.2em] mb-3">{p.segment}</div>
              <h3 className="font-display text-xl mb-1">{p.name}</h3>
              <p className="text-xs text-lura-stone mb-4">{p.tagline}</p>
              <div className="text-lura-gold text-lg mb-2">{p.priceRange}</div>
              <div className="text-xs text-lura-stone/50 line-through mb-6">{p.competitorPrice}</div>
              <button className="w-full py-2 border border-white/10 text-sm hover:border-lura-gold transition">View Details</button>
            </div>
          ))}
        </div>

        {/* Quick Order */}
        <div className="mt-16 border border-lura-gold/10 bg-white/[0.02] p-8">
          <h2 className="font-display text-2xl mb-4">Quick Order</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <select className="bg-white/5 border border-white/10 p-3 text-white">
              <option>Select Product</option>
              {products.map(p => <option key={p.id}>{p.name}</option>)}
            </select>
            <input type="number" placeholder="Qty" className="bg-white/5 border border-white/10 p-3 text-white" />
            <input type="text" placeholder="Project Name" className="bg-white/5 border border-white/10 p-3 text-white" />
            <button className="bg-lura-gold text-lura-black font-medium hover:bg-lura-gold/90 transition px-6 py-3">Add to Order</button>
          </div>
        </div>

        {/* Pending Dealers Status */}
        <div className="mt-16">
          <h2 className="font-display text-2xl mb-4">Active Dealers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-lura-stone border-b border-white/5">
                  <th className="pb-3 font-normal">Dealer</th>
                  <th className="pb-3 font-normal">State</th>
                  <th className="pb-3 font-normal">Type</th>
                  <th className="pb-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {dealers.map(d => (
                  <tr key={d.id} className="border-b border-white/5">
                    <td className="py-3">{d.name}</td>
                    <td className="py-3 text-lura-stone">{d.city}, {d.state}</td>
                    <td className="py-3 text-lura-stone capitalize">{d.type}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 ${d.status === 'approved' ? 'bg-green-500/10 text-green-400' : d.status === 'rejected' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}