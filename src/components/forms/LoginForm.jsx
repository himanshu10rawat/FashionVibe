"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/loginSchema";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full mb-3">
        <div className="relative">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            placeholder=" "
            {...register("email")}
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
          >
            Enter email
          </label>
        </div>
        {errors.email && (
          <p className="text-red-600 mt-1 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="w-full mb-5">
        <div className="relative">
          <input
            id="password"
            type={`${passwordVisible ? "text" : "password"}`}
            autoComplete="current-password"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            placeholder=" "
            {...register("password")}
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
          >
            Enter password
          </label>
          <div className="absolute flex items-center right-2 top-1/2 -translate-y-1/2">
            <button
              aria-label={`${passwordVisible ? "Hide password" : "Show password"}`}
              className="cursor-pointer"
              type="button"
              onClick={() => setPasswordVisible(false)}
            >
              {passwordVisible ? (
                <Eye width={16} height={16} strokeWidth={1} />
              ) : (
                <EyeOff width={16} height={16} strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
        {errors.password && (
          <p className="text-red-600 mt-1 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between w-full mb-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("rememberMe")}
            id="rememberMe"
            className="w-4 h-4"
          />
          <label htmlFor="rememberMe" className="text-gray-600">
            Remember Me
          </label>
        </div>
        <Link
          href={"/auth/forgot-password"}
          className="text-gray-600 transition-colors hover:text-pink-500"
        >
          Forgot Password?
        </Link>
      </div>
      <button
        aria-label="Login Button"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
