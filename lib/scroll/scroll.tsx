import classes from "../helpers/classes";
import React, { HTMLAttributes, MouseEventHandler, TouchEventHandler, UIEventHandler, useEffect, useRef, useState } from "react";
import scrollbarWidth from "./scrollbar-width";
import "./scroll.scss";

const isMobileDevice = "ontouchstart" in document.documentElement;

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;

  const container = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState<number>();
  const [barTop, setBarTop] = useState<number>(0);

  const touchStartRef = useRef<number>();
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    _setTranslateY(y);
  };
  const moveCount = useRef<number>(0);
  const pulling = useRef(false);

  const onTouchStart: TouchEventHandler = (e) => {
    touchStartRef.current = e.touches[0].clientY;
    moveCount.current = 0;
    pulling.current = true;
  };
  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - touchStartRef.current!;
    moveCount.current++;
    if (!pulling.current) return;
    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
      return;
    }
    let Y = translateY + deltaY;

    setTranslateY(translateY + deltaY);
    touchStartRef.current = e.touches[0].clientY;
    console.log(pulling.current);
  };

  const onTouchEnd: TouchEventHandler = (e) => {
    setTranslateY(0);
    if (translateY == 100) {
      props.onPull?.();
    }
  };

  const [barVisible, setBarVisible] = useState(!isMobileDevice);
  const timerRef = useRef<number | null>(null);

  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    const { current } = container;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);

    if (isMobileDevice) {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setBarVisible(false);
      }, 300);
    }
  };
  useEffect(() => {
    // 计算bar高度
    const scrollHeight = container.current!.scrollHeight;
    const viewHeight = container.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  const draggingRef = useRef(false);
  const firstClientY = useRef(0);
  const firstBarTopRef = useRef(0);

  const onMouseDown: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstClientY.current = e.clientY;
    firstBarTopRef.current = barTop;
    console.log("start");
  };
  const onMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const scrollBarTop = firstBarTopRef.current + e.clientY - firstClientY.current;
      if (scrollBarTop < 0) return;
      const scrollHeight = container.current!.scrollHeight;
      const viewHeight = container.current!.getBoundingClientRect().height;
      const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
      if (scrollBarTop > maxBarTop) return;
      setBarTop(scrollBarTop);
      container.current!.scrollTop = (scrollBarTop * scrollHeight) / viewHeight;
    }
  };

  const onMouseUp = () => {
    draggingRef.current = false;
    console.log("end");
  };

  const onSelectStart = (e: MouseEvent) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("selectstart", onSelectStart);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.addEventListener("selectstart", onSelectStart);
    };
  }, []);

  return (
    <div className={classes("deepin-scroll", props.className)} {...rest}>
      <div
        className="deepin-scroll-inner"
        style={{ right: -scrollbarWidth(), transform: `translateY(${translateY}px)` }}
        ref={container}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onScroll={onScroll}
      >
        {props.children}
      </div>
      {barVisible && (
        <div className="deepin-scroll-track">
          <div
            className="deepin-scroll-bar"
            onMouseDown={onMouseDown}
            style={{ height: `${barHeight}px`, transform: `translateY(${barTop}px)` }}
          ></div>
        </div>
      )}
      <div className="deepin-scroll-pulling" style={{ height: `${translateY}px` }}>
        {translateY === 100 ? (
          <span className="deepin-scroll-pulling-text">松开刷新...</span>
        ) : (
          <span className="deepin-scroll-pulling-icon">⬇</span>
        )}
      </div>
    </div>
  );
};

export default Scroll;
