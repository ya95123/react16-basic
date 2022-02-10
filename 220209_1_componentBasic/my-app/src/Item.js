import React, { Component } from 'react'

class Item extends Component {
  render() {
    // !props 是 react 的屬性傳值 (上層組件往下傳)
    // return <li>{this.props.text} ({this.props.price + 1})</li>
    // !this.props.children 會抓取被包在 tag 內的值
    return <li>{this.props.children}</li>
  }
}

export default Item