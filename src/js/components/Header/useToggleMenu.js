import { useState, useRef, useEffect } from "react";

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    const isMenuOpen = useRef(false);
    
    const tabletBreakpoint = 768;
    let transitionDuration = 1000;
    let swipeTriggerPoint = 150;
    let timer;
    let startPosition = 0;
    let endPosition = 0;
    let touchSlideLength = 0;

    useEffect(() => {
        window.addEventListener('touchstart', getTouchStartPosition);
        window.addEventListener('touchmove', getTouchEndPosition);
        window.addEventListener('touchend', handleToggleOnSwipe);
        
        return (()=> {
            window.removeEventListener('touchstart', getTouchStartPosition);
            window.removeEventListener('touchmove', getTouchEndPosition);
            window.removeEventListener('touchend', handleToggleOnSwipe);
        })
    })
    
    /**
     * Function to toggle showMenu() and closeMenu() depending
     * on isOpen state. It doesn't run untill isTransitionend is true.
     */
    const handleToggle = () => {
        if (!isTransitionend) return;
        !isOpen ? showMenu() : closeMenu();
    }
    
    /**
    * Function to invoke handeToggle() function based on length of touch slide.
    * Invoke only when touchSlideLength is greater than swipeTriggerPoint.
    */
    const handleToggleOnSwipe = () => {
        if (!isTransitionend) return false;
        touchSlideLength = endPosition - startPosition;
        touchSlideLength > swipeTriggerPoint ? handleToggle() : null;
    }
    
    /**
     * Function to display menu
     */
    const showMenu = () => {
        isMenuOpen.current = true;
        setIsTransitionend(false);
        setIsOpen(true);
        setIsExpanded(true);
        preventScroll(true);
        
        timer = setTimeout(() => {
            setIsTransitionend(true);
            timer = null;
        }, transitionDuration)
    }
    
    /**
     * Function to hide menu
     */
    const closeMenu = () => {
        setIsTransitionend(false);
        setIsExpanded(false);
        setIsClosing(true);
        
        
        timer = setTimeout(() => {
            preventScroll(false);
            setIsTransitionend(true);
            setIsClosing(false);
            setIsOpen(false);
            isMenuOpen.current = false;
            timer = null;
        }, transitionDuration)
    }
    
    /**
    * Function to restore all states to it default values.
    */
    const restoreToDefault = () => {
        setIsOpen(false);
        setIsClosing(false);
        setIsExpanded(false);
        setIsTransitionend(true);
        preventScroll(false);
    }
    
    /**
     * Function to prevent window from scrolling
    * @param    {Boolean} allowScroll    Boolean value
    */
    const preventScroll = (allowScroll) => {
        if (!isMenuOpen.current) return false;
        
        if (allowScroll) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
        } else {
            let scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

    /**
    * Function to get start touch position from event listener.
    * @param    {Event} event    Event from eventListener
    */
    const getTouchStartPosition = event => {
        startPosition = Math.floor(event.touches[0].clientX);
    }

    /**
    * Function to get end touch position from event listener.
    * @param    {Event} event    Event from eventListener
    */
    const getTouchEndPosition = event => {
        endPosition = Math.floor(event.touches[0].clientX);            
    }


    return { handleToggle, restoreToDefault, isOpen, isClosing, isExpanded, tabletBreakpoint };
}
 
export default useToggleMenu;