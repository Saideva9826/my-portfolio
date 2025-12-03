"use client";
import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import SVGShape from "./SVGShape";
import Button from "./Button";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { profile } from "@/src/content/profile";
import { motion, Variants } from "framer-motion";

// No props needed, use static profile

export default function Hero() {
  const animationVariants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.bg} id="hero">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.div
            className={`${styles.containerItem} ${styles.headingContainer}`}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={animationVariants}
          >
            <div className={styles.subHeading}>
              <span>{profile.title}</span>
            </div>
            <h1 className={styles.heading}>{profile.name}</h1>
            <div className={styles.subHeading}>
              <span>{profile.summary}</span>
            </div>
            <div className={styles.buttonsContainer}>
              <Button
                key="Resume"
                icon="resume"
                text="Resume"
                link="/resume.pdf"
                type="primary"
              />
              <Button
                key="LinkedIn"
                icon="linkedin"
                text="LinkedIn"
                link={profile.contact.linkedin}
                type="secondary"
              />
            </div>
          </motion.div>
          <motion.div 
            className={`${styles.containerItem} ${styles.imageContainer}`}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={animationVariants}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageGradient} />
              <Image
                src="/saideva.svg"
                alt={profile.name}
                width={300}
                height={300}
                priority
                className={styles.heroImage}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <SVGShape />
    </div>
  );
}

