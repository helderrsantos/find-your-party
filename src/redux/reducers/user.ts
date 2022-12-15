import { createSlice } from '@reduxjs/toolkit';

export interface IUserReducer {
  id: string;
  name: string;
}

const initialState: IUserReducer = {
  id: '0a0b637b-abb8-4341-a38f-965141423bbe',
  name: 'Helder Rodrigo',
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
});

export const { reducer: UserReducer } = userSlice;
