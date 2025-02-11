// import { useSelector } from "react-redux";
import styles from "./favorites.module.css";
import { Card } from "../../components/card/card";
import { useSelector } from "react-redux";

export const Favorites = () => {
  const favoritesCats = useSelector((state) => state.cats.favorites);

  return (favoritesCats.length > 0 && favoritesCats !== null) ? (
    <div className={styles.favorites}>
      {favoritesCats.map((cat) => (
        <Card key={cat.id} {...cat} />
      ))}
    </div>
  ) : (
    <div className={styles.noCats}>У вас нет любимых котиков</div>
  )
};
