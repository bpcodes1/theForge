import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import NewsletterStrip from '../components/NewsletterStrip'

export default function GroundFloorPage() {
  useEffect(() => { document.title = 'Ground Floor — The Forge Salem' }, [])

  return (
    <>
      <Nav />

      <div className="page-hero" style={{ minHeight: '700px' }}>
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/ground-floor.jpg')" }} />
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
      <div className="feature-split">
        <div className="feature-visual">
          <img src="/images/bonzai.jpg" alt="Bonzai restaurant" loading="lazy" />
        </div>
        <div className="feature-body feature-body--paper">
          <div className="feature-eyebrow">Ground Floor</div>
          <h2 className="feature-title">Bonzai</h2>
          <p className="feature-text">Pacific Rim flavors meet Willamette Valley soul. Bonzai is the kind of restaurant that earns regulars in the first week — roll-up garage doors that blur the line between inside and out, a full bar that takes its craft cocktails seriously, and food that makes you wonder why you waited this long.</p>
          <p className="feature-text">Whether you're in for a long lunch, a proper date night, or just a drink at the bar while you figure out the rest of your evening, Bonzai delivers.</p>
          <div className="feature-meta">
            <div className="feature-meta-item"><label>Cuisine</label><span>Pacific Rim</span></div>
            <div className="feature-meta-item"><label>Hours</label><span>Tue – Sun, 11am – 10pm</span></div>
            <div className="feature-meta-item"><label>Bar</label><span>Full service</span></div>
          </div>
          <div className="feature-actions">
            <a href="mailto:inquiries@forgesalem.com" className="btn btn--cherry" style={{ background: 'var(--cherry)', color: '#fff' }}>Reserve a Table</a>
            <Link to="/#events" className="btn">See Upcoming Events</Link>
          </div>
        </div>
      </div>

      {/* JADE DUMPLINGS */}
      <div className="feature-split feature-split--rev">
        <div className="feature-visual">
          <img src="/images/jade-dumplings.jpg" alt="Jade Dumplings" loading="lazy" />
        </div>
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
            <a href="mailto:inquiries@forgesalem.com" className="btn btn--cherry" style={{ background: 'var(--cherry)', color: '#fff' }}>Reserve a Table</a>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="section section--paper" style={{ paddingTop: '4rem' }}>
        <div className="section-header">
          <div>
            <span className="section-label">Ground Floor</span>
            <h2 className="section-title">The Space</h2>
          </div>
        </div>
        <div className="gallery-3">
          <div className="g3-main"><img src="/images/ground-floor.jpg" alt="Ground floor dining area" loading="lazy" /></div>
          <div><img src="/images/gallery-2.jpg" alt="Bonzai interior" loading="lazy" /></div>
          <div><img src="/images/gallery-3.jpg" alt="Jade Dumplings" loading="lazy" /></div>
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
