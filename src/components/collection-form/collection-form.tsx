import React, { useState } from 'react'

import './collection-form.scss'

import Input from '../input/input'
import { LoadingButton } from '../loading-button/loading-button';

export default function (props) {
  const [label, setlabel] = useState(props.label || "")

  return (
    <div className="collection-form">
      <h3>
        {
          props.id ?
            "Edit Collection" :
            "Add Collection"
        }
      </h3>
      <Input
        value={label}
        handleChange={value => setlabel(value)}
        placeholder="Collectio name"
        name="label"
        label="Name" />
      <LoadingButton
        onClick={() => label !== "" ? props.action(label) : alert("Missing Label")}
        label="submit" />
    </div>
  )
}