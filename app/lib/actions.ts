// this is where the actions need to sit and wonder

import { signIn } from "@/app/api/auth/auth";

export async function authenticateEmailPaswsord(a: any, b: any) {
  console.log("IN AUTHENTICATE WITH EMAIL PASSWORD");
  console.log(a);
  console.log(b);
  try {
    await signIn("credentials", b);
    throw new Error("Ammple");
  } catch (e) {
    console.log(e);
  }
}

export async function authenticateWithGoogle(a: any, b: any) {
  console.log(a);
  console.log(b);
  try {
    await signIn("google", b);
  } catch (e) {
    console.log(e);
  }
}
