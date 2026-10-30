import BrandLogo from '@/components/BrandLogo';

export default function CollectionPage() {
  const navItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'Story', href: '/story' },
    { label: 'Notes', href: '/notes' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  const products = [
    { name: 'Night Veil', price: '₹ 2,490', tag: 'Signature' },
    { name: 'Dark Elixir', price: '₹ 2,999', tag: 'Best Seller' },
    { name: 'Velvet Bloom', price: '₹ 2,799', tag: 'Unisex' },
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

        <a className="nav-cta" href="/contact">
          Shop Now
        </a>
      </header>

      <main className="section-wrap" style={{ paddingBottom: '90px' }}>
        <div className="section-heading centered">
          <p className="eyebrow">Featured collection</p>
          <h3>Luxury that speaks softly</h3>
        </div>

        <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
          {products.map((product, index) => (
            <article key={product.name} className={`product-card ${index === 1 ? 'featured' : ''}`}>
              <div className={`product-visual ${index === 0 ? 'product-1' : index === 1 ? 'product-2' : 'product-3'}`}>
                <div className="mini-bottle">
                  <span className="mini-cap" />
                </div>
              </div>

              <div className="product-info">
                <p className="product-tag">{product.tag}</p>
                <h4>{product.name}</h4>
                <div className="product-row">
                  <span>{product.price}</span>
                  <button type="button">Add to cart</button>
                </div>
              </div>
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
