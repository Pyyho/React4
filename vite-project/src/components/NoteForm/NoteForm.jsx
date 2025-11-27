import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Пожалуйста, введите текст заметки');
      return;
    }

    if (text.trim().length > 500) {
      setError('Заметка не должна превышать 500 символов');
      return;
    }

    onAddNote(text);
    setText('');
    setError('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea
          className="textarea"
          value={text}
          onChange={handleChange}
          placeholder="Введите вашу заметку..."
          rows="3"
          maxLength="500"
        />
        <div className="counter">
          {text.length}/500
        </div>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <button 
        type="submit" 
        className="add-button"
        disabled={!text.trim()}
      >
        Добавить заметку
      </button>
    </form>
  );
};

export default NoteForm;