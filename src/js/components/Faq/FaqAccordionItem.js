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
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])
    
    /**
    * Function to change toggle state. 
    */
    const toggleState = () => {
        setToggle(!toggle);
    }

    return ( 
        <li className="faq__accordion-item" onClick={toggleState}>
            <h4 className="faq__accordion-question heading--xm">{faq.question}
                <Icon name="arrow-down" size={18} color={!toggle ? iconColors.blue : iconColors.red} customStyle={{transition: 'all 400ms ease-in', transform: toggle ? 'rotate(180deg)' : ''}} /></h4>
            <div className={`faq__accordion-toggle ${toggle ? 'open' : ''}`} ref={refHeight} style={{height: toggle ? heightEl : 0}}>
                <p className="faq__accordion-desc paragraph--l" aria-hidden={!toggle ? 'true' : 'false'}>{faq.answer}</p>
            </div>
        </li>
     );
}
 
export default FaqAccordionItem;