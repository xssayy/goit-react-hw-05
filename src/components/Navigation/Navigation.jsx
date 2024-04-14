import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={style.nav}>
          <NavLink to="/" className={style.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={style.navLink}>
            Movies
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
