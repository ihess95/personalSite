import React from "react";

interface ProjectDisplayHandlerProps {
  projectLabel: string;
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const ProjectDisplayHandler: React.FC<ProjectDisplayHandlerProps> = ({
  projectLabel,
  mode = "full",
}) => {
  // Use the same file reading logic as NavBar
  const recordFiles = import.meta.glob("./portfolioProjects/*.tsx", {
    eager: true,
  });

  // Find the matching file (case-insensitive)
  const matchingFile = Object.entries(recordFiles).find(([path]) => {
    const filename = path.split("/").pop()?.replace(".tsx", "") ?? "";
    return filename.toLowerCase() === projectLabel.toLowerCase();
  });

  if (!matchingFile) {
    return <div>Project "{projectLabel}" not found</div>;
  }

  const ProjectComponent = (matchingFile[1] as any).default;

  if (!ProjectComponent) {
    return <div>Component not found in "{projectLabel}"</div>;
  }

  // Pass the mode prop to the project component
  return <ProjectComponent mode={mode} />;
};

export default ProjectDisplayHandler;
