import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
      <div className="col-md-6 d-flex align-items-center">
        <span className="text-muted">© 2024 Foodiee., Inc</span>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
        <ul className="nav list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.facebook.com" className="text-muted" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.twitter.com" className="text-muted" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com" className="text-muted" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com" className="text-muted" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
