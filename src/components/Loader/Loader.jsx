import React from 'react'

export const Loader = ({size}) => (
  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block" style={{background: 'rgb(255, 255, 255)', width: size, height: size}}><circle cx="50" cy="50" fill="none" stroke="#E23F65" strokeWidth="10" r="30" strokeDasharray="45 15" transform="rotate(146.073 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg></span>
)