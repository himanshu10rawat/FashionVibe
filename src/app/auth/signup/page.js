import SignupForm from "@/components/forms/SignupForm";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
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
        <div className="w-1/2 p-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold uppercase text-pink-500">
            Create Account
          </h1>
          <SignupForm />
          <p className="text-gray-800 transition-colors ease-in-out duration-300 hover:text-pink-500">
            <Link href={"/auth/login"}>Already have an account? Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
