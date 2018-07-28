import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';

/**
 * createStore:创建store
 * applyMiddleware:扩展redux
 * thunk中间键进行异步操作
 * Provider:react-redux的顶层容器，和redux连接一起
 * 
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index'
const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
    , document.getElementById('root'));    
registerServiceWorker();
