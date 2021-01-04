// Redux: 
// React数据状态管理。用于中大型，数据比较庞大，组件之间数据交互较多的情况下使用。
// Store:数据仓库，保存数据的地方。
// State：state是一个对象，数据仓库里的所有数据都放到一个state里。
// Action：1个动作，触发数据改变的方法。
// Dispatch: 将动作触发成方法。
// Reducer:是一个函数，通过获取动作，改变数据，生成一个新state。从而改变页面

import React, { Component } from 'react';
import Redux,{createStore} from 'redux';
// import ReactDOM from 'react-dom';


const reducer = function(state={num:0},action){
    switch(action.type){
        case "add":
            state.num++;
            break;
        case "decrement":
            state.num--;
            break;
    }
    return {...state}
}

const store = createStore(reducer)
console.log(store)

function add(){
    // 通过仓库的方法dispatch进行修改数据
    store.dispatch({type:"add"})
    console.log(store.getState())
}

function decrement(){
    // 通过仓库的方法dispatch进行修改数据
    store.dispatch({type:"decrement"})
    console.log(store.getState())
}

// 函数式计数器
const Counter = function(props){
    console.log(store.getState())
    let state=store.getState()
    return (
        <div>
            <h1>计数数量：{state.num}</h1>

            <button onClick={add}>计数+1</button>
            <button onClick={decrement}>计数-1</button>
        </div>
    )
}

// 监听数据的变化，重新渲染内容
// store.subscribe(()=>{
//     ReactDOM.render(<Counter></Counter>, document.querySelector('#root'),)
//   })

// export default {Counter, store}