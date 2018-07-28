### CNode
----
### 技术栈
---
> react+react-router+redux+antd+redux
### 启动
#### git clone https://github.com/newlfp/CNode.git
#### yarn
#### yarn state
### 体会

    1.在配置react-router时，component错写成components(vue习惯)

    2.redux （状态管理）
        1.引进redux的API：createStore(创建store),applyMiddleware(扩展redux比如中间件)
        2.react-redux把react和redux连接一起
        3.react-redux的Provider是顶层容易把store传入，其他组件需要使用的引入react-redux的connect;
        如：export default connect(state=>state.list)(IndexList)  state.list就是改变状态的reducer
        4.redux的combineReducers把所有的reducer集中一起
        

    


