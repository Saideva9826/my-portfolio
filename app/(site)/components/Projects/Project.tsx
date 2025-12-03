"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import ProjectModal from "./Modal/Modal";
import type { Project } from "@/types/Project";
import { AnimatePresence } from "framer-motion";

interface Props {
  project: Project;
}

function Project({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  // Fallback gradients for each project
  const gradientMap: { [key: string]: string } = {
    "1": "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)", // Price: Yellow to Blue
    "2": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", // Forecasting: Cyan to Pink
    "3": "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", // YOLO: Purple to Blue
    "4": "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", // RAG: Blue gradient
  };

  const projectGradient = gradientMap[project._id];

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} handleClose={closeModal} />}
      </AnimatePresence>
      <div className={styles.project} onClick={openModal}>
        {/* Image Header Section */}
        <div
          className={styles.projectImageContainer}
          style={imageError ? { background: projectGradient } : undefined}
        >
          {!imageError && (
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.projectImage}
              priority={false}
              onError={() => setImageError(true)}
            />
          )}
          {imageError && (
            <div className={styles.gradientPlaceholder}>
              <p className={styles.placeholderText}>Image coming soon</p>
            </div>
          )}
          {/* Dark gradient overlay for text readability */}
          <div className={styles.imageShadowOverlay}></div>
          {/* Project Title Overlay */}
          <h3 className={styles.projectTitleOverlay}>{project.title}</h3>
        </div>

        {/* Card Body Section */}
        <div className={styles.projectInfoContainer}>
          <div className={styles.projectInfo}>
            {project.summary && (
              <p className={styles.projectSummary}>{project.summary}</p>
            )}
            <div className={styles.projectDescription}>
              {project.impact && project.impact.length > 0 ? (
                <ul className={styles.impactList}>
                  {project.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          </div>
          <div className={styles.projectTags}>
            {(() => {
              const maxTags = 3;
              const tagsToShow = project.tags.slice(0, maxTags);
              const remainingCount = project.tags.length - maxTags;

              return (
                <>
                  {tagsToShow.map((tag) => (
                    <span key={tag._id} className={styles.projectTag}>
                      {tag.name}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span className={styles.projectTag}>+{remainingCount}</span>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
