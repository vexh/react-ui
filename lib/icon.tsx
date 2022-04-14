import React from "react";
// import './importIcons';
import wechat from './icons/wechat.svg';
import alipay from "./icons/alipay.svg";
import qq from "./icons/qq.svg";

console.log(wechat);
console.log(alipay);
console.log(qq);
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
  return (
    <>
      <svg>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </>
  );
};

export default Icon;
