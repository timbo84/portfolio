'use client';

import { useParams } from 'next/navigation';
import styles from './project.module.css';
import Navbar from '@/components/navbar';

const projectData = {
  evince: {
    title: 'Evince',
    description: 'A privacy-first analytics tool that respects user data while providing insights.',
    techStack: ['Next.js', 'TypeScript', 'Vercel', 'Tailwind CSS'],
    hoursWorked: 120,
    prosCons: {
      pros: ['Optimized privacy features', 'Scalable cloud infrastructure', 'Intuitive UI'],
      cons: ['Complex integration process', 'Limited customization options'],
    },
    hardestPart: 'Building a robust authentication system while keeping user data anonymous.',
    solution: 'Implemented JWT-based authentication combined with hashed identifiers for secure data handling.',
  },
  kykyFitness: {
    title: 'KyKy Fitness',
    description: 'A cutting-edge fitness tracker with community-based engagement.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    hoursWorked: 150,
    prosCons: {
      pros: ['Engaging social features', 'Detailed workout analytics', 'Mobile-friendly UI'],
      cons: ['Data syncing issues', 'High server costs at scale'],
    },
    hardestPart: 'Ensuring real-time synchronization of user workout data across multiple devices.',
    solution: 'Used WebSockets and database caching strategies to reduce sync errors and improve performance.',
  },
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (<>
  <Navbar />
  <section className={styles.projectPage}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>
      <h3>Tech Stack</h3>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.tech}>{tech}</span>
        ))}
      </div>
      <h3>Hours Worked</h3>
      <p>{project.hoursWorked} hours</p>
      <h3>Pros & Cons</h3>
      <div className={styles.prosCons}>
        <div>
          <h4>Pros</h4>
          <ul>
            {project.prosCons.pros.map((pro) => <li key={pro}>{pro}</li>)}
          </ul>
        </div>
        <div>
          <h4>Cons</h4>
          <ul>
            {project.prosCons.cons.map((con) => <li key={con}>{con}</li>)}
          </ul>
        </div>
      </div>
      <h3>Hardest Part</h3>
      <p>{project.hardestPart}</p>
      <h3>How I Overcame It</h3>
      <p>{project.solution}</p>
    </section>
  </>
    
  );
}