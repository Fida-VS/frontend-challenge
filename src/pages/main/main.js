import { useDispatch, useSelector } from "react-redux";
import styles from "./main.module.css";
import { useEffect } from "react";
import { fetchCats } from "../../store/catsSlice";
import { Card } from "../../components/card/card";


export const Main = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCats());
        
    }, [dispatch]);

    const cats = useSelector(state => state.cats.cats);

    console.log(cats)

  return (
    <div className={styles.main}>
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