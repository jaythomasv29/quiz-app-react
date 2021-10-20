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
options = [...options, answer]  // combine incorrect, and correct answers for rendering

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
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
          {shuffle(options).map((option, index) => (
              <p key={index}>{option}</p>
              ))}
              
          </div>
        </div>
      </div>
      <div className="card-back">{answer}</div>
    </div>
  )
}

export default Card
