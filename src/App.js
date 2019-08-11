import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';


function onChange(date, dateString) {
  console.log(date, dateString);
}
function App() {
  return (
    <div className="App">
      <Button
        type="primary"
        size="large"
      >test</Button>
      <DatePicker onChange={onChange} />
      <br />
    </div>
  );
}

export default App;
