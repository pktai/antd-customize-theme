import React from 'react';
import { Button, Input } from 'antd';

class Children extends React.Component {
  constructor() {
    super()
    this.state = {
      tes: {}
    }
  }

  componentDidMount() {
    const obj = this.props.prj
    this.setState({
      tes: obj
    })
  };

  handleChange = e => {
    const { tes } = this.state;
    //only change a item;
    tes.ba = e.target.value;
    this.setState({
      tes: tes
    },()=>{
      console.log(tes);
    });
  }

  render() {
    // console.log("this.props.prj", this.props)
    // console.log("this.state.tes", this.state.tes);
    return (
      <div className="App">
        <Button
          type="primary"
          size="large"
        >test</Button>
        <Input onChange={this.handleChange}></Input>
        <br />
      </div>
    );
  }

}

export default Children;
