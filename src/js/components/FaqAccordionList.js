import React from "react";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqAccordionList = ({ faqs }) => {
    return (
            <ul className="faq__accordion-list">
                {faqs.map((faq, index) => (
                    <FaqAccordionItem faq={faq} index={index} />
                ))}
            </ul>
     );
}
 
export default FaqAccordionList;