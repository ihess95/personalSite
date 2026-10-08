import React from "react";
import { projectComponent } from "../projects";

interface ProjectDisplayHandlerProps {
  projectLabel: string;
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const ProjectDisplayHandler: React.FC<ProjectDisplayHandlerProps> = ({
  projectLabel,
  mode = "full",
}) => {
  const ProjectComponent = projectComponent(projectLabel);

  if (!ProjectComponent) {
    return <div>Project "{projectLabel}" not found</div>;
  }

  // Pass the mode prop to the project component
  return <ProjectComponent mode={mode} />;
};

export default ProjectDisplayHandler;
