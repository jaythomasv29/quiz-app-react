import React, {useState, useEffect} from 'react'

function Header() {
  const [category, setCategory] = useState({})
  useEffect(() => {
    async function getCategories() {
      const response = await fetch('https://opentdb.com/api_category.php')
      const data = await response.json()
      console.log(data)
    }
    getCategories()
    
  }, [])
  return (
    <div>
      <form action="">
        <select name="category" id="category">

        </select>
      </form>
    </div>
  )
}

export default Header
