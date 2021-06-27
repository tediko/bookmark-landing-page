import FeaturesTabInput from "./FeaturesTabInput";

const FeaturesTabControls = ({onFocus, isChanging}) => {
    return ( 
        <div className="features__tab-controls">
            <FeaturesTabInput onFocus={onFocus} isChanging={isChanging}/>
            <span className="features__tab-bar"></span>
            <span className="features__tab-overlay"></span>
        </div>
     );
}
 
export default FeaturesTabControls;