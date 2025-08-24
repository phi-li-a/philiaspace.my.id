# Tutorial OCR Manga Desktop (Versi [Mangatan](https://github.com/kaihouguide/Mangatan?tab=readme-ov-file#-for-pcdesktop-nodejs))

Panduan ini dirancang agar kamu dapat menjalankan server OCR berbasis Node.js untuk membaca Manga di PC atau desktop menggunakan Mangatan dan Suwayomi sebagai pengolah OCR.

---

## 1. Prasyarat

- **Suwayomi-Server telah terpasang dan berjalan**  
  Ikuti instruksi instalasi resmi dari Suwayomi-Server GitHub.

- **Pasang ekstensi Tampermonkey di browser**  
  Untuk mengimpor userscript khusus dari repositori Mangatan.

- **Node.js dan npm sudah terinstal di sistem**, minimal versi yang didukung.  
  Cek dengan:
  ```bash
  node -v
  npm -v
  ```

---

## 2. Unduh & Siapkan OCR Server (Legacy)

1. Unduh folder `ocr-server-legacy` dari repositori Mangatan dan ekstrak.  
2. Masuk ke dalam folder tersebut lewat terminal.

---

## 3. Instal Dependencies & Jalankan Server

Di direktori `ocr-server-legacy`, jalankan:
```bash
npm ci
```

Setelah selesai, jalankan server dengan:
```bash
node server.js
```
*(Opsional di Windows: jalankan `Runme.bat` jika tersedia.)*

---

## 4. Cara Menggunakan Server OCR

- **Akses OCR Overlay**: Hover pada gambar manga dalam browser, overlay akan muncul.
- **Fokus Teks**: Pre-click hover untuk memperjelas kotak teks.
- **Pengaturan**: Klik ikon ⚙️ di sudut kanan bawah untuk konfigurasi.
- **Cache**:  
  - Ekspor: akses `http://127.0.0.1:3000/export-cache`  
  - Import lewat panel setting userscript.
- **Ekspor ke Anki**: Klik tombol `✚` saat overlay muncul untuk screenshot panel ke Anki.

---

## Tabel Ringkasan

| Langkah | Perintah / Deskripsi            |
|---------|---------------------------------|
| 1       | Siapkan Suwayomi, Tampermonkey, Node.js |
| 2       | Navigate ke `ocr-server-legacy` |
| 3       | `npm ci`                        |
| 4       | `node server.js`                |
| 5       | Hover → OCR aktif di browser    |
| 6       | Atur via panel ⚙️               |
