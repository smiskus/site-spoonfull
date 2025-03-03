import type { Route } from ".react-router/types/app/+types/root";
import { CreateExperiencePage } from "src/components/CreateExperiencePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spoonfull : Add Experience" },
    { name: "description", content: "Add an experience" },
  ];
}

export default function CreateExperience() {
  return <CreateExperiencePage />;
}
