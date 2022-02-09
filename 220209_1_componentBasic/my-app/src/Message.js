// snippets 快捷鍵 rcc
import React, { Component } from 'react'

// !component 的檔案及名稱開頭必須為大寫，index.js 的 ReactDom.render 才可以吃到 tag
class Message extends Component {
  // 狀態
  state = {
    title: "Message",
    text: "Hello"
  }

  // 自訂函式
  sayHi = () => {
    this.setState({
      text: "Hi"
    })
    console.log(this.state)
  }

  render() {
    return (
      // !html 內容必須被 div 包著
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.text}</h3>
        <button onClick={this.sayHi}>Say Hi</button>
      </div>
    )
  }
}

export default Message