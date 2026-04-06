import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import NewsletterStrip from '../components/NewsletterStrip'
import { img } from '../utils/img'

export default function WomensCollectivePage() {
  useEffect(() => { document.title = "Women's Collective — The Forge Salem" }, [])

  return (
    <>
      <Nav />

      <div className="page-hero" style={{ minHeight: '700px' }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${img('womens-collective.webp')})` }} />
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(to bottom,rgba(225,6,0,.12) 0%,rgba(22,31,40,.78) 100%)' }} />
        <div className="page-hero-content">
          <span className="page-floor-label" style={{ color: 'var(--confidence)' }}>Second Floor · 285 Liberty St. N.E.</span>
          <h1 className="page-title">Women's<br />Collective</h1>
          <p className="page-tagline">Twenty-four suites. A champagne bar. The best bathroom in Oregon. The second floor has opinions.</p>
        </div>
      </div>

      <div className="page-breadcrumb">
        <Link to="/">The Forge</Link>
        <span className="sep">·</span>
        <span className="current">Women's Collective</span>
      </div>

      {/* INTRO */}
      <div className="section section--cream about-split">
        <div>
          <span className="section-label">About the Floor</span>
          <h2 className="section-title">Built for Women.<br />By Women.</h2>
        </div>
        <div>
          <p style={{ fontSize: '.95rem', lineHeight: 1.85, opacity: .85, marginBottom: '1rem' }}>
            The second floor of The Forge is home to Salem's most curated gathering of wellness, beauty, and community. Twenty-four suites house independent practitioners who chose this floor because they wanted to be part of something larger than their own four walls.
          </p>
          <p style={{ fontSize: '.95rem', lineHeight: 1.85, opacity: .85 }}>
            From Clink!'s cherry blossom champagne bar to The Hot Loft's 6am infrared pilates to Luxe Lash's perpetual waiting list — this floor has range. Come up for one thing. Leave having found three more.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(42,53,64,0.1)', margin: '0 var(--section-h)' }} />

      {/* CLINK! */}
      <div className="clink-split" id="clink">
        <div className="clink-img">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100%', gap: '2px' }}>
            <img src={img('clink_bar.webp')} alt="Clink! bar" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src={img('womens_collective/Clink3.webp')} alt="Clink! interior" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src={img('womens_collective/Clink2.webp')} alt="Clink! dining" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <img src={img('womens_collective/Clink1.webp')} alt="Clink! ambiance" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <img src={img('directory/second_floor/Clink1.webp')} alt="Clink! logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', zIndex: 2 }} />
          <span className="clink-badge">Now Open</span>
        </div>
        <div className="clink-info">
          <div className="clink-eyebrow">Featured Tenant</div>
          <h2 className="clink-title">Salem, Meet<br />Clink!</h2>
          <p className="clink-body">Clink! is a French-inspired restaurant in the heart of Salem, offering seasonal, locally inspired cuisine, thoughtfully crafted cocktails, and warm, elevated hospitality.</p>
          <p className="clink-body">Designed as a welcoming gathering place, Clink! offers lunch, brunch, and dinner with an experience that feels both refined and approachable.</p>
          <div className="clink-details">
            <div className="clink-detail"><label>Wed – Fri</label><span>Lunch 11am – 2:30pm · Dinner 4pm – 9pm</span></div>
            <div className="clink-detail"><label>Saturday</label><span>Brunch 9am – 2:30pm · Dinner 4pm – 9pm</span></div>
            <div className="clink-detail"><label>Sunday</label><span>Brunch 9am – 2:30pm · Dinner 4pm – 7pm</span></div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/clinksalem/" target="_blank" rel="noopener" className="btn btn--cherry" style={{ background: 'var(--cherry)', color: '#fff' }}>Follow @clinksalem</a>
            <Link to="/#events" className="btn">Upcoming Clink! Events</Link>
          </div>
        </div>
      </div>

      {/* TENANT GRID */}
      <div className="section section--paper" style={{ paddingTop: '4rem' }}>
        <div className="section-header">
          <div>
            <span className="section-label">Second Floor</span>
            <h2 className="section-title">The Suites</h2>
          </div>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', maxWidth: '320px', textAlign: 'right', lineHeight: 1.6 }}>
            Independent practitioners. Curated community. Twenty-four reasons to make the second floor part of your routine.
          </p>
        </div>
        <div className="tenant-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {[
            { name: 'Halo Hair Studio',        type: 'Beauty & Salon',     suite: 'Suite 200' },
            { name: 'Capital Mortgage Source', type: 'Financial',           suite: 'Suite 202' },
            { name: 'Bungalow',                type: 'Health & Wellness',   suite: 'Suite 204' },
            { name: 'Injection Studio',        type: 'Health & Wellness',   suite: 'Suite 208' },
            { name: 'Allelu',                  type: 'Beauty & Salon',     suite: 'Suite 210' },
            { name: 'Luxe Lash Studio',        type: 'Beauty & Salon',     suite: 'Suite 216' },
            { name: 'Neon Republic Salon',     type: 'Beauty & Salon',     suite: 'Suite 218' },
            { name: 'BLND',                    type: 'Beauty & Salon',     suite: 'Suite 222' },
            { name: 'Clink!',                  type: 'Events & Venues',    suite: 'Suite 230' },
            { name: 'Ivory Hair Co.',          type: 'Beauty & Salon',     suite: 'Suite 240' },
            { name: 'The Esthetic Gallery',    type: 'Health & Wellness',   suite: 'Suite 250' },
            { name: 'Full Circle Stretching',  type: 'Health & Wellness',   suite: 'Suite 252' },
            { name: 'Shanti Soul Counseling',  type: 'Health & Wellness',   suite: 'Suite 254' },
            { name: 'Studio Roux',             type: 'Beauty & Salon',     suite: 'Suite 256' },
            { name: 'Kimmy Neal Marketing',    type: 'Office & Services',  suite: 'Suite 258' },
            { name: 'Diosa Luxury Hair Lounge',type: 'Beauty & Salon',     suite: 'Suite 260' },
            { name: 'Radiance by Ray',         type: 'Health & Wellness',   suite: 'Suite 262' },
            { name: 'Satin & Stone',           type: 'Health & Wellness',   suite: 'Suite 264' },
            { name: 'HH Aesthetics',           type: 'Health & Wellness',   suite: 'Suite 266' },
            { name: 'The Hot Loft',            type: 'Health & Wellness',   suite: 'Suite 270' },
            { name: 'PNW Smiles',              type: 'Health & Wellness',   suite: 'Suite 272' },
          ].map((t, i) => (
            <div className="tenant-card section--paper" key={i} style={{ padding: '1.4rem 1.4rem' }}>
              <div className="tenant-card-name" style={{ fontSize: '1rem' }}>{t.name}</div>
              <div className="tenant-card-type">{t.type}</div>
              <div className="tenant-card-desc">{t.suite}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LADIES ROOM */}
      <div className="ladies-split" id="ladies-room">
        <div className="ladies-imgs">
          <img src={img('ladies_room.webp')} alt="The Ladies' Room" loading="lazy" />
          <img src={img('pink_marble_sinks.webp')} alt="Pink marble sinks" loading="lazy" />
          <img src={img('ladies_room_neon.webp')} alt="The Ladies Room neon sign" loading="lazy" />
        </div>
        <div className="ladies-info">
          <span className="ladies-eyebrow">Yes, We Need to Talk About This</span>
          <h2 className="ladies-title">The Finest<br />Restroom in<br />Oregon.</h2>
          <div className="ladies-divider" />
          <p className="ladies-body">We know. We're as surprised as you are. But on the second floor of The Forge, we built a ladies' room that people <strong>go out of their way to visit.</strong></p>
          <p className="ladies-body">Crystal chandeliers. Pink marble vessel sinks. Brass everything. Smart mirrors. A neon sign. Velvet scallop chairs. Framed art reminding you not to drunk-text your ex.</p>
          <p className="ladies-body">The restroom code is available at the front desk and from any second-floor tenant. See <Link to="/faq#restrooms" style={{ color: 'var(--cherry)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>FAQ</Link> for details.</p>
          <p className="ladies-kicker">"You're welcome, Salem."</p>
        </div>
      </div>

      <div className="pull-quote" style={{ padding: '4rem var(--section-h)' }}>
        <div className="pull-quote-mark">"</div>
        <p className="pull-quote-text">Twenty-four suites. A champagne bar. The best bathroom in Oregon. The second floor has opinions.</p>
        <span className="pull-quote-attr">— The Forge Women's Collective</span>
      </div>

      <NewsletterStrip subtext="Clink! events, new suites, and Collective news — first to your inbox." />

      <Footer />
    </>
  )
}
