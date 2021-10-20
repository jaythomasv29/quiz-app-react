import { useState, useEffect } from 'react'
import './App.css';
import CardList from './CardList';
import Header from './Header'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const initialForm = { category: '13', totalQues: '10' }

  const [form, setForm] = useState(initialForm)

  const fetchData = async () => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${form.totalQues}&category=${form.category}`)
    const data = await response.json()
    setFlashcards(data.results)
    console.log(flashcards)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData()
  }

  useEffect(() => {
    // new inst of abortController
    //function to fetch data from api
    fetchData()
  }, [])
  return (
    <div className="container">
      <Header form={form} setForm={setForm} handleSubmit={handleSubmit} />
      <CardList flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}



export default App;
