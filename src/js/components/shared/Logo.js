import blackLogo from '../../../assets/img/logo-bookmark.svg';
import whiteLogo from '../../../assets/img/logo-bookmark-white.svg';

const Logo = ({ className, color, altText }) => {
    return ( 
        <a href="#" className={`${className}__logo`}>
            <img src={color === 'white' ? whiteLogo : blackLogo} alt={altText} className={`${className}__logo-img`} />
        </a>
     );
}
 
export default Logo;