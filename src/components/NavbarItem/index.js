import './index.css'

const NavbarItem = props => {
  const {score, timer} = props

  return (
    <nav className="navbar-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li className="nav-li">
          <p className="score-heading">
            Score: <span className="score-count">{score}</span>
          </p>
        </li>
        <li className="nav-li">
          <img
            className="timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        </li>
        <li className="nav-li">
          <p className="timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarItem
