import React, { InputHTMLAttributes } from 'react'
import classes from '../helpers/classes';

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
  return <input type={props.type} className={classes('deepin')} />
}

export default Input;