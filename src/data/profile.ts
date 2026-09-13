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
  photo?: string // opsional: kalau kosong, yang tampil adalah inisial nama
  email: string
  github: string
  linkedin?: string // opsional: kalau dihapus, tombol LinkedIn tidak ditampilkan
  projects: Project[] // `Project[]` = array (daftar) berisi Project
}

export const profile: Profile = {
  name: 'Muhammad Rizky Ferdiansyah',
  role: 'Software Engineer',
  bio: 'Saya adalah seorang fresh graduate dari Universitas Krisnadwipayana. Saat ini saya sedang belajar menjadi software engineer, dengan minat di bidang front-end dan back-end development.',
  // Taruh file foto di folder `public/`, lalu hapus `//` dan sesuaikan nama filenya.
  // photo: '/foto-profil.jpg',
  email: 'bulskydong@gmail.com',
  github: 'https://github.com/rizkyfrdiansyah',
  // linkedin: 'https://www.linkedin.com/in/username', // hapus `//` di awal baris kalau sudah punya
  projects: [
    {
      title: 'Portofolio Diri',
      description:
        'Website portfolio pribadi yang responsif, mendukung mode gelap, dan isinya mudah diperbarui lewat satu file data.',
      tech: ['React', 'TypeScript', 'Vite'],
    },
  ],
}
