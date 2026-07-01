"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../validations/forgotPasswordSchema";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-5">
        <div className="relative">
          <input
            type="email"
            id="email"
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
      <button
        type="submit"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer capitalize"
        aria-label="Send Reset Link Button"
      >
        send reset link
      </button>
    </form>
  );
}
