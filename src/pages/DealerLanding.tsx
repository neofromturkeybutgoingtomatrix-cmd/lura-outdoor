import { usStates } from '../data/catalog'

export function DealerLanding() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl mb-4">Become a Lura Dealer</h1>
        <p className="text-lura-stone text-lg max-w-2xl mb-12">
          We're launching in the US with 5 strategic dealer partners. 
          Direct pricing, 40-50% margin, content support, and exclusive territory rights.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-2xl mb-3">Direct Pricing</h3>
            <p className="text-lura-stone text-sm">No distributor layers. Buy factory-direct and keep 40-50% margin. Our prices are 30-50% below US competitors.</p>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-2xl mb-3">Content Engine</h3>
            <p className="text-lura-stone text-sm">We produce photo-real 3D renders, installation videos, and social content for every product. Sell before you stock.</p>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-2xl mb-3">Territory Protection</h3>
            <p className="text-lura-stone text-sm">One dealer per metro area. No competition from neighbors. First movers get the best territories.</p>
          </div>
          <div className="border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-display text-2xl mb-3">5-Year Warranty</h3>
            <p className="text-lura-stone text-sm">European CE-certified manufacturing. 5-year structural warranty on all systems. Build trust with your clients.</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="border border-lura-gold/20 bg-white/[0.02] p-8">
          <h2 className="font-display text-3xl mb-6">Dealer Application</h2>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-lura-stone mb-2">Company Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-lura-gold outline-none transition" placeholder="Your business name" />
              </div>
              <div>
                <label className="block text-sm text-lura-stone mb-2">Contact Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-lura-gold outline-none transition" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-lura-stone mb-2">State</label>
                <select className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-lura-gold outline-none transition">
                  <option value="">Select state</option>
                  {usStates.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-lura-stone mb-2">City</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-lura-gold outline-none transition" placeholder="City" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-lura-stone mb-2">Dealer Type</label>
              <div className="flex gap-4">
                {['Installer', 'Showroom', 'Distributor'].map(t => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="type" className="accent-lura-gold" />
                    <span className="text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-lura-stone mb-2">Why Lura? (Brief)</label>
              <textarea className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-lura-gold outline-none transition h-24" placeholder="Tell us about your business and why you want to partner with Lura..." />
            </div>
            <button className="px-8 py-3 bg-lura-gold text-lura-black font-medium tracking-wide hover:bg-lura-gold/90 transition">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}