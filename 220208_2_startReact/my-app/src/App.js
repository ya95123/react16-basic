import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

// *create react app 首先出來的寫法，待確認是否有新寫法
// function App() {
//   const state = {
//     count: 1
//   }

//   const addCount = () => {
//     state.count += 1
//     console.log(state.count)
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>{state.count}</h1>
//         <button onClick={addCount}>Add</button>
//       </header>
//     </div>
//   );
// }

// *可執行寫法 
class App extends Component {
  // *屬於類別的靜態屬性 -> static property (方法1)
  // static propTypes = {
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  // }
  // bioname
  // age = 0

  // *生命週期函式
  // constructor() {
  // }
  // componentDiDMount() {
  // }
  // componentDidUpdate(){
  // }

  // *物件
  state = {
    count: 1,
  }
  // *自訂函式
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count + 1)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.count}</h1>
          <h1>{this.state.count}</h1>
          <button onClick={this.addCount}>Add</button>
        </header>
      </div>
    )
  }
}

// *定義該 class 的靜態屬性(方法2)
// App.prototype={
// }

export default App;
