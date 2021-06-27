import { forwardRef } from 'react';
import Button from '../shared/Button';

const KeyVisual = forwardRef((props, ref) => (
        <section className="kv" ref={ref}>
            <div className="kv__container container">
                <div className="kv__illustration"></div>
                <div className="kv__intro">
                    <h1 className="kv__title heading--xxl">A Simple Bookmark Manager</h1>
                    <p className="kv__text paragraph--l">A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="kv__cta-wrapper">
                        <Button className="kv__cta" name="intro" color="blue" label="Add extension to Chrome">Get it on Chrome</Button>
                        <Button className="kv__cta" name="intro" color="gray" label="Add extension to Firefox">Get it on Firefox</Button>
                    </div>
                </div>
            </div>
        </section>
));
 
export default KeyVisual;