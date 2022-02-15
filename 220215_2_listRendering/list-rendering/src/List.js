import React, { Component } from 'react'
import Item from './Item'

const steps = [
  "Learn JavaScript",
  "Learn React",
  "Make Money",
  "Buy a House"
]

const info = {
  name: "React Lesson",
  price: 3200,
  videos: 60,
  teacher: "scars"
}

const infoArr = [
  { label: "name", data: "React Lesson" },
  { label: "price", data: 3200 },
  { label: "videos", data: 60 },
  { label: "teacher", data: "scars" }
]

export default class List extends Component {
  render() {
    return (
      <div>
        {/* 陣列列表渲染 */}
        {steps.map((text, idx) => <Item key={text}>{text}({idx})</Item>)}
        {/* 物件列表渲染，要特別注意物件的順序可能會不一樣 */}
        {Object.keys(info).map(key => {
          const value = info[key]
          return (
            <Item key={key}>
              {key}:{value}
            </Item>
          )
        })}
        <br></br>
        {/* 物件調成陣列寫法 */}
        {infoArr.map((item) => (
          <Item key={item.label}>{item.label}:{item.data}</Item>
        ))}
        {/* 物件解構寫法 */}
        {infoArr.map(({ label, data }) => (
          <Item key={label}>{label}:{data}</Item>
        ))}
      </div>
    )
  }
}

// !key 做為 unique 獨特性，可以幫助 react 對應，有變動時只針對變動項進行重新渲染，不會針對其他重新渲染
