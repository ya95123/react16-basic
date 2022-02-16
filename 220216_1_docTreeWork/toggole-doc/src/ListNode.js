import React, { Component } from 'react'
import "./list.css"

export default class ListNode extends Component {
  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const { name, list } = this.props
    const { open } = this.state

    // !到最底層
    if (!list) {
      return <li>{name}</li>
    }

    return (
      <div>
        {/* List2 */}
        <h2
          onClick={this.toggleOpen}
          className={open ? "topic open" : "topic"}
        >
          {name}
        </h2>

        {!open ? null : (
          <ul>
            {
              list.map(item => (
                // !logic：會根據 json 同樣的名稱繼續往下挖到底
                <ListNode {...item} key={item.name} />
              ))
            }
          </ul>
        )
        }


        {/* List1 */}
        {/* <h2>{name}</h2>
        {
          list.map(item => (
            <div key={item.sports} className="nameList">
              <h3
                onClick={this.toggleOpen}
                className={open ? "topic open" : "topic"}
              >
                {item.sports}
              </h3>

              {
                !open ? null : (
                  <p>
                    {item.players}
                  </p>
                )
              }
            </div>
          ))
        } */}
      </div>
    )
  }
}
