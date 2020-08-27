import React,{useState} from 'react';
import './App.css';

function App() {
  const[inputList, setInputList] =useState("");
  const[Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }
  const listOfItems = () => {
    setItems((oldItems)=> {
      return [...oldItems, inputList]
    })
    setInputList('')
  }
  return (
    <div className="main_div">
      <div className="center_div">
      <br/>
        <h1>ToDO List </h1>
      <br/>
        <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList} />
        <button  onClick={listOfItems}> + </button>  
        <ol>
         {
          Items.map(itemVal => {
            return <li>{itemVal}</li>
          })
         }
        </ol>
      </div>
    </div>
  );
}

export default App;
