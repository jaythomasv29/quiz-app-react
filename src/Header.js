import { useEffect, useState } from "react"
import './Header.css'

function Header({form, setForm, handleSubmit}) {
  const [categories, setCategories] = useState([])
  function handleInputChange({target}) {
   setForm({
     ...form,
     [target.name]: target.value
  }) 
  // console.log(form)
  }

  async function getCategories (){
    const res = await fetch('https://opentdb.com/api_category.php')
    const data = await res.json()
    setCategories(data.trivia_categories)
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div>
      <form className="header" onSubmit={handleSubmit}>
      <h1>Quiz Generator</h1>
        <div className="form-group">
          <label htmlFor="category">Category</label>  
          <select name="category" onChange={handleInputChange}>
            { categories.length ?
              categories.map(category=> {
                return <option value={category.id} key={category.id}>{category.name}</option>
              }) : <option>Loading...</option>
            }
          </select>
        </div>   
        <div className="form-group">
          <label>Number of Questions</label>
          <input type="number" 
          name="totalQues" 
          min="1" 
          step="1" 
          defaultValue={10} 
          onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
    </div>
  )
}

export default Header
