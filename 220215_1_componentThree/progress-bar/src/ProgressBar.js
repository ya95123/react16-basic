import React, { Component, PureComponent } from 'react'

// *Class Component
class ProgressBar extends Component {
  render() {
    const { value } = this.props

    return (
      <div className="bar-outer">
        <div
          style={{ width: `${value}%` }}
          className="bar-inner" />
        <span>{value}%</span>
      </div>
    )
  }
}

// *PureComponent -> shallow compare (只比較 state 第一層，有不一樣才會重新 render)
// class ProgressBar extends PureComponent {
//   render() {
//     const { value } = this.props

//     return (
//       <div className="bar-outer">
//         <div
//           style={{ width: `${value}%` }}
//           className="bar-inner" />
//         <span>{value}%</span>
//       </div>
//     )
//   }
// }

// *Stateless Functional Component -> 沒有 state 的時候可以這樣簡寫
// const ProgressBar = (props) => {
//   const { value } = this.props

//   return (
//     <div className="bar-outer">
//       <div
//         style={{ width: `${value}%` }}
//         className="bar-inner" />
//       <span>{value}%</span>
//     </div>
//   )
// }


export default ProgressBar