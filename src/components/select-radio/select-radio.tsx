import React from 'react'

import './select-radio.scss'

export default function ({
  name,
  label,
  items,
  selectedItems,
  handleChange
}) {

  const handleSelect = id => {
    if (selectedItems.includes(id)) {
      handleChange(name, selectedItems.filter(i => i !== id))
    } else {
      handleChange(name, [...selectedItems, id])
    }
  }

  return (
    <div className="select-radio">
      <label>
        {label}
      </label>
      <ul>
        {
          items.map(({
            id,
            icon,
            selected = selectedItems.includes(id)
          }, index) => (
              <li
                onClick={() => handleSelect(id)}
                data-selected={selected}
                key={index}>
                <img
                  style={{
                    height: "30px",
                    width: "30px"
                  }}
                  src={icon} />
              </li>
            ))
        }
      </ul>
    </div>
  )
}