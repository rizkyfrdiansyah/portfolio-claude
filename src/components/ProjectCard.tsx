import type { Project } from '../data/profile'

// "Props" = data yang dikirim ke komponen dari luar, seperti parameter fungsi.
// Di sini kita bilang: ProjectCard menerima satu `project` bertipe Project.
type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {/* `&&` artinya: tampilkan link HANYA kalau project.link ada isinya */}
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          Lihat proyek →
        </a>
      )}
    </article>
  )
}

export default ProjectCard
