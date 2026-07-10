import { contentPlan, products } from '../data/catalog'

const statusColors = {
  ready: 'bg-green-500',
  rendering: 'bg-yellow-500 animate-pulse',
  planned: 'bg-white/10'
}

export function ContentDashboard() {
  const byStatus = {
    ready: contentPlan.filter(c => c.status === 'ready').length,
    rendering: contentPlan.filter(c => c.status === 'rendering').length,
    planned: contentPlan.filter(c => c.status === 'planned').length,
  }

  return (
    <div className="min-h-screen bg-lura-black font-lura text-white p-6">
      <div className="max-w-7xl mx-auto pt-8">
        <h1 className="font-display text-3xl mb-2">Content Engine</h1>
        <p className="text-lura-stone mb-12">Blender render pipeline · Social media calendar · Factory media archive</p>

        {/* Status */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-2xl font-light text-green-400">{byStatus.ready}</div>
            <div className="text-xs text-lura-stone">Ready</div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-2xl font-light text-yellow-400">{byStatus.rendering}</div>
            <div className="text-xs text-lura-stone">Rendering</div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-2xl font-light text-lura-stone">{byStatus.planned}</div>
            <div className="text-xs text-lura-stone">Planned</div>
          </div>
        </div>

        {/* Render Queue */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* By Product */}
          <div>
            <h2 className="font-display text-xl mb-4">By Product</h2>
            {products.map(p => {
              const assets = contentPlan.filter(c => c.productId === p.id)
              const ready = assets.filter(a => a.status === 'ready').length
              return (
                <div key={p.id} className="border border-white/5 bg-white/[0.02] p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium">{p.name}</span>
                      <span className="text-lura-stone text-sm ml-2">{p.tagline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-white/5 h-1 rounded-full overflow-hidden">
                        <div className="h-full bg-lura-gold rounded-full" style={{ width: `${assets.length ? (ready / assets.length) * 100 : 0}%` }} />
                      </div>
                      <span className="text-xs text-lura-stone">{ready}/{assets.length}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {assets.map(a => (
                      <span key={a.id} className={`w-2 h-2 rounded-full ${statusColors[a.status]}`} title={`${a.type}: ${a.setting}`} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Calendar View */}
          <div>
            <h2 className="font-display text-xl mb-4">Content Calendar</h2>
            <div className="space-y-2">
              {contentPlan.map(c => {
                const prod = products.find(p => p.id === c.productId)
                return (
                  <div key={c.id} className="border border-white/5 bg-white/[0.02] p-4 flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${statusColors[c.status]}`} />
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="text-lura-gold">{prod?.name}</span>
                        <span className="text-lura-stone"> — {c.type.toUpperCase()}</span>
                      </div>
                      <div className="text-xs text-lura-stone">{c.setting} · {c.season}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 ${c.status === 'ready' ? 'bg-green-500/10 text-green-400' : c.status === 'rendering' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-white/5 text-lura-stone'}`}>
                      {c.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Blender Brief Generator */}
        <div className="mt-16 border border-lura-gold/10 bg-white/[0.02] p-8">
          <h2 className="font-display text-2xl mb-4">Blender Brief Generator</h2>
          <p className="text-lura-stone text-sm mb-6">Generate detailed Blender render briefs for each content asset. Output: camera angles, lighting, materials, environment settings.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <select className="bg-white/5 border border-white/10 p-3 text-white">
              <option>Select Product</option>
              {products.map(p => <option key={p.id}>{p.name}</option>)}
            </select>
            <select className="bg-white/5 border border-white/10 p-3 text-white">
              <option>Season</option>
              <option>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Winter</option>
            </select>
            <select className="bg-white/5 border border-white/10 p-3 text-white">
              <option>Setting</option>
              <option>California Modern</option>
              <option>Florida Coastal</option>
              <option>Texas Hill Country</option>
              <option>Northeast Traditional</option>
              <option>Arizona Desert</option>
            </select>
          </div>
          <button className="px-6 py-3 bg-lura-gold text-lura-black font-medium hover:bg-lura-gold/90 transition">
            Generate Brief
          </button>
        </div>
      </div>
    </div>
  )
}