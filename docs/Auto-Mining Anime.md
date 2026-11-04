# Kartu Anime Satu Klik - [Autocards oleh Shoui](https://learnjapanese.moe/autocards/#download)
---

 Diunggah: 13 April 2026 – `Yaaacha`

---
Solusi **all-in-one** untuk membuat kartu dari konten bersubtitle, seperti anime (DENGAN gambar + audio kalimat + konteks) dengan satu klik.

Tidak perlu pengaturan yang rumit. TIDAK PERLU MEMUTAR ULANG. TIDAK PERLU MEREKAM MANUAL. TIDAK PERLU COPY DAN PASTE MANUAL.

Kompatibel dengan pengaturan Yomitan yang sudah ada. Tidak perlu framework lain.

## Prasyarat

* Windows
* Anki ([Panduan Pengaturan Cepat](setup-anki-pc-lazy-guide.md))
* Yomitan (panduan [di sini](setup-yomitan-pc.md))
* Tipe note dengan field untuk "Expression", "Picture", "Sentence" & "SentenceAudio". Lapis kompatibel. Temukan [di sini](https://github.com/donkuri/lapis). ([Panduan Pengaturan Cepat](setup-yomitan-pc-lazy-guide.md))
* Yomitan sudah diatur untuk pembuatan kartu. (persyaratan minimum: `Expression` & `Sentence`. Autocards akan mengurus sisanya. [Panduan Pengaturan Cepat](setup-yomitan-pc-lazy-guide.md))
* File subtitle tersedia (misalnya, file .srt), temukan di [Jimaku.cc](https://jimaku.cc/).

## Download

[➡Tautan Download](https://mega.nz/file/wZUR3ASL#5sWwyZs88wKyCCiekG7C_W4ypkMYdV-09Xcw8h-1z7E)

## Pengaturan Awal

* Download file `.zip`
* Ekstrak file `.zip` dan jalankan aplikasi ![mpv_icon](img/mpv_icon.png) `mpv.exe` yang disertakan
* Seret dan letakkan file video ([dengan subtitle yang sudah disinkronkan](https://github.com/shoui520/auto-sub-retimer-easy?tab=readme-ov-file#auto-sub-retimer-easy)) ke jendela MPV.
* Antarmuka web akan terbuka di browser default, alamatnya adalah `http://127.0.0.1:6969/`. Di sinilah baris subtitle Anda akan muncul.
* Klik **ikon roda gigi pengaturan** di kanan atas. Konfigurasikan pengaturan Anda:
  + **Mining Deck**: `"DECK ANDA DALAM TANDA KUTIP"` — Pertahankan tanda kutip, masukkan nama deck Anki Anda *persis*. misalnya untuk nama deck *Mining Deck*, Anda akan menulis `"Mining Deck"`. Ini harus deck yang sama di mana Yomitan akan menambahkan kartu.
  + **Sentence Field**: `Sentence` — sudah dikonfigurasi sebelumnya untuk Lapis.
  + **Expression Field**: `Expression` — sudah dikonfigurasi sebelumnya untuk Lapis.
  + **Picture Field**: `Picture` — sudah dikonfigurasi sebelumnya untuk Lapis.
  + **Sentence Audio Field**: `SentenceAudio` — sudah dikonfigurasi sebelumnya untuk Lapis.
  + **Previous Sentences**: `0` — Berapa banyak baris konteks sebelumnya yang Anda inginkan pada kartu?
  + **Next Sentences**: `0` — Berapa banyak baris konteks selanjutnya yang Anda inginkan pada kartu?
* Klik "Update" untuk menyimpan.

Pengaturan awal sekarang selesai! Sekarang mulai menonton dan buat kartu!

## Menambahkan Kartu

* Tonton video Anda dengan subtitle. Ketika Anda ingin mining kata baru, pergi ke [UI web](http://127.0.0.1:6969/) dan gunakan Yomitan untuk mengarahkan kursor ke kata tersebut, lalu tekan tombol + hijau. Anda selesai. Itu saja!

Audio kalimat, gambar (scene dari video) dan konteks (jika Anda menginginkannya) akan otomatis ditambahkan! Kartu Anda lengkap! Tanpa kerepotan.

## Tips

* Ingin menonton tanpa subtitle lalu mining nanti ketika Anda membutuhkannya? Cukup tekan `v` untuk beralih ke tampilan tanpa subtitle. Mining nanti di UI web (`http://127.0.0.1:6969/`).
* Ingin streaming video? Ctrl-C Ctrl-V **tautan episode** hianime.to ke mpv, lalu seret dan jatuhkan file subtitle .srt Anda ke mpv. Gunakan `z` / `Z` untuk menyesuaikan sinkronisasi subtitle.
* Pengaturan ini tidak hanya untuk bahasa Jepang. Jika Anda ingin menggunakannya untuk bahasa lain, cukup edit kode bahasa di `portable_config\mpv.conf`
* MPV sangat sulit digunakan? Saya mengerti. Mereka ingin Anda [membaca manual](https://mpv.io/manual/master/). Fitur paling mendasar (pause/play) tidak menggunakan melalui tombol di layar, tetapi menggunakan tombol fisik `Spasi` atau klik kanan.

## Pemecahan Masalah

* Subtitle tidak muncul di UI web! — jika subtitle bawaan (softsub), mungkin perlu waktu untuk subtitle muncul karena perlu mengekstrak subtitle dari video terlebih dahulu. Proses ini dilakukan di latar belakang.
* mpv menutup ketika saya paste tautan hianime — pastikan alamat IP Anda tidak diblokir oleh hianime | pastikan yang dimasukkan adalah **tautan episode** | pastikan Windows tidak memblokir `yt-dlp` yang disertakan. Coba perbarui yt-dlp menggunakan `.\yt-dlp.exe -U` di Terminal.
* Tidak dapat melihat tombol "Update" di menu pengaturan Autocards — zoom out!
* `[thumbfast] ERROR! cannot create mpv subprocess` — Anda dapat mengabaikan ini. Ini adalah error aneh yang tidak perlu.
* Gambar & audio kalimat tidak ditambahkan ke kartu — ini bisa terjadi jika Anda melihat pratinjau kartu terlalu cepat. Periksa juga pengaturan integrasi Anki Yomitan Anda dan menu pengaturan Autocards: apakah nama deck sudah benar?
* Kalimat tidak ditangkap dengan benar — pastikan 'Layout-aware scanning' diaktifkan di pengaturan lanjutan Yomitan.

## Sinkronisasi Subtitle

**Sinkronisasi langsung**

Terlalu malas untuk menyinkronkan file sendiri? Anda dapat menyesuaikan timing subtitle di dalam mpv menggunakan tombol `z` dan `Z` (- dan + masing-masing.)

Jika subtitle Anda tidak sinkron, begini cara menyinkronkan file subtitle ke video Anda.

Download di sini di GitHub: [auto-sub-retimer-easy](https://github.com/shoui520/auto-sub-retimer-easy)

Fork dari fork dari auto-sub-retimer Anacreon, bertujuan untuk membuatnya semudah mungkin untuk dijalankan.  
Menggunakan fork 9b046695 dari sub retimer Anacreon untuk implementasi all-in-one-nya.

### Prasyarat yang diperlukan

* Windows
* Video lokal di disk. (misalnya anime yang didownload dalam format .mkv)
* File subtitle Jepang yang tersedia di direktori yang sama.
* Untuk metode sinkronisasi ulang utama (opsi 1), harus video dengan soft-sub. Jika videomu adalah file raw (tanpa subtitle softsub), kamu dapat menggunakan sinkronisasi berbasis audio (opsi 2).

### Instalasi

1. Instal Python. Download [di sini.](https://www.python.org/ftp/python/3.14.2/python-3.14.2-amd64.exe)
2. Download proyek ini dengan mengklik tombol hijau "**Code**" di atas, lalu klik "**Download ZIP**"
3. Di file manager, *ekstrak* file .zip dengan mengklik "**Extract all**".
4. Di folder yang diekstrak, akan ada folder lain dengan nama "`auto-sub-retimer-easy-master`"
5. Folder ini (`auto-sub-retimer-easy-master`) berisi file lain. Pindahkan folder ini, (berisi semua file) ke direktori `C:\` (langsung di dalam Local Disk C:) **Ini adalah langkah penting!**  
   ・Direktori Anda harus terlihat seperti ini: `C:\auto-sub-retimer-easy-master`, dengan `Install.reg`, `ffmpeg` dll. dapat dilihat di dalamnya.   
   ・BUKAN `C:\auto-sub-retimer-easy-master\auto-sub-retimer-easy-master`!
6. Instal program dengan *mengklik dua kali* file `.reg` "`Install.reg`". Tekan "Yes" pada kotak dialog. Proses ini memerlukan hak administrator.

### Penggunaan

1. Tempatkan file subtitle (seperti yang diunduh dari Jimaku.cc) di direktori yang sama dengan file video. Pastikan jumlah subtitle sesuai dengan jumlah episode. (misalnya 24 episode, 24 subtitle.)
2. Di File Explorer, klik kanan pada folder yang berisi video+subtitle Anda, lalu klik "Show more options". (jika menggunakan Windows 11)
3. Arahkan kursor ke "Retime/Rename Subs" lalu klik "RetimeSubs"
4. Jendela terminal akan terbuka dengan tulisan ini:  
   [1] Retime using embedded subs. (Default)  
   [2] Retime using audio.
5. Ketik nomor (misalnya 1) lalu tekan Enter untuk opsi yang diinginkan. `[1]` berfungsi dengan baik untuk sebagian besar kasus*.
6. Kemudian akan menanyakan "Split Penalty". Abaikan ini. Cukup tekan Enter.
7. Setelah itu, tunggu script melakukan keajaibannya**, ketika selesai jendela terminal akan mengatakan "Success!"

*Anda mungkin mengalami beberapa kasus di mana subtitle Inggris dan subtitle Jepang tidak mengandung informasi yang sama (misalnya subtitle Inggris menerjemahkan tanda & lagu, sementara subtitle Jepang berisi closed caption untuk orang dengan gangguan pendengaran.). Dalam kasus itu, gunakan sinkronisasi audio. Jika Anda download raw, Anda perlu menggunakan opsi `[2]`.

**Jika Anda memiliki video dengan subtitle Inggris bergaya (tanda/lagu/subtitle atas+bawah dll.) Anda mungkin diminta untuk memilih "styles to keep". Pengaturan default `(Enter)` berfungsi dengan baik dalam sebagian besar kasus.

## Ucapan Terima Kasih

Autocards dapat bekerja karena perangkat lunak open source dan karya para kontributornya. Perangkat lunak berikut disertakan dalam paket:

* Script standalone Autocards (dibuat oleh かにふぁん. Kontributor: shoui, Gilfar & manhhao) - GPL-3.0
* [mpv](https://github.com/mpv-player/mpv) - GPL-2.0
* [ffmpeg](https://github.com/FFmpeg/FFmpeg) - LGPL-2.1
* [thumbfast](https://github.com/po5/thumbfast) - MPL-2.0
* [uosc](https://github.com/tomasklaen/uosc) - LGPL-2.1
* [Microsoft, curl.exe](https://curl.se/windows/microsoft.html) - MIT
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Unlicense
* [yt-dlp-hianime](https://github.com/pratikpatel8982/yt-dlp-hianime) - Unlicense
* [Python embeddable package](https://www.python.org/downloads/release/python-31311/) - PSF-2.0

Dengan mendownload paket Autocards, Anda menerima perjanjian lisensi di atas.