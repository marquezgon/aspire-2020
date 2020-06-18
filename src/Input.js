import React, { useState } from 'react';
import { Select } from 'antd';
import Tag from './Tag';
import emails from './utils/emails';

import './Input.scss';

const Input = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Select
      mode="tags"
      tagRender={Tag}
      className="input__container"
      options={emails}
      open={isOpen}
      onChange={() => setOpen(false)}
      onInputKeyDown={() => setOpen(true)}
    />
  );
};

export default Input;