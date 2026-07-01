"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "../validations/signupSchema";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termAndCondition: false,
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
            id="fullName"
            autoComplete="name"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            type="text"
            placeholder=" "
            {...register("fullName")}
          />
          <label
            htmlFor="fullName"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
          >
            Enter full name
          </label>
        </div>
        {errors.fullName && (
          <p className="text-red-600 mt-1 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div className="w-full mb-3">
        <div className="relative">
          <input
            id="email"
            autoComplete="email"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            type="email"
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
      <div className="w-full mb-3">
        <div className="relative">
          <input
            id="password"
            autoComplete="new-password"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            type={`${passwordVisible.password ? "text" : "password"}`}
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
              aria-label={`${passwordVisible.password ? "Hide password" : "Show Password"}`}
              className="cursor-pointer"
              type="button"
              onClick={() =>
                setPasswordVisible((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            >
              {passwordVisible.password ? (
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
      <div className="w-full mb-5">
        <div className="relative">
          <input
            id="confirmPassword"
            autoComplete="new-password"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            type={`${passwordVisible.confirmPassword ? "text" : "password"}`}
            placeholder=" "
            {...register("confirmPassword")}
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
          >
            Confirm password
          </label>
          <div className="absolute flex items-center cursor-pointer right-2 top-1/2 -translate-y-1/2">
            <button
              aria-label={`${passwordVisible.confirmPassword ? "Hide password" : "Show Password"}`}
              className="cursor-pointer"
              type="button"
              onClick={() =>
                setPasswordVisible((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
            >
              {passwordVisible.confirmPassword ? (
                <Eye width={16} height={16} strokeWidth={1} />
              ) : (
                <EyeOff width={16} height={16} strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-600 mt-1 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="w-full mb-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("termAndCondition")}
            id="termAndCondition"
            className="w-4 h-4"
          />
          <label htmlFor="termAndCondition" className="text-gray-600">
            I agree to Terms & Conditions
          </label>
        </div>
        {errors.termAndCondition && (
          <p className="text-red-600 mt-1 text-sm">
            {errors.termAndCondition.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        aria-label="Create account"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer"
      >
        Create Account
      </button>
    </form>
  );
}
