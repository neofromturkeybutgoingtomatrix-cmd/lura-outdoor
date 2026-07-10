import { dealers } from '../data/catalog'

export function AdminPanel() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl mb-2">Admin Panel</h1>
        <p className="text-lura-stone mb-12">Lura US Operations — Control Room</p>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="border border-white/5 bg-white/[0.02] p-6">
            <div className="text-xs text-lura-stone uppercase tracking-wider mb-2">Dealers</div>
            <div className="text-3xl font-light">{dealers.length}</div>
            <div className="text-xs text-lura-stone mt-1">All pending</div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-6">
            <div className="text-xs text-lura-stone uppercase tracking-wider mb-2">Products</div>
            <div className="text-3xl font-light">4</div>
            <div className="text-xs text-lura-stone mt-1">2 premium, 1 mid</div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-6">
            <div className="text-xs text-lura-stone uppercase tracking-wider mb-2">Content Assets</div>
            <div className="text-3xl font-light">10</div>
            <div className="text-xs text-lura-stone mt-1">All planned</div>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-6">
            <div className="text-xs text-lura-stone uppercase tracking-wider mb-2">Status</div>
            <div className="text-3xl font-light text-yellow-400">Setup</div>
            <div className="text-xs text-lura-stone mt-1">Pre-launch</div>
          </div>
        </div>

        {/* Dealer Management */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-4">Dealer Applications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-lura-stone border-b border-white/5">
                  <th className="pb-3 font-normal">Company</th>
                  <th className="pb-3 font-normal">Location</th>
                  <th className="pb-3 font-normal">Type</th>
                  <th className="pb-3 font-normal">Status</th>
                  <th className="pb-3 font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dealers.map(d => (
                  <tr key={d.id} className="border-b border-white/5">
                    <td className="py-3">{d.name}</td>
                    <td className="py-3 text-lura-stone">{d.city}, {d.state}</td>
                    <td className="py-3 text-lura-stone capitalize">{d.type}</td>
                    <td className="py-3">
                      <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400">{d.status}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <button className="text-xs px-3 py-1 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition">Approve</button>
                        <button className="text-xs px-3 py-1 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border border-lura-gold/10 bg-white/[0.02] p-8">
          <h2 className="font-display text-2xl mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 border border-white/10 text-left hover:border-lura-gold transition">
              <div className="text-sm">+ Add Product</div>
              <div className="text-xs text-lura-stone">Add new product to catalog</div>
            </button>
            <button className="p-4 border border-white/10 text-left hover:border-lura-gold transition">
              <div className="text-sm">+ Content Asset</div>
              <div className="text-xs text-lura-stone">Schedule new render or photo</div>
            </button>
            <button className="p-4 border border-white/10 text-left hover:border-lura-gold transition">
              <div className="text-sm">📊 Export Report</div>
              <div className="text-xs text-lura-stone">PDF summary for Satex TR</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}