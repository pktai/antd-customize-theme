import React from 'react';
import { Progress } from 'antd';

const ProgressBar = (props) => {
  return (
    <>
      <Progress
        strokeColor={{
          from: '#50C878',
          to: '#50C878',
        }}
        style={{ color: 'white', padding: '12px' }}
        percent={Number(props.percent).toFixed(2)}
        status="active"
      />
    </>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.Number,
};

export default ProgressBar;
