import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  getCountry = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
          <div className="container-fluid">
            <img src="/logo192.png" alt="Open-News-logo" height="40" />
            <Link className="navbar-brand fw-bold fs-4 ms-2 me-4" to="/">Open News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item my-auto">
                    <select className="form-select form-select-sm" defaultValue={'in'} onChange={this.getCountry}>
                      <option value="in">India</option>
                      <option value="us">USA</option>
                      <option value="jp">Japan</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      <button type='button' className='btn btn-sm btn-dark'>
                        <i className="bi bi-question-lg"></i>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
