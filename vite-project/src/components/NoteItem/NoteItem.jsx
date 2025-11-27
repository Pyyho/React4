import React from 'react';
import './NoteItem.css';

const NoteItem = ({ note, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту заметку?')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-item">
      <div className="note-content">
        <p className="note-text">{note.text}</p>
        <div className="note-meta">
          <span className="note-date">{note.createdAt}</span>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={handleDelete}
        title="Удалить заметку"
      >
        ×
      </button>
    </div>
  );
};

export default NoteItem;