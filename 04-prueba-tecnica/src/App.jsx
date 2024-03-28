import { useState } from 'react'
import { GetFactButton } from './components/GetFactButton'
import { ShowCatImage } from './components/ShowCatImage'
import './App.css'

function App() {
  const [getFact, setFact] = useState({fact: null})

  const newFact = (fact) => {
    setFact(fact)
  }

  return (
    <>
      {getFact.fact != null && (<h1>{getFact.fact}</h1>)}
      <ShowCatImage newFact={getFact}></ShowCatImage>
      <GetFactButton newFact={newFact}></GetFactButton>
    </>
  )
}

export default App
