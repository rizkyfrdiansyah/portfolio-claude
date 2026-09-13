import { profile } from '../data/profile'

// `mailto:` membuka aplikasi email. `target="_blank"` membuka link di tab baru,
// dan `rel="noreferrer"` adalah praktik keamanan untuk link ke situs lain.
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Tertarik bekerja sama atau sekadar ingin menyapa? Hubungi saya.</p>
      <div className="links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {/* Tombol LinkedIn hanya muncul kalau linkedin diisi di profile.ts */}
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
