import React from "react";
import { tabsData } from "./featuresData";

const FeaturesTabInput = ({ onFocus, isChanging }) => {
    return tabsData.map((data) => (
        <React.Fragment key={data.index}>
            <input type="radio" name="tab" id={data.idName} className="features__tab-input" defaultChecked={data.isChecked ? true : null} onFocus={onFocus} onClick={onFocus} data-index={data.index} />
            <label htmlFor={data.idName} className={`features__tab-label ${isChanging ? 'active' : ''}`}>{data.labelText}</label>
        </React.Fragment>
        ))
}
 
export default FeaturesTabInput;