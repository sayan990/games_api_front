import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserAPI } from "../services/RegisterUserApi"; // Importa la función para enviar los datos al backend

export const registerUser = createAsyncThunk(
  "",
  async (userData) => {
    const response = await registerUserAPI(userData); // Llama a la función que envía los datos al backend
    return response; // Devuelve los datos del usuario registrado (si es necesario)
  }
);

const registerSlice = createSlice({
  name: "user",
  initialState: {errorUser: [], userData:[], status: []},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        // Puedes actualizar el estado si es necesario después de un registro exitoso
        
        console.log("el usuario se creo con exito")
        return {...state,
          status: action.meta.requestStatus,
          userData: action.payload}
      })
      .addCase(registerUser.rejected, (state, action) => {
        // Puedes manejar errores o actualizar el estado si ocurre un error en el registro
        console.log("el usuario no se registro")
        return {...state,
          status: action.meta.requestStatus,
          errorUser: action.error
          }
      });
  },
});

export default registerSlice.reducer;
