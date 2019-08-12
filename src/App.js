import React from 'react';
import './App.css';
import Children from './children';
const a = {
  ba: 'tai',
  x: 'zzz',
  y: 'ssss'
}
class App extends React.Component {
  render(){
    return (
      <>
      <Children prj ={a}/>
      </>
    );
  }

}

export default App;
