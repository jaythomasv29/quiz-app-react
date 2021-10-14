import React from 'react'
import Card from './Card'
import './CardList.css'
function CardList({flashcards}) {
  if(flashcards){

    return (
      <div className="card-grid">
      {flashcards.map(({question, incorrect_answers, correct_answer}, index) => (
        <Card key={index} question={question} answer={correct_answer} options={incorrect_answers}/>
        ))
      }
    </div>
  )
}
return <p>loading...</p>
}

export default CardList
