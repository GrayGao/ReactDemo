// useState 回调函数的参数
// 使用场景
// 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始state需要通过计算才能获得
// 则可以传入一个函数，在函数中计算并返回初始的state，此函数只在初始渲染时被调用
// 语法
// const [name, setName] = useState(() => {// 编写计算逻辑 return '计算之后的初始值'})
// 语法规则
// 1.回调函数return出去的值将作为name的初始值
// 2.回调函数中的逻辑只会在组件初始化的时候执行一次

import { useState } from "react"

function Counter (props) {
  const [count, setCount] = useState(() => {
    // 这里目的为了体现初始值经过一定的计算
    // 这个计算比较广义的概念
    // 只要无法直接确定，需要通过一定的操作才能获取，就可以理解为计算
    return props.count
  })
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

function App () {
  return (
    <div>
      <Counter count={10} />
      <Counter count={20} />
    </div>
  )
}

export default App