import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchFromStorage = () => {
  let movies = localStorage.getItem("movies");
  if (movies) {
    return JSON.parse(localStorage.getItem("movies"));
  } else {
    return [];
  }
};
const saveToStorage = (movie) => {
  localStorage.setItem("movies", JSON.stringify(movie));
};

const ApiKey = "e929c13d2eedb65bf39f4c45a114b32e";

export const fetchAllMovies = createAsyncThunk("fetchAllMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e929c13d2eedb65bf39f4c45a114b32e&language=tr-TR&page=1"
  );
  const data = await response.json();
  return data.results;
});
export const fetchNewMovies = createAsyncThunk("fetchNewMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e929c13d2eedb65bf39f4c45a114b32e&language=tr-TR&page=1"
  );
  const data = await response.json();
  return data.results;
});
export const fetchUpComing = createAsyncThunk("fetchUpComing", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e929c13d2eedb65bf39f4c45a114b32e&language=tr-TR&page=1"
  );
  const data = await response.json();
  return data.results;
});
export const searchMovies = createAsyncThunk("searchMovies", async (searchTerm) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e929c13d2eedb65bf39f4c45a114b32e&query=${searchTerm}`
  );
  const data = await response.json()
  return data.results
});

const initialState = {
  homePageMovies: [],
  upComing: [],
  nowPlaying: [],
  search:[],
  favoriteMovies: fetchFromStorage(),
  notification: "",
  status: "idle",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const isFavMovie = state.favoriteMovies.some(
        (item) => item.id === action.payload.id
      );

      if (isFavMovie) {
        state.notification = "Bu Film Zaten Favorilerde";
      } else {
        const newMovie = {
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.poster_path,
          average: action.payload.vote_average,
          date: action.payload.release_date,
        };
        state.favoriteMovies = [...state.favoriteMovies, newMovie];
        saveToStorage(state.favoriteMovies);
        state.notification = "Favorilere Eklendi";
      }
    },
    removeToFavorite: (state, action) => {
      const tempRemoveMovie = state.favoriteMovies.filter(
        (item) => item.id !== action.payload.id
      );
      state.favoriteMovies = tempRemoveMovie;
      saveToStorage(state.favoriteMovies);
      state.notification = "Favorilerden Çıkarıldı";
    },
    clearNotification: (state, action) => {
      state.notification = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.homePageMovies = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
      })
      .addCase(fetchNewMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUpComing.fulfilled, (state, action) => {
        state.upComing = action.payload;
      })
      .addCase(fetchUpComing.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.search = action.payload;
        state.status = "success";
      })
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
  },
});
export const { addToFavorite, clearNotification, removeToFavorite } =
  moviesSlice.actions;
export default moviesSlice.reducer;
