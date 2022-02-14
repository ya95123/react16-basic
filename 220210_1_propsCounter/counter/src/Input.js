import React, { Component, createRef } from 'react'

class Input extends Component {
  // *透過 createRef 的寫法 (官方建議)
  // myInput = createRef()
  // // 一開始的生命週期
  // componentDidMount() {
  //   this.myInput.current.focus()
  // }
  // <input type="text" ref={this.myInput} />


  // *透過函式的寫法
  setRef = (input) => {
    input.focus()
  }

  render() {
    return (
      <div>
        <h3>Enter Your Name</h3>
        <input type="text" ref={this.setRef} />
      </div>
    )
  }
}

export default Input