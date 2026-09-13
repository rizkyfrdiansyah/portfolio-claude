import { profile } from '../data/profile'
import ProjectCard from './ProjectCard'

// `.map()` mengubah setiap item di array menjadi satu <ProjectCard />.
// React butuh `key` yang unik agar bisa melacak setiap item di daftar.
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {profile.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
