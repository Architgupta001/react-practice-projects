import { useEffect, useState } from "react";
import List from "./List"
import Alert from "./Alert"
 

const getLocaleStorage = ()=>{
  let localList = localStorage.getItem('list')
  if(localList){
    return JSON.parse(localList)
  }
  else{
    return []
  }
}
function App() {
  const [list,setList] = useState(getLocaleStorage);
  const [name,setName] = useState('');
  const [editId,setEditId] = useState(null)
  const [isEditing,setIsEditing] = useState(false);
  const [alert,setAlert] = useState({
    show:false,
    msg:"",
    type:""
  })

  const showAlert = (show=false,msg='',type='')=>{
    setAlert({show,msg,type})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      showAlert(true,'please enter a value','danger')
    }else if(name && isEditing){
      setList(
        list.map((item)=>{
          if(item.id === editId){
            return {...item,title:name}
          }
          return item
        })
      );
      setName('')
      setEditId(null)
      showAlert(true,"item edited successfully",'success')
      setIsEditing(false)
    }
    else{
      const newItem = {id: new Date().getTime().toString(),title:name};
      console.log(new Date().getTime().toString());
      setList([...list, newItem])
      showAlert(true,'item added successfully','success')
      setName('')
    }
  
  }
  const clearList = ()=>{
    setList('');
    showAlert(true,"List deleted successfully","success")
  }

  const deleteItem = (id)=>{
    showAlert(true,'item deleted successfully','danger')
    setList(
      list.filter((item)=>item.id !== id)
    )
  }
  
  const editItem = (id)=>{
    const specificItem = list.find((item)=> item.id === id)
    setEditId(id)
    setName(specificItem.title)
    setIsEditing(true)
    showAlert(true,"editing the item",'danger')
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])
  

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" value={name} placeholder="e.g. eggs" onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn" >{isEditing?"Edit":"Submit"}</button>
        </div>
      </form>
        { list.length>0 &&
          <div className="grocery-container">
            <List items={list} deleteItem={deleteItem} editItem={editItem}/>
            <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>}
    </section>
  ) ;
}

export default App;
