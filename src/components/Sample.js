import React, {useState} from 'react';
import './App.css';

const arr = [
  {
    name: "pratyush Tripathy",
    at: "source",
  },
  {
    name: "Papun Tripathy",
    at: "box1",
  },
  {
    name: "Himansu Gouda",
    at: "box2",
  },
  {
    name: "Lokanath Sahu",
    at: "source",
  },
  {
    name: "Sankar Prasad Padhi",
    at: "box2",
  },
  {
    name: "Aswin Kumar Dhal",
    at: "box1",
  },
  {
    name: "Ananya Pandey",
    at: "source",
  },
]

function App() {
  const [list, setList] = useState({
    source: arr.filter(d => d.at === "source"),
    box1: arr.filter(d => d.at === "box1"),
    box2: arr.filter(d => d.at === "box2"),
  });

  const onDragStartDo = (e, item) =>{
    e.dataTransfer.setData("papun", item.name);
    e.dataTransfer.setData("from", item.at);
  }

  const handleOnDropItem = (e, toBox="source")=>{
    
    const nameOnCard = e.dataTransfer.getData("papun");
    const fromBox = e.dataTransfer.getData("from");
    e.dataTransfer.clearData();
    
    let newData = {...list}
    const item = newData[fromBox].find(d => d.name === nameOnCard)
    item.at = toBox
    let fromlistupdate = newData[fromBox]
    
    fromlistupdate.splice(fromlistupdate.findIndex(d => d === item), 1)
    newData[fromBox] = fromlistupdate
    newData[toBox] = [...newData[toBox], item]
    setList(newData)
  }

  const handleOnDragOver = (e) =>{
    e.preventDefault();
    e.dataTransfer.clearData();
  }
  return (
    <div className="App">
      <div className="left" onDragOver={handleOnDragOver} >
        <label>Drag from Here</label>
        {
          list?.source?.map((da, ind)=> <div className='card' draggable onDragStart={e => onDragStartDo(e, da)} key={ind} >{da.name}</div>)
        }
      </div>
      <div className="right right-one" onDragOver={handleOnDragOver} onDrop={ e=> handleOnDropItem(e, "box1") }>
        <p>Box 1</p>
        {
          list?.box1?.map((da, ind)=> <div className='card' draggable onDragStart={ e => onDragStartDo(e, da)} key={ind} >{da.name}</div>)
        }
      </div>
      <div className="right right-two" onDragOver={handleOnDragOver} onDrop={ e=> handleOnDropItem(e, "box2") } >
        <p>Box 2</p>
        {
          list?.box2?.map((da, ind)=> <div className='card' draggable onDragStart={ e => onDragStartDo(e, da)} key={ind} >{da.name}</div>)
        }
      </div>
    </div>
  );
}

export default App;