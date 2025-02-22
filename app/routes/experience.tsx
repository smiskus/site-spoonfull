import type { Route } from ".react-router/types/app/+types/root";
import { ExperiencePage } from "src/components/ExperiencePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull : Experience" },
    { name: "description", content: "Experience of Spoonfull" },
  ];
}

export default function Experience() {
  return <ExperiencePage />;
}
