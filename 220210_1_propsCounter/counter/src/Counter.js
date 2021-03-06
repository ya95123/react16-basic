import React, { Component } from 'react'
import PropTypes from 'prop-types'

// *state 基本寫法
// class Counter extends Component {
//   state = {
//     count: 0,
//     step: 1,
//   }

//   addCount = () => {
//     // !把 count, step 解構出來，可以省去很多 this.state
//     const { count, step } = this.state

//     this.setState({
//       // count: this.state.count + this.state.step,
//       // step: this.state.step + 1,

//       // !count, step 解構後
//       count: count + step,
//       step: step + 1,
//     })
//   }

//   render() {
//     // !把 count, step 解構出來，可以省去很多 this.state
//     const { count, step } = this.state
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={this.addCount}>+{step}</button>
//       </div>
//     )
//   }
// }

// *props 進階寫法指定初始 state
class Counter extends Component {
  // *設定預設初始值 - 方法 1
  // static defaultProps = {
  //   initCount: 0,
  // }

  constructor(props) {
    // *super 就是 Component 且一定要呼叫
    super(props)
    this.state = {
      count: props.initCount
    }
  }

  addCount = () => {
    // !setState 是非同步的設定 -> 可以透過 callback / function 寫法等候跑完執行新任務
    this.setState({
      count: this.state.count + 1
    },
      // !setState 可回傳 callback function
      () => {
        this.sendCount()
      }
    )
    // !setState function return 簡寫寫法 () 包起來 代表裡面是東西不是函式
    // this.setState(state => ({
    //   count: state.count + 1
    // }))
  }

  sendCount = () => {
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}

// *設定預設初始值 - 方法 2
Counter.defaultProps = {
  initCount: 0,
}
// *設定預設初始值的型態 - 方法 2
Counter.propTypes = {
  // 一定要是數值的模型
  initCount: PropTypes.number,
}

export default Counter