import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function SignIn() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    User: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="w-full h-full pt-10 pb-44 bg-slate-800">
        <div class="mx-auto w-96 px-4 py-8 bg-slate-500   rounded-md">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Log In </h1>
          </div>

          <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label for="User" class="sr-only">
                User
              </label>
              <div class="relative">
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="User"
                  name="User"
                />
              </div>
            </div>
            <div>
              <label for="Password" class="sr-only">
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  name="Password"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Log In
              </button>
            </div>
            <p>
              if you don´t have an account{" "}
              <Link className="text-white" href="/signin">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
