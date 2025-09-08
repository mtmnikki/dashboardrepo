"use client";

import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUp />
    </div>
  );
}
