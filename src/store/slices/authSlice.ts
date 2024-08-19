import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

type AuthState = {
  user: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const login = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
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
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
