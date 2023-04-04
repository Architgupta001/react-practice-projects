
import { useState } from "react";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai"
const Question = ({title,info})=>{
    const [seeInfo,setSeeInfo] = useState(false)
    const handleClick = ()=>{
        setSeeInfo(!seeInfo)
    }
    return(
        
        <article className="question"> 
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={handleClick}>{seeInfo?<AiOutlineMinusCircle />:<AiOutlinePlusCircle />}</button>
            </header>
            <p>{seeInfo?info: null}</p>
        </article>
            
    ) ;
}


export default Question