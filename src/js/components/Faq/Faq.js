import FaqAccordionList from "./FaqAccordionList";
import Button from "../shared/Button";

const Faq = () => {
    return ( 
        <section className="faq">
            <div className="faq__container container">
                <h2 className="faq__title heading--xl">Frequently Asked Questions</h2>
                <p className="faq__text paragraph--l">Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.</p>
                <FaqAccordionList/>
                <Button type="anchor" className="faq__cta" name="info" color="blue">More Info</Button>
            </div>
        </section>
     );
}
 
export default Faq;