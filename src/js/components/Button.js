const button = ({ className, name, color, text }) => {
    return ( 
        <button className={`${className} btn--${name} btn--${color}`}>{text}</button>
     );
}
 
export default button;