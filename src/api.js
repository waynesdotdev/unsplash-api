import axios from 'axios'

// access key: JBqK9x7CJJRTjorms1QZklulwXA4V6p140O2puBpvcU
// secret key: 2MtClMhmJD3uza_MKREb0P8Qllf7iyNm7emY_7OWmTA
// https://api.unsplash.com/
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const searchImages = async searchTerm => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: 'Client-ID JBqK9x7CJJRTjorms1QZklulwXA4V6p140O2puBpvcU',
    },
    params: {
      query: searchTerm,
    },
  })

  return response
}

export default searchImages
