const Faq = () => {
    return ( 
        <section className="faq">
            <div className="faq__container container">
                <h2 className="faq__title heading--xl">Frequently Asked Questions</h2>
                <p className="faq__text paragraph--l">Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.</p>
                <div className="faq__accordion-wrapper">
                    <label className="faq__accordion">
                        <input type="checkbox" name="accordion" className="faq__accordion-input" />
                        <h4 className="faq__accordion-question heading--xm">What is Bookmark?</h4>
                        <p className="faq__accordion-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                    </label>
                </div>
            </div>
        </section>
     );
}
 
export default Faq;