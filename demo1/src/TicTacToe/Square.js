// import React, { Component } from 'react';

// class Square extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  
//             value:null,
//         };
//     }
//     render() { 
//         return (
//             // 当前state保存在单个Square组件中
//             // <button className="square" onClick={()=>this.setState({value:'x'})}>
//             //     {this.state.value}
//             // </button>

//             // this.props.onClick()这个方法是由Board传给Square的，所以当Square中的事件处理函数触发时，
//             // 其实就是触发Board当中的this.handleClick(i)方法
//             <button className="square" onClick={()=>this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// 把Square组件重写为一个函数组件
// 函数组件和类组件的区别：函数组件没this,类有 函数组件没state，类有 函数组件没生命周期，类有
// 如果想写的组件只包含一个render方法，并且不包含state，那么使用函数组件就会更简单
// 这个函数接收props作为参数，然后返回需要渲染的元素
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square