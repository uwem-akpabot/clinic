import React from 'react'

const Footer = (props) => {
  return (
    <>
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">&copy; 2023. {props.company}</div>
        <div>
          <a href="" target="_blank" className="footer-link me-4">Developer</a>
          <a href="" target="_blank" className="footer-link me-4" >How to use</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
