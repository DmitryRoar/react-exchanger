import React, {useState} from 'react'
import classes from './Input.module.scss'

export const Input = ({type = 'text', label}) => {
  const [focused, setFocused] = useState(false) 

  const cls = [classes.label]
  if (focused) {
    cls.push(classes.focused)
  }
  return (
    <>
      {
        label 
        ? (
          <label htmlFor="input" className={cls.join(' ')}>
            {label}
            <input 
              type={type}
              id="input" 
              placeholder='hell'
              onFocus={() => setFocused(true)} 
            />
            <div className={classes.valute}>
              <span>ETH</span>  
            </div>
          </label>
        )
        : <input 
          type={type}
          id="input" 
          placeholder='hell'
          onFocus={() => setFocused(true)} 
        />
      }
      <div className={classes.validation}></div>
    </>
  )
}