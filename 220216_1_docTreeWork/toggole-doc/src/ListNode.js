import React, { Component } from 'react'

export default class ListNode extends Component {
  render() {
    const { name, list, sports } = this.props

    if (!list) {
      return <h2>{name}</h2>
    }

    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {/* TODO render */}
          {list.map(item => (
            <li key={item.sports}>{item.sports}</li>
          ))}
        </ul>
      </div>
    )
  }
}
