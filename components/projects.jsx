'use client';

import { useRouter } from 'next/navigation';
import styles from './projects.module.css';

const projects = [
  {
    id: 'evince',
    title: 'Evince',
    description: 'A privacy-focused analytics platform.',
    techStack: ['Next.js', 'TypeScript', 'Vercel', 'Tailwind CSS'],
    image: '/evince.png',
  },
  {
    id: 'kykyFitness',
    title: 'KyKy Fitness',
    description: 'A modern fitness tracking app.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/kyky.jpg',
  },
];

export default function Projects() {
  const router = useRouter();

  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard} onClick={() => router.push(`/projects/${project.id}`)}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}