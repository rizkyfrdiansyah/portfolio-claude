import { profile } from '../data/profile'

// Kurung kurawal `{ ... }` di JSX dipakai untuk menampilkan nilai dari JavaScript.
function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">Halo, saya</p>
      <h1>{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <p className="bio">{profile.bio}</p>
    </section>
  )
}

export default About
