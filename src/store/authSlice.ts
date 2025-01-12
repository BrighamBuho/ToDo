// /src/store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,  // Estado inicial de autenticación
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.logged = true;  // El usuario se ha logueado
    },
    logout(state) {
      state.logged = false; // El usuario se ha deslogueado
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
