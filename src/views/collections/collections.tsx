import React, { useState, useMemo } from 'react'
import axios from 'axios'

import './collections.scss'

import quantumState from '../../utils/quantum-state'

export default function () {
  const [collections, setCollections]: any = useState([])
  const [_, openModal] = quantumState("MODAL", "", false)

  useMemo(() => {
    axios.get('http://localhost:3090/collection')
      .then(({ data }) => setCollections(data))
  }, [useMemo])

  const postCollection = label =>
    axios.post('http://localhost:3090/collection', { label })
      .then(({ data }) => {
        setCollections([...collections, data])
        openModal({})
      })



  return (
    <div className="collections">
      <ul>
        {
          collections.map(({
            label,
            cards
          },
            index) => (
              <li
                key={index}>
                <label>
                  {label}
                </label>
                <span>
                  {`${cards.length} cards`}
                </span>
              </li>
            ))
        }
      </ul>
      <i
        onClick={() => openModal({
          name: "COLLECTION_FORM",
          props: {
            action: postCollection
          }
        })}
        className="material-icons">
        add
      </i>
    </div >
  )
}