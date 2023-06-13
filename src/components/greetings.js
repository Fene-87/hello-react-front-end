import React from 'react'
import { useSelector } from 'react-redux'

const Greetings = () => {
  const greeting = useSelector((store) => store.greetings);

  return (
    <div>
        <h1>Here we go again</h1>
        {greeting ? (<h2>greeting.message</h2>) : null}
    </div>
  )
}

export default Greetings