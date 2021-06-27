import Icon from '../shared/Icon';
import Button from '../shared/Button';

const MobileNav = ({ handleToggle, isOpen, isClosing, isExpanded }) => {
    return ( 
        <nav className="header__nav mobile-nav">
            <button className={`mobile-nav__menu ${isOpen ? 'is-active' : ''}`} aria-label="Menu toggle" aria-expanded={isExpanded} aria-controls="nav-list" onClick={handleToggle}>
                <span className="mobile-nav__menu-bars"></span>
            </button>
            <div className={`mobile-nav__wrapper ${isOpen ? 'is-active' : ''} ${isClosing ? 'is-closing' : ''}`}>
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
                <Button type="anchor" className="mobile-nav__cta" name="login-mobile" color="transparent">Login</Button>
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