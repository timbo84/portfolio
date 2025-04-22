import Hero from "@/components/hero";
import SkillsSection from "@/components/skills";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <video
        src="/waves.mp4"
        autoPlay
        loop
        muted
        className={styles.video}
      ></video> */}
      <Navbar />
      <Hero />
      <SkillsSection /> 
      <Projects />
      {/* Add other components here */}
    </div>
  );
}