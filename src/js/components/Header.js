import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import logo from '../../assets/img/logo-bookmark.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="Bookmark - Home page" className="header__logo-img" />
                </a>
                <MobileNav />
            </div>
        </header>
     );
}
 
export default Header;