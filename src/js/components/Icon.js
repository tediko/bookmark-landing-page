import IcoMoon from 'react-icomoon';
const iconSet = require("../selection.json");

const Icon = ({ name, size, color }) => {
    return ( 
        <IcoMoon iconSet={iconSet} disableFill="true" icon={name} size={size} color={color} />
     );
}
 
export default Icon;