import React from "react"
// 组件：把一个一个的小功能抽离封装起来，然后像搭积木一样把它们连接起来，最后形成大的应用。
// 为什么有组件呢？
// 两个层面考虑
// 1、组件化开发模式更加利于复用，2、可维护性。

// React提供了两种组件风格。
// 一种叫做函数组件，一种叫做类组件

// 一、函数组件的创建和渲染
// 创建
function Hello () {
  const clickHandler = (e) => {
    //阻止默认行为
    e.preventDefault()
    console.log('函数组件中的事件被触发了', e)
  }
  return <div onClick={clickHandler}><a href="http://www.baidu.com">百度</a></div>
}
// 渲染 <Hello/> <Hello></Hello>
// 约定说明
// 1、组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
// 2、函数组件必须有返回值，表示该组件的UI结构；如果不需要渲染任何内容，则返回null
// 3、组件就像HTML标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，
// 渲染的内容是函数的返回值就是对应的内容。
// 4、使用函数名称作为组件标签名称，可以成对出现也可以自闭合。

// 二、类组件
// 创建
class HelloCOmponent extends React.Component {
  // 事件回调函数(标准写法 避免this指向问题)
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}
// 渲染 <HelloCOmponent/> <HelloCOmponent></HelloCOmponent>
// 约定说明
// 1、类名称也必须以大写字母开头
// 2、类组件应该继承React.Component父类，从而使用父类中提供的方法或属性
// 3、类组件必须提供render方法，render方法必须有返回值，表示该组件的UI结构

// 绑定事件
// 1. 如何绑定事件
// - 语法    
//   on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={()=>{}}></div>`
// - 注意点
//   react事件采用驼峰命名法，比如：onMouseEnter、onFocus
// 2.获取事件对象 e
function App () {
  return (
    <div>
      {/* 渲染函数组件 */}
      <Hello />
      <Hello></Hello>

      {/* 渲染类组件 */}
      <HelloCOmponent />
      <HelloCOmponent></HelloCOmponent>
    </div>
  )
}

export default App
