# Tutorial Menambang Sumber Daya Belajar
## Permulaan
Download aplikasi-aplikasi di bawah:
- [Anki](https://apps.ankiweb.net/)
- [Browser Thorium Windows](https://github.com/Alex313031/Thorium-Win/releases) atau [Browser Thorium MacOS](https://github.com/Alex313031/Thorium-MacOS/releases)
  * Windows download prioritas urutannya: AVX2, AVX, SSE3, SSE4. Instal dari prioritas pertama, kalo ga bisa, turun ke prioritas selanjutnya.
  * MacOS Intel pake x64, buat M1, M2, dan M3 pake ARM. 
  * Sangat menyarankan pake browser Thorium karena ini paling aman (gaada eror) buat play asbplayer. Kamu juga bisa pake Brave. Jangan pake Firefox, kompatibilitasnya paling jelek, bisa cek [ini](https://docs.asbplayer.dev/docs/compatibility).
- [qBittorrent](https://www.qbittorrent.org/download) utamanya buat download audio yg dipake add on local audio for yomichan

Pasang Ekstensi di browser:
- [Yomitan](https://chromewebstore.google.com/detail/yomitan-popup-dictionary/likgccmbimhjbgkjambclfkhldnlhbnn) (Chrome Webstore)
- [Yomitan](https://addons.mozilla.org/en-GB/firefox/addon/yomitan/) (Firefox)
  
Opsional tergantung kebutuhan:
- [asbplayer](https://chromewebstore.google.com/detail/asbplayer-language-learni/hkledmpjpaehamkiehglnbelcpdflcab) (Video Player untuk Mining)
- [Ttsu Reader](https://reader.ttsu.app/) (Baca Epub untuk LN/Novel)
- [Mokuro](https://reader.mokuro.app/) (Baca Manga)
- [Catalog Mokuro](https://catalog.mokuro.moe/) (Baca manga di mokuro tinggal import)
- [yomitan pdf viewer](https://yomitan.wiki/yomitan-pdf-viewer/web/) (Baca PDF)

</br>

## Local Audio for Yomichan (Opsional)
  Sebelum memulai, sebaiknya kita download terlebih dahulu file di bawah yang berisi audio untuk Add-ons Local Audio for Yomichan. 
### - Alasan kamu bisa pakai atau tidak pakai setup ini

<details> <summary><b>Manfaat:</b> <i>(Tekan sini)</i> </summary>

1. Kebanyakan audionya bisa didapatkan **hampir instan**. Tanpa _local audio server_, mengambil audio dari yomitan secara online bisa memakan waktu 1 detik-beberapa menit tergantung koneksi.
    Kebanyakan kasus delay Yomitan membuat kartu biasanya dari mencari audio. Dengan kata lain, mengambil audio bisa jadi hambatan utama ketika membuat kartu Anki. Dengan Add on ini, kita bisa menghapus hambatan tadi. Kita bisa langsung membuat kartu Anki hampir 0 penundaan.
2. Kalau kamu tidak punya akses internet, kamu masih bisa dapat audio di kartu kamu.
3. Dibandingkan audio standar dari Yomitan, Add-on ini menambah cakupan audionya karena dia mengambil berbagai macam sumber yang tidak di-_cover_ Yomitan, seperti Forvo (tergantung user yang dipilih), NHK 2016, dan Shinmeikai 8.
4. Banyak [pre-processing](https://github.com/Aquafina-water-bottle/local-audio-yomichan-build-scripts) yang sudah dilakukan untuk membuat audionya punya kualitas sebaik mungkin:
    - Semua audio sudah dinormalisasi, jadi semua volumenya relatif sama di setiap file.
    - Bagian diam di awal dan akhir audio sudah dipotong.
    - 
1. Much [pre-processing](https://github.com/Aquafina-water-bottle/local-audio-yomichan-build-scripts) has been done to this audio to make it as high quality as possible:
    - All audio is normalized, so the volume remains relatively similar for each file.
    - Silence has been trimmed from the beginning and end of each file.
    - Dengan menggunakan data JMdict, bentuk varian dengan bacaan yang sama diisi kembali dengan audio yang ada.

</details>

<details> <summary><b>Kekurangan:</b> <i>(Tekan sini)</i> </summary>

1. Pengaturan ini butuh sekitar **3-5 GB memori kosong**.
2. Pengaturan ini butuh Anki yang selalu terbuka (atau servernya berjalan manual) supaya Yomitan bisa mengambil datanya. Yomitan juga tetap bisa kembali ke pengaturan default kalau servernya tidak ada (anki tidak terbuka atau local servernya tidak nyala) atau audio dari kata yang dicari tidak ada.

</details>

Pengaturan ini bisa digunakan untuk Anki versi PC (Windows, MacOS, Linux). 
Gunakan qBittorrent untuk download.
Tekan icon rantai (di bawah tulisan file di pojok kiri atas) lalu masukkan tautan ini:

	magnet:?xt=urn:btih:5bd0aa89667860e68b31a585dc6e7a2bfc811702&dn=local-yomichan-audio-collection-2023-06-11-mp3.tar.xz&tr=http%3a%2f%2fanidex.moe%3a6969%2fannounce&tr=http%3a%2f%2fnyaa.tracker.wf%3a7777%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce
</br>

<p float="left">
  <img alt="Awal 1" src="/img/Awal1.jpg" width="40%" />
&nbsp; &nbsp; &nbsp; &nbsp;
  <img src="/img/Awal2.jpg" width="40%" /> 
 &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="/img/Awal3.jpg" width="40%" />
 &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="/img/Awal4.jpg" width="40%" />
</p>

</br>
Setelah Download selesai, ekstrak filenya. Kalau udah, sementara biarin aja buat nanti sesi pengaturan Add-ons


# Kamus
__

Untuk pemula, silakan download [JMdict versi JP-EN-ID](https://github.com/yaaacha/Immerse-Archive/blob/main/%5BBETA%20VERSION%5D%20JMDict%20JP-EN-ID%20V.0.1.zip) dan [JIdict](https://discord.com/channels/1370274344571240552/1384364698400723056/1384364733452386416). Kamus ini hanya dimaksudkan untuk membantu di awal. Sebisa mungkin menggunakan kamus monolingual saat sudah mulai bisa membaca bahasa Jepang dengan lebih baik.

Tambahkan kamus berikut di koleksi kalian juga, yg disarankan, monolingual, pitch, nama, dan kanji, yang lain opsional.

## Daftar Ringkas (Kamusnya ada di link di bawah)
- JMdict (or Jitendex)
- JMnedict
- 三省堂 8th Ed (or 明鏡 2nd Ed)
- Kanji Jitenon
- NHK2016
- JPDB Frequency v2.2

## Daftar Rekomendasi [shoui dari TMW (TheMoeWay)](https://drive.google.com/drive/folders/1tTdLppnqMfVC5otPlX_cs4ixlIgjv_lH)
### Bilingual
- [Bilingual] JMdict Extra (Recommended).zip
- [Bilingual] 新和英.zip

### Frekuensi
- [Freq] CC100.zip
- [Freq] JPDB (Recommended).zip

### Kanji
- [Kanji] KANJIDIC (English) (Recommended).zip

### Monolingual
- [Monolingual] 実用日本語表現辞典 (Recommended).zip
- [Monolingual, Encyclopedia] PixivLight.zip

### Grammar
- [Grammar] Dictionary of Japanese Grammar 日本語文法辞典 (Recommended).zip
- [Grammar] どんなとき使う日本語表現文型辞典.zip
- [Grammar] 毎日のんびり日本語教師 (nihongosensei).zip
- [Grammar] JLPT文法解説まとめ(nihongo_kyoushi).zip
- [Grammar] 絵でわかる日本語.zip

### Nama
- [Names] JMnedict.zip

### Pitch
- [Pitch] アクセント辞典v2 (Recommended).zip

## Daftar Rekomendasi [marv dari yomitan](https://drive.google.com/drive/u/0/folders/1LXMIOoaWASIntlx1w08njNU005lS5lez).

### Bilingual
- [JA-EN] jitendex-yomichan
- [JA-EN] NEW 斎藤和英大辞典
- [JA-EN] 新和英

### Grammar
- [JA Grammar] dojg-consolidated-v1_01

### Frekuensi
- [JA Freq] JPDB_2022-05-10T03_27_02.930Z
- [JA Freq] Freq_CC100
- [JA Freq] BCCWJ-LUW

### Monolingual
- [JA-JA] 実用日本語表現辞典
- [JA-JA] デジタル大辞泉
- [JA-JA Encyclopedia] Pixiv

### Kanji
- [Kanji] KANJIDIC_english
- [Kanji] JPDB Kanji

### Pitch Accent
- [Pitch] 大辞泉

# Cara Import Kamus

1. Buka pengaturan ekstensi yomitan
2. Di pengaturan Dictionary, pilih ```Configure installed and enabled dictionaries…```
   <img src="/img/Import-Kamus-1.png" width="40%" />
3. Pilih import (masukkan zip kamusnya dengan drag and drop atau pilih kamusnya dari folder download)
  <img src="/img/Import-Kamus-2.png" width="40%" />
  <img src="/img/Import-Kamus-3.png" width="40%" />
5. Tunggu sampai semua kamus sudah selesai didownload (ada bar progress di bawah). Memang agak lama, jadi, ditunggu saja.
6. Kamu bisa mengaktifkan dan menonaktifkan kamus yang mau kamu pakai sesuka hati, juga mengurutkan kamusmu tergantung prioritas pribadi.
  <img src="/img/Import-Kamus-4.png" width="40%" />

# Mengatur Yomitan
__
Kamu bisa langsung download pengaturanku [di sini](https://github.com/yaaacha/Immerse-Archive/blob/main/Yomitan%20Setting%20Full%20Lapis.json). Cara Importnya, pergi ke Backup > Import Settings>. Aku ga jamin bakal langsung work semua, karena ada beberapa yang harus disetting manual juga. Terutama untuk mining nanti. Kamu juga bisa hapus atau duplikat profile.

Aku tetap menyarankan kamu baca _startup guide_ supaya kamu bisa paham cara kerja yomitan secara umum. Kamu bisa cek pengaturan-pengaturan di bawah untuk menyesuaikan preferensi pribadi.

<img src="/img/Import-Setting-Yomitan.jpg" width="40%" />
<img src="/img/Setting-Yomitan-1.jpg" width="40%" />
<img src="/img/Setting-Yomitan-2.jpg" width="40%" />

## Scanning
Kamu bisa atur tombol modifier default dari Shift ke tombol lain sesuai preferensimu. Kamu juga bisa pilih `No Key`, tiap kursormu lewat kata berbahasa jepang, yomitan akan langsung memunculkan pop up kamus. Jadi, kamu tidak perlu memencet tombol tambahan lain. Aku pribadi pake shift, tapi kadang juga kuset jadi No Key kalau lagi pengen.

## Popup
Di bagian ini, kamu bisa memilih untuk membiarkan yomitan memindai (meng-scan) konten di pop up yomitan atau tidak. Kalau opsi ini dinyalakan, kamu bisa _scan_ kamus monolingual jepang yang kamu gunakan. Disarankan mengubah `Maximum number of child popups` di sekitar 3-5 saja.

## Audio
Kamu bisa mengatur volume audio jika dirasa terlalu keras. Kamu juga bisa menyalakan opsi `Auto-play search result audio` yang akan otomatis mengeluarkan suara kosakata yang dicari tanpa memencet tombol audio. Tapi aku pribadi tidak pakai.

# Pengaturan Local Audio For Yomichan
__
## Add-on Wajib Anki Desktop
> **Cara pasang** (Menu Tools → Add-ons → Get Add-ons... → masukkan 2 kode di bawah → Restart Anki)
- `2055492159` (AnkiConnect),
- `1045800357` (Local Audio Server for Yomichan)

# Pengaturan Add-ons
> Tools → Add-ons → Pilih Add-ons yg mau diatur → Config (kanan bawah)

## Anki Connect
Pilih Anki Connect. Buka menu Config. Timpa teks yang ada di konfigurasi dengan kode di bawah, tekan OK. Buka ekstensi yomitan, ke menu Anki. Matikan dan nyalakan toggle "Enable Anki integration". Done.
```
{
    "apiKey": null,
    "apiLogPath": null,
    "ignoreOriginList": [],
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOriginList": [
        "http://localhost",
        "https://killergerbah.github.io",
        "https://reader.mokuro.app",
        "https://reader.ttsu.app"
    ]
}
```
> NB: link 1 untuk yomitan, link 2 untuk asbplayer (anime dan video based material), link 3 untuk mokuro (baca manga), link 4 untuk ttsu reader (baca novel, LN, dll).

## Local Audio Server for Yomichan
- Buka Anki. 
- Pergi ke Tools → Add-ons → Local Audio for Yomichan → view files. Windows baru terbuka di Anki2/addons21/1045800357. 
- Masuk ke folder `user_files`. 
- Pindahkan semua audio yang sudah didownload menggunakan qBittorrent di langkah Persiapan Awal ke folder `user_files`.
- Masuk ke browser dan buka ekstensi yomitan. Off, lalu On.
- Mulai ulang aplikasi Anki. 

Saat mining, Anki harus tetap terbuka walau di mode minimize agar Add-ons Local Audio bisa berjalan.

# Penyesuaian Akhir
## Impor Note Type
Sebelum memulai Mining dengan Yomitan. Kamu perlu menyesuaikan Deck Anki yang kamu gunakan terlebih dahulu. Download file APKG dari sini untuk mengimpor template [Note Type Lapis](https://github.com/donkuri/lapis/releases). Setelah didownload. Langsung buka dan import.
<img src="/img/Ganti-Deck:Note-Type-0.jpg" width="40%" />
<img src="/img/Ganti-Deck:Note-Type-0-5.jpg" width="40%" />

## Penyesuaian Deck
Kita perlu membuat dek baru.
- Klik tombol Create Deck.
- Beri nama deck, misal: Anime
> kita berasumsi mengisi deck ini dengan sumber media anime

## Atur Dek di Yomitan
- Buka ekstensi Yomitan → Anki → Configure Anki Flashcards...→ Sesuaikan dek seperti di gambar
- Kamu juga bisa berganti note type dengan mengimpor template note type yang lain. Untuk mengeksplore note type yang kamu suka, bisa cek [di sini](https://arbyste.github.io/jp-mining-note/alternatives/)
- Yomitan dan dek Anki siap digunakan
<img src="/img/Ganti-Deck:Note-Type-1.jpg" width="40%" />
<img src="/img/Ganti-Deck:Note-Type-2.jpg" width="40%" />

# Penutup

Terima kasih sudah menyimak. Panduan ini jauh dari kata sempurna, mungkin akan diperbarui di masa depan. Mari berdiskusi di [Philia Space](https://discord.gg/hp55WMbbG6).
