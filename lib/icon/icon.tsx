/**
 * 实现各类事件
 */
import React from "react";
import './importIcons';
import classes from '../helpers/classes';
import './icon.scss';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...restProps }) => {
  return <>
    <svg className={classes('deepin', className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  </>
}

export default Icon;
