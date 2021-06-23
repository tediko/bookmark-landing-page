import React, { useState } from "react";
import SubscribeForm from "./SubscribeForm";
import SubscribeFormSuccess from "./SubscribeFormSuccess";

const SubscribeFormControler = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }

    return ( 
        <React.Fragment>
            {!isSubmitted ? <SubscribeForm submitForm={submitForm}/> : <SubscribeFormSuccess />}
        </React.Fragment>
     );
}
 
export default SubscribeFormControler;