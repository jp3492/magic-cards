import React from 'react'
import './input.scss'

export default function ({
  label,
  name,
  placeholder,
  handleChange,
  value
}) {

  return (
    <div className="input">
      <label>
        {label}
      </label>
      <input
        value={value}
        name={name}
        onChange={({ target: { value } }) => handleChange(value)}
        placeholder={placeholder} />
    </div>
  )
}