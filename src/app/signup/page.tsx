import { SignupForm } from "@/components/custom/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Pixel Crafters",
  description: "Create your Pixel Crafters account",
};

export default function SignupPage() {
  return <SignupForm />;
}