import BrandLogo from '@/components/BrandLogo';

export default function JournalPage() {
  const navItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'Story', href: '/story' },
    { label: 'Notes', href: '/notes' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  const entries = [
    {
      title: 'An evening ritual',
      text: 'Dark Elixir is designed for nights that require presence, depth, and a memorable trail that lingers after the moment has passed.',
    },
    {
      title: 'Textured warmth',
      text: 'A richly layered blend of amber, florals, and woods creates a long-lasting aura that feels both soft and magnetic.',
    },
    {
      title: 'Signature identity',
      text: 'Each bottle expresses confidence without excess — a refined statement for those who prefer quiet power over loud attention.',
    },
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
          <p className="eyebrow">Journal</p>
          <h3>Notes from the house</h3>
        </div>

        <div className="story-grid">
          {entries.map((entry) => (
            <article key={entry.title} className="story-card">
              <span className="number">•</span>
              <h4>{entry.title}</h4>
              <p>{entry.text}</p>
            </article>
          ))}
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
