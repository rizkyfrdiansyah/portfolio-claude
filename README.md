# Portfolio

Website portfolio pribadi yang dibuat dengan **React**, **TypeScript**, dan **Vite**.

## Menjalankan di komputer

Perlu [Node.js](https://nodejs.org) versi 20 atau lebih baru.

```bash
npm install     # sekali saja: memasang dependencies
npm run dev     # jalankan server development → buka http://localhost:5173
```

Saat `npm run dev` berjalan, setiap perubahan file langsung terlihat di browser tanpa perlu refresh.

## Mengubah isi portfolio

Semua isi (nama, bio, link, dan daftar proyek) ada di satu file:

```
src/data/profile.ts
```

Ubah nilainya, simpan, dan website akan langsung ikut berubah. Untuk menambah proyek, salin satu blok `{ ... }` di dalam `projects` lalu ubah isinya.

Warna website bisa diganti lewat variabel `--accent` di `src/index.css`.

## Struktur folder

```
index.html              halaman HTML utama; React "ditempel" di <div id="root">
src/
  main.tsx              titik awal: memasang komponen App ke halaman
  App.tsx               menyusun semua bagian halaman
  components/
    Header.tsx          nama + menu navigasi
    About.tsx           perkenalan
    Projects.tsx        daftar proyek
    ProjectCard.tsx     satu kartu proyek
    Contact.tsx         link kontak
    Footer.tsx          bagian paling bawah
  data/profile.ts       ISI portfolio kamu
  index.css             semua styling
public/                 file statis (misal favicon)
```

## Perintah lain

| Perintah          | Fungsi                                                    |
| ----------------- | --------------------------------------------------------- |
| `npm run build`   | Cek error TypeScript lalu buat versi siap-online di `dist/` |
| `npm run preview` | Menjalankan hasil build untuk dicek sebelum di-deploy     |
| `npm run lint`    | Mencari potensi kesalahan di kode                         |

## Deploy (online-kan gratis)

Jalankan `npm run build`, lalu upload folder `dist/` ke layanan seperti Netlify, Vercel, atau GitHub Pages.
