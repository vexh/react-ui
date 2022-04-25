import React, { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  return <input className={classes("deepin-input", className)} {...props} />;
};

export default Input;
