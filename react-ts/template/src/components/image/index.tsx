import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import './index.scss';

interface Props {
  src: string,
  className?: string,
  height?: string | number,
  width?: string | number
}

export default function image(props: Props) {
  const { src, className, height, width } = props
  const [show, setShow] = useState(false)

  const handleOnLoad = () => {
    console.log('onLoad')
    setShow(true)
  }

  const handleOnError = () => {
    console.log('onError')
    setShow(false)
  }

  const getStyle = () => {
    let style = {}

    if (height) {
      Object.assign(style, { height: height + 'px' })
    }
    if (width) {
      Object.assign(style, { width: width + 'px' })
    }

    return style
  }

  return (
    <div className={'image-wrap ' + className} style={getStyle()}>
      <div className={'empty-image'} style={{ display: show ? 'none' : 'block' }} />
      <CSSTransition in={show} timeout={500} classNames="image-transition">
        <img className={'image'} style={{ display: show ? 'block' : 'none' }} src={src} onLoad={handleOnLoad} onError={handleOnError} />
      </CSSTransition>
    </div>
  )
}
