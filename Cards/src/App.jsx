import { useState, useEffect } from 'react'



function App() {
  const [Cards, setCards] = useState([])
  const FetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  }
  useEffect(() => {
    FetchData();
  }, [])

  return (
    <>
      <div className=' container bg-gray-600 text-white flex  flex-wrap      '>
        {Cards.map((Cards) => {
          return <div key={Cards.id} className="p-8 cards    border-red-800">
            <h1 className='text-sm'>{Cards.title}</h1>
            <p>{Cards.body}</p>
            <span>By : userid:{Cards.userId} </span>
          </div>
        })}

      </div>
    </>
  )
}

export default App
