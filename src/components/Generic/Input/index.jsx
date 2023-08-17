import React from "react";
import { Container } from "./style";

const Input = ({
  name,
  value,
  defaultValue,
  type,
  onChange,
  placeholder,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input