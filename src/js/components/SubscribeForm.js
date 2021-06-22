import Button from "./Button";

const SubscribeForm = () => {
    return ( 
        <form action="#" className="subscribe__form">
            <label className="subscribe__form-label">
                <input type="text" className="subscribe__form-input" />
            </label>
            <Button className="subscribe__cta" name="contact" color="red" text="Contact Us" />
        </form>
     );
}
 
export default SubscribeForm;