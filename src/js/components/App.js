import Header from './Header/Header';
import KeyVisual from './KeyVisual/KeyVisual';
import Features from './Features/Features';
import Extensions from './Extensions/Extensions';
import Faq from './Faq/Faq';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import useStickyNav from './Header/useStickyNav';

function App() {
    const [containerRef, isIntersecting, isNotIntersecting] = useStickyNav();

    return (
        <div className="main-container">
            <a href="#features" className="skip-to-content-link">Skip to content</a>
            <Header scrollIn={isIntersecting} scrollOut={isNotIntersecting}/>
            <KeyVisual ref={containerRef} />
            <Features />
            <Extensions />
            <Faq />
            <Subscribe />
            <Footer />
        </div>
    );
}
  
export default App;