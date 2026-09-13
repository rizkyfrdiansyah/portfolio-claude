// =============================================================
// ISI PORTFOLIO KAMU ADA DI SINI.
// Ubah nilai-nilai di bawah ini — komponen akan otomatis ikut berubah.
// =============================================================

// `type` mendeskripsikan "bentuk" data. TypeScript akan memberi error
// kalau ada field yang lupa diisi atau salah tipe (misal angka, bukan teks).
export type Project = {
  title: string
  description: string
  tech: string[] // daftar teknologi, misal ['React', 'TypeScript']
  link?: string // tanda `?` berarti opsional: boleh dikosongkan
}

export type Profile = {
  name: string
  role: string
  bio: string
  email: string
  github: string
  linkedin: string
  projects: Project[] // `Project[]` = array (daftar) berisi Project
}

export const profile: Profile = {
  name: 'Nama Kamu',
  role: 'Software Engineer',
  bio: 'Tulis perkenalan singkat di sini: siapa kamu, apa yang sedang kamu pelajari, dan jenis proyek yang kamu sukai.',
  email: 'email@contoh.com',
  github: 'https://github.com/username',
  linkedin: 'https://www.linkedin.com/in/username',
  projects: [
    {
      title: 'Portfolio Pribadi',
      description: 'Website ini! Dibuat dengan React, TypeScript, dan Vite.',
      tech: ['React', 'TypeScript', 'Vite'],
    },
    {
      title: 'Proyek Kedua',
      description: 'Jelaskan masalah apa yang diselesaikan proyek ini.',
      tech: ['JavaScript', 'CSS'],
      link: 'https://github.com/username/proyek-kedua',
    },
    {
      title: 'Proyek Ketiga',
      description: 'Tambah atau hapus proyek dengan mengubah daftar ini.',
      tech: ['Node.js'],
    },
  ],
}
