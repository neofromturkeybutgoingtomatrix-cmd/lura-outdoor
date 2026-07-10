import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Layout() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = isHome && !scrolled ? 'bg-transparent' : 'bg-lura-black/80 backdrop-blur-xl border-b border-white/5'

  return (
    <div className="min-h-screen bg-lura-black font-lura text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wide text-lura-gold hover:text-white transition-colors">
            LURA
          </Link>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase">
            <Link to="/products" className="text-white/60 hover:text-lura-gold transition-colors">Products</Link>
            <Link to="/dealer" className="text-white/60 hover:text-lura-gold transition-colors">Dealer</Link>
            <Link to="/content" className="text-white/60 hover:text-lura-gold transition-colors">Content</Link>
            <Link to="/admin" className="text-white/30 hover:text-lura-gold transition-colors">Admin</Link>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <span className="font-display text-2xl text-lura-gold">LURA</span>
              <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
                European-engineered outdoor living systems. Factory-direct to American dealers. Designed in Türkiye, built for the world.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Products</h4>
              <div className="flex flex-col gap-2">
                <Link to="/products/axis" className="text-sm text-white/50 hover:text-lura-gold transition">Axis</Link>
                <Link to="/products/slide" className="text-sm text-white/50 hover:text-lura-gold transition">Slide</Link>
                <Link to="/products/shade" className="text-sm text-white/50 hover:text-lura-gold transition">Shade</Link>
                <Link to="/products/glass" className="text-sm text-white/50 hover:text-lura-gold transition">Glass</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <Link to="/dealer" className="text-sm text-white/50 hover:text-lura-gold transition">Become a Dealer</Link>
                <a href="#" className="text-sm text-white/50 hover:text-lura-gold transition">Instagram</a>
                <a href="#" className="text-sm text-white/50 hover:text-lura-gold transition">Pinterest</a>
                <a href="#" className="text-sm text-white/50 hover:text-lura-gold transition">Houzz</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/20">
            <p>© 2026 Lura Outdoor Living. Manufactured by Satex Global, Konya, Türkiye.</p>
            <p>European Design. American Living.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}