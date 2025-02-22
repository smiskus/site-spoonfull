import type { Route } from ".react-router/types/app/+types/root";
import { ExperiencesPage } from "src/components/ExperiencesPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull : Experience" },
    { name: "description", content: "Experience of Spoonfull" },
  ];
}

export default function Experiences() {
  return <ExperiencesPage />;
}
