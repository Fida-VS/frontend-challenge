// import { useSelector } from "react-redux";
import styles from "./favorites.module.css";
import { Card } from "../../components/card/card";
import { useSelector } from "react-redux";

export const Favorites = () => {
  const favoritesCats = useSelector((state) => state.cats.favorites);

  return (
    <div className={styles.favorites}>
      {favoritesCats.map((cat) => (
        <Card key={cat.id} {...cat} />
      ))}
    </div>
  );
};
