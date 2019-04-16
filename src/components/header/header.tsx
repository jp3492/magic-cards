import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'

import './header.scss'

import { tabs } from '../navigation/navigation'

export default function () {
  const [titel, setTitel] = useState("")

  const { location: { pathname } } = useReactRouter()

  useEffect(() => {
    setTitel(
      tabs[tabs.reduce((res, r, i) => r.path === pathname ? i : res, 0)].label
    )
  }, [pathname])

  return (
    <div className="header">
      <h4>
        {titel}
      </h4>
      <i className="material-icons">
        account_circle
      </i>
    </div>
  )
}