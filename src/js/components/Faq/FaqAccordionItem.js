import { useState, useEffect, useRef } from "react";
import Icon from "../shared/Icon";

const FaqAccordionItem = ({ faq }) => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();
    const iconColors = {
        blue: 'hsl(231, 69%, 60%)',
        red: 'hsl(0, 94%, 66%)'
    }

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight + 30}px`);
    }, [])
    
    /**
    * Function to change toggle state. 
    */
    const toggleState = () => {
        setToggle(!toggle);
    }

    return ( 
        <li className="faq__accordion-item">
            <button className="faq__accordion-question" aria-controls={`faq${faq.id}`} aria-expanded={toggle} onClick={toggleState}>
                {faq.question}
                <Icon name="arrow-down" size={18} color={!toggle ? iconColors.blue : iconColors.red} customStyle={{transition: 'all 400ms ease-in', transform: toggle ? 'rotate(180deg)' : ''}} />
            </button>
            <div id={`faq${faq.id}`} className={`faq__accordion-toggle ${toggle ? 'open' : ''}`} ref={refHeight} style={{height: toggle ? heightEl : 0}}>
                <p className="faq__accordion-desc paragraph--l" aria-hidden={!toggle ? 'true' : 'false'}>{faq.answer}</p>
            </div>
        </li>
     );
}
 
export default FaqAccordionItem;