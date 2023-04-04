import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import {FaAngleDoubleRight} from "react-icons/fa";

const url = 'https://course-api.com/react-tabs-project'


function App() {
  
  const [items,setItems] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [values,setValues] = useState(0)
  
  // const cName = [...new Set(items.filter((company)=> items.company === company))]

  const fetchData = async ()=>{
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error();
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  if(isLoading){
    return(
      <section className="section loading">
        <Loading />
      </section>
    )
  }

  const {title,dates,duties,company} = items[values] 
  return (
    <section className="section">
      <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
      </div>

      <div className="jobs-center">
       
        <div className="button-container">
            {items.map((item,index)=>{
              return <button key={item.id} onClick={()=>setValues(index)} className={`job-btn ${index === values && 'active-btn'}`}>{item.company}</button>
            })}
        </div>

        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty,index)=>{
              return(
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
            <button type="button" className="btn">More Info</button>
        </article>
      </div>
    </section>
  );
}

export default App;
