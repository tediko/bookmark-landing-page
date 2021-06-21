const FaqAccordionItem = ({ faq, index}) => {
    return ( 
        <li className="faq__accordion-item" key={index} onClick={() => open(index)}>
            <h4 className="faq__accordion-question heading--xm">{faq.question}</h4>
            <div className="faq__accordion-toggle">
                <p className="faq__accordion-desc paragraph--l">{faq.answer}</p>
            </div>
        </li>
     );
}
 
export default FaqAccordionItem;