import Icon from '../shared/Icon';
import Button from '../shared/Button';

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
                <Button type="anchor" className="mobile-nav__cta" name="login-mobile" color="transparent" text="Login" />
                <div className="mobile-nav__socials">
                    <a href="#" className="mobile-nav__socials-link" aria-label="Follow us on Facebook">
                        <Icon name="fb" size={25} color="white" />
                    </a>
                    <a href="#" className="mobile-nav__socials-link" aria-label="Follow us on Twitter">
                        <Icon name="tt" size={25} color="white" />
                    </a>
                </div>
            </div>
        </nav>
     );
}
 
export default MobileNav;