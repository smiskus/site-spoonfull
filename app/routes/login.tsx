import type { Route } from ".react-router/types/app/+types/root";
import { LoginPage } from "src/components/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull : Login" },
    { name: "description", content: "Login page of Spoonfull" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
