import { useState, useEffect, useRef } from "react";

const useStickyNav = () => {

    const containerRef = useRef(null);
    const [ isIntersecting, setIsIntersecting ] = useState(false);
    const [ isNotIntersecting, setIsNotIntersecting ] = useState(false);
    const transitionDuration = 300;
    let isInitialized = false;
    let timer;

    useEffect(() => {
        navObserver(containerRef.current);
    }, [containerRef]);

    /**
    * Function to start observe element and show/hide header.
    * @param    {Element} element    Element to observe
    */
    const navObserver = element => {
        if (!element) return false;

        const options = {
            threshold: 0.3
        }

        const observer = new IntersectionObserver((entries, observer) => {
            if (isInitialized) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        setIsIntersecting(true);
                        setIsNotIntersecting(false);
                    } else {
                        setIsNotIntersecting(true);
                        
                        timer = setTimeout(() => {
                            setIsIntersecting(false);
                            setIsNotIntersecting(false);

                            timer = null;
                        }, transitionDuration)
                    }
                })
            }
            isInitialized = true;
        }, options)
        observer.observe(element);
    }

    return [ containerRef, isIntersecting, isNotIntersecting ];
}
 
export default useStickyNav;