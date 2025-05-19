import { createSlice } from "@reduxjs/toolkit";
interface Category {
  categoryType: string;
}
const initialState: Category = {
  categoryType: "",
};
const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
  },
});

export const {setCategoryType} = CategorySlice.actions
export default CategorySlice.reducer