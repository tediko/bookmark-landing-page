import React from "react";

const FeaturesTabInput = ({ tabs, onFocus, isChanging }) => {
    return tabs.map((tab) => (
        <React.Fragment key={tab.index}>
            <input type="radio" name="tab" id={tab.idName} className="features__tab-input" defaultChecked={tab.isChecked ? true : null} onFocus={onFocus} onClick={onFocus} data-index={tab.index} />
            <label htmlFor={tab.idName} className={`features__tab-label ${isChanging ? 'active' : ''}`}>{tab.labelText}</label>
        </React.Fragment>
        ))
}
 
export default FeaturesTabInput;