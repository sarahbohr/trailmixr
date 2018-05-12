import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="/">
          {/* <i className="fas fa-tree tree"></i>  */}
          TrailMixr</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle" aria-controls="toggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse justify-content-end" id="toggle">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="/">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header