import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import './app.css'
// 一、JSX中使用js表达式
// 1、识别常规的变量
const name = '我是APP'
// 2、原生js方法调用
const getAge = () => {
  return 18
}
// 3、三元运算符(常用)
const flag = true
// 特别注意
// if语句/switch-case语句/变量声明语句，这些叫做语句，不是表达式，不能出现在{}中

// 二、JSX列表渲染
// react如何完成列表渲染?
// 技术方案:map 重复渲染的是哪个模板 就return谁
// 注意事项：遍历列表时同样需要一个类型为number/string不能重复的key，提高diff性能
// key仅仅在内部使用，不会出现在真是的dom结构中

const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

// 三、条件渲染
// 技术方案: 一种三元表达式(常用)，一种逻辑&&运算符
// 1.三元表达式 - 满足条件才渲染一个span标签
const flag2 = true
// 2.&&

// 四、原则：模板中的逻辑尽量保持精简
// 复杂的多分支的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑 模板中只负责调用函数即可
const getHtag = (type) => {
  if (type === 1) {
    return <h1>this is h1</h1>
  }
  if (type === 2) {
    return <h1>this is h2</h1>
  }
  if (type === 3) {
    return <h1>this is h3</h1>
  }
}

// 五、样式控制
// 1、行内样式 - 在元素身上绑定一个style属性即可
const style = {
  color: 'red',
  fontSize: '30px'
}
// 2、类名样式 - 在元素身上绑定一个className属性即可
// import './app.css'

// 六、动态类名控制
// 动态控制一下这个active类名 满足条件才有
const activeFlag = true

// 七、JSX注意事项
// 1、JSX必须 有一个根节点，如果没有根节点，可以使用<></>(幽灵节点)代替
// 2、所有标签必须形成闭合，成对闭合或者自闭合都可以
// 3、JSX中的语法更加贴近JS语法，属性名采用驼峰命名法class -> classname for -> htmlFor
// 4、JSX支持多行(换行)，如果需要换行，需使用()包裹，防止bug出现。

// 八、格式化配置
// 1、安装vsCode prettier
// 2、修改配置文件 setting.json
// 3、安装Error Lens 实时提示

function App () {
  return (
    <div className="App">
      {/* 一、JSX中使用js表达式 */}
      {name}
      {getAge()}
      {flag ? '真棒' : '真菜'}
      {/* 二、JSX列表渲染 */}
      {songs.map(song => <li key={song.id}>{song.name}</li>)}
      {/* 三、条件渲染 */}
      {flag2 ? (
        <div>
          <span>this is span</span>
        </div>) : null}

      {true && <span>this is span</span>}

      {/* 四、原则：模板中的逻辑尽量保持精简 */}
      {getHtag(1)}
      {getHtag(2)}
      {getHtag(3)}

      {/* 五、样式控制 */}
      {/* 1、行内样式 */}
      <span style={{ color: 'red', fontSize: '30px' }}>this is red</span>
      <span style={style}>this is red</span>
      {/* 2、类名样式 */}
      <span className='active'>this is blue</span>

      {/* 六、动态类名控制 */}
      <span className={activeFlag ? 'active' : ''}>this is blue</span>
    </div>
  )
}

export default App
