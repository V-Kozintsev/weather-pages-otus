import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
  history: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    },
    fetchWeatherFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addCityToHistory: (state, action) => {
      const { city, temp } = action.payload;
      if (!state.history.some((item) => item.city === city)) {
        state.history.push({ city, temp });
        localStorage.setItem("weatherHistory", JSON.stringify(state.history));
      }
    },
    deleteHistory: (state) => {
      state.history = [];
      localStorage.removeItem("weatherHistory");
    },
    loadHistoryFromStorage: (state) => {
      const storedHistory = localStorage.getItem("weatherHistory");
      if (storedHistory) {
        state.history = JSON.parse(storedHistory);
      }
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  addCityToHistory,
  deleteHistory,
  loadHistoryFromStorage,
} = weatherSlice.actions;

export default weatherSlice.reducer;
