
import './footer.css'
export default function Footer() {
  return (
    <footer className="footer footer-modern">
      <div className="footer-top">
        <div className="footer-row1">
          <div className="footer-logo-slogan">
            <div className="footer-logo">
              <span className="logo-text">LIC ICT</span>
              <span className="footer-star">&#10022;</span>
            </div>
            <div className="footer-slogan">
              <span>Strong knowledge for amazing teams</span>
            </div>
          </div>
          <hr className="footer-divider" />
        </div>
        <div className="footer-row2">
          <div className="footer-menus">
            <div className="footer-menu-col">
              <h3>Home</h3>
              <ul>
                <li>All NFTs</li>
                <li>Virtual worlds</li>
                <li>Domain names</li>
                <li>Photography</li>
                <li>Digital art</li>
                <li>Music</li>
              </ul>
            </div>
            <div className="footer-menu-col">
              <h3>Work</h3>
              <ul>
                <li>All NFTs</li>
                <li>Virtual worlds</li>
                <li>Domain names</li>
                <li>Photography</li>
                <li>Digital art</li>
                <li>Music</li>
              </ul>
            </div>
            <div className="footer-menu-col">
              <h3>Contact</h3>
              <ul>
                <li>All NFTs</li>
                <li>Virtual worlds</li>
                <li>Domain names</li>
                <li>Photography</li>
                <li>Digital art</li>
                <li>Music</li>
              </ul>
            </div>
            <div className="footer-menu-col">
              <h3>Other</h3>
              <ul>
                <li>All NFTs</li>
                <li>Virtual worlds</li>
                <li>Domain names</li>
                <li>Photography</li>
                <li>Digital art</li>
                <li>Music</li>
              </ul>
            </div>
          </div>
          <div className="footer-social-subscribe">
            <div className="footer-socials">
              <a href="#" className="footer-social twitter" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-social twitch" title="Twitch"><i className="fab fa-twitch"></i></a>
              <a href="#" className="footer-social youtube" title="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="footer-social telegram" title="Telegram"><i className="fab fa-telegram-plane"></i></a>
              <a href="#" className="footer-social link" title="Link"><i className="fas fa-link"></i></a>
            </div>
            <form className="footer-subscribe">
              <input type="email" placeholder="example@gmail.com" required />
              <button type="submit" className="footer-join-btn">Join with us</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom-modern">
        <div className="footer-bottom-col">@2025 LIC ICT</div>
        <div className="footer-bottom-col">Powered by Vanh</div>
        <div className="footer-bottom-col">Created by Hiep</div>
        <div className="footer-bottom-col">Copyright by VitVuiOcCho</div>
      </div>
    </footer>
  );
}
