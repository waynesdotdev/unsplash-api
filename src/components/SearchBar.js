import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit(term)
    setTerm('')
  }

  const handleChange = e => {
    setTerm(e.target.value)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='search'>Enter Search Term</label>
        <input onChange={handleChange} value={term} id='search' autoFocus />
      </form>
    </div>
  )
}

export default SearchBar
