// useContext:hook下组件通信
import React, { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"

const Context = createContext()

function ComA () {
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br />
      app 传过来的数据为： {count}
      <ComC />
    </div>
  )
}

function ComC () {
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br />
      app 传过来的数据为： {count}
    </div>
  )
}

function App () {
  const [count, setCount] = useState(20)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => { setCount(count + 1) }}>+</button>
      </div>
    </Context.Provider>

  )
}

export default App