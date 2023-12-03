// import { createSlice } from '@reduxjs/toolkit';

// export interface controlledState {
//   name: string,
//   age: number,
//   email: string,
//   password: string,
//   passwordCheck: string,
//   gender: 'male' | 'female',
//   accept: boolean,
//   //  img: string,
//   country: string

// }

// const initialState: controlledState = {
//   name: '',
//   age: 0,
//   email: '',
//   password: '',
//   passwordCheck: '',
//   gender: 'male',
//   accept: false,
//   //  img: '',
//   country: ''
// };

// export const controlledSlice = createSlice({
//   name: 'controlled',
//   initialState,
//   reducers: {
//     setControlled: (state, { payload }: { payload: controlledState }) => {
//       // state[key] = payload;
//     },
//   },
// });

// export const { setControlled } = controlledSlice.actions;

// export default controlledSlice.reducer;