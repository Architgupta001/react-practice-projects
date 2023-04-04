import { useState } from "react";
import data from "./data.js"

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault()
    let amount = parseInt(count);
    if(amount<=0){
      amount = 1
    }
    if(amount>data.length){
      amount = data.length;
    }
    setText(data.slice(0,amount))
  }
  const handleChange = (event)=>{
    setCount(event.target.value);
  }


  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum 🥲?</h3>
      <form className="lorem-form" onSubmit={handleSubmit} >
          <label htmlFor="amount">paragraphs:</label>
          <input type="number" id="amount" name="amount"  max="20" min="-20" step="1" value={count} onChange={handleChange}></input>
          <button type="submit" className="btn" >generate</button>  
      </form>
      <article className="lorem-text">
          {
            text.map((item,index)=>{
              return(
                <p key={index}>{item}</p>
              )
            })
          }
      </article>
    </section>
  );
}

export default App;
