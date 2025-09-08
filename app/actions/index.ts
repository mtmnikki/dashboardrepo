"use server";

import { redirect } from "next/navigation";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  const provider = action === "google" || action === "github" ? action : null;
  if (provider) {
    redirect(`/auth/login?provider=${provider}`);
  }
  redirect("/auth/login");
}

// Prefer using <SignOutButton /> from "@clerk/nextjs" on the client.
export async function doLogout() {
  redirect("/auth/login");
}
