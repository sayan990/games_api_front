import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { registerUser } from "@/redux/features/UserSlice";
//import {redirect} from "next/navigation"
import { useRouter } from "next/navigation";


export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter()

  const [input, setInput] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(registerUser(input)); // Llama a la acción para enviar los datos al backend
      alert("usuario creado con exito")
      //redirect("/home")
      router.push("/home")
    } catch (error) {
      // Maneja errores si es necesario
      console.log(error)
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-full pt-10 pb-36 bg-slate-800 ">
        <div className="mx-auto w-96 px-4 py-8 bg-slate-500   rounded-md">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Sign In </h1>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="User" className="sr-only">
                User
              </label>
              <div className="relative">
                <input
                  value={input.name}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="User"
                  name="name"
                />
              </div>
            </div>
            <div>
              <label for="Mail" class="sr-only">
                Mail
              </label>
              <div class="relative">
                <input
                  value={input.mail}
                  onChange={handleInputChange}
                  type="text"
                  name="mail"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div>
              <label for="Password" class="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  value={input.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign In
              </button>
            </div>
            <p>
              you already have an account?{" "}
              <Link className="text-white" href="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
