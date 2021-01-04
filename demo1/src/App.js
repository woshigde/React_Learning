import React, { Component } from 'react';

class Child extends Component {
    state = {  
        message:'hello',
        num:0
    }
    say=() => {
        console.log('触发子方法');
        // 父组件传递给子组件的有state 、 children 插槽文字 、say函数
        console.log(this.props)
        this.props.say();
    }

    add=() => {
        // let newItem =0;
        this.setState({
            num: this.state.num+1
        })
    }

    // 侦听可以获取上一个值和最新的值，可以在componentDidUpdate中手动处理
    componentDidUpdate(prevProps, prevState){
        if(prevState.num !== this.state.num){
            console.log(prevState.num,'原来的值')
            console.log(this.state.num,'最新的值')
        }
    }

    render() { 
        const {msg,children}=this.props;
        const {message,num} =this.state;

        // React可以直接再render中定义计算属性，因为state发生更新以后，整个render会重新渲染
        const reverseMsg =message.split('').reverse().join('')

        return (
            <div>
                <div onClick={this.say}>
                    {msg}
                    {/* 插槽 */}
                    <div>
                        {children}
                    </div>
                </div>
        <button onClick={this.add}>{reverseMsg}</button>
            </div>
        );
    }
}

class Parent extends Component {
    state = { 
        msg: '传递给子组件的值'
     }
    
    say=()=>{
        console.log('父组件里触发方法')
    }
    
    render() { 
        const {msg} = this.state;
        return (
            <div>
                <Child msg={msg} say={this.say}>
                    <div>
                        插槽文字
                    </div>
                </Child>
            </div>
        );
    }
}
 
export default Parent;
 
