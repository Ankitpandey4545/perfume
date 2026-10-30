'use client';

import { motion } from 'framer-motion';

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

const products = [
  { name: 'Night Veil', price: '₹ 2,490', tag: 'Signature' },
  { name: 'Dark Elixir', price: '₹ 2,999', tag: 'Best Seller' },
  { name: 'Velvet Bloom', price: '₹ 2,799', tag: 'Unisex' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
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

        <a className="nav-cta" href="#shop">
          Shop Now
        </a>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">Luxury Perfume House</p>
            <div className="hero-mark">HA</div>

            <h1>
              <span>House of</span>
              <em>Arham</em>
            </h1>

            <h2>Dark Elixir</h2>

            <p className="lead">
              A magnetic scent crafted with rare woods, warm amber, and velvet florals
              designed to linger like a signature after dark.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#shop">
                Discover the scent
              </a>
              <a className="secondary-btn" href="#story">
                Our story
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">Size</span>
                <strong>50 ml</strong>
              </div>
              <div>
                <span className="meta-label">Type</span>
                <strong>Natural Spray</strong>
              </div>
              <div>
                <span className="meta-label">Finish</span>
                <strong>Deep & sensual</strong>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="bottle-scene">
              <div className="bottle-glow" />
              <div className="perfume-bottle">
                <div className="cap" />
                <div className="glass">
                  <div className="label-box">
                    <span className="mini-logo">HA</span>
                    <strong>ARHAM</strong>
                    <small>Dark Elixir</small>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="trust-strip" aria-label="Luxury qualities">
          <div className="trust-item">
            <span className="icon flame">🔥</span>
            <p>Long-lasting</p>
          </div>
          <div className="trust-item">
            <span className="icon clock">⏳</span>
            <p>36M</p>
          </div>
          <div className="trust-item">
            <span className="icon recycle">♻</span>
            <p>Refill ready</p>
          </div>
        </section>

        <motion.section
          id="story"
          className="section-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading">
            <p className="eyebrow">The House</p>
            <h3>Crafted for presence</h3>
          </div>

          <div className="story-grid">
            <div className="story-card story-card-large">
              <p>
                House of Arham is a modern fragrance house rooted in elegance, depth,
                and individuality. Each fragrance is built to feel luxurious,
                memorable, and unmistakably yours.
              </p>
            </div>
            <div className="story-card">
              <span className="number">01</span>
              <h4>Signature aura</h4>
              <p>
                Layered notes that bloom from silky florals into warm woods and an
                amber finish.
              </p>
            </div>
            <div className="story-card">
              <span className="number">02</span>
              <h4>Olfactive depth</h4>
              <p>
                Quietly intense and refined, designed for evening wear, celebrations,
                and statement moments.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="notes"
          className="section-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading centered">
            <p className="eyebrow">Fragrance notes</p>
            <h3>Depth in every layer</h3>
          </div>

          <div className="notes-grid">
            {notes.map((note) => (
              <article key={note.title} className={`note-card ${note.title === 'Velvet florals' ? 'accent' : ''}`}>
                <span className="note-tag">{note.label}</span>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="collection"
          className="section-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading space-between">
            <div>
              <p className="eyebrow">Featured collection</p>
              <h3>Luxury that speaks softly</h3>
            </div>
            <a className="section-link" href="#shop">
              Explore all
            </a>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                className={`product-card ${index === 1 ? 'featured' : ''}`}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
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
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="journal"
          className="section-wrap testimonial"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading centered">
            <p className="eyebrow">Why customers choose us</p>
            <h3>Bold, memorable, unforgettable</h3>
          </div>

          <div className="testimonial-box">
            <blockquote>
              “Dark Elixir feels premium from the first spray. It is warm, elegant,
              and has a presence that lasts all evening.”
            </blockquote>
            <div className="review-author">
              <span className="avatar">A</span>
              <div>
                <strong>Ayesha Khan</strong>
                <small>Verified buyer</small>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer id="contact" className="footer">
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
              <li>
                <a href="/collection">Collections</a>
              </li>
              <li>
                <a href="/notes">Notes</a>
              </li>
              <li>
                <a href="/story">Our story</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:hello@houseofarham.com">hello@houseofarham.com</a>
              </li>
              <li>
                <a href="tel:+919999999999">+91 99999 99999</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
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
