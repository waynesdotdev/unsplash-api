import { useState } from 'react'

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  )
}

export default SearchBar
