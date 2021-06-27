import ExtensionsCard from './ExtensionsCard';

const Extensions = () => {
    return ( 
        <section className="extensions">
            <div className="extensions__container container">
                <h2 className="extensions__title heading--xl">Download the extension</h2>
                <p className="extensions__text paragraph--l">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.</p>
                <div className="extensions__card-wrapper">
                    <ExtensionsCard/>
                </div>
            </div>
        </section>
     );
}
 
export default Extensions;