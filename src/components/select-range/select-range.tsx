import React from 'react'

import './select-range.scss'

import Select from '../select/select'

export default function ({
  name,
  label,
  items,
  from,
  to,
  handleChange
}) {

  const onSelect = (where, id) => {
    const value = items.find(i => i.id === id).label

    handleChange(name, {
      from: where === "from" ? value : from,
      to: where === "to" ? value : to
    })
  }

  return (
    <div className="select-range">
      <label>
        {label}
      </label>
      <Select
        name="from"
        multiple={false}
        items={items}
        selectedItems={[items.find(i => i.label === from).id]}
        handleChange={onSelect}
        placeholder="From" />
      <Select
        name="to"
        multiple={false}
        items={items}
        selectedItems={[items.find(i => i.label === to).id]}
        handleChange={onSelect}
        placeholder="To" />

    </div>
  )
}