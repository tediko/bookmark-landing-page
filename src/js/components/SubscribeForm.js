import Button from "./Button";

const SubscribeForm = () => {
    return ( 
        <form action="#" className="subscribe__form">
            <label htmlFor="email-sub" className="subscribe__form-label sr-only">Subscribe to newsletter!</label>
            <input type="text" id="email-sub" className="subscribe__form-input" />
            <Button className="subscribe__cta" name="contact" color="red" text="Contact Us" />
        </form>
     );
}
 
export default SubscribeForm;