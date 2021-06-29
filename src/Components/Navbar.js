import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div>
      <ul className={classes.nav}>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#Welcome">Welcome</a>
      </li>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#About Us">About Us</a>
      </li>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#Menu">Menu</a>
      </li>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#Gallery">Gallery</a>
      </li>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#News">News</a>
      </li>
      <li className={classes['nav-item']}>
        <a className={classes['nav-link']} href="#Reservations" onClick={props.onShowReservation}>Reservations</a>
      </li>
    </ul>
  </div>
  )
};

export default Navbar;