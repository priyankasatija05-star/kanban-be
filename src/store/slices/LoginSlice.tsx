import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
}

const initialState: UserState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;
