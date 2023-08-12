import react, { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Count = ({number, text, style})=>{
    const [focus, setFocus] = useState(false);
    const handleVisibleChange= (isVisible) =>{
        if(isVisible){
            if(!focus){
                setFocus(true);
            }
        }
    }
    return(
        <>
        <CountUp start={focus? 0: null} end={number} duration={2}>
            {
                ({countUpRef})=>(
                    <div className={style}>
                    <span ref={countUpRef}/>
                    <InView as="span" onChange={(isVisible)=>{handleVisibleChange(isVisible)}}>
                      {text && <span>{text}</span>}
                    </InView>
                    </div>
                )
            }
        </CountUp>
        </>
    )
}
  
export default Count;