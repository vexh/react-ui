/**
 * 实现各类事件
 */
import React from "react";
// import './importIcons';
import wechat from '../icons/wechat.svg';
import alipay from "../icons/alipay.svg";
import qq from "../icons/qq.svg";
import classes from '../helpers/classes';

console.log(wechat);
console.log(alipay);
console.log(qq);
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...restProps }) => {
  return <>
    <svg className={classes('react-ui', className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  </>
}

export default Icon;
