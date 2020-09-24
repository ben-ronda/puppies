import React from "react"
import { Link } from "gatsby"

export default function Links(props) {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/golden_retrievers/">Golden Retrievers</Link></li>
      </ul>
    </div>
  )
}
