import Questions from "./data"
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const [question,setQuestion] = useState(Questions);
  
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
          <section className="info">
              {question.map((Ques)=>{
                return (<Question key={Ques.id} {...Ques}/>)
              })}
          </section>
      </div>
    </main>
  );
}

export default App;
