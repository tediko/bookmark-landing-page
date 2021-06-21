import React from "react";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqAccordionList = ({ faqs }) => {
    return (
            <ul className="faq__accordion-list">
                {faqs.map(faq => (
                    <FaqAccordionItem faq={faq} key={faq.id} />
                ))}
            </ul>
     );
}
 
export default FaqAccordionList;