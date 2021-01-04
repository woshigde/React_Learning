import React, { Component } from 'react';
import Square from './Square'

// 将状态提升到Board组件上
// class Board extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares:Array(9).fill(null)
//         };
//         // this.renderSquare=this.renderSquare.bind(this)
//     }
//     handleClick(i){
//         // 不能直接在现有的数组上进行修改，维护不可变性
//         // 不可变性--“时间旅行”,跳回之前的步骤，撤销和恢复功能，跟踪数据的变化也很容易
//         const squares=this.state.squares.slice();
//         squares[i]='x';
//         this.setState({squares:squares})
//     }
//     renderSquare(i){
//         return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}></Square>
//     }
//     render() { 
//         const status="next player: X";
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// 将状态再度提升到Game组件上
class Board extends Component {
    renderSquare(i) { 
        return ( 
            <Square
                value={this.props.squares[i]}
                onClick={()=>this.props.onClick(i)}
            />
        );
    }

    render(){
        return(
            <div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board