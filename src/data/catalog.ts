export interface Product {
  id: string
  name: string
  nameTr: string
  tagline: string
  description: string
  specs: string[]
  image: string
  usp: string[]
  segment: 'premium' | 'mid'
  priceRange: string
  competitorPrice: string
}

export interface Dealer {
  id: string
  name: string
  state: string
  city: string
  type: 'installer' | 'showroom' | 'distributor'
  status: 'pending' | 'approved' | 'rejected'
  contact: string
}

export interface ContentAsset {
  id: string
  productId: string
  type: 'render' | 'photo' | 'video' | 'factory'
  season: 'spring' | 'summer' | 'fall' | 'winter'
  setting: string
  url: string
  status: 'ready' | 'rendering' | 'planned'
}

export const products: Product[] = [
  {
    id: 'axis',
    name: 'Lura Axis',
    nameTr: 'Bioklimatik Tente',
    tagline: 'Adjustable Louvered Pergola',
    description: 'Motorized aluminum louvered roof system. Rotates 0-135° for precise light and airflow control. Built-in drainage, LED lighting, and wind sensor compatibility.',
    specs: ['Aluminum 6063-T5', '0-135° rotation', 'Wind sensor ready', 'LED integrated', 'Runs up to 5m spans', 'CE certified'],
    image: '/products/axis-hero.jpg',
    usp: ['European engineering', '30% below US competition', '5-year warranty'],
    segment: 'premium',
    priceRange: '$9,000–14,000',
    competitorPrice: '$15,000–25,000 (StruXure)'
  },
  {
    id: 'slide',
    name: 'Lura Slide',
    nameTr: 'Rolling Roof Tente',
    tagline: 'Retractable Fabric Roof System',
    description: 'Motorized retractable roof with high-performance Sunbrella fabric. Opens fully for stargazing, closes for rain protection. Tracks up to 6m.',
    specs: ['Sunbrella fabric', 'Up to 6m span', 'Somfy motor', 'Remote + app control', 'Wind class 6', 'UV protection 98%'],
    image: '/products/slide-hero.jpg',
    usp: ['German motor (Somfy)', 'Sunbrella fabric — US trusted', '40% below Brustor'],
    segment: 'premium',
    priceRange: '$12,000–20,000',
    competitorPrice: '$20,000–35,000 (Brustor)'
  },
  {
    id: 'shade',
    name: 'Lura Shade',
    nameTr: 'Pergola Tente',
    tagline: 'Fixed Awning Pergola',
    description: 'Clean architectural pergola with fixed awning. Powder-coated aluminum frame, tensioned fabric canopy. Perfect for restaurants and poolside.',
    specs: ['Powder-coated aluminum', 'Tensioned canopy', 'Custom colors', 'Up to 4m projection', 'Wall or freestanding'],
    image: '/products/shade-hero.jpg',
    usp: ['Custom color matching', 'Fast install (1 day)', '50% below Arcadia'],
    segment: 'mid',
    priceRange: '$3,000–6,000',
    competitorPrice: '$5,000–10,000 (Arcadia)'
  },
  {
    id: 'glass',
    name: 'Lura Glass',
    nameTr: 'Giyotin Cam',
    tagline: 'Motorized Glass Wall System',
    description: 'Floor-to-ceiling frameless glass panels that lower completely into the floor. Transforms any terrace into an indoor-outdoor space in seconds.',
    specs: ['Tempered glass 10mm', 'Frameless design', 'Silent motor', 'Up to 3m height', 'Fingerprint-proof coating', 'Wind load tested'],
    image: '/products/glass-hero.jpg',
    usp: ['Frameless — no obstruction', 'Silent operation', '40% below Lumon'],
    segment: 'premium',
    priceRange: '$500–800/m²',
    competitorPrice: '$800–1,200/m² (Lumon)'
  }
]

export const contentPlan: ContentAsset[] = [
  { id: 'c1', productId: 'axis', type: 'render', season: 'summer', setting: 'Malibu hillside, sunset', url: '', status: 'planned' },
  { id: 'c2', productId: 'axis', type: 'render', season: 'fall', setting: 'Napa Valley vineyard', url: '', status: 'planned' },
  { id: 'c3', productId: 'slide', type: 'render', season: 'summer', setting: 'Miami rooftop, rain', url: '', status: 'planned' },
  { id: 'c4', productId: 'slide', type: 'render', season: 'spring', setting: 'Austin backyard, poolside', url: '', status: 'planned' },
  { id: 'c5', productId: 'glass', type: 'render', season: 'fall', setting: 'Hamptons beach house', url: '', status: 'planned' },
  { id: 'c6', productId: 'glass', type: 'render', season: 'winter', setting: 'Aspen ski lodge', url: '', status: 'planned' },
  { id: 'c7', productId: 'shade', type: 'render', season: 'summer', setting: 'Santa Monica restaurant patio', url: '', status: 'planned' },
  { id: 'c8', productId: 'shade', type: 'render', season: 'spring', setting: 'Scottsdale resort pool', url: '', status: 'planned' },
  { id: 'c9', productId: 'axis', type: 'factory', season: 'summer', setting: 'Konya production line', url: '', status: 'planned' },
  { id: 'c10', productId: 'slide', type: 'factory', season: 'summer', setting: 'Quality control station', url: '', status: 'planned' },
]

export const dealers: Dealer[] = [
  { id: 'd1', name: 'Miami Outdoor Living', state: 'FL', city: 'Miami', type: 'showroom', status: 'pending', contact: '—' },
  { id: 'd2', name: 'Austin Pergola Co', state: 'TX', city: 'Austin', type: 'installer', status: 'pending', contact: '—' },
  { id: 'd3', name: 'LA Modern Exteriors', state: 'CA', city: 'Los Angeles', type: 'showroom', status: 'pending', contact: '—' },
  { id: 'd4', name: 'Hamptons Luxury Living', state: 'NY', city: 'Southampton', type: 'installer', status: 'pending', contact: '—' },
  { id: 'd5', name: 'Scottsdale Outdoor', state: 'AZ', city: 'Scottsdale', type: 'distributor', status: 'pending', contact: '—' },
]

export const usStates = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]