import React from "react";
import DynamicIcon from "@/lib/icons";
import styles from "@/app/styles/Header.module.scss";
import { Social } from "@/types/Social";

function SocialButton({ social }: { social: Social }) {
  if (!social) return null;
  
  const href = social.name === "Email" ? `mailto:${social.link}` : social.link;
  
  return (
    <a
      href={href}
      target={social.name === "Email" ? undefined : "_blank"}
      rel={social.name === "Email" ? undefined : "noreferrer"}
      title={social.name}
      className={styles.socialButton}>
      <DynamicIcon name={social.icon} />
    </a>
  );
}

export default SocialButton;
