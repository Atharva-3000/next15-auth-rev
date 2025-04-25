"use client";

import { logIn, logOut } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <div className="flex justify-center pt-10">
      <button className="bg-gray-900 p-2 rounded-lg font-medium font-sans text-white hover:bg-gray-700"
        onClick={() => logIn()}>Sign in With Github</button>
    </div>
  );
}

export const SignOutButton = () => {
    return (
      <div className="flex justify-center pt-10">
        <button className="bg-gray-900 p-2 rounded-lg font-medium font-sans text-white hover:bg-gray-700"
          onClick={() => logOut()}>Sign out</button>
      </div>
    )
  }