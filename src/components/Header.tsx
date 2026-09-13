import { profile } from '../data/profile'

// Komponen = fungsi yang mengembalikan tampilan (JSX, mirip HTML).
// Link `#about` akan menggulir halaman ke elemen dengan id="about".
function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo">
        {profile.name}
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
