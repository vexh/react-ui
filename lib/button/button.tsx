import React, { ButtonHTMLAttributes } from "react";
import classes, { scopedClass } from "../helpers/classes";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "normal" | "warning" | "suggest";
  disabled?: boolean;
}

const sc = scopedClass("react-ui-button");

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, level, ...restProps } = props;
  const definedClasses = { "": true, [level as string]: true };
  const extraClasses = { extra: props.disabled ? "disabled" : "" };
  return (
    <button className={sc(definedClasses, extraClasses)} {...restProps}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
    level: "normal"
}
export default Button;
