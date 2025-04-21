'use client';

import { motion } from "framer-motion"; // Import Framer Motion for animations
import styles from "./hero.module.css";
import SkillsSection from "./skills";

export default function HeroComponent() {
  return (
    <div className={styles.hero}>
     
      <div className={styles.content}>
        <motion.img
          src="/tim1.jpg"
          alt="Timothy Roberts"
          className={styles.image}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Timothy Roberts: Crafting Scalable Web Experiences
        </motion.h1>
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          Specializing in responsive designs, secure APIs, and modular architecture.
        </motion.p>
        <motion.button
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          Explore My Projects
        </motion.button>
        {/* <SkillsSection /> */}
      </div>
    </div>
  );
}