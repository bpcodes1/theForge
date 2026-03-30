import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import NewsletterStrip from '../components/NewsletterStrip'
import { img } from '../utils/img'

export default function GroundFloorPage() {
  useEffect(() => { document.title = 'Ground Floor — The Forge Salem' }, [])

  return (
    <>
      <Nav />

      <div className="page-hero" style={{ minHeight: '700px' }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${img('ground-floor.jpg')})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="page-floor-label" style={{ color: 'rgba(255,255,255,0.72)', textShadow: '0 1px 6px rgba(0,0,0,0.5)', fontSize: '0.65rem' }}>Ground Floor · 285 Liberty St. N.E.</span>
          <h1 className="page-title">The Heart<br />of It All</h1>
          <p className="page-tagline">Where Salem comes to eat well, stay long, and come back again.</p>
        </div>
      </div>

      <div className="page-breadcrumb">
        <Link to="/">The Forge</Link>
        <span className="sep">·</span>
        <span className="current">Ground Floor</span>
      </div>

      {/* BONZAI */}
      <div className="feature-split" style={{ minHeight: '100vh' }}>
        <div className="feature-visual">
          <img src={img('groundfloor/Bonzai_Entrance.JPG')} alt="Bonzai restaurant" loading="lazy" />
        </div>
        <div className="feature-body feature-body--paper">
          <div className="feature-eyebrow">Ground Floor</div>
          <h2 className="feature-title">Bonzai</h2>
          <p className="feature-text">Bonzai! is a fusion of... well, us! Founded by two half-Japanese coffee shop professionals, our space is a reflection of who we are - half American, half Japanese, and all about bringing those worlds together.</p>
          <p className="feature-text">We're one part Pacific Northwest coffeehouse, one part apanese teabar. That means you'll find the classics - lattes, cold brew, and coffeehouse vibes - right alongside flavorful matcha, eclectic boba drinks, rice bowls, and even some Japanese lagers & seltzers.</p>
          <p className="feature-text">Bonzai! is where traditional coffee vibes meet Japanese tradition and culture. Half coffee shop, half matcha & boba spot. All the flavor. All the fusion. All the Bonzai!</p>
          <div className="feature-meta">
            <div className="feature-meta-item"><label>Cuisine</label><span>Pacific Rim</span></div>
            <div className="feature-meta-item"><label>Hours</label><span>Tue – Sun, 11am – 10pm</span></div>
            <div className="feature-meta-item"><label>Bar</label><span>Full service</span></div>
          </div>
          <div className="feature-actions">
            <a href="https://bonzaicoffeeteabar.com" target="_blank" rel="noopener noreferrer" className="btn btn--cherry" style={{ background: 'var(--cherry)', color: '#fff' }}>Visit Website</a>
            <Link to="/#events" className="btn">See Upcoming Events</Link>
          </div>
        </div>
      </div>

      {/* JADE DUMPLINGS */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', background: 'var(--cream)' }}>
        <div className="feature-body feature-body--cream">
          <div className="feature-eyebrow">Ground Floor</div>
          <h2 className="feature-title">Jade Dumplings</h2>
          <p className="feature-text">Hand-folded. Made fresh. Locally adored. Jade Dumplings has become one of those places Salem talks about the way people talk about restaurants in cities three times its size. The dim sum is the real thing — not a shortcut in sight.</p>
          <p className="feature-text">Extended Sunday brunch runs weekly with a special dim sum spread. If you haven't been on a Sunday yet, you're not living right. First come, first seated.</p>
          <div className="feature-meta">
            <div className="feature-meta-item"><label>Specialty</label><span>Dim sum &amp; dumplings</span></div>
            <div className="feature-meta-item"><label>Sunday Brunch</label><span>10am – 2pm</span></div>
            <div className="feature-meta-item"><label>Hours</label><span>Mon – Sun, 11am – 9pm</span></div>
          </div>
          <div className="feature-actions">
            <span className="btn" style={{ opacity: .5, cursor: 'default', pointerEvents: 'none' }}>Coming Soon</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6rem' }}>
          <img src={img('directory/first_floor/jade_dumpling.jpeg')} alt="Jade Dumplings logo" style={{ width: '100%', maxWidth: '160px', height: '160px', objectFit: 'cover', borderRadius: '50%' }} />
        </div>
      </div>

      {/* GALLERY */}
      <div className="section section--paper" style={{ paddingTop: '4rem', overflow: 'hidden' }}>
        <div className="section-header">
          <div>
            <span className="section-label">Ground Floor</span>
            <h2 className="section-title">The Space</h2>
          </div>
        </div>
        <div className="gallery-6">
          <div className="g6-banner"><img src={img('groundfloor/Bonzai_Overview.JPG')} alt="Bonzai overview" loading="lazy" /></div>
          <div><img src={img('groundfloor/Ivory_Bull.JPG')} alt="Ivory Bull" loading="lazy" /></div>
          <div className="g6-placeholder">
            <img src={img('hero.jpg')} alt="The Forge" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div><img src={img('groundfloor/Dreamies_Creamery.jpg')} alt="Dreamies Creamery" loading="lazy" /></div>
          <div className="g6-banner"><img src={img('ground-floor.jpg')} alt="Ground floor dining area" loading="lazy" /></div>
        </div>
      </div>

      <div className="pull-quote" style={{ padding: '4rem var(--section-h)' }}>
        <div className="pull-quote-mark">"</div>
        <p className="pull-quote-text">The best dumplings in the Willamette Valley. That's not marketing — go try them.</p>
        <span className="pull-quote-attr">— The Forge</span>
      </div>

      <NewsletterStrip subtext="Events, new menus, and reservations — first to your inbox." />

      <Footer />
    </>
  )
}
