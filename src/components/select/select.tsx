import React, { useState, useEffect } from 'react'

import './select.scss'

import quantumState from '../../utils/quantum-state'

export const SelectField = ({
  items,
  selectedItems,
  onSelect
}) => (
    <ul className="select">
      {
        items.map(({
          label,
          id,
          icon,
          selected = selectedItems.some(i => i === id)
        }, index) => (
            <li
              onClick={() => onSelect(id)}
              key={index}
              data-selected={selected}>
              <i className="material-icons">
                {icon}
              </i>
              <label>
                {label}
              </label>
              <i className="material-icons">
                {
                  selected ?
                    "check_circle_outline" :
                    "panorama_fish_eye"
                }
              </i>
            </li>
          ))
      }
    </ul>
  )

const modal = props => ({
  name: "SELECT",
  props
})

export default function ({
  name,
  label = "",
  items,
  selectedItems,
  value = "",
  handleChange,
  multiple = false,
  placeholder
}) {
  const [modalProps, openModal] = quantumState("MODAL", "")

  const onSelect = id => {
    if (!multiple) {
      handleChange(name, id)
      openModal({})
    } else {
      if (selectedItems.includes(id)) {
        handleChange(name, selectedItems.filter(i => i !== id))
      } else {
        handleChange(name, [...selectedItems, id])
      }
    }
  }

  useEffect(() => {
    if (modalProps.props && modalProps.props.for === name) {
      openModal(modal({
        items,
        selectedItems,
        onSelect,
        for: name
      }))
    }

  }, [selectedItems])

  return (
    <div className="select-field">
      {
        label !== "" &&
        <label>
          {label}
        </label>
      }
      <input
        name={name}
        required={true}
        onClick={() => openModal(modal({
          items,
          selectedItems,
          onSelect,
          for: name
        }))}
        value={
          value ?
            value :
            selectedItems.length > 0 ?
              multiple ?
                `${selectedItems.length} Items` :
                selectedItems[0] :
              ""
        }
        placeholder={placeholder} />
    </div>
  )
}