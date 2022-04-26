import classes from "../helpers/classes";
import React, { HTMLAttributes } from "react";
import scrollbarWidth from "./scrollbar-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes("deepin-scroll", props.className)} {...rest}>
      <div className="deepin-scroll-inner" style={{right: -scrollbarWidth()}}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
