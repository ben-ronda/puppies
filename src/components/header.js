import React from "react"
import Links from "./links"

export default function Header(props) {
  return(
    <div>
      <h1>{props.pageName}</h1>
      <Links />
    </div>
  )
}
