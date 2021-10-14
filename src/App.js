import { useState, useEffect } from 'react'
import './App.css';
import CardList from './CardList';

function App() {
  // const SAMPLE_FLASHCARDS = [
  //   {
  //     id: 1,
  //     question: 'What is the capital of California?',
  //     answer: 'Sacramento',
  //     options: [
  //       'Los Angeles',
  //       'San Francisco',
  //       'Lake Tahoe',
  //       'Fresno'
  //     ]
  //   },
  //   {
  //     id: 2,
  //     question: 'Who was the first President of the United States?',
  //     answer: 'George Washington',
  //     options: [
  //       'John Adams',
  //       'James Madison',
  //       'Henry Ford',
  //       'Benjamin Franklin'
  //     ]
  //   },
  //   {
  //     id: 3,
  //     question: 'What is the capital of California?',
  //     answer: 'Sacramento',
  //     options: [
  //       'Los Angeles',
  //       'San Francisco',
  //       'Lake Tahoe',
  //       'Fresno'
  //     ]
  //   },
  //   {
  //     id: 4,
  //     question: 'Who was the first President of the United States?',
  //     answer: 'George Washington',
  //     options: [
  //       'John Adams',
  //       'James Madison',
  //       'Henry Ford',
  //       'Benjamin Franklin'
  //     ]
  //   },
  //   {
  //     id: 5,
  //     question: 'What is the capital of California?',
  //     answer: 'Sacramento',
  //     options: [
  //       'Los Angeles',
  //       'San Francisco',
  //       'Lake Tahoe',
  //       'Fresno'
  //     ]
  //   },
  //   {
  //     id: 6,
  //     question: 'Who was the first President of the United States?',
  //     answer: 'George Washington',
  //     options: [
  //       'John Adams',
  //       'James Madison',
  //       'Henry Ford',
  //       'Benjamin Franklin'
  //     ]
  //   },
  //   {
  //     id: 7,
  //     question: 'What is the capital of California?',
  //     answer: 'Sacramento',
  //     options: [
  //       'Los Angeles',
  //       'San Francisco',
  //       'Lake Tahoe',
  //       'Fresno'
  //     ]
  //   },
  //   {
  //     id: 8,
  //     question: 'Who was the first President of the United States?',
  //     answer: 'George Washington',
  //     options: [
  //       'John Adams',
  //       'James Madison',
  //       'Henry Ford',
  //       'Benjamin Franklin'
  //     ]
  //   },
  // ]

  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    // new inst of abortController
    const abortController = new AbortController()
    //function to fetch data from api
    const fetchData = async () => {
      // fetch
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10', {signal: abortController.signal})
        const data = await response.json()
        setFlashcards(data.results)
        console.log(flashcards)
      } catch (e) {
        if(e.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          throw e
        }
      }
    }
    fetchData()
    return () => {
      console.log('cleanup ran', flashcards)
      abortController.abort() // cancel any pending requests
    }
  }, [])
  return (
    <div className="app">
    <CardList flashcards={flashcards}/>
    </div>
  );
}



export default App;
