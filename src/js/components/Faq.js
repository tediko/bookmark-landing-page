import { useState } from "react";
import FaqAccordionList from "./FaqAccordionList";

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 0,
            question: 'What is Bookmark?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
        },
        {
            id: 1,
            question: 'How can I request a new browser?',
            answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
        },
        {
            id: 2,
            question: 'Is there a mobile app?',
            answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
        },
        {
            id: 3,
            question: 'What about other Chromium browsers?',
            answer: 'nteger condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
        },
    ]);

    return ( 
        <section className="faq">
            <div className="faq__container container">
                <h2 className="faq__title heading--xl">Frequently Asked Questions</h2>
                <p className="faq__text paragraph--l">Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.</p>
                <FaqAccordionList faqs={faqs} />
                <a href="#" className="faq__cta btn--info btn--blue">More info</a>
            </div>
        </section>
     );
}
 
export default Faq;