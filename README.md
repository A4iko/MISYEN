# MISYEN

Website album kenangan keluarga, dibuat menggunakan HTML, CSS, dan JavaScript murni.

## Struktur
- `index.html`: struktur halaman dan konten.
- `style.css`: tampilan responsif desktop dan mobile.
- `script.js`: interaksi bingkai album dan konfigurasi tautan Google Photos.

## Mengisi tautan album
Buka `script.js`, lalu isi alamat album Google Photos pada objek `albumLinks`:

```js
const albumLinks = {
  frame1: "URL_ALBUM_GOOGLE_PHOTOS_PERTAMA",
  frame2: "URL_ALBUM_GOOGLE_PHOTOS_KEDUA"
};
```

Saat ini kedua URL sengaja dikosongkan sesuai permintaan. Klik bingkai akan menampilkan pemberitahuan sampai URL album diisi.

## Publikasi
Repository ini dapat dipublikasikan melalui GitHub Pages. Pilih Settings > Pages, lalu atur deployment dari branch `main` dan folder `/ (root)`.

Catatan: tampilan ini merupakan rekonstruksi berdasarkan teks dan fungsi yang diketahui. Untuk menyamakan detail visual secara presisi dengan Google Sites asli, diperlukan screenshot halaman dan aset foto asli.
