import { LoginForm } from "@/components/custom/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Pixel Crafters",
  description: "Sign in to your Pixel Crafters account",
};

export default function LoginPage() {
  return <LoginForm />;
}