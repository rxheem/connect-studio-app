import React from 'react'

const Image = props => {
  return (
    <figure>
      <img src={props.src} className={'image ' + (props.isRounded ? 'is-rounded ' : '') + props.size}    />
    </figure>
  )
}

export default Image;
