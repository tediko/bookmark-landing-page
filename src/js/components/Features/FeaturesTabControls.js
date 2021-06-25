import { useState } from "react";
import FeaturesTabInput from "./FeaturesTabInput";

const FeaturesTabControls = ({onFocus, isChanging}) => {
    const [data, setData] = useState([
        {
            index: 0,
            idName: 'bookmarking',
            isChecked: true,
            labelText: 'Simple Bookmarking'
        },
        {
            index: 1,
            idName: 'searching',
            isChecked: false,
            labelText: 'Speedy Searching'
        },
        {
            index: 2,
            idName: 'sharing',
            isChecked: false,
            labelText: 'Easy Sharing'
        },
    ]);

    return ( 
        <div className="features__tab-controls">
            <FeaturesTabInput tabs={data} onFocus={onFocus} isChanging={isChanging}/>
            <span className="features__tab-bar"></span>
            <span className="features__tab-overlay"></span>
        </div>
     );
}
 
export default FeaturesTabControls;