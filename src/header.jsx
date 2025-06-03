import React, { useState, useEffect, useRef } from 'react';


const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.pageYOffset > 500) {
          navRef.current.classList.add('navbar_scrolled');
        } else {
          navRef.current.classList.remove('navbar_scrolled');
        }
      }
    };

    const handleClickOutside = () => {
      setDropdownActive(null);
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setDropdownActive(null);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleDropdownToggle = (id, e) => {
    e.stopPropagation();
    setDropdownActive(prev => (prev === id ? null : id));
  };

  const handleHamburgerToggle = () => {
    setHamburgerOpen(prev => !prev);
    document.body.classList.toggle('shift');
  };

  const closeMobileMenuOnLinkClick = () => {
    setDropdownActive(null);
    setHamburgerOpen(false);
  };

  return (
    <header id="nav-menu" aria-label="navigation bar" ref={navRef}>
      <div className="container">
        <div className="nav-start">
          <a className="logo" href="/">
            <img src="aslogo.png" className="logoimg" width="135" height="60" alt="Inc Logo" />
          </a>

          <nav className={`menu ${hamburgerOpen ? 'show' : ''}`}>
            <ul className="menu-bar">
              <li><a className="nav-link" href="index.html" onClick={closeMobileMenuOnLinkClick}>Home</a></li>

              <li>
                <button
                  className="nav-link dropdown-btn"
                  aria-haspopup="true"
                  aria-expanded={dropdownActive === 'dropdown1'}
                  aria-label="About College"
                  onClick={(e) => handleDropdownToggle('dropdown1', e)}
                >
                  About College
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown1" className={`dropdown ${dropdownActive === 'dropdown1' ? 'active' : ''}`}>
                  <ul role="menu" onClick={e => e.stopPropagation()}>
                    <li role="menuitem"><a className="dropdown-link" href="about.html" onClick={closeMobileMenuOnLinkClick}>About Us</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="history.html" onClick={closeMobileMenuOnLinkClick}>History</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="events.html" onClick={closeMobileMenuOnLinkClick}>Upcoming Events</a></li>
                  </ul>
                </div>
              </li>

              <li><a className="nav-link" href="academics.html" onClick={closeMobileMenuOnLinkClick}>Academics</a></li>

              <li>
                <button
                  className="nav-link dropdown-btn"
                  aria-haspopup="true"
                  aria-expanded={dropdownActive === 'dropdown2'}
                  aria-label="Student Corner"
                  onClick={(e) => handleDropdownToggle('dropdown2', e)}
                >
                  Student Corner
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown2" className={`dropdown ${dropdownActive === 'dropdown2' ? 'active' : ''}`}>
                  <ul role="menu" onClick={e => e.stopPropagation()}>
                    <li role="menuitem"><a className="dropdown-link" href="library.html" onClick={closeMobileMenuOnLinkClick}>Library</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="https://www.cusrinagar.edu.in/Result/ResultNotification?program=UG" target="_blank" rel="noreferrer">UG-Results</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="https://www.cusrinagar.edu.in/Result/ResultNotification?Program=IH" target="_blank" rel="noreferrer">IG-Results</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="suggestion.html" onClick={closeMobileMenuOnLinkClick}>Suggestion</a></li>
                    <li role="menuitem"><a className="dropdown-link" href="https://www.cusrinagar.edu.in/Account/StudentZone" target="_blank" rel="noreferrer">Student Login</a></li>
                  </ul>
                </div>
              </li>

              <li><a className="nav-link" href="gallery.html" onClick={closeMobileMenuOnLinkClick}>Gallery</a></li>
              <li><a className="nav-link" href="contact.html" onClick={closeMobileMenuOnLinkClick}>Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="nav-end">
          <div className="right-container">
            <a href="#profile" className="useravt"><i className="fa-solid fa-user"></i></a>
            <button className="btn btn-primary">Admin</button>
          </div>

          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={hamburgerOpen}
            onClick={handleHamburgerToggle}
          >
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
