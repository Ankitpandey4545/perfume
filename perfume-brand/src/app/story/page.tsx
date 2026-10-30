export default function StoryPage() {
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
          <div className="brand-mark">HA</div>
          <div className="brand-name">House of Arham</div>
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
        <div className="section-heading">
          <p className="eyebrow">The House</p>
          <h3>Crafted for presence</h3>
        </div>

        <div className="story-grid">
          <div className="story-card story-card-large">
            <p>
              House of Arham is a modern fragrance house rooted in elegance, depth, and individuality.
              Each fragrance is built to feel luxurious, memorable, and unmistakably yours.
            </p>
          </div>

          <div className="story-card">
            <span className="number">01</span>
            <h4>Signature aura</h4>
            <p>
              Layered notes that bloom from silky florals into warm woods and an amber finish.
            </p>
          </div>

          <div className="story-card">
            <span className="number">02</span>
            <h4>Olfactive depth</h4>
            <p>
              Quietly intense and refined, designed for evening wear, celebrations, and statement moments.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="brand-lockup footer-brand">
              <div className="brand-mark small">HA</div>
              <div className="brand-name">House of Arham</div>
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
