import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  render() {
    return (
      // !第一種 props 傳遞方法
      // <ol>
      //   <Item text="Learn JavaScript" price={100} />
      //   <Item text="Learn React" price="100" />
      //   <Item text="Make Money" />
      //   <Item text="Buy a house" />
      // </ol>

      // !第二種 props 傳遞方法
      <ol>
        <Item>Learn JavaScript ({100 + 1})</Item>
        <Item>Learn React (100+1)</Item>
        <Item>Make Money</Item>
        <Item>Buy a house</Item>
      </ol>
    )
  }
}


export default List