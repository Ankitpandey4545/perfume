'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BrandLogo from '@/components/BrandLogo';

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

const whyChooseUs = [
  {
    title: 'Long-lasting impression',
    text: 'Our fragrances are engineered to unfold slowly, leaving a refined trail that stays with you from dusk to late night.',
  },
  {
    title: 'Premium ingredients',
    text: 'Each blend is layered with sensual notes, balanced woods, and rich amber tones for a signature finish.',
  },
  {
    title: 'Made for statement moments',
    text: 'Whether it is a dinner date, gifting, or everyday confidence, every bottle is designed to feel intentional.',
  },
  {
    title: 'Thoughtful gifting',
    text: 'Luxury presentation, elegant details, and memorable scent profiles make every bottle gift-ready from the first glance.',
  },
];

const faqs = [
  {
    question: 'How long does Dark Elixir last?',
    answer: 'It is crafted for a long-wearing trail, typically lasting 8 to 12 hours depending on skin chemistry and climate.',
  },
  {
    question: 'Are these perfumes suitable for gifting?',
    answer: 'Yes. Every fragrance comes in a premium presentation with elegant packaging designed for gifting and personal keepsakes.',
  },
  {
    question: 'Is the scent unisex?',
    answer: 'The collection is designed to feel versatile and expressive, with notes that complement both soft and bold personalities.',
  },
  {
    question: 'Do you offer a fragrance consultation?',
    answer: 'Yes. You can connect with us through the contact page for recommendations based on your preference, occasion, and scent profile.',
  },
];

const ratingOptions = ['5 - Excellent', '4 - Very Good', '3 - Good', '2 - Fair', '1 - Low'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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
            <a href="/" className="hero-mark" aria-label="House of Arham home">
              <BrandLogo />
            </a>

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
                    <span className="mini-bottle-label">
                      <strong>HA</strong>
                      <em>{product.name}</em>
                    </span>
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

        <motion.section
          className="section-wrap why-choose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading centered">
            <p className="eyebrow">Why choose us</p>
            <h3>Luxury that feels personal</h3>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="why-card">
                <span className="why-index">0{whyChooseUs.indexOf(item) + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section-wrap cta-band"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="cta-band-inner">
            <div>
              <p className="eyebrow">Ready to begin</p>
              <h3>Find the scent that leaves a signature.</h3>
            </div>

            <div className="cta-row cta-row-inline">
              <a className="primary-btn" href="/collection">
                Shop collection
              </a>
              <a className="secondary-btn" href="/contact">
                Book a consultation
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section-wrap faq-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="section-heading centered">
            <p className="eyebrow">FAQ</p>
            <h3>Everything you want to know</h3>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>
      </main>

      <section className="enquiry-wrap" aria-label="Enquiry form">
        <div className="enquiry-box">
          <div className="enquiry-copy">
            <p className="eyebrow">Enquire now</p>
            <h3>Start your fragrance journey.</h3>
          </div>

          <div className="enquiry-actions">
            <button type="button" className="primary-btn" onClick={() => setIsEnquiryOpen(true)}>
              Open enquiry form
            </button>
          </div>
        </div>
      </section>

      {isEnquiryOpen && (
        <div className="enquiry-modal-backdrop" onClick={() => setIsEnquiryOpen(false)}>
          <div className="enquiry-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setIsEnquiryOpen(false)} aria-label="Close enquiry form">
              ×
            </button>

            <div className="enquiry-modal-header">
              <p className="eyebrow">Enquire now</p>
              <h3>Tell us about your fragrance preference.</h3>
            </div>

            <form className="enquiry-form modal-form">
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your full name" />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@example.com" />
              </div>

              <div className="field-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" placeholder="+91 98xxx xxxxx" />
              </div>

              <div className="field-group">
                <label htmlFor="product">Product</label>
                <select id="product" name="product" defaultValue="">
                  <option value="" disabled>Select a fragrance</option>
                  {products.map((product) => (
                    <option key={product.name} value={product.name}>{product.name}</option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="location">Location</label>
                <input id="location" type="text" name="location" placeholder="City or area" />
              </div>

              <div className="field-group">
                <label htmlFor="rating">Rating</label>
                <select id="rating" name="rating" defaultValue="">
                  <option value="" disabled>Select your rating</option>
                  {ratingOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="field-group full-width">
                <label htmlFor="notes">More details</label>
                <textarea id="notes" name="notes" rows={4} placeholder="Tell us about your scent preference, occasion, and any details you want us to know." />
              </div>

              <button type="submit" className="primary-btn modal-submit">Send enquiry</button>
            </form>
          </div>
        </div>
      )}

      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div className="footer-intro">
            <div className="brand-lockup footer-brand">
              <BrandLogo compact />
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
