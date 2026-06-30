import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="w-full h-dvh bg-white p-10">
      <div className="flex h-full max-w-220 mx-auto bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-200 border border-gray-200">
        <div className="relative h-full w-1/2 ">
          <Image
            src={"/auth-banner.jpg"}
            alt="Fashion banner"
            fill
            sizes="100%"
            className="object-cover object-top"
          />
        </div>
        <div className="w-1/2 p-10 flex flex-col items-center justify-center gap-5">
          <div>
            <p className="text-3xl font-bold uppercase text-pink-500">
              Welcome Back 👋
            </p>
            <h1 className="text-center font-bold text-pink-500">
              Login to continue shopping
            </h1>
          </div>
          <LoginForm />
          <p className="text-gray-800 transition-colors ease-in-out duration-300 hover:text-pink-500">
            <Link href={"/auth/signup"}>
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
