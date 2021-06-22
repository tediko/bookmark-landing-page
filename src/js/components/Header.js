import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Logo from './Logo';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container container">
                <Logo className="header" color="white" altText="Bookmark - Home page" />
                <MobileNav />
            </div>
        </header>
     );
}
 
export default Header;