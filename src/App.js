import SearchBar from './components/SearchBar'
import searchImages from './api'
import ImageList from './components/ImageList'
import { useState } from 'react'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async term => {
    const results = await searchImages(term)
    setImages(results.data.results)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
