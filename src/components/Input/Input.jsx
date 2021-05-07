import React, {useState} from 'react'
import classes from './Input.module.scss'

export const Input = ({value, setValue, label, type, maxLength, border = false}) => {
  // input (label, type, maxLength)
  const [focused, setFocused] = useState(false)

  const cls = [classes.input]
  if (focused) {
    cls.push(classes.focused)
  }
  if (border) {
    cls.push(classes.border)
  }

  const unfocusHandler = () => {
    if (value) {
      return
    }
    setFocused(false)
  }

  return (
    <>
      <div className={cls.join(' ')} >
      <label htmlFor="input">
          {label}
        </label>
        <input 
          type={type}
          id="input"
          value={value} 
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={unfocusHandler} 
          onChange={e => setValue(e.target.value)}
        />
      </div>

      <div className={classes.validation}></div>
    </>
  )
}