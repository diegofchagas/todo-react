import React from 'react'

const Input = ({placeholder,type,value,onChange, ...props}) => {
  return (
   <input placeholder={placeholder} type={type} value={value} onChange={onChange} {...props}/>
  )
}

export default Input