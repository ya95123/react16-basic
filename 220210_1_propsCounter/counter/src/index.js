import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'

render(
  // <Counter />,

  // *props 進階寫法指定初始 state
  <Counter initCount="10" />,
  document.getElementById("root")
)