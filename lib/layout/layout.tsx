import React, { HTMLAttributes } from "react";
import Aside from "./aside";
import { scopedClass } from "../helpers/classes";
import "./layout.scss";

interface Props extends HTMLAttributes<HTMLElement> {}

const sc = scopedClass("react-ui-layout");
const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  let hasSide = false;
  if (props.children instanceof Array) {
    props.children.map((node) => {
      if (node.type === Aside) {
        hasSide = true;
      }
    });
  }

  return (
    <div className={sc({ "": true, hasSide }, { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
