import classes from "../helpers/classes";
import React, { HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from "react";
import scrollbarWidth from "./scrollbar-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const container = useRef<HTMLDivElement>(null);

  const draggingRef = useRef(false);
  const firstClientY = useRef(0);
  const firstBarTopRef = useRef(0);

  const [barHeight, setBarHeight] = useState<number>();
  const [barTop, setBarTop] = useState<number>(0);

  const onScroll: UIEventHandler = (e) => {
    console.log('onScroll');
    
    const { current } = container;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
  };
  useEffect(() => {
    // 计算bar高度
    const scrollHeight = container.current!.scrollHeight;
    const viewHeight = container.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
    // 计算bar的位置（scrollTop值）
    // container.current?.scrollTop / h2 === x / h ==>
  }, []);

  const onMouseDown: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstClientY.current = e.clientY;
    firstBarTopRef.current = barTop;
    console.log("start");
    
  };
  const onMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const scrollBarTop = firstBarTopRef.current + e.clientY - firstClientY.current
      if (scrollBarTop < 0) return;
      const scrollHeight = container.current!.scrollHeight;
      const viewHeight = container.current!.getBoundingClientRect().height;
      const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
      if (scrollBarTop > maxBarTop) return;
      setBarTop(scrollBarTop);
      container.current!.scrollTop = scrollBarTop * scrollHeight / viewHeight;
    }
  };

  const onMouseUp = () => {
    draggingRef.current = false;
    console.log("end");
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    //   document.addEventListener("selectstart", (e) => e.preventDefault());
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }, []);
  
  return (
    <div className={classes("deepin-scroll", props.className)} {...rest}>
      <div className="deepin-scroll-inner" style={{ right: -scrollbarWidth() }} ref={container} onScroll={onScroll}>
        {props.children}
      </div>
      <div className="deepin-scroll-track">
        <div
          className="deepin-scroll-bar"
          onMouseDown={onMouseDown}
          style={{ height: `${barHeight}px`, transform: `translateY(${barTop}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
