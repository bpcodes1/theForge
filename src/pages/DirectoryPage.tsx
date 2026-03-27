import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { img } from '../utils/img'

type Tenant = {
  floor: string
  floorKey: string
  name: string
  category: string
  categoryKey: string
  desc: React.ReactNode
  link?: string
}

const TENANTS: Tenant[] = [
  { floor: 'Ground Floor', floorKey: 'ground-floor', name: 'Bonzai', category: 'Food & Drink', categoryKey: 'food-drink', desc: 'Pacific Rim flavors meet Willamette Valley soul. Roll-up garage doors, craft cocktails, and food that earns regulars fast.', link: '/ground-floor' },
  { floor: 'Ground Floor', floorKey: 'ground-floor', name: 'Jade Dumplings', category: 'Food & Drink', categoryKey: 'food-drink', desc: 'Hand-folded dim sum and dumplings made fresh daily. Sunday brunch is a standing institution — first come, first seated.', link: '/ground-floor' },
  { floor: 'Second Floor', floorKey: 'second-floor', name: "Women's Collective", category: 'Community', categoryKey: 'community', desc: "A membership community and gathering space built for women in Salem — events, networking, and a room of their own at The Forge.", link: '/womens-collective' },
  { floor: 'Second Floor', floorKey: 'second-floor', name: 'Clink', category: 'Events & Venues', categoryKey: 'events-venues', desc: 'A beautifully appointed event space within the Women\'s Collective — private parties, showers, fundraisers, and celebrations done right.', link: '/womens-collective' },
  { floor: 'Upper Level', floorKey: 'upper-level', name: 'Anthem Strategists', category: 'Financial', categoryKey: 'financial', desc: "Financial strategy and advisory services for individuals and businesses ready to play offense with their money. Bold moves, clear plans.", link: '/anthem' },
  { floor: 'Lower Level', floorKey: 'lower-level', name: 'Cellar 54', category: 'Events & Venues', categoryKey: 'events-venues', desc: "Salem's most distinctive private event space. Exposed brick, moody lighting, and a curated atmosphere for the events that actually matter.", link: '/cellar-54' },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor', name: 'Coming Soon', category: 'Retail', categoryKey: 'retail',
    desc: <span>A new retail tenant is joining the Ground Floor. Stay tuned — or <Link to="/leasing" style={{ color: 'var(--cherry)' }}>inquire about available space</Link>.</span>
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor', name: 'Coming Soon', category: 'Health & Wellness', categoryKey: 'wellness',
    desc: <span>A health and wellness operator is filling this space. Interested in a similar spot? <Link to="/leasing" style={{ color: 'var(--cherry)' }}>View leasing options</Link>.</span>
  },
  {
    floor: 'Upper Level', floorKey: 'upper-level', name: 'Available Space', category: 'Office & Services', categoryKey: 'office',
    desc: 'Office and professional service suites available on the upper level. Great natural light, central location, strong foot traffic.',
    link: '/leasing'
  },
]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'food-drink', label: 'Food & Drink' },
  { key: 'events-venues', label: 'Events & Venues' },
  { key: 'financial', label: 'Financial' },
  { key: 'community', label: 'Community' },
  { key: 'retail', label: 'Retail' },
  { key: 'wellness', label: 'Health & Wellness' },
  { key: 'office', label: 'Office & Services' },
]

export default function DirectoryPage() {
  useEffect(() => { document.title = 'Directory — The Forge Salem' }, [])

  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')

  const visible = TENANTS.filter(t => {
    const matchFilter = activeFilter === 'all' || t.categoryKey === activeFilter
    const q = search.toLowerCase().trim()
    const matchSearch = !q || t.name.toLowerCase().includes(q) || (typeof t.desc === 'string' && t.desc.toLowerCase().includes(q))
    return matchFilter && matchSearch
  })

  return (
    <>
      <Nav />

      <div className="page-hero" style={{ minHeight: '280px' }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${img('exterior.jpg')})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="page-floor-label">The Forge · 285 Liberty St. N.E.</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>Tenant<br />Directory</h1>
        </div>
      </div>

      <div className="page-breadcrumb">
        <Link to="/">The Forge</Link>
        <span className="sep">·</span>
        <span className="current">Directory</span>
      </div>

      <div className="dir-filter-bar">
        <span className="dir-filter-label">Filter by</span>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`dir-filter-btn${activeFilter === f.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
        <div className="dir-filter-search">
          <input
            type="search"
            placeholder="Search tenants…"
            autoComplete="off"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="dir-body">
        <p className="dir-count">{visible.length === 1 ? '1 tenant' : `${visible.length} tenants`}</p>

        {visible.length === 0 ? (
          <div className="dir-empty">
            No tenants match your search. <Link to="/leasing" style={{ color: 'var(--cherry)' }}>Interested in leasing?</Link>
          </div>
        ) : (
          <div className="dir-grid">
            {visible.map((t, i) => (
              <div className="dir-tenant-card" key={i}>
                <div className="dir-tenant-floor">{t.floor}</div>
                <div className="dir-tenant-name">{t.name}</div>
                <div className="dir-tenant-category">{t.category}</div>
                <p className="dir-tenant-desc">{t.desc}</p>
                {t.link && (
                  <Link to={t.link} className="dir-tenant-link">Learn more →</Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA STRIP */}
      <div className="newsletter-strip" style={{ background: 'var(--paper)', borderTop: '1px solid var(--blush)' }}>
        <div>
          <h3 className="nl-headline">Your Business Belongs Here</h3>
          <p className="nl-sub">Spaces available now — ground floor, office suites, and creative studios.</p>
        </div>
        <Link to="/leasing" className="btn btn--cherry" style={{ whiteSpace: 'nowrap', background: 'var(--cherry)', color: '#fff' }}>View Leasing Options</Link>
      </div>

      <Footer />
    </>
  )
}
