import Button from "./Button";

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
            <Button type="anchor" className="desktop-nav__cta" name="login-desktop" color="red" text="Login" />
        </nav>
     );
}
 
export default DesktopNav;