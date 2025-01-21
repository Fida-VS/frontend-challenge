import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  loading: false,
  error: null,
  favorites: [],
};

export const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_LjCHMHeLgG2fUMcwGIjm1BvVXJL9sLC9ttOh2AnOucVPy1PKixagTuSQvSnCwSP4",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    toggleFavoriteCat: (state, action) => {
      const alreadyExists = state.favorites.some(
        (fav) => fav.id === action.payload.id
      );
      if (alreadyExists) {
        state.favorites = state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
      saveFavoritesToLocalStorage(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.loading = false;
      });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favoriteCats", JSON.stringify(favorites));
};

export const { toggleFavoriteCat, toggleClick } = catsSlice.actions;

export default catsSlice.reducer;
