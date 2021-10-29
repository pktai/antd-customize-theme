import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import ProgressBar from '../progress';
import './header.scss';

const { Header } = Layout;

const HeaderPage = () => {
  const [count, setCount] = useState(0);
  const [css, setCss] = useState('translateZ(-18px) rotateX(90deg)');

  const str = 'translateZ(-18px) rotateX(90deg)';
  const str1 = 'translateZ(-18px) rotateX(0deg)';

  useEffect(() => {
    setTimeout(() => {
      if (css === str) {
        setCss(str1);
      } else {
        setCss(str);
      }
    }, 5000);
    setTimeout(() => {
      setCount(count + 0.2);
    }, 100);
  });

  return (
    <Header className="header" style={{ background: 'white' }}>
      <div className="container">
        <a
          href="https://twitter.com/austin_dudas"
          className="social-container twitter"
        >
          <div
            className="social-cube"
            style={{
              transform: css,
            }}
          >
            <div className="front">Twitter</div>
            <div className="bottom">
              {' '}
              <ProgressBar percent={count} />
            </div>
          </div>
        </a>
      </div>
    </Header>
  );
};

export default HeaderPage;
