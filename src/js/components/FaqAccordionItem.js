import { useState, useEffect, useRef } from "react";

const FaqAccordionItem = ({ faq }) => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])
    
    const toggleState = () => {
        setToggle(!toggle);
    }

    return ( 
        <li className="faq__accordion-item" onClick={toggleState}>
            <h4 className="faq__accordion-question heading--xm">{faq.question}</h4>
            <div className={`faq__accordion-toggle ${toggle ? 'open' : ''}`} ref={refHeight} style={{height: toggle ? heightEl : 0}}>
                <p className="faq__accordion-desc paragraph--l" aria-hidden={!toggle ? 'true' : 'false'}>{faq.answer}</p>
            </div>
        </li>
     );
}
 
export default FaqAccordionItem;