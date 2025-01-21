import { useDispatch } from "react-redux";
import styles from "./card.module.css";
import { toggleFavoriteCat } from "../../store/catsSlice";



const HeartIcon = () => (  
  <svg  
      className={styles.heartIcon}  
      width="48"  
      height="48"  
      viewBox="0 0 48 48"  
      xmlns="http://www.w3.org/2000/svg"  
  >   
      <path  
          d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6Z"  
          className={styles.background}   
      />  
       
      <path  
          d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6Z"  
          className={styles.path} 
      />  
  </svg>  
); 


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
        <button type="button" onClick={onHandleClick} className={styles.likeButton}>
        <HeartIcon />
        </button>
     </div>
    </div>
  );
};

