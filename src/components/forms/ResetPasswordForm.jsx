"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../validations/resetPasswordSchema";

export default function ResetPasswordForm() {
  const [passwordVisible, setPasswordVisible] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-3">
        <div className="relative">
          <input
            id="newPassword"
            autoComplete="new-password"
            className="py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full rounded-sm bg-white peer"
            type={`${passwordVisible.newPassword ? "text" : "password"}`}
            placeholder=" "
            {...register("newPassword")}
          />
          <label
            htmlFor="newPassword"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
          >
            Enter new password
          </label>
          <div className="absolute flex items-center right-2 top-1/2 -translate-y-1/2">
            <button
              aria-label={`${passwordVisible.newPassword ? "Hide password" : "Show Password"}`}
              className="cursor-pointer"
              type="button"
              onClick={() =>
                setPasswordVisible((prev) => ({
                  ...prev,
                  newPassword: !prev.newPassword,
                }))
              }
            >
              {passwordVisible.newPassword ? (
                <Eye width={16} height={16} strokeWidth={1} />
              ) : (
                <EyeOff width={16} height={16} strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
        {errors.newPassword && (
          <p className="text-red-600 mt-1 text-sm">
            {errors.newPassword.message}
          </p>
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
      <button
        type="submit"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer capitalize"
        aria-label="Send Reset Link Button"
      >
        reset password
      </button>
    </form>
  );
}
