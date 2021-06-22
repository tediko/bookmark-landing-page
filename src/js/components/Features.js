import Button from './Button';

const Features = () => {
    return ( 
        <section className="features">
            <div className="features__container container">
                <h2 className="features__title heading--xl">Features</h2>
                <p className="features__text paragraph--l">Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.</p>
                <div className="features__tab-controls">
                    <input type="radio" name="tab" id="bookmarking" className="features__tab-input" />
                    <label htmlFor="bookmarking" className="features__tab-label">Simple Bookmarking</label>
                    <input type="radio" name="tab" id="searching" className="features__tab-input" />
                    <label htmlFor="searching" className="features__tab-label">Speedy Searching</label>
                    <input type="radio" name="tab" id="sharing" className="features__tab-input" />
                    <label htmlFor="sharing" className="features__tab-label">Easy Sharing</label>
                    <span className="features__tab-bar"></span>
                </div>
                <div className="features__tab-content">
                    <div className="features__tab-illustration"></div>
                    <div className="features__tab-info">
                        <h2 className="features__tab-title heading--xl">Bookmark in one click</h2>
                        <p className="features__tab-text paragraph--l">Organize your bookmarks however you like. Our simple drag-and-drop interface 
                            gives you complete control over how you manage your favourite sites.</p>
                        <Button type="anchor" className="features__tab-cta" name="info" color="blue" text="More Info" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Features;