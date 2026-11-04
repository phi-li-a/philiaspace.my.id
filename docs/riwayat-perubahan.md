---
hide:
  - footer
---
# Riwayat Perubahan

??? question "Keterangan<small>(click here)</small>"

    - Penambahan = Penambahan halaman baru

    - Pembaruan = Pembaruan halaman tutorial atau pengaturan yang sudah ada ke versi terbaru

    - Perbaikan = Memperbaiki kesalahan apapun dari halaman yang sudah ada

---

## 2026

---

### November

**04-11-2026** · Sinkronisasi LazyGuide

- Pembaruan
       - [Setup Manga PC](setup-manga-pc-lazy-guide.md): MangaOCR diganti owocr dengan Screen AI (Google Lens lokal) sebagai engine bawaan, termasuk perintah shortcut di Info 1
       - [Setup Manga PC](setup-manga-pc-lazy-guide.md): Python untuk OCR dan Mokuro naik ke 3.13.9; panduan CUDA tidak lagi terkunci di versi 11.8
       - [Setup Anki PC](setup-anki-pc-lazy-guide.md): langkah FSRS disesuaikan dengan FSRS 6 (Optimize Current Preset tiap bulan, opsi FSRS Helper > Reschedule all cards); Desired Retention disamakan dengan screenshot (85%)
       - Tautan OCR di [Setup ShareX](setup-ShareX-pc.md) diarahkan ke bagian baru
- Penambahan
       - Opsi Firefox di [Setup Yomitan Android](setup-yomitan-android-lazy-guide.md), [LN Android](setup-LN-android-lazy-guide.md), dan [Manga Android](setup-manga-android-lazy-guide.md)
       - Info 4 di [Setup Anki PC](setup-anki-pc-lazy-guide.md): diagram troubleshooting interval FSRS
- Perbaikan
       - Semua tautan JIDict (Google Drive, Discord) diarahkan ke repo resmi [JIDict-yomitan](https://github.com/philiaspaceai/JIDict-yomitan); tautan JMDict Trilingual JP-EN-ID (beta) dihapus
       - `MainDefinition` JIDict di [Setup Yomitan PC](setup-yomitan-pc-lazy-guide.md) disesuaikan ke versi 1.0.3
       - Alamat folder MacOS yang memakai nama user `macbookair` diganti ke `~/Library/Application Support/Anki2` (Setup Anki PC, Panduan Ringkas, Local Audio di Setup Yomitan PC), ditambah cara membukanya lewat Finder > Go to Folder
       - Tanggal entri April diperbaiki ke 2026

**04-11-2026** · Beranda

- Landing Page & Desain
       - Beranda dibangun ulang sebagai landing page penuh tanpa sidebar dan daftar isi: hero gelap dengan contoh alur sentence mining (subtitle → Yomitan → Anki), tiga kartu fase pembelajaran, daftar alat gratis, blok ajakan Discord, kartu teori dan donasi
       - Footer khusus beranda (lockup 愛間 Philia Space, tautan GitHub, Discord, TikTok, Proyek komunitas, Riwayat perubahan, Donasi) menggantikan footer bawaan tema
       - Desain mengikuti brand guideline baru Philia Space: warna Langit `#00bbff`, netral Ink dan Malam, aksen Krim, radius 16 px, tombol pil
- Tampilan & Antarmuka
       - Font Plus Jakarta Sans dimuat dari `docs/fonts` dan dipakai untuk teks Latin di beranda serta tombol situs
       - Entri "Beranda" dihapus dari navigasi samping; kembali ke beranda lewat logo di header
- Perbaikan
       - Teks di atas warna biru Langit diganti ke Ink (`#111827`): kontras putih di atas `#00bbff` hanya 2.2:1 dan tidak lolos WCAG
       - Gaya kartu dan grid lama dipertahankan untuk halaman [Proyek Komunitas](proyek.md)
       - Daftar poin di [Panduan Bahasa Jepang](panduan.md) yang menyatu jadi satu baris diperbaiki; baris alur membaca yang tampil sebagai rumus mentah diganti teks biasa
       - Tautan mati gohoneko di Panduan (kuis kana, Tae Kim, Sakubi) diganti ke situs yang hidup
- Pembaruan Konten
       - [Panduan Bahasa Jepang](panduan.md) ditulis ulang dengan register lebih santai; istilah "imersi" diseragamkan jadi "immersion"
       - Bagian 3.1 sampai penutup dilokalisasi ulang mengikuti TheMoeWay versi terbaru (output sejak awal, pelafalan, tolok ukur kemajuan, penutup soal mining)
       - Disamakan dengan TheMoeWay: target belajar kana 3 minggu sampai sebulan, tiga level menyimak, dan catatan boleh menonton tanpa takarir sejak belajar kana
       - Video kana jadi tab (ENG) dengan tambahan Hiragana dan Katakana berbahasa Indonesia (IDN) dari Ryu Sensei; kuis kana ke DJT Guide dan Philia Shizen; Tadoku ke Level Start versi Inggris; kamus ke JIDict beserta cara pasang sebagai aplikasi di iOS dan Android
       - Penilaian kartu Anki jadi tabel centang/silang; alur harian jadi tabel; tangkapan layar halaman unduh Anki diperbarui (versi 26.09.3) dengan catatan AnkiMobile iOS berbayar
       - Tautan diperbarui: Kaishi (JP-EN), dek komunitas Discord, transkrip Cure Dolly ke kellenok.github.io
- Penambahan
       - Halaman baru [Proyek Komunitas](proyek.md): JIDict sebagai proyek utama (deskripsi, cara pasang, tautan repo dan versi web) serta alat buatan komunitas lainnya (Philia Bunrei, Tes Frekuensi Kosakata, Jimaku Bunseki, Shizen, Philia Kensaku, JobApp Mailer)
       - Entri navigasi "Proyek Komunitas" dan tautan dari beranda
       - Tautan TikTok @philiaspace.id di beranda dan halaman proyek

---

### Oktober

**31-10-2026**

- Landing Page & Desain
       - Pembaruan beranda dokumentasi (`index.md`) bergaya Nextra docs: navigasi roadmap 3 fase (Fondasi, Tooling, Immersion), katalog setup perangkat (Desktop & Mobile), dan kanal komunitas
       - Penyesuaian proporsi visual: reduksi ukuran header 25% dan kartu hero landing page 50%
- Tampilan & Antarmuka
       - Pembaruan layout dokumentasi bergaya Nextra docs dengan header & sidebar terkunci (*isolated scrolling*)
       - Penyelarasan tema gelap (*slate mode*) dengan palet warna biru logo Philia Space (`#00bbff` dan `#38bdf8`)
       - Pembaruan logo situs di header dan icon tab browser (*favicon*) memakai logo resmi baru Philia Space
       - Perbaikan navigasi pagination footer (Previous & Next): lebar tombol simetris seimbang 50/50 dan judul panjang tidak terpotong (*no clipping*)
       - Pembaruan tombol donasi di header dengan ikon hati
       - Perbaikan styling komponen callout (*admonition*) agar rapi dan menyatu dengan alur teks
- Pembaruan Konten
       - Penyuntingan komprehensif naskah [Panduan Bahasa Jepang](panduan.md) agar lebih natural, sistematis, dan terstruktur
       - Pembaruan tautan panduan keyboard Jepang macOS di [Rutinitas Awal](rutinitas-awal.md) ke panduan resmi Apple Indonesia

---

### April

**13-04-2026**

- Umum
       - Pembaruan tautan Grinding Kana game
- Setup Utama
       - Penambahan Panduan [Setup Manatan](Setup-Manatan.md)
- Setup PC
       - Penambahan Panduan [Mining Windows](Auto-Mining Anime.md)
	   
---

## 2025

---

### September

**05-09-2025**

- Umum
       - Penambahan Tombol Repository Github Situs Philiaspace
       - Pembaruan format publikasi
       - Perbaikan typo dan kerapihan dokumentasi

---

### Agustus

**25-08-2025**

- Setup Utama
       - Pembaruan FAQ [Setup Yomitan PC](setup-yomitan-pc-lazy-guide.md)
       - Pembaruan FAQ [Setup Yomitan Android](setup-yomitan-android-lazy-guide.md)

**24-08-2025**

- Umum
       - Pembaruan susunan dokumentasi
- Setup Utama
       - Penambahan halaman [Setup Yomitan Android](setup-yomitan-android-lazy-guide.md)
       - Penambahan halaman [Setup ShareX](setup-ShareX-pc.md)
- Setup PC
       - Penambahan halaman [Setup Manga](setup-manga-pc-lazy-guide.md)
- Setup Android
       - Penambahan halaman [Setup Anime](setup-anime-android-lazy-guide.md)
       - Penambahan halaman [Setup LN & Buku](setup-LN-android-lazy-guide.md)
       - Penambahan halaman [Setup Manga](setup-manga-android-lazy-guide.md)

**10-08-2025**

- Umum
       - Perbaikan typo sana-sini dan merapikan formatting di berbagai bagian dokumentasi
- Panduan
       - Penambahan halaman [Panduan Bahasa Jepang](panduan.md)
       - Penambahan halaman [30 Hari Awal](rutinitas-awal.md)
       - Penambahan halaman [Perbaiki Font](font.md)
       - Penambahan halaman [Belajar Kanji](kanji.md)
       - Pembaruan halaman [Panduan Ringkas Bahasa Jepang](panduan-ringkas-JP.md)
- Setup
       - Penambahan halaman [Setup PC (Novel & Buku)](setup-LN-pc-lazy-guide.md)
       - Pembaruan halaman [Setup Anime](setup-anime-pc-lazy-guide.md)
       - Pembaruan halaman [Setup Anki](setup-anki-pc-lazy-guide.md)

**03-08-2025**

- Umum
       - Penambahan halaman [Panduan Ringkas Bahasa Jepang](panduan-ringkas-JP.md)
       - Penambahan ikon laman

**02-08-2025**

- Umum
	- Penambahan halaman beranda
- Pengaturan
	- Penambahan halaman [pengantar](setup.md)
	- Perbaikan dokumen

**01-08-2025**

- Umum
	- Pembaruan halaman [join discord](join.md)
- Pengaturan Utama
	- Penambahan tutorial [Anki PC (LazyGuide)](setup-anki-pc-lazy-guide.md)
	- Penambahan tutorial [Yomitan (LazyGuide)](setup-yomitan-pc-lazy-guide.md)
- Pengaturan PC
	- Penambahan tutorial [Mining Anime](setup.md)
- Lain-lain
	- Penambahan Riwayat Perubahan


---