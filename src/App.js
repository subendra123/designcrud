import { useState } from "react";
import "./App.css";

function App() {
   // this state is use to what we type in input field
  const [data, setData] = useState([
        {
          text: "Mobile",
          isCompleted:false
        },
        {
          text: "Laptop",
          isCompleted:false
        },
        {
          text: "Television",
          isCompleted:false
        },

  ]);

  const[item, setItem] = useState("");

 const HandleSubmit = (e) => {
    e.preventDefault();
    if(!item) return;
   addItem(item);
  setItem("");
  

 }

 const addItem = (text) => {
  const newItem = [...data, {text}];
  setData(newItem);
 }

 const crossItem = (id) => {
    const lineCross = [...data];
    lineCross[id].isCompleted = true;
    setData(lineCross);
 }

 const deleteData = (id) => {
  // const deletedItem = [...data];
  // deletedItem.splice(id, 1);
  // setData(deletedItem);

const deleteItem = data.filter((curElem, ind) => {
  return ind != id;
});
setData(deleteItem);

 }
  

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <div className="form_style">

                <form  onSubmit={HandleSubmit}>
                    <input type="text"  placeholder="Enter Item"
                    value={item}
                    onChange={(e) => setItem(e.target.value) }
                    />
                    

                </form>
            
           
          </div>
          
                <>
                {
                  data.map((curElem, ind) => {
                    return (
                      <>
                      <div className="element_show">
                      <h4 style={{ textDecoration: curElem.isCompleted ? "line-through" : ""}}> {curElem.text}</h4>
                      <button onClick={() => crossItem(ind)}>complete</button>
                      <button onClick={() => deleteData(ind)}>Delete</button>
                    </div>

                    </>
                    )
                  })
                }
               
                </>
             

         
        </div>
      </div>
    </>
  );
}

export default App;
