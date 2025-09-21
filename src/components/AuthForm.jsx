"use client";

import { Briefcase } from "lucide-react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function AuthForm({ origin = "SignIn" }) {
    const handleLogin = async () => {
        try {
            await signIn("google")
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <div className="w-full md:w-[400px] border border-gray-200 shadow-lg rounded-lg flex flex-col gap-3 p-3 items-center justify-center">
      <Briefcase size="60" />
      <h5 className="font-bold text-xl">
        {origin == "signIn" ? "Welcome Back..." : "Welcome to CarrerConnect"}
      </h5>
      <p>Find the best jobs around the Globe</p>
      <Button 
      className="w-full"
      onClick={handleLogin}>
        <Icons.Google />
        {origin == "signIn" ? "Sign In with Google" : "Sign Up with Google"}
      </Button>
      {
        origin == "signIn" ? 
        <span className="flex items-center gap-1 text-sm">
            New to CarrerConnect?
            <Link href="/sign-up" className="font-bold">Sign Up</Link>
        </span>
        :
        <span className="flex items-center gap-1 text-sm">
            Already have an account?
            <Link href="/sign-in" className="font-bold">Sign In</Link>
        </span>
      }
    </div>
  );
}
