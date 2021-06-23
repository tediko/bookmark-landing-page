import KeyVisual from './KeyVisual/KeyVisual';
import Features from './Features/Features';
import Extensions from './Extensions/Extensions';
import Faq from './Faq/Faq';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className="main-container">
            <a href="#features" className="skip-to-content-link">Skip to content</a>
            <KeyVisual />
            <Features />
            <Extensions />
            <Faq />
            <Subscribe />
            <Footer />
        </div>
    );
}
  
export default App;