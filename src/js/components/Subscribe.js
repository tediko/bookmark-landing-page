import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
    return ( 
        <section className="subscribe">
            <div className="subscribe__container container">
                <span className="subscribe__users">35,000+ already joined</span>
                <h2 className="subscribe__title heading--xl">Stay up-to-date with what we’re doing</h2>
                <SubscribeForm />
            </div>
        </section>
     );
}
 
export default Subscribe;