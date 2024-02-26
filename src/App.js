import React, {useState} from "react";
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from "./components/Note";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  const addNote = (newNote) => {
    setNotes((prevNotes) => { // It shows a previous value.
      return [...prevNotes, newNote];
    });
    //setNotes([newNote]); // It not shows a previous value.
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => 
        <Note
          key={index} 
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
