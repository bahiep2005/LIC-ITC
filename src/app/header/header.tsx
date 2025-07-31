
"use client"; 
import './header.css';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const pathname = usePathname();

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleHideOffcanvas = () => setShowOffcanvas(false);

  const iconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.customElements.get('animated-icons')) {
      const script = document.createElement('script');
      script.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
      script.async = true;
      document.body.appendChild(script);
    }
    if (iconRef.current) {
      iconRef.current.innerHTML = `<animated-icons
        src='https://animatedicons.co/get-icon?name=Filter&style=minimalistic&token=3212fd28-c62a-42db-8421-bf1f6a3fd239'
        trigger='hover'
        attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#000000","background":"#FFFFFF"}}'
        height='48'
        width='48'
        style='cursor:pointer;'
      ></animated-icons>`;
      // Gắn sự kiện click cho animated-icons
      const animatedIcon = iconRef.current.querySelector('animated-icons');
      if (animatedIcon) {
        animatedIcon.addEventListener('click', handleShowOffcanvas);
      }
    }
    // Cleanup event
    return () => {
      if (iconRef.current) {
        const animatedIcon = iconRef.current.querySelector('animated-icons');
        if (animatedIcon) {
          animatedIcon.removeEventListener('click', handleShowOffcanvas);
        }
      }
    };
  }, []);

  return (
    <header className="header header-style1">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="header-star">&#10022;</span>
          </div>
          <ul className="nav-menu">
            <li>
              <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link${pathname === '/about' ? ' active' : ''}`}>About</Link>
            </li>
            <li>
              <Link href="/services" className={`nav-link${pathname === '/services' ? ' active' : ''}`}>Works</Link>
            </li>
            <li>
              <Link href="/contact" className={`nav-link${pathname === '/contact' ? ' active' : ''}`}>Contact</Link>
            </li>
          </ul>
          <div className="header-icons">
            {/* Animated Icons dùng useRef để chèn vào DOM */}
            <div ref={iconRef} />
          </div>
        </div>
      </nav>
      {/* Offcanvas icons */}
      <div className={`offcanvas-icons modern-offcanvas-icons${showOffcanvas ? ' active' : ''}`}>
        <button className="close-offcanvas" onClick={handleHideOffcanvas} aria-label="Close Menu">&times;</button>
        <ul className="offcanvas-icons-list">
          <li><Link href="/login" className="offcanvas-icons-link"><i className="fas fa-sign-in-alt" style={{marginRight: '8px'}}></i>Sign In / Register</Link></li>
          <li><Link href="/write" className="offcanvas-icons-link"><i className="fas fa-pen" style={{marginRight: '8px'}}></i>Write a Post</Link></li>
          <li><Link href="/settings" className="offcanvas-icons-link"><i className="fas fa-cog" style={{marginRight: '8px'}}></i>Setting</Link></li>
          <li><Link href="/faq" className="offcanvas-icons-link"><i className="fas fa-question-circle" style={{marginRight: '8px'}}></i>FAQ</Link></li>
          <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="offcanvas-icons-link"><i className="fab fa-discord" style={{marginRight: '8px'}}></i>Discord</a> | <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="offcanvas-icons-link"><i className="fab fa-github" style={{marginRight: '8px'}}></i>GitHub</a></li>
        </ul>
      </div>
    </header>
  );
}
