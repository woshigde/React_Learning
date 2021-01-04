import React, { Component } from 'react';
import Board from './Board'

// 使用slice()函数为每一步创建squares数组副本，同时把这个数组当作不可变对象，
// 这样就可以把所有squares数组的历史版本都保存下来了，然后可以在历史的步骤中随意跳转
// 把历史的squares数组保存在另一个名为history的数组中，history数组保存了从第一步到最后一步所有棋盘状态
// 再次状态提升到Game组件，把state从Board组件提升到顶层的Game组件里，这样Game组件就拥有了对Board组件数据的完全控制权
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            history:[{
                squares: Array(9).fill(null)
            }],
            xIsNext:true,
            // 这个值表示我们当前正在查看哪一项历史记录
            stepNumber: 0,
        }
    }

    handleClick(i){
        // const history = this.state.history;

        // 如果我们回到过去，再走一步新棋子，原来的历史记录就不正确了
        // 这个替换可以保证我们把这些“未来”的不正确的历史记录丢掉

        const history = this.state.history.slice(0,this.state.stepNumber+1)
        const current = history[history.length-1];
        const squares = current.squares.slice();
        // 如果已经判断出胜利者或者该方格已经被点过了，就不能再点了
        if (this.calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext?'X':'O';
        this.setState({
            history:history.concat([{
                squares:squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    calculateWinner = (squares) =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let i=0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    render() { 
        const history = this.state.history;
        // const current = history[history.length-1];
        const current = history[this.state.stepNumber]
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move ? 'GO TO MOVE#'+move : 'GO TO GAME START';
            return (
                // 每当一个列表重新渲染时，react会根据每一项列表元素的key来检索上一次渲染时与每个key所匹配的列表项
                // 只要构建动态列表的时候，都要指定一个合适的key
                // 每一个历史步骤都有一个与之对应的唯一ID，这个ID就是每一步棋的序号
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if(winner){
            status='Winner:'+winner;
        }else{
            status='Next player:' + (this.state.xIsNext?'X':'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    {/* <Board /> */}
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
 
export default Game;