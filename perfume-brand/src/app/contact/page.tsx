import BrandLogo from '@/components/BrandLogo';

export default function ContactPage() {
  const navItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'Story', href: '/story' },
    { label: 'Notes', href: '/notes' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <BrandLogo />
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="/collection">
          Shop Now
        </a>
      </header>

      <main className="section-wrap" style={{ paddingBottom: '90px' }}>
        <div className="section-heading centered">
          <p className="eyebrow">Contact</p>
          <h3>Let your signature begin here</h3>
        </div>

        <div className="testimonial-box" style={{ maxWidth: '760px' }}>
          <div className="story-card" style={{ minHeight: 'auto', background: 'rgba(18,18,18,0.9)' }}>
            <p><strong>Email:</strong> <a href="mailto:hello@houseofarham.com">hello@houseofarham.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919999999999">+91 99999 99999</a></p>
            <p><strong>Instagram:</strong> <a href="#">@houseofarham</a></p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="brand-lockup footer-brand">
              <BrandLogo compact />
            </div>
            <p>Luxury perfume experiences born for unforgettable moments.</p>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="/collection">Collections</a></li>
              <li><a href="/notes">Notes</a></li>
              <li><a href="/story">Our story</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@houseofarham.com">hello@houseofarham.com</a></li>
              <li><a href="tel:+919999999999">+91 99999 99999</a></li>
              <li><a href="/contact">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 House of Arham</span>
          <span>Crafted for presence.</span>
        </div>
      </footer>
    </div>
  );
}
