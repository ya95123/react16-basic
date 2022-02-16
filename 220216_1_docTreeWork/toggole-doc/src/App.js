import React, { Component } from 'react'
import ListNode from './ListNode'
import sportsList from './sportsList.json'

export default class App extends Component {
  render() {
    return (
      <div>
        <ListNode {...sportsList} />
      </div>
    )
  }
}
