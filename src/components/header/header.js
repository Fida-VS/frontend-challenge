import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Все котики
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Любимые котики
          </NavLink>
        </div>
      </div>
    </div>
  );
};
