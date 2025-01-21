import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Header } from "./components/header/header";
import { Favorites } from "./pages/favorites/favorites";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteCat } from "./store/catsSlice";
import { Error } from "./components/error/error";

function App() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cats.favorites);

  const loadFavoritesFromLocalStorage = () => {
    const data = localStorage.getItem("favoriteCats");
    return data ? JSON.parse(data) : [];
  };

  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem("favoriteCats", JSON.stringify(favorites));
  };

  useEffect(() => {
    const savedFavorites = loadFavoritesFromLocalStorage();
    savedFavorites.forEach((cat) => {
      if (!favorites.some((fav) => fav.id === cat.id)) {
        dispatch(toggleFavoriteCat(cat));
      }
    });
  }, [dispatch, favorites]);

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error>Такая страница не существует</Error>} />
      </Routes>
    </>
  );
}

export default App;
