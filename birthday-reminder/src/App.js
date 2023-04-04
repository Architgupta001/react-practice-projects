import { useState } from 'react';
import './App.css';
import List from './components/List';
import Data from './data';

function App() {
  const [peoples,setPeoples] = useState(Data)

  const handleClick = ()=>{
    setPeoples([])
  }
  
  return (
    <main>
      <section className='container'>
        <h3>{peoples.length} birthdays left</h3>
        <List peoples={peoples}/>
        <button onClick={handleClick}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
