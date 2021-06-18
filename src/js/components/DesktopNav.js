const DesktopNav = () => {
    return ( 
        <nav className="header__nav desktop-nav">
            <ul className="desktop-nav__list" id="nav-list">
                <li className="desktop-nav__item">
                    <a href="#" className="desktop-nav__link">Features</a>
                </li>
                <li className="desktop-nav__item">
                    <a href="#" className="desktop-nav__link">Pricing</a>
                </li>
                <li className="desktop-nav__item">
                    <a href="#" className="desktop-nav__link">Contact</a>
                </li>
            </ul>
            <a href="#" className="desktop-nav__cta">Login</a>
        </nav>
     );
}
 
export default DesktopNav;