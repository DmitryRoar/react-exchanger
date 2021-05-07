import React from 'react'

export const SvgIcon = ({section, icon, width = 'auto', height = width, customClass}) => (
  <svg style={{width, height}} className={customClass}>
    <use xlinkHref={`/assets/icon/${section}/sprite.svg#${icon}`}></use>
  </svg>
)