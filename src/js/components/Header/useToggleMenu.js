import { useState } from "react";

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    
    const tabletBreakpoint = 768;
    let timer;
    let transitionDuration = 1000;

    /**
    * Function to toggle showMenu() and closeMenu() depending
    * on isOpen state. It doesn't run untill isTransitionend is true.
    */
    const handleToggle = () => {
        if (!isTransitionend) return;
        !isOpen ? showMenu() : closeMenu();
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
    * Function to display menu
    */
    const showMenu = () => {
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


            timer = null;
        }, transitionDuration)
    }

    /**
    * Function to prevent window from scrolling
    * @param    {Boolean} allowScroll    Boolean value
    */
    const preventScroll = (allowScroll) => {
        if (allowScroll) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
        } else {
            let scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            document.documentElement.style.scrollBehavior = '';
        }
    }

    return { handleToggle, restoreToDefault, isOpen, isClosing, isExpanded, tabletBreakpoint };
}
 
export default useToggleMenu;