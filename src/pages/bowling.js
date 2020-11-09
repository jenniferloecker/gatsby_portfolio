import React from "react"
import MainDisplay from "../Bowling/components/MainDisplay"
import { Link } from "gatsby"

const Bowling = () => {
  return (
    <div>
      <MainDisplay />
      <Link to="/projects" className="mob-menu-items" activeClassName="active">
        <button className="navbtn">Back</button>
      </Link>
    </div>
  )
}

export default Bowling
