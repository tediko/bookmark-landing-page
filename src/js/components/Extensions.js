import Button from './Button';
import chromeLogo from '../../assets/img/logo-chrome.svg';
import firefoxLogo from '../../assets/img/logo-firefox.svg';
import operaLogo from '../../assets/img/logo-opera.svg';

const Extensions = () => {
    return ( 
        <section className="extensions">
            <div className="extensions__container container">
                <h2 className="extensions__title heading--xl">Download the extension</h2>
                <p className="extensions__text paragraph--l">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.</p>
                <div className="extensions__card-wrapper">
                    <div className="extensions__card">
                        <div className="extensions__img-wrapper">
                            <img src={chromeLogo} alt="" className="extensions__card-img" />
                        </div>
                        <h3 className="extensions__card-title heading--l">Add to Chrome</h3>
                        <p className="extensions__card-text paragraph--xm">Minimum version 62</p>
                        <Button className="extensions__card-cta" name="install" color="blue" text="Add & Install Extension" />
                    </div>
                    <div className="extensions__card">
                        <div className="extensions__img-wrapper">
                            <img src={firefoxLogo} alt="" className="extensions__card-img" />
                        </div>
                        <h3 className="extensions__card-title heading--l">Add to Firefox</h3>
                        <p className="extensions__card-text paragraph--xm">Minimum version 55</p>
                        <Button className="extensions__card-cta" name="install" color="blue" text="Add & Install Extension" />
                    </div>
                    <div className="extensions__card">
                        <div className="extensions__img-wrapper">
                            <img src={operaLogo} alt="" className="extensions__card-img" />
                        </div>
                        <h3 className="extensions__card-title heading--l">Add to Opera</h3>
                        <p className="extensions__card-text paragraph--xm">Minimum version 46</p>
                        <Button className="extensions__card-cta" name="install" color="blue" text="Add & Install Extension" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Extensions;