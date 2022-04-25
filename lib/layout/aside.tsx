import React, { HTMLAttributes, ReactNode } from "react";
import { scopedClass } from "../helpers/classes";

interface Props extends HTMLAttributes<HTMLElement>{
  children: ReactNode;
}

const sc = scopedClass("deepin-layout");

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return <div className={sc("aside", { extra: className })} {...rest}>{props.children}</div>;
};

export default Content;
