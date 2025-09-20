"use client";

import { Briefcase } from "lucide-react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AuthForm({ origin = "SignIn" }) {
    const handleLogin = () => {
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <div className="w-full md:w-[400px] border border-gray-200 shadow-lg rounded-lg flex flex-col gap-3 p-3 items-center justify-center">
      <Briefcase size="60" />
      <h5 className="font-bold text-xl">
        {origin == "SignIn" ? "Welcome Back..." : "Welcome to CarrerConnect"}
      </h5>
      <p>Find the best jobs around the Globe</p>
      <Button 
      className="w-full"
      onClick={handleLogin}>
        <Icons.Google />
        {origin == "SignIn" ? "Sign In with Google" : "Sign Up with Google"}
      </Button>
      {
        origin == "SignIn" ? 
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
