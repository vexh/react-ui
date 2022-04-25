import React, { HTMLAttributes, ReactNode } from 'react'
import {scopedClass} from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const sc = scopedClass("deepin-layout");

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return <div className={sc('header', { extra: className })} {...rest}>{props.children}</div>
}

export default Header;
