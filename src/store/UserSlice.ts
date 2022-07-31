import { IPhotos } from "../types/IPhotos";
import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  photos: IPhotos[];
  isLoading: boolean;
  error: string;
}
const initialState: UserState = {
  photos: [],
  isLoading: false,
  error: ""
};

export const UserSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {}
});

export default UserSlice.reducer;
