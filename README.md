## 🌐 Situs Philia Space
Bisa diakses di sini
https://philiaspace.my.id/

## 📝 Cara Kontribusi ke Dokumentasi philia

Kami sangat menghargai kontribusi Anda untuk meningkatkan dokumentasi **Philia**. Dokumentasi ini dibangun menggunakan [MkDocs](https://www.mkdocs.org/) dan dengan plugin [mkdocs-material](https://squidfunk.github.io/mkdocs-material/). Ada 2 cara untuk kontribusi ke dokumentasi **Philia**, yaitu dengan fork lagsung dari web GitHub, atau clone repo ini ke local/komputer masing-masing.

### 📁 Struktur Dokumentasi

Dokumentasi berada di folder:

```
docs/
```

File konfigurasi utama MkDocs ada di:

```
mkdocs.yml
```

---

### 🔧 Cara Pertama (Tes Lokal)

1. **Fork & Clone repository-nya**
   ![Fork](https://github.com/phi-li-a/philiaspace.my.id/fork) terlebih dahulu lalu Clone
   ```bash
   git clone https://github.com/<username>/philiaspace.my.id.git
   cd philiaspace.my.id
   ```

2. **Buat virtual environment (opsional tapi disarankan)**

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   .\venv\Scripts\activate   # Windows
   ```

3. **Install MkDocs dan theme material**

   ```bash
   pip install mkdocs mkdocs-material
   ```

---

### ✍️ Cara Mengedit Dokumentasi

1. Buka file yang ingin kamu edit di dalam folder `docs/`. Misalnya:

   ```
   docs/index.md
   docs/tutorial-yomitan.md
   ```

2. Lakukan perubahan seperti biasa menggunakan Markdown (`.md`). Contoh:

   ```markdown
   ## Instalasi

   Berikut langkah-langkah instalasi Philia...
   ```

---

### 🔍 Preview Lokal Dokumentasi

Untuk melihat hasil edit dokumentasi secara lokal:

```bash
mkdocs serve
```

Lalu buka browser ke: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---



### ✅ Submit Perubahan

1. Tambahkan perubahanmu:

   ```bash
   git add docs/
   ```

2. Commit:

   ```bash
   git commit -m "Update dokumentasi: perbaiki bagian instalasi"
   ```

3. Push ke fork-mu dan buat Pull Request ke branch `main`.

---

## 📝 Cara kedua (Full dari web GitHub)

### Kontribusi Dokumentasi Langsung dari GitHub (Tanpa Clone)

Kalau kamu tidak ingin meng-clone repo, kamu bisa **langsung kontribusi lewat GitHub Web UI** dengan cara berikut:

### 🪄 Langkah-Langkah

1. **Fork Repositori**

   * Buka halaman GitHub Philia.
   * Klik tombol **Fork** (kanan atas).
   * Pilih akunmu sebagai target fork.

2. **Edit Dokumentasi**

   * Di repo hasil fork kamu, buka folder `docs/`.
   * Klik file `.md` yang ingin diubah, misalnya `docs/index.md`.
   * Klik ikon ✏️ (Edit this file).
   * Lakukan perubahan langsung di editor GitHub.

3. **Commit Perubahan**

   * Scroll ke bawah.
   * Isi pesan commit, misalnya:

     ```
     Update dokumentasi: perbaikan penulisan di index.md
     ```
   * Pilih opsi: “Create a new branch for this commit and start a pull request.”
   * Klik **Propose changes**.

4. **Buat Pull Request**

   * Setelah itu, kamu akan diarahkan ke halaman PR.
   * Tambahkan deskripsi perubahanmu (jika perlu).
   * Klik **Create pull request**.

---

### 🧠 Catatan

* Pastikan kamu mengedit file di dalam folder `docs/` karena semua dokumentasi ada di situ.
* Format yang digunakan adalah **Markdown (`.md`)**.
* Jangan mengubah file selain dokumentasi (misalnya kode Python atau config) kalau kontribusimu hanya untuk dokumentasi.
* Tim maintainer akan meninjau kontribusimu dan memberi masukan atau langsung menggabungkannya.

---

Dengan dua metode ini (lokal dan GitHub Web), semua orang bisa berkontribusi ke dokumentasi **Philia** dengan mudah — baik pengguna teknikal maupun non-teknikal.


### 💡 Note Kontributor

* Siapa saja dipersilahkan berkontribusi, karena kita semua sama-sama belajar.
* Saya Pemula
* Kami semua pemula
