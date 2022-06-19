// 阶段小练习-自定义hook
// 需求描述1：自定义一个hook函数，实现获取滚动距离Y
// const[y] = useWindowScroll() y就是滚动到顶部的距离
import { useWindowScroll } from "./hooks/useWindowScroll"

// 需求描述2：自定义一个hook函数，实现自动同步到本地LocalStorage
// const [message, setMessage] = useLocalStorage(defaultValue)
// 1.message可以通过自定义传入默认初始值
// 2.每次修改message数据的时候，都会自动往本地同步一份
import { useLocalStorage } from "./hooks/useLocalStorage"

function App () {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', '咖啡')
  setTimeout(() => {
    setMessage('cp')
  }, 5000)
  return (
    <div style={{ height: '12000px' }}>
      {y} {message}
    </div>
  )
}

export default App