import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUserList: [],
};
const leaveSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addNewLeave: (state, action) => {
      state.allUserList = [...state.allUserList, action.payload];
    },
    deleteLeave: (state, action) => {
      state.allUserList = state.allUserList.filter(
        (leave, index) => index !== action.payload
      );
    },
  },
});
export const { addNewLeave, deleteLeave } = leaveSlice.actions;
export default leaveSlice.reducer;
