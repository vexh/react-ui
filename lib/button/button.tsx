import React, { ButtonHTMLAttributes } from "react";
import classes, { scopedClass } from "../helpers/classes";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "normal" | "warning" | "suggest";
  disabled?: boolean;
  size?: "small" | "middle" | "big";
}

const sc = scopedClass("react-ui-button");

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, level, ...restProps } = props;
  const definedClasses = { "": true, [level as string]: true, [props.size as string]: !!props.size };
  const extraClasses = { extra: props.disabled ? "disabled" : "" };
  return (
    <button className={sc(definedClasses, extraClasses)} {...restProps}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  level: "normal",
  size: "big",
};
export default Button;
