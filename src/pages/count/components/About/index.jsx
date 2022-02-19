import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styles from './index.module.less';

function About() {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <h1>About Page</h1>
      <Button onClick={() => navigate('/count')}>去Count页面</Button>
    </div>
  );
}

export default About;
