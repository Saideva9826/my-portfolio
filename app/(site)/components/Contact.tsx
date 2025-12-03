"use client";
import React from "react";
import styles from "@/app/styles/Contact.module.scss";
import { profile } from "@/src/content/profile";
import DynamicIcon from "@/lib/icons";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.heading}>Let's Connect</h2>
            <p className={styles.description}>
              I'm always open to new opportunities, interesting projects, and collaboration. Whether you want to discuss data science, machine learning, or just have a conversation, feel free to reach out!
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <a
              href={`mailto:${profile.contact.email}`}
              className={`${styles.button} ${styles.emailButton}`}
            >
              <DynamicIcon name="email" className={styles.buttonIcon} />
              <span>Send Email</span>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.linkedinButton}`}
            >
              <DynamicIcon name="linkedin" className={styles.buttonIcon} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
