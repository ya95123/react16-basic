import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    step: 1,
  }

  addCount = () => {
    // !把 count, step 解構出來，可以省去很多 this.state
    const { count, step } = this.state

    this.setState({
      // count: this.state.count + this.state.step,
      // step: this.state.step + 1,

      // !count, step 解構後
      count: count + step,
      step: step + 1,
    })
  }

  render() {
    // !把 count, step 解構出來，可以省去很多 this.state
    const { count, step } = this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}>+{step}</button>
      </div>
    )
  }
}

export default Counter