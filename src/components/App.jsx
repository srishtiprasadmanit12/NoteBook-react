import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
function createnotes(note){
    return(
        <Note
        Heading={note.title}
        description={note.content} 
        />
           
    )
}


function App(){
    return(
        <div>
            <Header/>
            {notes.map(createnotes)};
            <Footer/>
            
        </div>
    );
}
export default App;