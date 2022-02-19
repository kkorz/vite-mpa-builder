import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './index.less';

function getNow() {
  return new Date().toLocaleString('chinese', { hour12: false });
}

function Count() {
  const navigate = useNavigate();
  const [now, setNow] = useState(getNow());

  useEffect(() => {
    setInterval(() => {
      const now = getNow();
      setNow(now);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h1>现在为：{now}</h1>
      <Button type="primary" onClick={() => navigate('/about')}>
        去About页面
      </Button>
    </div>
  );
}

export default Count;
