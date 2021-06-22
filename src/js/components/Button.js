const Button = ({ type, className, name, color, text, label }) => {
    return ( 
        type === 'anchor' ? 
        <a href="#" className={`${className} btn--${name} btn--${color}`}>{text}</a> :
        <button className={`${className} btn--${name} btn--${color}`} aria-label={label ? label : null}>{text}</button>
     );
}
 
export default Button;