import { useState } from "react"
import logo from "./assets/images/logo.png"
import founderImg from "./assets/images/founder.png"
import secretaryImg from "./assets/images/secretary.png"
import danceBg from "./assets/images/dance-bg.png"
import mandirBanner from "./assets/images/ayodhya-ram-mandhir.png"
import "./App.css"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">
            <img src={logo} alt="Sri Rama Seva Pratishthan Logo" />
          </div>
          <div className="nav-text">
            <span className="nav-brand">Sri Ramaseva Prathistana Trust</span>
            <span className="nav-tagline">Jai Sri Ram — Ayodhya</span>
          </div>
        </nav>
      </header>

      <section className="mandir-banner">
        <img src={mandirBanner} alt="Ayodhya Ram Mandir" />
      </section>

      <section id="home" className="hero">
        <div className="hero-image">
          <img src={danceBg} alt="Traditional dance celebration" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Sri Ram Lalla Puraskar 2026</h1>
          <p className="hero-subtitle">Jai Sri Ram &mdash; Ayodhya</p>
          <div className="hero-divider"></div>
          <p className="hero-description">
            After 500 years of struggle, the Sri Ram Mandir has been constructed
            in Ayodhya, marking the realization of a long-cherished dream for
            all Indians. The first anniversary celebration of Sri RamLalla's
            installation will be held grandly worldwide as Sri Ramotsav in March
            2026.
          </p>
          <a href="#about" className="hero-btn">
            Learn More
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>
            For over a decade, Sri Ramaseva Prathistana Trust Ayodhya has been a
            symbol of compassion and service, empowering communities and
            preserving India's rich cultural heritage.
          </p>
        </div>

        <div className="team">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={founderImg} alt="Founder" />
            </div>
            <h3 className="team-name">Sri Shashikant Sharma Ji</h3>
            <p className="team-role">Founder &amp; President</p>
            <p className="team-bio">
              A Beacon of Humanity, Recognized by India TV as "Mask Man" and
              "Bangalore Mask Man" for his extraordinary service during the
              COVID-19 pandemic.
            </p>
          </div>

          <div className="team-card">
            <div className="team-img-wrapper">
              <img src={secretaryImg} alt="Secretary" />
            </div>
            <h3 className="team-name">Mr. Niranjan C. Jain</h3>
            <p className="team-role">General Secretary</p>
            <p className="team-bio">
              A successful entrepreneur in real estate and construction. His
              leadership drives initiatives in education, healthcare, cultural
              preservation, and disaster relief to uplift underprivileged
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sri Ram Lalla Puraskar 2026 ── */}
      <section id="puraskar" className="puraskar">
        <h2 className="section-title">Sri Ram Lalla Puraskar 2026</h2>
        <p className="puraskar-subtitle">
          Celebrating Devotion, Service &amp; Cultural Heritage
        </p>

        {/* Event Overview */}
        <div className="puraskar-overview">
          <h3 className="puraskar-heading">Event Overview</h3>
          <p className="puraskar-text">
            To mark the historic anniversary of Sri Ram Mandir in Ayodhya, the
            grand Sri Ramotsav celebration will be held worldwide in March 2026.
            This landmark event honours the cultural and spiritual significance
            of Lord Ram's homecoming — uniting millions across the globe in
            devotion, service, and the celebration of India's rich heritage.
          </p>
        </div>

        {/* Award Categories */}
        <div className="puraskar-block">
          <h3 className="puraskar-heading">Award Categories</h3>
          <div className="award-grid">
            <div className="award-card">
              <span className="award-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <h4 className="award-title">Cultural Contribution</h4>
              <p className="award-desc">
                Honouring individuals preserving and promoting India's art,
                music, dance, and traditions.
              </p>
            </div>
            <div className="award-card">
              <span className="award-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </span>
              <h4 className="award-title">Social Service</h4>
              <p className="award-desc">
                Recognising selfless efforts in healthcare, disaster relief, and
                community welfare.
              </p>
            </div>
            <div className="award-card">
              <span className="award-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              </span>
              <h4 className="award-title">Educational Excellence</h4>
              <p className="award-desc">
                Celebrating educators and institutions driving knowledge and
                empowerment.
              </p>
            </div>
            <div className="award-card">
              <span className="award-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                  <path d="M12 22c4.97 0 9-2.69 9-6v-4c0-3.31-4.03-6-9-6s-9 2.69-9 6v4c0 3.31 4.03 6 9 6z" />
                  <path d="M12 10V2" />
                  <path d="M8 6l4-4 4 4" />
                </svg>
              </span>
              <h4 className="award-title">Environmental Stewardship</h4>
              <p className="award-desc">
                Applauding green initiatives, conservation efforts, and
                sustainable practices.
              </p>
            </div>
            <div className="award-card">
              <span className="award-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="36" height="36">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </span>
              <h4 className="award-title">Business Excellence</h4>
              <p className="award-desc">
                Acknowledging entrepreneurs and leaders excelling with integrity
                and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Competitions */}
        <div className="puraskar-block">
          <h3 className="puraskar-heading">Competitions</h3>
          <div className="competitions-grid">
            <div className="competition-card">
              <span className="competition-badge">Junior</span>
              <h4 className="competition-title">Junior Category</h4>
              <p className="competition-age">Under 13 years</p>
              <ul className="competition-list">
                <li>Ramayana Dress Competition</li>
                <li>Singing</li>
                <li>Dance</li>
                <li>Drawing / Painting</li>
                <li>Ramayana Quiz</li>
              </ul>
            </div>
            <div className="competition-card">
              <span className="competition-badge">Senior</span>
              <h4 className="competition-title">Senior Category</h4>
              <p className="competition-age">13 years &amp; above</p>
              <ul className="competition-list">
                <li>Ramayana Dress Competition</li>
                <li>Singing</li>
                <li>Dance</li>
                <li>Drawing / Painting</li>
                <li>Ramayana Quiz</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Participant Benefits */}
        <div className="puraskar-block">
          <h3 className="puraskar-heading">Participant Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M7 8h10M7 12h6" />
                  <circle cx="16" cy="16" r="2" />
                </svg>
              </span>
              <h4 className="benefit-title">Official Certificate</h4>
              <p className="benefit-desc">
                Receive an official certificate of participation from Ayodhya.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2.5 2.5L16 9" />
                </svg>
              </span>
              <h4 className="benefit-title">Commemorative Silver Coin</h4>
              <p className="benefit-desc">
                A specially minted silver coin as a treasured keepsake.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                  <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7" />
                  <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0012 0V2z" />
                </svg>
              </span>
              <h4 className="benefit-title">Winner Felicitation</h4>
              <p className="benefit-desc">
                Winners will be felicitated at a grand ceremony in Ayodhya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Become a Sponsor</h2>
        <p className="contact-text">
          Partner with us in celebrating culture, devotion, and service at the
          grand Sri Ram Lalla Puraskar. Your sponsorship empowers social
          initiatives, honors changemakers, and connects your brand with a
          global spiritual audience.
        </p>
        <button className="hero-btn" onClick={() => setShowModal(true)}>
          Register Now
        </button>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2 className="modal-title">Sponsor Registration</h2>
            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you for registering! We will contact you soon.")
                setShowModal(false)
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="sponsorship">Sponsorship Type</label>
                <select id="sponsorship" required>
                  <option value="">Select sponsorship type</option>
                  <option value="title">Title Sponsor</option>
                  <option value="gold">Gold Sponsor</option>
                  <option value="silver">Silver Sponsor</option>
                  <option value="associate">Associate Sponsor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Any additional details or questions..."
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-enquiry">
            <h3 className="footer-heading">Enquiry</h3>
            <p className="footer-text">
              Have questions about Sri Ram Lalla Puraskar 2026? We'd love to
              hear from you.
            </p>
            <div className="enquiry-numbers">
              <a href="tel:+919980062415" className="call-btn">
                +91 99800 62415
              </a>
              <a href="tel:+919945428886" className="call-btn">
                +91 99454 28886
              </a>
              <a href="tel:+919880548451" className="call-btn">
                +91 98805 48451
              </a>
            </div>
          </div>

          <div className="footer-address">
            <h3 className="footer-heading">Address</h3>
            <p className="footer-text">
              #1, Hanuman Gufa, Faizabad Rural,
              <br />
              Ayodhya, UP - 224123
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Connect</h3>
            <a
              href="https://www.sriramaseva.com"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              www.sriramaseva.com
            </a>
            <a
              href="https://www.sriramotsav.org"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              www.sriramotsav.org
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sri Ramaseva Prathistana Trust.
            All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky action buttons */}
      <div className="sticky-btns">
        <a
          href="https://wa.me/919980062415"
          className="sticky-btn sticky-whatsapp"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="tel:+919980062415"
          className="sticky-btn sticky-call"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
