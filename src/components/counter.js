import React, { useContext } from "react"
import DemoContext from "./context"

export const Value = () => {
  const { value } = useContext(DemoContext)

  return <p>Value: {value}</p>
}

const Counter = () => {
  const { increase } = useContext(DemoContext)

  return (
    <div>
      <Value />
      <button onClick={increase}>Add</button>
    </div>
  )
}

export default Counter
