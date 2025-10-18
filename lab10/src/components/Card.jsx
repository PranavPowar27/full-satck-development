import React from 'react';
import './Card.css';

function Card({ name, className, rollNo }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Class:</strong> {className}</p>
      <p><strong>Roll No:</strong> {rollNo}</p>
    </div>
  );
}

export default Card;