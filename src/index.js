// React：框架的核心包
// ReactDOM：专门做渲染相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根组件，一切组件化渲染的开始
import App from './App';

// 渲染根组件APP 到一个id为root的dom节点上
// root的节点在public/index.html <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // 影响userEffect的执行时机 ，它会让每个userEffect执行两次
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
