import Button from '../shared/Button';
import FeaturesTabControls from './FeaturesTabControls';
import useFeaturesToggle from './useFeaturesToggle';

const Features = () => {
    const [handleFocus, isChanging, data] = useFeaturesToggle()

    return ( 
        <section className="features" id="features">
            <div className="features__container container">
                <h2 className="features__title heading--xl">Features</h2>
                <p className="features__text paragraph--l">Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.</p>
                <FeaturesTabControls onFocus={handleFocus} isChanging={isChanging}/>
                <div className={`features__tab-content ${isChanging ? 'animation' : ''}`}>
                    <div className="features__tab-illustration">
                        <div className="features__tab-illustration-img" style={{backgroundImage: data.img, backgroundSize: data.imgSize}}></div>
                    </div>
                    <div className="features__tab-info">
                        <h2 className="features__tab-title heading--xl">{data.title}</h2>
                        <p className="features__tab-text paragraph--l">{data.text}</p>
                        <Button type="anchor" className="features__tab-cta" name="info" color="blue" text="More Info" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Features;