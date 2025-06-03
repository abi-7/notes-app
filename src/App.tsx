// src/App.tsx
import "./style.css";
import React, { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "test note 1", content: "bla bla note1" },
    { id: 2, title: "test note 2", content: "bla bla note2" },
    { id: 3, title: "test note 3", content: "bla bla note3" },
    { id: 4, title: "test note 4", content: "bla bla note4" },
    { id: 5, title: "test note 5", content: "bla bla note5" },
    { id: 6, title: "test note 6", content: "bla bla note6" },
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: notes.length + 1,
      title: title.trim(),
      content: content.trim(),
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="app-container">
      <form
        onSubmit={handleAddNote}
        className="note-form"
        style={{ marginBottom: "20px" }}
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        ></input>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button
                onClick={() => setNotes(notes.filter((n) => n.id !== note.id))}
              >
                x
              </button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
