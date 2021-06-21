import { useState } from 'react';
import ExtensionsCard from './ExtensionsCard';
import chromeLogo from '../../assets/img/logo-chrome.svg';
import firefoxLogo from '../../assets/img/logo-firefox.svg';
import operaLogo from '../../assets/img/logo-opera.svg';

const Extensions = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            logo: chromeLogo,
            title: 'Chrome',
            version: '62'
        },
        {
            id: 2,
            logo: firefoxLogo,
            title: 'Firefox',
            version: '55'
        },
        {
            id: 3,
            logo: operaLogo,
            title: 'Opera',
            version: '46'
        }
    ])
    
    return ( 
        <section className="extensions">
            <div className="extensions__container container">
                <h2 className="extensions__title heading--xl">Download the extension</h2>
                <p className="extensions__text paragraph--l">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.</p>
                <div className="extensions__card-wrapper">
                    <ExtensionsCard cards={cards} />
                </div>
            </div>
        </section>
     );
}
 
export default Extensions;