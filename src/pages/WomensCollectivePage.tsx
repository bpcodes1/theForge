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
        <div className="page-hero-bg" style={{ backgroundImage: `url(${img('womens-collective.jpg')})` }} />
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
          <img src={img('clink_bar.jpg')} alt="Clink! champagne and martini bar" loading="lazy" />
          <span className="clink-badge">Now Open</span>
        </div>
        <div className="clink-info">
          <div className="clink-eyebrow">Featured Tenant</div>
          <h2 className="clink-title">Salem, Meet<br />Clink!</h2>
          <p className="clink-body">A champagne and martini bar tucked inside the Women's Collective — because a floor with cherry blossom trees and velvet booths clearly wasn't going to let a French bistro aesthetic go to waste.</p>
          <p className="clink-body">Clink! is women-centric by design. A place to celebrate each other, catch up over bubbles, and linger longer than you planned. Come for the champagne. Stay because you don't want it to end.</p>
          <div className="clink-details">
            <div className="clink-detail"><label>Vibe</label><span>French-inspired, velvet, cherry blossoms</span></div>
            <div className="clink-detail"><label>Specialty</label><span>Champagne flights, craft martinis</span></div>
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
        <div className="tenant-grid">
          {[
            { name: 'Clink!', type: 'Champagne & Martini Bar', desc: 'Cherry blossom tree. Velvet pink booths. The most charming bar Salem has ever seen, and it\'s on the second floor of a building.' },
            { name: 'Luxe Lash Studio', type: 'Lash Extensions & Beauty', desc: 'Volume, hybrid, classic. The suite with a waiting list that earns every name on it.' },
            { name: 'Satin & Stone', type: 'Massage & Body Wellness', desc: 'Deep tissue, hot stone, and custom bodywork designed to make your to-do list feel like someone else\'s problem.' },
            { name: 'The Hot Loft', type: 'Infrared Yoga & Pilates', desc: 'Reformer pilates, infrared heat, and a 6am community that actually looks happy about it. Respect.' },
            { name: 'Suite 201', type: 'Available', desc: <span>Private suite available for lease. Join the Collective. <a href="mailto:inquiries@forgesalem.com" style={{ color: 'var(--cherry)' }}>Inquire →</a></span> },
            { name: 'Suite 208', type: 'Available', desc: <span>Private suite available for lease. Join the Collective. <a href="mailto:inquiries@forgesalem.com" style={{ color: 'var(--cherry)' }}>Inquire →</a></span> },
          ].map((t, i) => (
            <div className="tenant-card section--paper" key={i}>
              <div className="tenant-card-name">{t.name}</div>
              <div className="tenant-card-type">{t.type}</div>
              <p className="tenant-card-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LADIES ROOM */}
      <div className="ladies-split" id="ladies-room">
        <div className="ladies-imgs">
          <img src={img('ladies_room.jpg')} alt="The Ladies' Room" loading="lazy" />
          <img src={img('pink_marble_sinks.jpg')} alt="Pink marble sinks" loading="lazy" />
          <img src={img('ladies_room_neon.jpg')} alt="The Ladies Room neon sign" loading="lazy" />
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
