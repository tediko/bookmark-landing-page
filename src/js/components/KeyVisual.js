import Header from './Header';

const KeyVisual = () => {
    return ( 
        <section className="kv">
            <Header />
            <div className="kv__container container">
                <div className="kv__illustration"></div>
                <div className="kv__intro">
                    <h1 className="kv__title heading--xxl">A Simple Bookmark Manager</h1>
                    <p className="kv__text paragraph--l">A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="kv__cta-wrapper">
                        <button className="kv__cta btn--intro btn--blue" aria-label="Add extension to Chrome">Get it on Chrome</button>
                        <button className="kv__cta btn--intro btn--gray" aria-label="Add extension to Firefox">Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default KeyVisual;