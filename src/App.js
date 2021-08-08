import { useState, useEffect } from 'react'
import './styles.css'

import Form from './components/Form'
import Message from './components/Message'

function App() {
  const [data, setData] = useState([])

  
  useEffect(() => {
    const url = "API_data.json"
    
    // Get data from JSON file. Can be used with API url
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        
        setData(json.messages)
      } catch (error) {
        console.log("error", error)
      }
    }
    
    fetchData()
  }, []) // fetching data just once
  
  const handleSubmit = (message, buttonState, id) => {
    const newMessage = {
      id: id,
      text: message,
      state: buttonState
    }
    
    if (newMessage.text !== "") {
      setData([newMessage, ...data])
    } else {
      setData(data)
    }
  }

  return (
    <div className='container'>
      <h1>Le Boncoin Test</h1>
      <Form handleSubmitParent={ handleSubmit }/>
      <Message list={ data }/>
    </div>
  )
}

export default App
