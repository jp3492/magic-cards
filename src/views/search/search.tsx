import React, { useState } from 'react'

import './search.scss'

import Select from '../../components/select/select'
import Input from '../../components/input/input'
import SelectRadio from '../../components/select-radio/select-radio'
import SelectRange from '../../components/select-range/select-range'

const white = require('../../assets/icons/white.svg')
const blue = require('../../assets/icons/blue.svg')
const red = require('../../assets/icons/red.svg')
const green = require('../../assets/icons/green.svg')
const black = require('../../assets/icons/black.svg')
const colorless = require('../../assets/icons/colorless.svg')

const editions = [
  { id: 1, label: "First Editon" },
  { id: 2, label: "Second Edition" },
  { id: 3, label: "Third Edition" },
  { id: 4, label: "Fourth Edition" },
  { id: 5, label: "Fifth Edition" },
  { id: 6, label: "Sixth Edition" }
]

const colors = [
  { id: 1, icon: white },
  { id: 2, icon: blue },
  { id: 3, icon: red },
  { id: 4, icon: green },
  { id: 5, icon: black }
]

const colorIdentities = [
  { id: 1, icon: white },
  { id: 2, icon: blue },
  { id: 3, icon: red },
  { id: 4, icon: green },
  { id: 5, icon: black },
  { id: 6, icon: colorless }
]

const rarities = [
  { id: 1, label: "Basic Land" },
  { id: 2, label: "Common" },
  { id: 3, label: "Uncommon" },
  { id: 4, label: "Rare" },
  { id: 5, label: "Mythic" },
  { id: 6, label: "Special" }
]

const types = [
  { id: 1, label: "Artifact" },
  { id: 2, label: "Creature" },
  { id: 3, label: "Enchantment" },
  { id: 4, label: "Instant" },
  { id: 5, label: "Land" },
  { id: 6, label: "Legendary" },
  { id: 7, label: "Planeswalker" },
  { id: 8, label: "Sorcery" },
  { id: 9, label: "Tribal" }
]

const powerRange = [
  { id: 0, label: 0 },
  { id: 1, label: 1 },
  { id: 2, label: 2 },
  { id: 3, label: 3 },
  { id: 4, label: 4 },
  { id: 5, label: 5 },
  { id: 6, label: 6 },
  { id: 7, label: 7 },
  { id: 8, label: 8 },
  { id: 9, label: 9 },
  { id: 10, label: 10 },
  { id: 11, label: 11 },
  { id: 12, label: 12 },
  { id: 13, label: 13 },
  { id: 14, label: 14 },
  { id: 15, label: 15 },
  { id: 16, label: 16 }
]

const filterProps = {
  name: "",
  editions: [],
  colors: [],
  colorIdentities: [],
  rarities: [],
  types: [],
  power: {
    from: 0,
    to: 0
  },
  toughness: {
    from: 0,
    to: 0
  },
  cost: {
    from: 0,
    to: 0
  },
  oracle: ""
}

export default function () {
  const [properties, setProperty] = useState(filterProps)

  const handleChange = (name, value) => {
    setProperty({
      ...properties,
      [name]: value
    })
  }

  return (
    <div className="search">
      <Input
        value={properties.name}
        name="name"
        placeholder="Search for card name"
        label="Name"
        handleChange={handleChange} />
      <Select
        name="editions"
        label="Editions"
        multiple={true}
        items={editions}
        selectedItems={properties.editions}
        handleChange={handleChange}
        placeholder="Select editions" />
      <SelectRadio
        name="colors"
        handleChange={handleChange}
        label="Colors"
        selectedItems={properties.colors}
        items={colors} />
      <SelectRadio
        name="colorIdentities"
        handleChange={handleChange}
        label="Color Identities"
        selectedItems={properties.colorIdentities}
        items={colorIdentities} />
      <Select
        name="rarities"
        label="Rarities"
        multiple={true}
        items={rarities}
        selectedItems={properties.rarities}
        handleChange={handleChange}
        placeholder="Select rarities" />
      <Select
        name="types"
        label="Types"
        multiple={true}
        items={types}
        selectedItems={properties.types}
        handleChange={handleChange}
        placeholder="Select types" />
      <SelectRange
        name="power"
        label="Power"
        items={powerRange}
        handleChange={handleChange}
        from={properties.power.from}
        to={properties.power.to} />
      <SelectRange
        name="toughness"
        label="Toughness"
        items={powerRange}
        handleChange={handleChange}
        from={properties.toughness.from}
        to={properties.toughness.to} />
      <Input
        value={properties.oracle}
        name="oracle"
        placeholder="Search for oracle text"
        label="Oracle"
        handleChange={handleChange} />
      <i className="material-icons">
        search
      </i>
    </div>
  )
}