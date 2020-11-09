import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <Default />
      <Post title="Get in touch">
        <p>
          Get in touch through email contact form below or through any social
          media
        </p>
        <div className="form-item">
          <div className="form-item">Jennifer Loecker</div>
          <div className="form-item">Lincoln Nebraska</div>
          <div className="form-item">(402)430-3537</div>
          <div className="form-item">jenniferloecker@gmail.com</div>
        </div>
      </Post>
    </>
  )
}

export default ContactPage
