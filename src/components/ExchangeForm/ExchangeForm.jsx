import React, {useState} from 'react'

import classes from './ExchangeForm.module.scss'

import {Input} from '../Input/Input'
import {Loader} from '../Loader/Loader'

import {SvgIcon} from '../../components/SvgIcon/SvgIcon'

export const ExchangeForm = ({value, setValue}) => {
  const [dropDown, setDropDown] = useState(false) 
  const [activeOption, setActiveOption] = useState({
    icon: 'bitcoin',
    name: 'Bitcoin',
    valute: 'BTC'
  })
  const [options, setOptions] = useState([
    {
      icon: 'bitcoin',
      name: 'Bitcoin',
      valute: 'BTC'
    },
    {
      icon: 'ethereum',
      name: 'Ethereum',
      valute: 'ETH'
    }
  ])

  const activeCls = []
  if (dropDown) {
    activeCls.push(classes.active)
  }

  const dropDownHandler = () => {
    setDropDown(prev => !prev)
  }

  const changeOptionHandler = option => {
    setActiveOption(option)
    setDropDown(false)
  }

  return (
    <div className={classes.form}>
      <div className={classes.select}>
        <div className={`${classes.option} ${activeCls.join(' ')}`} onClick={dropDownHandler}>
          <div className={classes.img}>
            <img src={`/assets/img/exchange/form/${activeOption.icon}.svg`} />
          </div>
          <span>{activeOption.name} {activeOption.valute}</span>
          <SvgIcon icon="arrow" customClass={classes.arrow} width="17" height="10" section="exchange" />
        </div>

        {
          dropDown && (
            <div className={classes.dropdown}>
              {
                options.map((option, idx) => (
                  <div key={idx} className={classes.option} onClick={changeOptionHandler.bind(null, option)}>
                      <div className={classes.img}>
                      <img src={`/assets/img/exchange/form/${option.icon}.svg`} />
                    </div>
                    <span>{option.name} {option.valute}</span>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>

      <div className={classes['input-wrap']}>
        <Input type="number" value={value} maxLength="44" setValue={setValue} />
        <div className={classes.valute}>
          <span>{activeOption.valute}</span>  
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