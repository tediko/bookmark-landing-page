import useStickyNav from '../Header/useStickyNav';
import Header from '../Header/Header';
import Button from '../shared/Button';

const KeyVisual = () => {
    const [containerRef, isIntersecting, isNotIntersecting] = useStickyNav();

    return ( 
        <section className="kv" ref={containerRef}>
            <Header scrollIn={isIntersecting} scrollOut={isNotIntersecting} />
            <div className="kv__container container">
                <div className="kv__illustration"></div>
                <div className="kv__intro">
                    <h1 className="kv__title heading--xxl">A Simple Bookmark Manager</h1>
                    <p className="kv__text paragraph--l">A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="kv__cta-wrapper">
                        <Button className="kv__cta" name="intro" color="blue" text="Get it on Chrome" label="Add extension to Chrome"/>
                        <Button className="kv__cta" name="intro" color="gray" text="Get it on Firefox" label="Add extension to Firefox"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default KeyVisual;