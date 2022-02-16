import React, { Component } from 'react'
import ListNode from './ListNode'
import sportsList from './sportsList.json'
import sportsList2 from './sportsList2.json'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ListNode {...sportsList} /> */}
        <ListNode {...sportsList2} />
      </div>
    )
  }
}
