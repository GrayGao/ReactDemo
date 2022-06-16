// React组件通信
// 组件通信的意义
// 组件是独立且封闭的单元，默认情况下组件只能使用自己的数据(state)
// 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要相互传递一些数据
// 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件
// 1、父子关系 - 最重要
// 2、兄弟关系 - 自定义事件模式产生技术方法eventBus / 通过共同的父组件通信
// 3、其他关系 - mobx / redux / 基于hook的方案

// 父传子实现：实现父子通信中的父传子，把父组件中的数据传给子组件
// 实现步骤
// 1、父组件提供要传递的数据 - state
// 2、给子组件标签添加属性值为state中的数据
// 3、子组件中通过props接收父组件中传过来的数据
//    1、类组件使用this.props获取props对象
//    2、函数式组件直接通过参数获取props对象

// 例子 APP为父组件，Son为子组件
import React from 'react'
// 函数式的Son
function SonF (props) {
  // props是一个对象，里面存着通过父组件传入的所有数据
  return (
    <div>我是函数子组件,{props.msg}</div>
  )
}

// 类组件的Son
class SonC extends React.Component {
  render () {
    return (
      // 类组件必须通过this关键词 去获取这里的props是固定的
      <div>我是类子组件,{this.props.msg}</div>
    )
  }
}

class App extends React.Component {
  //准备数据
  state = {
    message: 'this is message'
  }
  render () {
    return (
      <div>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF msg={this.state.message} />
        <SonC msg={this.state.message} />
      </div>
    )
  }
}

export default App
