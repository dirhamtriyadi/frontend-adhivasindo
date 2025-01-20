import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ModulState } from "../types/modul";
import { getModul } from "../services/api";

export const fetchModul = createAsyncThunk(
    "modul/fetch",
    async (page: number = 1, { rejectWithValue }) => {
        try {
            const data = await getModul(page);
            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }   
);

const initialState: ModulState = {
  modul: [],
  isLoading: false,
  error: null,
  meta: {
    current_page: 1,
    last_page: 1,
    total: 0,
  },
};

const modulSlice = createSlice({
    name: "modul",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchModul.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchModul.fulfilled, (state, action) => {
            state.isLoading = false;
            state.modul = action.payload.data;
            state.meta = action.payload.meta;
        });
        builder.addCase(fetchModul.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    },
});

export default modulSlice.reducer;