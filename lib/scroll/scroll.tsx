import classes from "../helpers/classes";
import React, { EventHandler, HTMLAttributes, UIEventHandler, useEffect, useRef, useState } from "react";
import scrollbarWidth from "./scrollbar-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const container = useRef<HTMLDivElement>(null);

  const [barHeight, setBarHeight] = useState<number>();
  const [scrollTop, setScrollTop] = useState<number>();

  const onScroll = () => {
    const { current } = container;
    const scrollTop = (current!.scrollTop * current!.getBoundingClientRect().height) / current!.scrollHeight;
    setScrollTop(scrollTop);
  };
  useEffect(() => {
    // 计算bar高度
    const h = container.current!.getBoundingClientRect().height;
    const h2 = container.current!.scrollHeight;
    setBarHeight((h * h) / h2);
    // 计算bar的位置（scrollTop值）
    // container.current?.scrollTop / h2 === x / h ==>
  }, []);
  console.log({ barHeight }, { scrollTop });
  // };
  return (
    <div className={classes("deepin-scroll", props.className)} {...rest}>
      <div className="deepin-scroll-inner" style={{ right: -scrollbarWidth() }} ref={container} onScroll={onScroll}>
        {props.children}
      </div>
      <div className="deepin-scroll-track">
        <div className="deepin-scroll-bar" style={{ height: `${barHeight}px`, transform: `translateY(${scrollTop}px)` }}></div>
      </div>
    </div>
  );
};

export default Scroll;
