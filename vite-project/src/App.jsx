import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm/NoteForm';
import NoteList from './components/NoteList/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  // Загрузка заметок из localStorage при монтировании
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Сохранение заметок в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Добавление новой заметки
  const addNote = (text) => {
    if (text.trim()) {
      const newNote = {
        id: Date.now(),
        text: text.trim(),
        createdAt: new Date().toLocaleString('ru-RU')
      };
      setNotes([newNote, ...notes]);
    }
  };

  // Удаление заметки
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">Мои заметки</h1>
          <p className="subtitle">Простое приложение для управления вашими мыслями</p>
        </header>
        
        <main className="main">
          <NoteForm onAddNote={addNote} />
          <NoteList notes={notes} onDeleteNote={deleteNote} />
        </main>
        
        <footer className="footer">
          <p>Всего заметок: {notes.length}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;