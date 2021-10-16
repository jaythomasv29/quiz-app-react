import React, { useState } from 'react'
import './Card.css'
function Card({ question, answer, options }) {
  // flip card state set to front question side
  const [flip, setFlip] = useState(false)
  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }
  return (
    // on click handler
    <div
      className={`card ${flip ? 'flip' : ''}`}
      // set flip state to toggle
      onClick={() => setFlip(!flip)}>

      <div className="card-front">
        <h3>{decodeString(question)}</h3>
        <div className="flashcard-options">
          <div className="flashcard-option">
          {options.map((option, index) => (
              <p>{option}</p>
              ))}
          <p>{answer}</p>
          </div>
        </div>
      </div>
      <div className="card-back">{answer}</div>
    </div>
  )
}

export default Card
