import React from "react"
import Default from "../components/default"
import Post from "../components/post"
import { Link } from "gatsby"

const ProjectsPage = () => {
  return (
    <div>
      <Default />
      <Post title="Projects">
        <Link to="/workout" className="mob-menu-items" activeClassName="active">
          <button className="navbtn">Workout Data</button>
        </Link>
        {/* <Link to="/bowling" className="mob-menu-items" activeClassName="active">
          <button className="navbtn">Bowling Game</button>
        </Link> */}
      </Post>
    </div>
  )
}
export default ProjectsPage
