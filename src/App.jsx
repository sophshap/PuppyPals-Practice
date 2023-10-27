import { puppyList } from './data.js'
import { useState } from "react"
import "./App.css"

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [clickedPuppy, setClickedPuppy] = useState(null)

  function handleClick(puppy) {
    console.log(puppy)
    setClickedPuppy(puppy)
  }

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id} onClick={() => handleClick(puppy)}>{puppy.name}</p>
          })
        }
        {clickedPuppy && <div className="details">
          <h1>{clickedPuppy.name}</h1>
          <p>{clickedPuppy.age}</p>

          <ul>
            {clickedPuppy.tricks.map((trick) => {
              return <li key={trick.id}>trick: {trick.title}!!</li>
            })}
          </ul>
        </div>}
      </div>

    </>
  )
}

export default App
