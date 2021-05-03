import React, {useState} from 'react'
import classes from './Input.module.scss'

export const Input = ({setValue, input, border = false}) => {
  // input (label, type, maxLength)
  const [focused, setFocused] = useState(false)

  const cls = [classes.input]
  if (focused) {
    cls.push(classes.focused)
  }
  if (border) {
    cls.push(classes.border)
  }
  console.log(cls)
  return (
    <>
      <div className={cls.join(' ')} >
      <label htmlFor="input">
          {input.label}
        </label>
        <input 
          type={input.type}
          id="input" 
          maxLength={input.maxLength}
          onFocus={() => setFocused(true)} 
          onChange={e => setValue(e.target.value)}
        />
      </div>

      <div className={classes.validation}></div>
    </>
  )
}