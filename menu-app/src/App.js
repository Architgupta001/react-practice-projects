import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data"

const allCategories = ['all', ...new Set(data.map((item)=>item.category))];


function App() {
  const [menu,setMenu] = useState(data);
  const [categories,setCategories] = useState(allCategories);
  const filterItems = (category)=>{
    if(category === 'all'){
      setMenu(data)
      return;
    }
    const newItems = data.filter((menuItem)=>{
      return menuItem.category === category;
    })
    setMenu(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menu={menu}/>
      </section>
    </main>
  );
}

export default App;
