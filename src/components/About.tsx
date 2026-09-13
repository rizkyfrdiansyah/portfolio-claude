import { profile } from '../data/profile'

// Ambil huruf pertama dari dua kata pertama nama, misal "Muhammad Rizky" → "MR".
function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

// Kurung kurawal `{ ... }` di JSX dipakai untuk menampilkan nilai dari JavaScript.
function About() {
  return (
    <section id="about" className="section about">
      {/* Operator `? :` artinya: kalau ada foto tampilkan <img>, kalau tidak tampilkan inisial */}
      {profile.photo ? (
        <img src={profile.photo} alt={`Foto ${profile.name}`} className="avatar" />
      ) : (
        <div className="avatar avatar-initials" aria-hidden="true">
          {getInitials(profile.name)}
        </div>
      )}
      <div>
        <p className="eyebrow">Halo, saya</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="bio">{profile.bio}</p>
      </div>
    </section>
  )
}

export default About
