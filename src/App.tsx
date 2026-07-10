import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductPage } from './pages/ProductPage'
import { DealerLanding } from './pages/DealerLanding'
import { DealerPortal } from './pages/DealerPortal'
import { AdminPanel } from './pages/AdminPanel'
import { ContentDashboard } from './pages/ContentDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/dealer" element={<DealerLanding />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
        <Route path="/dealer/portal" element={<DealerPortal />} />
        <Route path="/content" element={<ContentDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}