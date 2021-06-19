const Button = ({ className, name, color, text, label }) => {
    return ( 
        <button className={`${className} btn--${name} btn--${color}`} aria-label={label ? label : null}>{text}</button>
     );
}
 
export default Button;