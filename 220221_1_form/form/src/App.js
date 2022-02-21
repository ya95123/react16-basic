import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: "abc",
    number: 0
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addCount = (e) => {
    this.setState({
      number: Number(e.target.value)
    })
  }


  render() {
    const { text, number } = this.state

    return (
      <div>
        {/* !input 有 value 值時會被綁定且不能修改，所以要透過 onChange 做韓式的雙向綁定同時修改 */}
        <h3>雙向綁定 value</h3>
        <input type="text" value={text} onChange={this.onChange} />
        <p>{text}</p>

        {/* 數字處理 */}
        <h3>e.target.value 顯示出來會是字串，如是數字需特別轉換</h3>
        <input type="number" value={number} onChange={this.addCount} />
        <p>{number + 1}</p>

        {/* select */}
      </div>
    )
  }
}
