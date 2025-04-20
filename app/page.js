import Hero from "@/components/hero";
import SkillsSection from "@/components/skills";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <video
        src="/waves.mp4"
        autoPlay
        loop
        muted
        className={styles.video}
      ></video>
      <Hero />
      {/* Add other components here */}
    </div>
  );
}