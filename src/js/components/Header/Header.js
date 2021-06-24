import { useState, useEffect } from 'react';
import useToggleMenu from './useToggleMenu';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Logo from '../shared/Logo';

const Header = () => {
    const { handleToggle, restoreToDefault, isOpen, isClosing, isExpanded, tabletBreakpoint } = useToggleMenu();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
        windowWidth >= tabletBreakpoint ? restoreToDefault() : '';
    })
    
    return ( 
        <header className="header">
            <div className="header__container container">
                <Logo className="header" color={`${isOpen ? 'white' : 'black'}`} altText="Bookmark - Home page" />
                {windowWidth >= tabletBreakpoint ? <DesktopNav /> : <MobileNav handleToggle={handleToggle} isOpen={isOpen} isClosing={isClosing} isExpanded={isExpanded} />}
                {isOpen ? <span className={`header__menu-overlay ${isClosing ? 'hide' : ''}`}></span> : null}
            </div>
        </header>
     );
}
 
export default Header;