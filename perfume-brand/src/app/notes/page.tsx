import BrandLogo from '@/components/BrandLogo';

export default function NotesPage() {
  const navItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'Story', href: '/story' },
    { label: 'Notes', href: '/notes' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  const notes = [
    {
      label: 'Top',
      title: 'Amber & spice',
      text: 'Instant warmth with a rich, golden opening that captures attention.',
    },
    {
      label: 'Heart',
      title: 'Velvet florals',
      text: 'Soft rose and sensual blooms balance the boldness with elegance.',
    },
    {
      label: 'Base',
      title: 'Wood & musk',
      text: 'Smoky woods and creamy musk leave a lasting, magnetic trail.',
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
          <p className="eyebrow">Fragrance notes</p>
          <h3>Depth in every layer</h3>
        </div>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <article key={note.title} className={`note-card ${index === 1 ? 'accent' : ''}`}>
              <span className="note-tag">{note.label}</span>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
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
