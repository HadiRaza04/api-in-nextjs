import React from 'react';
import { Button } from 'antd';

export default function Button({click, value}) {
  return <Button type="primary" onClick = {click}> {value} </Button>;
}