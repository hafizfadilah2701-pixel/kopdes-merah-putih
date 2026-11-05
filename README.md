# KopDes Merah Putih - Website Statis 1 Tampilan

Website statis 1 tampilan (*single-viewport hero*) yang dibuat dengan **HTML5 dan CSS3**. 

Mengusung tema **Koperasi Desa Merah Putih & Transparansi Anggaran**, menyajikan kritik cerdas dan satire terhadap kasus korupsi dana desa, **Makan Bergizi Gratis (MBG)**, dan **Food Estate/Karhutla Kalimantan** dengan menampilkan foto Kepala Badan Gizi Nasional (BGN), bukti porsi disunat, serta jajaran terpidana koruptor secara statis dan informatif.

---

## 🎨 Karakteristik Tampilan
1. **1 Tampilan Penuh (Single Viewport 100vh)**:
   - Pas satu layar monitor/laptop tanpa perlu scroll ke bawah di desktop.
2. **Murni Statis (Non-Clickable Images)**:
   - Semua gambar dan kartu infografis disajikan murni sebagai visual statis (`cursor: default`, tidak ada pop-up saat diklik).
3. **Kartu Sorotan Ketua BGN & Mafia MBG (Sisi Kiri)**:
   - **Prof. Dadan Hindayana** *(Kepala Badan Gizi Nasional)* - Penanggung jawab pagu MBG Rp 71+ Triliun.
   - **Foto Bukti Porsi Disunat** - Realisasi porsi Rp 7.500 (nasi dingin & tempe tipis).
   - **Foto Wadah Ompreng & Rekanan Kroni** - Uji coba basi dan dapur rekanan tanpa sertifikasi higienis.
   - **Rantai Kebocoran Dana**: Dari pagu resmi Rp 15.000 &rarr; dipotong vendor -Rp 7.500 &rarr; jatah anak kenyang angin.
4. **Visual Sisi Kanan (Karhutla & Sindikat Korupsi)**:
   - **Background Hutan Kalimantan Terbakar (Karhutla)**.
   - **Potret Presiden Prabowo Subianto** di tengah ("Mandat: Basmi Koruptor & Selamatkan Pangan").
   - **Syahrul Yasin Limpo (SYL)** - Mantan Mentan (Vonis 12 Tahun, korupsi Rp 44 M).
   - **Edhy Prabowo** - Mantan Menteri KKP (Vonis 5 Tahun, suap ekspor benur lobster Rp 25 M).
   - **Juliari Batubara** - Mantan Mensos (Vonis 12 Tahun, sunat bansos sembako Rp 32 M).
   - **Oknum Calo MBG & Kades** - Terindikasi sunat anggaran & aspal fiktif.

---

## 📁 Struktur File
```text
kopdes-merah-putih/
├── index.html        # Struktur HTML statis 1 tampilan
├── style.css         # Desain split-screen 100vh, infografis BGN & Karhutla
├── vercel.json       # Konfigurasi Vercel
├── README.md         # Dokumentasi tugas
└── assets/
    ├── dadan_bgn.jpg     # Foto Kepala BGN (Dadan Hindayana)
    ├── mbg.jpg           # Foto bukti porsi MBG disunat
    ├── ompreng_mbg.jpg   # Foto wadah ompreng MBG & vendor
    ├── hutan_kebakar.jpg # Foto Karhutla Kalimantan
    ├── prabowo.jpg       # Potret Presiden Prabowo
    ├── syl.jpg           # Foto Syahrul Yasin Limpo
    ├── edhy_prabowo.jpg  # Foto Edhy Prabowo
    └── juliari.jpg       # Foto Juliari Batubara
```

---

## 🌐 Cara Deploy ke Vercel
Cukup upload folder `kopdes-merah-putih` ke GitHub atau deploy langsung lewat terminal:
```powershell
cd "c:\TUGAS KULIAH SSD\TUGAS SEMESTER 5\Komputasi Awan\kopdes-merah-putih"
npx vercel
```
