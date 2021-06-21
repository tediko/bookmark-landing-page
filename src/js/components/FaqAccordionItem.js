const FaqAccordionItem = ({ faq }) => {
    return ( 
        <li className="faq__accordion-item">
            <h4 className="faq__accordion-question heading--xm">{faq.question}</h4>
            <div className="faq__accordion-toggle">
                <p className="faq__accordion-desc paragraph--l">{faq.answer}</p>
            </div>
        </li>
     );
}
 
export default FaqAccordionItem;