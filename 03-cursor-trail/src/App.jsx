import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [follow, setFollow] = useState(false)
  const [position, setPosition] = useState({x: -30, y: -30})

  useEffect(() => {
    function handleMove (e) {
      setPosition({x: e.x, y: e.y})
    }

    if (follow) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [follow])
  return (
    <>
      <h1>Cursor Trail</h1>
      <section>
        <button onClick={() => {setFollow(!follow)}}>
          {follow ? 'Unfollow' : 'Follow'} Cursor
        </button>
      </section>
      <div style={{top: position.y, left: position.x}} className="trail"/>
    </>
  )
}

export default App
