import React, { Component } from 'react';
// hash模式
// import {HashRouter as Router, Link, Route} from 'react-router-dom'

// history模式/后端匹配使用
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Mine(props) {
    console.log(props)
    return (
        <div>
            <h1>个人中心</h1>
        </div>
    )
}

function Product() {
    return (
        <div>
            <h1>产品</h1>
        </div>
    )
}

function News(props){
    return(
        <div>
            新闻业，新闻id:{props.match.params.id}
        </div>
    )
}

class ChildCom extends Component {
    render() { 
        return (
            <div>
                <button onClick={this.clickEvent}>跳转到首页</button>
            </div>
        );
    }
    clickEvent=()=>{
        console.log('hhhh')
        console.log(this.props)
        this.props.history.push("/",{msg:"这是由ChildCom组件发给首页的数据"})
    }
}
 

class Luyou extends Component {
    render() { 
        let meObj = {
            pathname:"/mine", // 跳转的路径
            search:"?username=admin", // get请求参数
            hash:"#abc", //设置的HASH值
            state:{msg:'helloworld'} // 传入的数据,可在mine组件中的props参数中获得
        };
        return (  
            <div id="app">
                <Router>
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        {/* <Link to="/mine">个人中心</Link> */}
                        <Link to={ meObj }>个人中心</Link>

                        <Link to="/news/4567789">动态路由</Link>

                        <Link to="/child">点击按钮跳转</Link>
                    </div>
                    <Route path="/" exact component={(props)=>{console.log(props); return(<h1>首页</h1>)}}></Route>
                    <Route path="/product" exact component={Product}></Route>
                    <Route   path="/mine" exact component={Mine}></Route>

                    {/* 动态路由 */}
                    <Route path="/news/:id" component={News}></Route>

                    <Route path="/child" component={ChildCom}></Route>
                </Router>
            </div>
        );
    }
}
 
export default Luyou;