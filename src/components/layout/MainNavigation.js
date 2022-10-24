import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Formula1</div>
      <nav>
        <ul>
          <li><Link to="/">Round Results</Link></li>
          <li><Link to="/favorites">Favorite Drivers</Link></li>
          <li><Link to="/new-meetup">New Meetup</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;