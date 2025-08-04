import './about.css';

export default function AboutPage() {
  return (
    <>
      <section className="about-banner-section">
        <div className="about-banner-bg" />
        <h1 className="about-banner-title">
          Exploring tech.<br />Together we grow.
        </h1>
      </section>
      <section className="about-us-section">
        <hr className="about-us-divider" />
        <h2 className="about-us-title">About us</h2>
        <div className="about-us-content">
          <div className="about-us-col">
            <p>
              At our IT Club, we are a community of passionate tech enthusiasts dedicated to exploring, learning, and building together. United by our shared curiosity and drive for innovation, we engage in hands-on projects, workshops, and team challenges that bring ideas to life.
            </p>
          </div>
          <div className="about-us-col">
            <p>
              Collaboration and learning are the core of what we do. From coding and UI/UX design to AI and cybersecurity, our members continuously push the boundaries of what students can achieve together. By combining creativity and technology
            </p>
          </div>
        </div>
      </section>
      {/* Features Section - 3 steps with image */}
      <section className="about-features-section">
        <div className="about-features-container">
          <div className="about-features-image">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" alt="Feature" />
          </div>
          <div className="about-features-list">
            <div className="about-feature-item">
              <div className="about-feature-number">01</div>
              <div className="about-feature-content">
                <h3 className="about-feature-title">We deliver quality</h3>
                <p className="about-feature-desc">We believe that exceptional design is the result of a meticulous attention to detail, a deep understanding of our clients' needs, and a passion for excellence.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-number">02</div>
              <div className="about-feature-content">
                <h3 className="about-feature-title">We listen to our clients</h3>
                <p className="about-feature-desc">We believe that exceptional design is the result of a meticulous attention to detail, a deep understanding of our clients' needs, and a passion for excellence.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-number">03</div>
              <div className="about-feature-content">
                <h3 className="about-feature-title">We build partnerships</h3>
                <p className="about-feature-desc">We believe that exceptional design is the result of a meticulous attention to detail, a deep understanding of our clients' needs, and a passion for excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Quote Section dưới cùng */}
      <section className="about-quote-section">
        <div className="about-quote-desc">
          <span>Passionate about tech? Our club helps<br />you turn curiosity into real skills.</span>
          <div className="about-quote-desc-line"></div>
        </div>
        <h2 className="about-quote-main">“We explore, experiment, and
          evolve through technology and
          teamwork.”</h2>
        <button className="about-quote-btn">
          CONTACT US
          <span className="about-quote-arrow-icon"
            dangerouslySetInnerHTML={{
              __html: `<animated-icons
              src='https://animatedicons.co/get-icon?name=Arrow&style=minimalistic&token=70afdd31-5888-42d6-82ce-d112a7e2fa11'
              trigger='hover'
              attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":1.1,"defaultColours":{"group-1":"#000000","background":"#FFFFFF"}}'
              height='24'
              width='24'
              ></animated-icons>`
            }}
          />
        </button>
      </section>
      {/* Team Section */}
      <section className="about-team-section">
        <div className="about-team-content-2col">
          <div className="about-team-col1">
            <h2 className="about-team-title">Team</h2>
            <div className="about-team-scroll-indicator">
              <div className="about-team-scroll-circle">
                <span className="about-team-scroll-arrow">↓</span>
              </div>
              <div className="about-team-scroll-text">SCROLL<br />DOWN</div>
              <div className="about-team-scroll-avatar">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" />
              </div>
            </div>
          </div>
          <div className="about-team-col2">
            <div className="about-team-grid">
              <div className="about-team-card">
                <img className="about-team-card-img" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Daniel Kim" />
                <div className="about-team-card-info">
                  <div className="about-team-card-name">Daniel Kim</div>
                  <div className="about-team-card-role">CEO and co-founder</div>
                  <div className="about-team-card-socials">
                    <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
                  </div>
                </div>
              </div>
              <div className="about-team-card">
                <img className="about-team-card-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Kimberly Otto" />
                <div className="about-team-card-info">
                  <div className="about-team-card-name">Kimberly Otto</div>
                  <div className="about-team-card-role">Development Team</div>
                  <div className="about-team-card-socials">
                    <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
                  </div>
                </div>
              </div>
              <div className="about-team-card">
                <img className="about-team-card-img" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Daniel Kim" />
                <div className="about-team-card-info">
                  <div className="about-team-card-name">Daniel Kim</div>
                  <div className="about-team-card-role">Design Team</div>
                  <div className="about-team-card-socials">
                    <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
                  </div>
                </div>
              </div>
              <div className="about-team-card">
                <img className="about-team-card-img" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Daniel Kim" />
                <div className="about-team-card-info">
                  <div className="about-team-card-name">Daniel Kim</div>
                  <div className="about-team-card-role">Management</div>
                  <div className="about-team-card-socials">
                    <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
