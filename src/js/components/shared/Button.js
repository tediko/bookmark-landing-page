const Button = ({ children, type, className, name, color, text, label }) => {
    return ( 
        type === 'anchor' ? 
        <a href="#" className={`${className} btn--${name} btn--${color}`}>{children}</a> :
        <button className={`${className} btn--${name} btn--${color}`} aria-label={label ? label : null}>{children}</button>
     );
}
 
export default Button;