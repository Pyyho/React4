import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';

const NoteList = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <h3>Пока нет заметок</h3>
        <p>Добавьте первую заметку, используя форму выше</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2 className="list-title">Ваши заметки ({notes.length})</h2>
      <div className="notes-grid">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;