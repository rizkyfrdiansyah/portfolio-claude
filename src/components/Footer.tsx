import { profile } from '../data/profile'

function Footer() {
  // Tahun dihitung otomatis, jadi tidak perlu diubah setiap tahun.
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      © {year} {profile.name}
    </footer>
  )
}

export default Footer
