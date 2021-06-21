import React from "react";
import Button from "./Button";

const ExtensionsCard = ({ cards }) => {
    return ( 
        <React.Fragment>
            {cards.map((card) => (
            <div className="extensions__card" key={card.id}>
                <div className="extensions__img-wrapper">
                    <img src={card.logo} alt="" className="extensions__card-img" />
                </div>
                <h3 className="extensions__card-title heading--l">Add to {card.title}</h3>
                <p className="extensions__card-text paragraph--xm">Minimum version {card.version}</p>
                <Button className="extensions__card-cta" name="install" color="blue" text="Add & Install Extension" />
            </div>
            ))}
        </React.Fragment>
     );
}
 
export default ExtensionsCard;