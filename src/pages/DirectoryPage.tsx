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
  logo?: string
  link?: string
}

const TENANTS: Tenant[] = [
  // ── Ground Floor ──────────────────────────────────────────
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Bonzai', category: 'Food & Drink', categoryKey: 'food-drink',
    logo: 'directory/first_floor/Bonzai_logo.PNG',
    desc: 'Pacific Rim flavors meet Willamette Valley soul. Roll-up garage doors, craft cocktails, and food that earns regulars fast.',
    link: '/ground-floor',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Jade Dumplings', category: 'Food & Drink', categoryKey: 'food-drink',
    logo: 'directory/first_floor/jade_dumpling.jpeg',
    desc: 'Hand-folded dim sum and dumplings made fresh daily. Sunday brunch is a standing institution — first come, first seated.',
    link: '/ground-floor',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Dreamies Creamery', category: 'Food & Drink', categoryKey: 'food-drink',
    logo: 'directory/first_floor/dreamies_creamy_logo2.png',
    desc: 'Handcrafted ice cream and frozen treats made in-house. The sweetest stop on the ground floor.',
    link: '/ground-floor',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Ivory Bull', category: 'Food & Drink', categoryKey: 'food-drink',
    logo: 'directory/first_floor/ivory_bull_logo.png',
    desc: 'A bold neighborhood bar with craft pours and an atmosphere that earns its name. Come for the drinks, stay for the energy.',
    link: '/ground-floor',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Aloe', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/first_floor/aloe_logo.JPG',
    desc: 'Clean beauty and skincare essentials thoughtfully curated for your daily ritual. Elevate your routine, naturally.',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Noira', category: 'Retail', categoryKey: 'retail',
    logo: 'directory/first_floor/noira_logo.png',
    desc: 'Curated fashion and lifestyle pieces for the woman who dresses with intention. Style that speaks before you do.',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'Black Label Marketing', category: 'Office & Services', categoryKey: 'office',
    logo: 'directory/first_floor/black_label_marketing.png',
    desc: 'Strategic marketing and brand building for businesses ready to stand out in the Pacific Northwest.',
  },
  {
    floor: 'Ground Floor', floorKey: 'ground-floor',
    name: 'A Wonderful World', category: 'Retail', categoryKey: 'retail',
    desc: 'A thoughtfully stocked retail experience bringing something special to the ground floor of The Forge.',
  },

  // ── Second Floor ──────────────────────────────────────────
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: "Women's Collective", category: 'Community', categoryKey: 'community',
    desc: "A membership community and gathering space built for women in Salem — events, networking, and a room of their own at The Forge.",
    link: '/womens-collective',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Clink!', category: 'Events & Venues', categoryKey: 'events-venues',
    logo: 'directory/second_floor/Clink1.png',
    desc: "Cherry blossom tree. Velvet pink booths. The most charming bar Salem has ever seen — and it's on the second floor.",
    link: '/womens-collective',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Luxe Lash Studio', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Luxe_Lash_Studio.png',
    desc: 'Volume, hybrid, and classic lash extensions with a waiting list that earns every name on it.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Satin & Stone', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Satin_Stone.webp',
    desc: "Deep tissue, hot stone, and custom bodywork designed to make your to-do list feel like someone else's problem.",
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'The Hot Loft', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Hot_Loft.png',
    desc: 'Reformer pilates, infrared heat, and a 6am community that actually looks happy about it. Respect.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Diosa Luxury Hair Lounge', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Diosa_Luxury_Hair_Lounge.png',
    desc: 'Luxury hair services with a Latin soul. Where precision cuts, bold color, and goddess energy meet.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Halo Hair Studio', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Halo_Hair_Studio.png',
    desc: 'Precision cuts, lived-in color, and a studio atmosphere that makes every visit feel like a treat.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Ivory Hair Co.', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Ivory_Hair_Co.png',
    desc: 'Beautiful hair starts here. Specializing in color, texture, and transformations done right.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Neon Republic Salon', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Neon_Republic_Salon.png',
    desc: 'Bold cuts, electric color, and a salon energy that matches the name. Your next look lives here.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Studio Roux', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Studio_Roux.jpeg',
    desc: 'A boutique salon experience with a French-inspired sensibility — effortless, polished, and always intentional.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Allelu', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/Allelu.png',
    desc: 'A joyful beauty space dedicated to bringing out your natural radiance — one appointment at a time.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'BLND', category: 'Beauty & Salon', categoryKey: 'beauty-salon',
    logo: 'directory/second_floor/BLND.jpeg',
    desc: 'Color specialists and cutting-edge hair artistry. BLND knows exactly what your hair needs next.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'HH Aesthetics', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/HH_Aesthetics.png',
    desc: 'Advanced aesthetics and skin treatments tailored to help you look and feel your most confident.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'The Esthetic Gallery', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/The_Esthetic_Gallery.png',
    desc: 'Skincare as art. Advanced facial treatments and bespoke aesthetics for clients who take their skin seriously.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Radiance by Ray', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Radiance_by_Ray.png',
    desc: 'Glow-focused treatments, customized facials, and the kind of skincare that actually shows.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Full Circle Stretching', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Full_Circle_Stretching.webp',
    desc: 'Assisted stretching and mobility sessions designed to bring your body back into balance — one session at a time.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Bungalow', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Bungalow.png',
    desc: 'A cozy, intentional space designed for rest, restoration, and the kind of quiet that actually works.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Shanti Soul Counseling', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/Shanti_Soul_Counseling.png',
    desc: 'Holistic mental health counseling grounded in compassion, mindfulness, and the belief that healing is possible.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'PNW Smiles', category: 'Health & Wellness', categoryKey: 'wellness',
    logo: 'directory/second_floor/PNW_smiles.jpg',
    desc: 'Welcoming, modern dental care in the heart of downtown Salem. Great smiles are good medicine.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Injection Studio', category: 'Health & Wellness', categoryKey: 'wellness',
    desc: 'Medical aesthetics and injectable treatments administered with precision, artistry, and a commitment to natural-looking results.',
  },
  {
    floor: 'Second Floor', floorKey: 'second-floor',
    name: 'Capital Mortgage Source', category: 'Financial', categoryKey: 'financial',
    logo: 'directory/second_floor/Capital_Mortgage_Source.png',
    desc: 'Home financing made approachable — local expertise, straightforward guidance, and real results for Pacific Northwest buyers.',
  },

  // ── Third Floor ───────────────────────────────────────────
  {
    floor: 'Third Floor', floorKey: 'third-floor',
    name: 'Anthem Strategists', category: 'Financial', categoryKey: 'financial',
    logo: 'directory/third_floor/Anthem.png',
    desc: 'Financial strategy and advisory services for individuals and businesses ready to play offense with their money.',
    link: '/anthem',
  },

  // ── Lower Level ───────────────────────────────────────────
  {
    floor: 'Lower Level', floorKey: 'lower-level',
    name: 'Cellar 54', category: 'Events & Venues', categoryKey: 'events-venues',
    logo: 'directory/lower_floor/The_Forge_Lower_Level_Cellar_54_Logo1.webp',
    desc: "Salem's most distinctive private event space. Exposed brick, moody lighting, and a curated atmosphere for the events that actually matter.",
    link: '/cellar-54',
  },
]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'food-drink', label: 'Food & Drink' },
  { key: 'beauty-salon', label: 'Beauty & Salon' },
  { key: 'wellness', label: 'Health & Wellness' },
  { key: 'events-venues', label: 'Events & Venues' },
  { key: 'financial', label: 'Financial' },
  { key: 'community', label: 'Community' },
  { key: 'retail', label: 'Retail' },
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
                {t.logo && (
                  <div className="dir-tenant-logo">
                    <img src={img(t.logo)} alt={`${t.name} logo`} />
                  </div>
                )}
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
