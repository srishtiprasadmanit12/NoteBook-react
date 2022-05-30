import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
const [notes,setNotes]=useState([]);

function addNote(newNote){
setNotes(prevVal=>{
   return [...prevVal,newNote];
});
}
function deleteItem(id){
    setNotes((prevval)=>{
        return notes.filter((notesItem,index)=>{
            return index!==id;
        })
    })
    

}
    return(
        <div>
            {/* {notes.map(createnotes)}; */}
            <Header />
            <CreateArea  onAdd={addNote} />
              { notes.map((noteItem,index)=>{
                    return <Note
                    key={index}
                    id={index}
                    title={noteItem.title} 
                    content={noteItem.content}
                    onDelete={deleteItem}
                    />
                })}
           
            <Footer />
            
        </div>
    );
}
export default App;