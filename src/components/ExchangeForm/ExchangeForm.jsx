import React, {useState} from 'react'
import { Input } from '../Input/Input'
import { Loader } from '../Loader/Loader'
import classes from './ExchangeForm.module.scss'

export const ExchangeForm = ({input}) => {
  // prop drilling :)
  const [dropDown, setDropDown] = useState(false) 
  const [count, setCount] = useState('')
  const [option, setOption] = useState({
    icon: 'bitcoin',
    name: 'Bitcoin BTC',
    valute: 'BTC'
  })

  const activeCls = []
  if (dropDown) {
    activeCls.push(classes.active)
  }

  const dropDownHandler = () => {
    setDropDown(prev => !prev)
  }

  const changeOptionHandler = option => {
    setOption({icon: option.icon, name: option.name})
    setDropDown(false)
  }

  return (
    <div className={classes.form}>
      <div className={classes.select}>
        <div className={`${classes.option} ${activeCls.join(' ')}`} onClick={dropDownHandler}>
          <div className={classes.img}>
            <img src={`/assets/img/exchange/form/${option.icon}.svg`} />
          </div>
          <span>{option.name}</span>
          <img src="/assets/img/exchange/form/arrow.svg" className={classes.arrow} /> 
        </div>

        {
          dropDown && (
            <div className={classes.dropdown}>
                <div className={classes.option} onClick={changeOptionHandler.bind(null, {name: 'Bitcoin BTC', icon: 'bitcoin'})}>
                  <div className={classes.img}>
                    <img src="/assets/img/exchange/form/bitcoin.svg" />
                  </div>
                  <span>Bitcoin BTC</span>
                </div>            
                <div className={classes.option} onClick={changeOptionHandler.bind(null, {name: 'Ethereum', icon: 'ethereum'})}>
                <div className={classes.img}>
                  <img src="/assets/img/exchange/form/ethereum.svg" />
                </div>
                <span>Ethereum ETH</span>
                </div>
            </div>
          )
        }
      </div>

      <div className={classes['input-wrap']}>
        <Input input={input} setValue={setCount} />
        <div className={classes.valute}>
          <span>ETH</span>  
        </div>
      </div>

      <div className={classes.info}>
        <p className={classes.range}>
          <span>Min: 0.005</span> 
          <span>Max: 0.12</span>
        </p>
        <p>Including commission: <Loader size="13"/></p> 
        <p>1 BTC = <Loader size="13"/> RUB</p> 
      </div>
    </div>
  )
}