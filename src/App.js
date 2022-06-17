import React, { createContext } from "react"
// 跨组件通信Context
// 我们想从App组件向任意一个下层组件传递数据，该怎么办呢？目前我们能采取的方式就是
// 一层一层的props往下传，显然很繁琐
// 那么，Context提供了一个无需为每层组件手动添加props就能在组件树间进行数据传递的方法

// 实现步骤
// 1、创建Context对象，导出Provider(提供者)和Consumer(消费者)对象
// const { Provider, Consumer } = createContext()
// 2、使用Provider包裹根组件提供数据
// <Provider value={this.state.message}>
// </Provider>
// 3、需要用到数据的组件使用Consumer包裹获取数据
// <Consumer>
//   {value => /* 基于 Context 值进行渲染*/}
// </Consumer>

// App -> A -> C
// APP数据 -> C
// 注意事项：
// 1、上层组件和下层组件关系是相对的只要存在就可以使用，通常我们都会通过app作为数据提供方
// 2、这里涉及到的语法都是固定的，有两处，提供的位置 value提供者，获取的位置{ value => 使用value做什么都可以 }

// 1、导入createContext方法并执行,结构提供者和消费者
const { Provider, Consumer } = createContext()
function ComA () {
  return (
    <div>
      this is ComA
      <ComC />
    </div>
  )
}

function ComC () {
  return (
    <div>
      this is ComC
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render () {
    return (
      //使用provider包裹根组件
      <Provider value={this.state.message}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
