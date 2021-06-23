import Button from "../shared/Button";
import useFormValidation from "./useFormValidation";

const SubscribeForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, mail, error, errorMessage } = useFormValidation(submitForm);

    return ( 
        <form action="#" noValidate className={`subscribe__form ${error ? 'error' : ''}`} onSubmit={handleSubmit}>
            <label htmlFor="email-sub" className="subscribe__form-label sr-only">Subscribe to newsletter!</label>
            <input type="email" name="email" id="email-sub" className="subscribe__form-input" placeholder="Enter your email address" value={mail} onChange={handleChange} />
            <Button className="subscribe__form-cta" name="contact" color="red" text="Contact Us" />
            {error && <span className="subscribe__form-error">{errorMessage}</span>}
        </form>
     );
}
 
export default SubscribeForm;