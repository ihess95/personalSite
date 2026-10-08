// Every project on the shelf. Drop a `.tsx` into
// components/portfolioProjects and the glob below turns it into a sleeve, a
// record and a panel.
export type ProjectMode = "abstract" | "reflection" | "full" | "sources";

/** The order the tabs appear in. Every project has all four. */
export const MODE_ORDER: ProjectMode[] = [
  "abstract",
  "reflection",
  "full",
  "sources",
];

// Section names for the coursework, which really is a set of papers.
const DEFAULT_SECTIONS: Record<ProjectMode, string> = {
  abstract: "Abstract",
  reflection: "Reflection",
  full: "Full Text",
  sources: "Sources",
};

type ProjectModule = {
  default?: React.ComponentType<{ mode?: ProjectMode }>;
  /** A project may rename its own sections. Book Music does. */
  sections?: Partial<Record<ProjectMode, string>>;
};

const MODULES = import.meta.glob("./components/portfolioProjects/*.tsx", {
  eager: true,
}) as Record<string, ProjectModule>;

const labelOf = (path: string) =>
  path.split("/").pop()?.replace(".tsx", "") ?? "";

// Sorted, so shelf order and the colour assignment that follows it are
// stable rather than left to the bundler's enumeration.
export const PROJECT_LABELS: string[] = Object.keys(MODULES)
  .map(labelOf)
  .sort();

const moduleFor = (label: string): ProjectModule | undefined =>
  Object.entries(MODULES).find(
    ([path]) => labelOf(path).toLowerCase() === label.toLowerCase()
  )?.[1];

/** The component for a label, matched case-insensitively. */
export const projectComponent = (label: string) =>
  moduleFor(label)?.default ?? null;

/** What this project calls each of its four sections. */
export const sectionsFor = (label: string): Record<ProjectMode, string> => ({
  ...DEFAULT_SECTIONS,
  ...(moduleFor(label)?.sections ?? {}),
});
