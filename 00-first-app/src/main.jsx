import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const createButton = ({text}) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
    {createButton({text: 'Button text'})}
    {createButton({text: 'Button text'})}
    {createButton({text: 'Button text'})}
  </React.Fragment>
)
