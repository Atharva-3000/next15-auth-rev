"use server";
import { auth } from "@/auth";
import { SignInButton, SignOutButton } from "./components/sign-in-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    return (
      <div className="flex flex-col items-center justify-center pt-24 gap-6">
        <Link href="/user-info" className="bg-gray-900 p-2 rounded-lg font-medium font-sans text-white hover:bg-gray-700">
          User Info
        </Link>
        <SignOutButton/>
      </div>
    );
  }
  return (
    <div >
      {" "}
      <p className="text-center pt-12">You are not logged in</p>
      <SignInButton />
    </div>
  );
}
