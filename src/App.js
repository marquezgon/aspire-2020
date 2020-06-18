import React from 'react';
import { Row, Col } from 'antd';
import Input from './Input';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Row>
        <Col xs={12} md={{ span: 16, offset: 4 }}>
          <Input />
        </Col>
      </Row>
    </div>
  );
}

export default App;
