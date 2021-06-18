const MobileNav = () => {
    return ( 
        <nav className="header__nav mobile-nav">
            <button className="mobile-nav__menu" aria-label="Menu toggle" aria-expanded="false" aria-controls="nav-list">
                <span className="mobile-nav__menu-bars"></span>
            </button>
            <div className="mobile-nav__wrapper">
                <ul className="mobile-nav__list" id="nav-list">
                    <li className="mobile-nav__item">
                        <a href="#" className="mobile-nav__link">Features</a>
                    </li>
                    <li className="mobile-nav__item">
                        <a href="#" className="mobile-nav__link">Pricing</a>
                    </li>
                    <li className="mobile-nav__item">
                        <a href="#" className="mobile-nav__link">Contact</a>
                    </li>
                </ul>
                <a href="#" className="mobile-nav__cta">Login</a>
                <div className="mobile-nav__socials">
                    <a href="#" className="mobile-nav__socials-link" aria-label="Follow us on Facebook"></a>
                    <a href="#" className="mobile-nav__socials-link" aria-label="Follow us on Twitter"></a>
                </div>
            </div>
        </nav>
     );
}
 
export default MobileNav;