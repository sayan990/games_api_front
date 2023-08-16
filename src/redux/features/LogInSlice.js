import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInUserAPI } from "../services/RegisterUserApi"; // Importa la función para enviar los datos al backend

export const logInUser = createAsyncThunk(
  "",
  async (userData) => {
    const response = await logInUserAPI(userData); // Llama a la función que envía los datos al backend
    return response; // Devuelve los datos del usuario registrado (si es necesario)
  }
);

const logInSlice = createSlice({
  name: "user",
  initialState: {errorUser: [], userData:[], status: []},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInSlice.fulfilled, (state, action) => {
        // Puedes actualizar el estado si es necesario después de un registro exitoso
        
        console.log("el usuario se logeo con exito")
        return {...state,
          status: action.meta.requestStatus,
          userData: action.payload}
      })
      .addCase(logInSlice.rejected, (state, action) => {
        // Puedes manejar errores o actualizar el estado si ocurre un error en el registro
        console.log("el usuario no se pudo logear")
        return {...state,
          status: action.meta.requestStatus,
          errorUser: action.error
          }
      });
  },
});

export default logInSlice.reducer;
