import { useState, useEffect, useRef } from "react";
import { tabsInfoData } from "./featuresData";

const useFeaturesToggle = () => {
    const [isChanging, setIsChanging] = useState(false);
    const [dataToDisplay, setDataToDisplay] = useState(tabsInfoData[0]);
    const prevIndex = useRef(0);
    const isTransitionend = useRef(true);
    const transitionDuration = 1000;
    const halfOfTransitionDuration = transitionDuration / 2;

    useEffect(() => {
        window.addEventListener('keydown', checkIfTransitionEnds);

        return (()=> {
            window.removeEventListener('keydown', checkIfTransitionEnds);
        })
    })

    /**
    * Function to invoke changeTab only when given conditions are met.
    * @param    {Event} event    Event from user click/focus on element
    */
    const handleFocus = (event) => {
        let currIndex = parseInt(event.target.dataset.index);
        if (isChanging || prevIndex.current === currIndex) return false;
        
        changeTab(currIndex);
    }

    /**
    * Function to change active tab. 
    * @param    {Number} currIndex    Value of current index
    */
    const changeTab = currIndex => {
        prevIndex.current = currIndex;
        isTransitionend.current = false;
        setIsChanging(true);

        setTimeout(() => {
            setIsChanging(false);
            isTransitionend.current = true;
        }, transitionDuration)

        setTimeout(() => {
            setDataToDisplay(tabsInfoData[currIndex])
        }, halfOfTransitionDuration)
    }

    /**
    * Function to check if transition has ended. If not - disable switching tabs.
    * @param    {Event} event    Event from current element
    */
    const checkIfTransitionEnds = event => {
        if (!isTransitionend.current) {
            event.preventDefault();
        } else {
            event.returnValue = true;
        }
    }

    return [handleFocus, isChanging, dataToDisplay];
}
 
export default useFeaturesToggle;