import React from "react"
import MainDisplay from "../Workout/MainDisplay"
import { Link } from "gatsby"

const Workout = () => {
  return (
    <div>
      <MainDisplay />
      <Link to="/projects" className="mob-menu-items" activeClassName="active">
        <button className="navbtn">Back</button>
      </Link>
    </div>
  )
}

export default Workout
