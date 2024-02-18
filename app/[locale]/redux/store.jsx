//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
// slices
import teacherReducer from "./slices/teacherSlice";

const rootReducer = combineReducers({
  teacher: teacherReducer,
},);

export const store = configureStore({
  reducer: rootReducer,

 });
