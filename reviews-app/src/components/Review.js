import { useState } from "react"
import reviews from "../data"
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa"


const Review = ()=>{
    const [index,setIndex] = useState(0);
    const {name,image,text,job} = reviews[index];

    const checkIndex = (number)=>{
        if(number > reviews.length - 1){
            return 0;
        }
        if(number < 0){
            return reviews.length - 1;
        }
        return number
    }
    const prevPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index-1;
            return checkIndex(newIndex);
        })
    }
    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index+1;
            return checkIndex(newIndex);
        })
    }
    const randomPerson = ()=>{
        let randomIndex = Math.floor(Math.random() * (reviews.length));
        if(randomIndex === index){
            randomIndex = index+1;
        }
        setIndex(checkIndex(randomIndex))     
    }

    return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" src={image} alt={name}></img>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
                <button className="random-btn" onClick={randomPerson}>
                    surprise me
                </button>
        </article>
    )
}


export default Review