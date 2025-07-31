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
    </>
  );
}
