'use client';

import { motion } from "framer-motion";
import styles from "./skills.module.css";

export default function SkillsSection() {
  const skills = [
    { name: "Next.js", icon: "/nextdotjs.svg", proficiency: 90 },
    { name: "TypeScript", icon: "/typescript.svg", proficiency: 85 },
    { name: "Tailwind CSS", icon: "/tailwindcss.svg", proficiency: 80 },
    { name: "React", icon: "/react.svg", proficiency: 95 },
    { name: "Vercel", icon: "/vercel.svg", proficiency: 90 },
  ];

  return (
    <section className={styles.skills}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <div className={styles.skillDetails}>
              <p className={styles.skillName}>{skill.name}</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className={styles.percentage}>{skill.proficiency}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}