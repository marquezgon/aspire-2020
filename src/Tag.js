import React from 'react';
import { Tag as AntdTag } from 'antd';

import 'antd/dist/antd.css';
import './Tag.scss';

const Tag = (props) => {
  const { label, ...rest } = props;
  return (
    <AntdTag {...rest} className="tag__container">
      {label}
    </AntdTag>
  );
};

export default Tag;