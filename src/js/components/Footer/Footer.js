import Icon from '../shared/Icon';
import Logo from '../shared/Logo';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__container container">
                <Logo className="footer" color="white" altText="Bookmark - Home page" />
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">Features</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">Pricing</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__socials">
                    <a href="#" className="footer__socials-link" aria-label="Follow us on Facebook">
                        <Icon name="fb" size={25} color="white" />
                    </a>
                    <a href="#" className="footer__socials-link" aria-label="Follow us on Twitter">
                        <Icon name="tt" size={25} color="white" />
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;