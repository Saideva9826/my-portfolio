"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import Button from "../Button";
import ProjectComponent from "./Project";
import { Project } from "@/types/Project";
import { projects as staticProjects } from "@/src/content/projects";

const INITIAL_VISIBLE_PROJECTS = 6;
const PROJECTS_INCREMENT = 3;

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(INITIAL_VISIBLE_PROJECTS);

  // Use static projects if no data from Sanity
  const displayProjects = projects && projects.length > 0 ? projects : staticProjects;

  const loadMoreProjects = () => {
    setVisibleProjectsLength((prev) => {
      const next = prev + PROJECTS_INCREMENT;
      return next >= displayProjects.length ? displayProjects.length : next;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {displayProjects.slice(0, visibleProjectsLength).map((project, idx) => {
          return <ProjectComponent key={project.title + idx} project={project} />;
        })}
      </div>
      {displayProjects.length > visibleProjectsLength && (
        <Button
          text={`Load more (${displayProjects.length - visibleProjectsLength})`}
          type="secondary"
          icon="loadMore"
          onClick={loadMoreProjects}
        />
      )}
    </div>
  );
}
