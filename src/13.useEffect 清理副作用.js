// useEffect 清理副作用
// 使用场景
// 在组件被销毁时，如果有些副作用操作需要被清理，就可以使用此语法，比如常见的定时器
// 语法及规则
// useEffect(() => {
//   console.log('副作用函数执行了')
//   // 副作用函数的执行时机为：在下一次副作用函数执行之前执行
//   return () => {
//     console.log('定时器被清理了')
//     // 在这里写清理副作用代码
//   }
// })

import { useState, useEffect } from "react"

function Test () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)
    return () => {
      //清理的动作
      console.log('定时器被清理了')
      clearInterval(timer)
    }
  })
  return (<div>this is test</div>)
}

function App () {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {/* 模拟组件销毁和重建 */}
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App