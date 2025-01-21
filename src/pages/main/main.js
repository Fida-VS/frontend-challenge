import { useDispatch, useSelector } from "react-redux";
import styles from "./main.module.css";
import { useEffect } from "react";
import { fetchCats } from "../../store/catsSlice";
import { Card } from "../../components/card/card";
import { Loader } from "../../components/loader/loader";


export const Main = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCats());
        
    }, [dispatch]);

    const cats = useSelector(state => state.cats.cats);
    const { loading, error } = useSelector(state => state.cats);


  return (
    <div className={styles.main}>
      {loading && <Loader />}
      {error && <div className={styles.error}>An error occured: {error}</div>}
      {cats.map(
							(cat) => (
								<Card 
                key={cat.id}
                {...cat}
                
                />
							)
						)}
    </div>
  );
};