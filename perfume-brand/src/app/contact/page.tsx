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

        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Private consultation</p>
            <h4>Tell us what scent feeling you want to create.</h4>
            <p>
              Share your preferences and we will help match a fragrance profile,
              gifting suggestion, or signature scent for your occasion.
            </p>

            <div className="contact-details-list">
              <div>
                <span>Email</span>
                <a href="mailto:hello@houseofarham.com">hello@houseofarham.com</a>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+919999999999">+91 99999 99999</a>
              </div>
              <div>
                <span>Instagram</span>
                <a href="#">@houseofarham</a>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="field-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your full name" />
            </div>

            <div className="field-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="you@example.com" />
            </div>

            <div className="field-group">
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" name="phone" placeholder="+91 98xx xxxxx" />
            </div>

            <div className="field-group">
              <label htmlFor="contact-product">Product</label>
              <select id="contact-product" name="product" defaultValue="">
                <option value="" disabled>Select a fragrance</option>
                <option value="Night Veil">Night Veil</option>
                <option value="Dark Elixir">Dark Elixir</option>
                <option value="Velvet Bloom">Velvet Bloom</option>
                <option value="Gift Set">Gift Set</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="contact-location">Location</label>
              <input id="contact-location" type="text" name="location" placeholder="City or area" />
            </div>

            <div className="field-group">
              <label htmlFor="contact-rating">Rating</label>
              <select id="contact-rating" name="rating" defaultValue="">
                <option value="" disabled>Select your rating</option>
                <option value="5 - Excellent">5 - Excellent</option>
                <option value="4 - Very Good">4 - Very Good</option>
                <option value="3 - Good">3 - Good</option>
                <option value="2 - Fair">2 - Fair</option>
                <option value="1 - Low">1 - Low</option>
              </select>
            </div>

            <div className="field-group full-width">
              <label htmlFor="contact-details">More details</label>
              <textarea id="contact-details" name="details" rows={5} placeholder="Tell us your preferred scent family, occasion, or gifting requirement." />
            </div>

            <button type="submit" className="primary-btn contact-submit">Send enquiry</button>
          </form>
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
