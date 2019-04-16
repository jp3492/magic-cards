import React, { useState } from 'react'

import './modal.scss'

import quantumState from '../../utils/quantum-state'

import { SelectField } from '../select/select'
import CollectionForm from '../collection-form/collection-form'

const CONTENTS = {
  SELECT: SelectField,
  COLLECTION_FORM: CollectionForm
}

const initialModal = {
  name: null,
  title: null,
  props: {},
  onClose: null
}

export default function () {
  const [modal, setModal] = quantumState("MODAL", initialModal)

  const { name = null, props = {}, title = null, onClose = null } = modal

  if (name === null || !name) {
    return null
  }

  const closeModal = () => {
    if (onClose !== null) {
      onClose()
    }
    setModal(initialModal)
  }

  const renderComponent = (name: string) => {
    const SelectedComponent = CONTENTS[name]
    return <SelectedComponent {...props} closeModal={closeModal} />
  }

  return (
    <div className="modal">
      <div
        className="backdrop" />
      <div
        onClick={() => closeModal()}
        className="content-wrapper">
        <div
          onClick={e => e.stopPropagation()}
          className="content">
          {
            renderComponent(name)
          }
        </div>
      </div>
    </div>
  )
}