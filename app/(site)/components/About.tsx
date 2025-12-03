"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/styles/About.module.scss";
import { aboutContent } from "@/src/content/about";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Avatar Section */}
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarGradient} />
            <Image
              src="/saideva-avatar.svg"
              alt="Profile Avatar"
              width={250}
              height={250}
              className={styles.avatar}
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          {/* What I Do */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeading}>{aboutContent.whatIDo.title}</h3>
            <p className={styles.description}>{aboutContent.whatIDo.description}</p>
            <ul className={styles.highlightsList}>
              {aboutContent.whatIDo.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* My Journey */}
          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeading}>{aboutContent.myJourney.title}</h3>
            <p className={styles.description}>{aboutContent.myJourney.description}</p>
            <ul className={styles.highlightsList}>
              {aboutContent.myJourney.milestones.map((milestone, idx) => (
                <li key={idx}>{milestone}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
