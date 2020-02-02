import React, { useState } from "react"

const DemoContext = React.createContext(null)

const DemoContextProvider = ({ children }) => {
  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  return (
    <DemoContext.Provider value={{ value, increase }}>
      {children}
    </DemoContext.Provider>
  )
}

export default DemoContext

export { DemoContextProvider }
