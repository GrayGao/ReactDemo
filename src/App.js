// props说明：知道props传递时的一些注意事项
// 1、props是只读对象(readonly)
// 根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改
// this.props.msg = 'new msg' //不可以 不可直接进行修改

// 2、props可以传递任意数据
// 数字、字符串、布尔值、数组、对象、函数、JSX

import React from "react"
//函数式的Son
function Son (props) {
  // props是一个对象，里面存着通过父组件传入的所有数据
  console.log(props)
  return (
    <div>我是函数子组件，
      {props.list.map(item => <p key={item}>{item}</p>)}
      {props.useInfo.name}
      <button onClick={props.getMes}>触发父组件传入的函数</button>
      {props.child}
    </div >
  )
}
class App extends React.Component {
  //准备数据
  state = {
    list: [1, 2, 3],
    useInfo: {
      name: 'cp',
      age: 30
    }
  }
  getMes = () => {
    console.log('父组件中的函数')
  }
  render () {
    return (
      <div>
        {/* 子组件身上绑定属性，属性名可以自定义 保持语义化 */}
        <Son
          list={this.state.list}
          useInfo={this.state.useInfo}
          getMes={this.getMes}
          child={<span>this is span</span>} />
      </div>
    )
  }
}

export default App
