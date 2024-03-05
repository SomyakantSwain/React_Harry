import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todo, settodo] = useState([
    {
      title: "Hey",
      desc: "I am a goof todo"
    },
    {
      title: " Hey Another todo",
      desc: "I am a good todo"
    },
    {
      title: " Hey I am  grocory todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])
  const Todo = ({ todo }) => {
    return (<>
      <div className="m-4 bottom-1 ">

        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>

      </div>

    </>)
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todo.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn,)}>

          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
