import React from 'react';
import './index.scss';

enum Size {
  mini = 'mini',
  default = 'default'
}

interface Props {
  style?: object,
  disabled?: boolean,
  onClick?: (event: any) => void,
  className?: string,
  children?: any,
  size?: string,
  // icon地址
  icon: string
}

export default function Button(props: Props) {
  const { style, disabled, onClick, size = Size.default, icon, className } = props

  const handleClick = (ev) => {
    if (disabled) return

    onClick && onClick(ev)
  }

  return (
    <div
      className={'ec-button ' + (disabled ? 'disabled ' : '') + (size === Size.mini ? 'mini ' : '') + (className ? className : '')}
      style={style}
      onClick={handleClick}
    >
      {icon && <img className="ec-button-icon" src={icon} alt="" />}
      {props.children}
    </div>
  )
}
