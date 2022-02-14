import React from 'react'
import { render } from 'react-dom'
// import Counter from './Counter'
import Input from './Input'

render(
  // *props 進階寫法指定初始 state
  // <Counter initCount="10" />,
  // <Counter />,

  // *Input
  <Input />,

  document.getElementById("root")
)