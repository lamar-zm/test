"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { getTeacher } from "../services/teacher";

const initialState = {
  isLoading: 0,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
});


export default teacherSlice.reducer;
