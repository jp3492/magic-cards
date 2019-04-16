import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import './navigation.scss'

export const tabs = [
  {
    label: "collections",
    icon: "view_list",
    path: "/"
  },
  {
    label: "search",
    icon: "search",
    path: "/search"
  },
  {
    label: "tinder",
    icon: "view_carousel",
    path: "/tinder"
  }
]

export default function () {
  const [tab, setTab] = useState(0)
  const { location: { pathname } } = useReactRouter()

  useEffect(() => {
    setTab(tabs.reduce((res, r, i) =>
      r.path === pathname ? i : res
      , 0))
  }, [pathname])

  return (
    <header className="navigation">
      <ul>
        {
          tabs.map(({
            label,
            icon,
            path
          },
            index
          ) => (
              <li
                key={index}>
                <Link to={path}>
                  <i className="material-icons">
                    {icon}
                  </i>
                </Link>
              </li>
            ))
        }
      </ul>
      <span
        style={{
          left: `${(100 / 3) * tab}%`
        }} />
    </header>
  )
}