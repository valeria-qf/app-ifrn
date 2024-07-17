import React from 'react';
import { TextInputProps } from 'react-native';
import { InputField } from './styles';

const Input: React.FC<TextInputProps> = (props) => {
  return <InputField {...props} />;
};

export default Input;
