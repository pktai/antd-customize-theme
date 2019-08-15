import React from 'react';
import './App.css';
import Children from './children';
import Children2 from './children2'
const a = {
  ba: '989',
  x: 'zzz',
  y: 'ssss'
}

// console.log(a)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      demo: a
    }
  }

  render(){
    // console.log("PARENT", a)
    return (
      <>
      <Children prj ={a}/>
      <Children2 prj={a} />
      </>
    );
  }

}

export default App;
