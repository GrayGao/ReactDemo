import React from "react"
// 兄弟通信
// 目标：B组件中的数据传给A
// 1.先把B中的数据通过子传父 传给App
// 2.再把App接收到的Son中的数据，通过父传子 传给A

function SonA (props) {
  return (
    <div>
      this is A,{props.sendAMsgs}
    </div>
  )
}

function SonB (props) {
  const bMsg = '这里是来自与B组件中的数据'
  return (
    <div>
      this is B <button onClick={() => props.getBMsgs(bMsg)}>发送数据</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: '测试一下父传子'
  }
  // 声明一个传给B组件的方法
  getBMsg = (msg) => {
    console.log(msg)
    // 把msg数据交给sendAMsg
    this.setState({ sendAMsg: msg })
  }
  render () {
    return (
      <div>
        <SonA sendAMsgs={this.state.sendAMsg} />
        <SonB getBMsgs={this.getBMsg} />
      </div>
    )
  }
}

export default App
