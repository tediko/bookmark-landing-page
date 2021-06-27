import React from "react";
import FaqAccordionItem from "./FaqAccordionItem";
import { faqData } from "./faqData";

const FaqAccordionList = () => {
    return (
            <ul className="faq__accordion-list">
                {faqData.map(data => (
                    <FaqAccordionItem faq={data} key={data.id} />
                ))}
            </ul>
     );
}
 
export default FaqAccordionList;