import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserAPI } from "../services/RegisterUserApi"; // Importa la función para enviar los datos al backend

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    const response = await registerUserAPI(userData); // Llama a la función que envía los datos al backend
    return response.data; // Devuelve los datos del usuario registrado (si es necesario)
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        // Puedes actualizar el estado si es necesario después de un registro exitoso
      })
      .addCase(registerUser.rejected, (state, action) => {
        // Puedes manejar errores o actualizar el estado si ocurre un error en el registro
      });
  },
});

export default userSlice.reducer;
