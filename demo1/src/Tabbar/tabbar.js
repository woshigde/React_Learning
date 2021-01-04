import React, { Component } from 'react';
import bannerImg from './379aa24f723e7051c783f38b2438e5eb.jpeg'
import './style.css'

function MapCom(props){
    return (
        <div className="contentItem">
            <h1>
                这是啦啦啦组件
            </h1>
        </div>
    )
}

function GuangzhouCom(props){
    return (
        <div className="contentItem">
            <h1>
                这是哈哈哈组件
            </h1>
        </div>
    )
}

function XianchangCom(props){
    return (
        <div className="contentItem">
            <h1>
                这是嘻嘻嘻组件
            </h1>
        </div>
    )
}

class ZuixinCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datalist:['落花人独立,微雨燕双飞，路边人四月，皓腕凝霜雪',
            '落花人独立,微雨燕双飞，路边人四月，皓腕凝霜雪',
            '江南无所有，聊增一枝春，江南无所有，聊增一枝春',
            '江南无所有，聊增一枝春，江南无所有，聊增一枝春']
        }
    }
    render() { 
        return ( 
            <div className="contentItem">
            <div className="banner">
                <img src={bannerImg} alt="banner"></img>
                <h1>时间轴</h1>
            </div>

            <div className="newContent">
                <div className="line"></div>
                <div className="newList">
                {
                    this.state.datalist.map((item,index)=>{
                        let imgDOM=null;
                        // 如果item是对象的话且包含图片路径，先判断这个图片路径是否存在
                        // 如果存在imgDOM非空，插入；不存在imgDOM作为null，插入
                        // if (item.image_url){
                        //     imgDOM=(
                        //         <div>
                        //             <img src={item.image_url} alt=""></img>
                        //         </div>
                        //     )
                        // }
                        return(
                            <div className="newsListItem" key={index}>
                                <div className="desc">
                                    {item}
                                    {/* {imgDOM} */}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
        );
    }
}

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newData:null,
            navList:['哈哈哈','呵呵呵','嘻嘻嘻','啦啦啦'],
            tabIndex:0,
            barStyle:{
                left:'22px'
            },
            contentStyle:{
                transform:'translate(0,0)'
            },
        }
    }
    tabClickEvent=(index)=>{
        console.log(index)
        this.setState({
            barStyle:{
                left:(index*88+22)+"px" // 定位进行移动
            },
            contentStyle:{
                transform:`translate(-${index*375}px,0)`  // 反引号，表达式的计算
            },
            tabIndex:index
        })
    }
    render() { 
        return (
            <div className="App">
                <div className="nav">
                    {
                        this.state.navList.map((item,index)=>{
                            if(index===this.state.tabIndex){
                                return (
                                    <div key={index} onClick={()=>{this.tabClickEvent(index)}} className="navItem-active">{item}</div>
                                )
                            }else{
                                return(
                                    <div key={index} onClick={()=>{this.tabClickEvent(index)}} className="navItem">{item}</div>
                                )
                            }
                        })
                    }
                <div className="bar" style={this.state.barStyle}></div>
                </div>

                <div className="content" style={this.state.contentStyle}>
                    <MapCom></MapCom>
                    <GuangzhouCom></GuangzhouCom>
                    <ZuixinCom></ZuixinCom>
                    <XianchangCom></XianchangCom>
                </div>
            </div>
        );
    }
}
 
export default Tab;