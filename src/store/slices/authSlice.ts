//@ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (username, { rejectWithValue }) => {
    const allowedUsers = ['admin', 'user12'];
    if (allowedUsers.includes(username)) {
      return username;
    } else {
      return rejectWithValue('Invalid username');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
