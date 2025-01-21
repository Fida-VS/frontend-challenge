import { useDispatch } from "react-redux";
import styles from "./card.module.css";
import { toggleFavoriteCat } from "../../store/catsSlice";


export const Card = ({id, url}) => {

  const dispatch = useDispatch();    

  const cat = { id, url };

  const onHandleClick = () => {  
    dispatch(toggleFavoriteCat(cat));  
  };    

  return (
    <div className={styles.card}>
     <div className={styles.box} data-id={id}>
        <img src={url} alt="cat" />
        <button type="button" onClick={onHandleClick} className={styles.likeButton}>❤️</button>
     </div>
    </div>
  );
};

