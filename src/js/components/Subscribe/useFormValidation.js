import { useState } from "react";

const useFormValidation = (callback) => {
    const [mail, setMail] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    /**
    * Function to handle input value change
    */
    const handleChange = event => {
        const inputValue = event.target.value;
        setMail(inputValue);
    }

    /**
    * Function to handle submit event
    */
    const handleSubmit = event => {
        event.preventDefault();
        formValidation();
    }

    /**
    * Function to validate form and display error
    */
    const formValidation = () => {
        if (!mail) {
            setError(true);
            setErrorMessage(`Whoops, make sure it's not empty`);
        } else if (!emailValidation(mail)) {
            setError(true);
            setErrorMessage(`Whoops, make sure it's an email`);
        } else {
            callback();
        }
    }

    /**
    * Function that check if our email is correct
    * @param    {String} email    String with email address
    * @return   {Boolean}         Returns true or false
    */
    const emailValidation = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    
    return { handleChange, mail, handleSubmit, error, errorMessage };
}
 
export default useFormValidation;