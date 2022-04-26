import classes from "../helpers/classes";
import React, { EventHandler, HTMLAttributes, UIEventHandler, useEffect, useRef, useState } from "react";
import scrollbarWidth from "./scrollbar-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const [barHeight, setBarHeight] = useState<number>();
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {

    const h = container.current?.getBoundingClientRect().height || 1;
    const h2 = container.current?.scrollHeight || 1;
    
    setBarHeight((h * h) / h2);
  }, []);
  console.log({barHeight});
  // const getHeight: UIEventHandler = (e) => {
  //   console.log("scrollTop", e.currentTarget.scrollTop);
  //   console.log("scrollHeight", e.currentTarget.scrollHeight);
  // };
  return (
    <div className={classes("deepin-scroll", props.className)} {...rest}>
      <div className="deepin-scroll-inner" style={{ right: -scrollbarWidth() }} ref={container} onScroll={() => {}}>
        {props.children}
      </div>
      <div className="deepin-scroll-track">
        <div className="deepin-scroll-bar" style={{ height: `${barHeight}px` }}></div>
      </div>
    </div>
  );
};

export default Scroll;
