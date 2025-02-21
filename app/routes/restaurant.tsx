import type { Route } from ".react-router/types/app/+types/root";
import { RestaurantPage } from "src/components/RestrauntPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull : Restaurant" },
    { name: "description", content: "Restaurant of Spoonfull" },
  ];
}

export default function Login() {
  return <RestaurantPage />;
}
