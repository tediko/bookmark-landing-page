import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Logo from '../shared/Logo';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    })
    
    return ( 
        <header className="header">
            <div className="header__container container">
                <Logo className="header" color="black" altText="Bookmark - Home page" />
                {windowWidth > 768 ? <DesktopNav /> : <MobileNav />}
            </div>
        </header>
     );
}
 
export default Header;