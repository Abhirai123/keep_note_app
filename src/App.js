import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Create_notes from './component/Create_notes';
import Show_notes from './component/Show_notes';
import { useState } from 'react';

function App() {
  
  const [addnote, setNote] = useState([])
  const addItem = (note)=>{
    setNote((prev)=>{
      return [...prev, note]
    })
  } 

  const delete_Item = (id) => {
    setNote((prevData) => 
      prevData.filter((currval, index)=>{
        return id !== index;
      })
    )
    
    console.log("Deleated ...!" + id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Create_notes note_event={addItem} />

        <div className="app-row">
        {
          addnote.map((item, index)=>{
            return (
            <Show_notes 
             key={index} 
             id={index} 
             title={item.title} 
             desc={item.desc} 
             delete_note={delete_Item} />
          )
        })
        }
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
