import React from "react";
import Button from "../shared/Button";
import { extensionsData } from "./ExtensionsData";

const ExtensionsCard = () => {
    return ( 
        <React.Fragment>
            {extensionsData.map((data) => (
            <div className="extensions__card" key={data.id}>
                <div className="extensions__img-wrapper">
                    <img src={data.logo} alt="" className="extensions__card-img" />
                </div>
                <h3 className="extensions__card-title heading--l">Add to {data.title}</h3>
                <p className="extensions__card-text paragraph--xm">Minimum version {data.version}</p>
                <Button className="extensions__card-cta" name="install" color="blue">Add & Install Extension</Button>
            </div>
            ))}
        </React.Fragment>
     );
}
 
export default ExtensionsCard;