import { createAsyncThunk } from "@reduxjs/toolkit";
// urls
import * as URLS from "../../utils/urls";
// axios
import axios from "../../utils/axios";

//---------------------------------------------------------------


// GET =>  get teacher
export const getTeacher = createAsyncThunk(
    "teacher/getTeacher",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(URLS.teacherURL);
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);