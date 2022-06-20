// useRef
// 能够掌握使用useRef获取真实dom或组件实例的方法
// 使用场景
// 在函数组件中获取真实的dom元素对象或者是组件对象

// 使用步骤
// 1、导入useRef函数
// 2、执行useRef函数并传入null，返回值为一个对象，内部有一个current属性存放拿到的dom对象(组件实例)
// 3、通过ref绑定要获取的元素或者组件

// 组件实例 类组件
// dom对象 标签
import React, { useRef } from "react"
import { useEffect } from "react"

class TestC extends React.Component {
  state = {
    name: 'test name'
  }
  getName = () => {
    return 'this is child test'
  }
  render () {
    return (
      <div>我是类组件</div>
    )
  }
}

function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(testRef.current.getName())
    console.log(h1Ref.current)
  }, [])
  // useEffect回调 是在dom渲染之后执行
  // 和vue理的watch效果比较想 但是执行时机是不同的
  return (
    <div>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App