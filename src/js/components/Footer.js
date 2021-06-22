import Icon from './Icon';
import logo from '../../assets/img/logo-bookmark-white.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__container container">
                <a href="#" className="footer__logo">
                    <img src={logo} alt="Bookmark - Home page" className="footer__logo-img" />
                </a>
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">Features</li>
                        <li className="footer__nav-item">Pricing</li>
                        <li className="footer__nav-item">Contact</li>
                    </ul>
                </nav>
                <div className="footer__socials">
                    <Icon name="fb" size={25} color="white" />
                    <Icon name="tt" size={25} color="white" />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;