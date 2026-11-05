/**
 * KopDes Merah Putih - Interactive Script
 * Menampilkan investigasi korupsi MBG, Food Estate, dan profil terpidana koruptor.
 */

// Database Profil Koruptor & Oknum
const corruptorsData = {
  syl: {
    name: "Syahrul Yasin Limpo (SYL)",
    role: "Mantan Menteri Pertanian RI",
    amount: "Rp 44,5 Miliar",
    status: "Terpidana 12 Tahun Penjara (Vonis Tipikor)",
    photo: "assets/syl.jpg",
    stamp: "VONIS 12 TH",
    badge: "⚖️ KASUS KORUPSI KEMENTAN RI",
    modus: "Memeras pejabat eselon I dan dinas pertanian untuk menyetor uang patungan puluhan miliar. Uang yang seharusnya untuk subsidi pupuk, bibit petani, dan ketahanan pangan desa malah dipakai untuk sewa jet pribadi, tas mewah, mobil anak, hingga tiket umroh keluarga.",
    quote: "Petani di pelosok desa harus antre berhari-hari demi sekarung pupuk subsidi langka, sementara menterinya memeras bawahan untuk gaya hidup mewah sekeluarga."
  },
  edhy: {
    name: "Edhy Prabowo",
    role: "Mantan Menteri Kelautan & Perikanan (KKP)",
    amount: "Rp 25,7 Miliar (Suap Ekspor)",
    status: "Terpidana 5 Tahun Penjara (OTT KPK)",
    photo: "assets/edhy_prabowo.jpg",
    stamp: "VONIS 5 TH",
    badge: "🦞 KASUS SUAP BENIH LOBSTER",
    modus: "Membuka keran ekspor benih lobster demi keuntungan kroni dan rekanan partai. Menerima suap miliaran rupiah dari eksportir yang kemudian dibelanjakan jam tangan mewah Rolex, tas Hermes, dan sepeda balap di Hawaii.",
    quote: "Merupakan salah satu orang terdekat Prabowo yang justru terjerat operasi tangkap tangan (OTT) KPK. Bukti nyata bahwa kedekatan politik sering kali disalahgunakan oleh oknum di sekeliling kekuasaan."
  },
  juliari: {
    name: "Juliari Peter Batubara",
    role: "Mantan Menteri Sosial RI",
    amount: "Rp 32,4 Miliar (Fee Bansos)",
    status: "Terpidana 12 Tahun Penjara",
    photo: "assets/juliari.jpg",
    stamp: "VONIS 12 TH",
    badge: "📦 SKANDAL SUNAT BANSOS PANGAN",
    modus: "Menetapkan 'jatah fee' Rp 10.000 per paket sembako bansos beras rakyat miskin. Akibat pemotongan ini, beras yang diterima warga berkutu, sarden basi, dan berat paket disunat.",
    quote: "Simbol paling kelam dari pengkhianatan pangan: memotong jatah makan rakyat yang sedang lapar demi mengumpulkan kardus-kardus uang suap."
  },
  mbg_calo: {
    name: "Oknum Calo MBG & Kades Fiktif",
    role: "Makelar Tender Katering & Kades Penguap Anggaran",
    amount: "Estimasi Rp 7.500 / Anak / Hari + Dana Desa",
    status: "Target Pengawasan Partisipatif Warga",
    photo: "assets/mbg.jpg",
    stamp: "TERINDIKASI",
    badge: "🍱 SKANDAL MAFIA MAKAN BERGIZI",
    modus: "Memenangkan tender dapur umum MBG tanpa sertifikasi higienis karena relasi kerabat pejabat. Porsi makanan resmi Rp 15.000 dipangkas hingga tersisa nasi keras dan tempe tipis. Di tingkat desa, anggaran ketahanan pangan disulap menjadi laporan fiktif.",
    quote: "Jangan biarkan niat baik Presiden memberi makan bergizi anak sekolah diubah menjadi 'lumbung basah' baru bagi mafia katering lokal."
  }
};

// Database Skenario Audit Satire
const auditScenarios = {
  mbg_sunat: {
    title: "Skandal Porsi MBG: Rp 15.000 Disulap Menjadi Rp 7.500",
    scoreFisik: "25%",
    scoreMenguap: "Rp 7.500 / Anak / Hari",
    deskripsi: "Dalam rancangan anggaran resmi, tiap porsi dialokasikan Rp 15.000 lengkap dengan telur ayam, daging, sayuran segar, dan susu. Namun akibat pemotongan berjenjang oleh oknum dinas dan vendor katering titipan, menu yang sampai di meja anak sekolah menyusut drastis: nasi dingin porsi kuli, tempe setipis kartu nama, dan seiris semangka pucat.",
    quote: "Presiden ingin mencetak generasi emas bebas stunting, tetapi oknum calo proyek malah mencetak generasi kenyang angin demi swasembada dompet pribadi."
  },
  mbg_ompreng: {
    title: "Ompreng Stainless Mewah, Menu Makanan Cepat Basi & Rekanan Kroni",
    scoreFisik: "19%",
    scoreMenguap: "Rp 140 Juta / Sekolah",
    deskripsi: "Wadah makanan stainless steel impor dipamerkan megah untuk konten seremonial. Namun karena vendor katering dipilih berdasarkan kedekatan keluarga pejabat lokal dan dimasak dari jam 2 subuh tanpa pendingin, sejumlah siswa di lokasi simulasi dilaporkan mengalami mual dan makanan berlendir saat jam makan siang.",
    quote: "Omprengnya kinclong mengkilap, tapi lauknya cepat basi. Mengurus gizi anak bangsa butuh standar higienis profesional, bukan bagi-bagi jatah ke katering kroni."
  },
  mbg_susu: {
    title: "Drama Susu Peternak Lokal Dibuang vs Kuota Impor MBG",
    scoreFisik: "12%",
    scoreMenguap: "200.000+ Liter Susu Terbuang",
    deskripsi: "Peternak sapi perah di Boyolali dan Pasuruan terpaksa membuang ribuan liter susu segar ke selokan karena pabrik pengolahan membatasi kuota serapan lokal. Sementara di program MBG, anak-anak disuguhi susu bubuk skim rekondisi hasil impor dari luar negeri.",
    quote: "Katanya bela produk merah putih dan kemandirian peternak, tapi saat peternak mandi air mata buang susu, keran impor malah dibuka selebar samudra."
  },
  food_estate: {
    title: "Food Estate & Karhutla: Hutan Gambut Terbakar Demi Jagung Polybag",
    scoreFisik: "10%",
    scoreMenguap: "Rp 1,5+ Triliun + Karhutla",
    deskripsi: "Ribuan hektar hutan adat dan kubah gambut Kalimantan dibabat hingga memicu kebakaran hebat. Tanah berpasir yang rusak tak bisa ditanami singkong. Saat rombongan menteri datang meninjau, tanaman jagung subur dalam polybag didatangkan khusus dari daerah lain demi foto seremoni publikasi.",
    quote: "Hutan Kalimantan dibakar dan diubah menjadi kuburan abu demi proyek mangkrak. Satwa musnah, warga menghirup asap, dan uang triliunan rupiah lenyap ditelan kontraktor abal-abal."
  },
  korupsi_syl: {
    title: "Korupsi Anggaran Pertanian Syahrul Yasin Limpo (SYL)",
    scoreFisik: "5%",
    scoreMenguap: "Rp 44,5 Miliar",
    deskripsi: "Mantan Menteri Pertanian terbukti memeras pejabat eselon demi kepentingan pribadi dan keluarga, menggunakan anggaran kementerian untuk tiket jet pribadi, cicilan mobil, dan kemewahan saat petani menjerit pupuk langka.",
    quote: "Vonis 12 tahun penjara harus jadi pelajaran keras: jangan pernah bermain-main dengan urusan perut dan pertanian rakyat!"
  },
  korupsi_edhy: {
    title: "Suap Ekspor Benih Lobster Edhy Prabowo",
    scoreFisik: "15%",
    scoreMenguap: "Rp 25,7 Miliar",
    deskripsi: "Mantan Menteri KKP yang merupakan kader dan orang dekat Prabowo terbukti menerima suap dari pengusaha eksportir benih lobster dan dibelanjakan barang mewah di luar negeri.",
    quote: "Orang dekat di lingkaran kekuasaan adalah ujian integritas terbesar bagi kepemimpinan nasional."
  },
  korupsi_juliari: {
    title: "Korupsi Fee Bansos Pangan Juliari Batubara",
    scoreFisik: "10%",
    scoreMenguap: "Rp 32,4 Miliar",
    deskripsi: "Memungut fee Rp 10.000 per paket beras bantuan sosial sembako di tengah bencana pandemi. Korupsi paling tidak manusiawi dalam sejarah modern bansos pangan.",
    quote: "Jangan sampai skandal bansos sembako terulang kembali di program Makan Bergizi Gratis (MBG)."
  },
  aspal: {
    title: "Proyek Aspal Tipis Cepat Rontok & Bimtek Mewah Kades",
    scoreFisik: "22%",
    scoreMenguap: "Rp 240 Juta",
    deskripsi: "Aspal setebal kerupuk dihamparkan menjelang pemeriksaan LPJ. Diguyur hujan sekali langsung berhamburan. Sisa anggarannya dipakai rombongan studi banding ke hotel berbintang di luar pulau.",
    quote: "Jalan desa dibangun dari keringat pajak rakyat, bukan kanvas lukis abstrak yang luntur disiram hujan."
  }
};

/**
 * Pemicu Audit Satire
 */
function triggerAudit(customDesa, customKategori) {
  const desaInput = customDesa || document.getElementById('lokasi').value.trim() || 'Lokasi Program / Desa Sejahtera';
  const kategoriSelect = customKategori || document.getElementById('kategori').value || 'mbg_sunat';
  const tahunSelect = document.getElementById('tahun') ? document.getElementById('tahun').value : '2024';

  const data = auditScenarios[kategoriSelect] || auditScenarios.mbg_sunat;

  document.getElementById('modalDesaTitle').textContent = `Audit Realisasi: ${desaInput} (${tahunSelect})`;
  document.getElementById('scoreFisik').textContent = data.scoreFisik;
  document.getElementById('scoreMenguap').textContent = data.scoreMenguap;
  document.getElementById('findingDescription').innerHTML = `<strong>Kategori: ${data.title}</strong><br>${data.deskripsi}`;

  const quoteEl = document.querySelector('.satire-quote blockquote');
  if (quoteEl) {
    quoteEl.textContent = `"${data.quote}"`;
  }

  const modal = document.getElementById('auditModal');
  modal.classList.add('open');
}

function closeAuditModal() {
  document.getElementById('auditModal').classList.remove('open');
}

/**
 * Tampilkan Modal Profil Koruptor
 */
function showCorruptorModal(type) {
  const data = corruptorsData[type] || corruptorsData.syl;

  document.getElementById('corrName').textContent = data.name;
  document.getElementById('corrRole').textContent = data.role;
  document.getElementById('corrAmount').textContent = data.amount;
  document.getElementById('corrStatus').textContent = data.status;
  document.getElementById('corrPhoto').src = data.photo;
  document.getElementById('corrStamp').textContent = data.stamp;
  document.getElementById('corrBadge').textContent = data.badge;
  document.getElementById('corrModus').textContent = data.modus;
  document.getElementById('corrQuote').textContent = `"${data.quote}"`;

  document.getElementById('corruptorModal').classList.add('open');
}

function closeCorruptorModal() {
  document.getElementById('corruptorModal').classList.remove('open');
}

/**
 * Modal Pelaporan Warga
 */
function openReportModal() {
  document.getElementById('reportModal').classList.add('open');
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('open');
}

function submitLaporan() {
  const proyek = document.getElementById('repProyek').value.trim();
  const uraian = document.getElementById('repUraian').value.trim();

  if (!proyek || !uraian) {
    alert("Mohon isi nama program/oknum dan uraian masalah agar laporan dapat dicatat.");
    return;
  }

  alert("Laporan berhasil dikirim secara terenkripsi dan anonim!\nTim investigasi warga akan mengarsipkan bukti untuk transparansi.");
  document.getElementById('repProyek').value = '';
  document.getElementById('repUraian').value = '';
  closeReportModal();
}

/**
 * Quick Fill Tag Chips
 */
function quickFill(desa, kategori) {
  document.getElementById('lokasi').value = desa;
  document.getElementById('kategori').value = kategori;
  triggerAudit(desa, kategori);
}

/**
 * Klik Stat Badge untuk Edukasi Satire
 */
function showStatDetail(type) {
  if (type === 'karhutla') {
    alert("🔥 FAKTA KEBAKARAN HUTAN & FOOD ESTATE:\nRibuan hektar hutan adat dan lahan gambut di Kalimantan dibuka dan terbakar hebat demi proyek lumbung pangan. Sayangnya lahan gambut berpasir tidak cocok untuk singkong, menyebabkan kerugian ekologis dan kabut asap pekat bagi warga.");
  } else if (type === 'mbg') {
    alert("🍱 FAKTA PROGRAM MBG & DANA DESA:\nAlokasi puluhan triliun rupiah disiapkan negara untuk Makan Bergizi Gratis dan ketahanan pangan. Mari kawal bersama agar anggaran ini dinikmati anak-anak dan petani lokal, bukan dipotong oleh calo katering rekanan dinas!");
  } else if (type === 'kasus') {
    alert("⚠️ CATATAN ICW & BPK:\nSektor anggaran daerah dan dana bansos/pangan kerap menduduki peringkat teratas dalam temuan kebocoran. Akar masalah: minimnya transparansi warga dan pemilihan rekanan tender yang nepotistik.");
  }
}

function showFactModal() {
  showStatDetail('karhutla');
}

/**
 * Tutup modal saat klik luar card
 */
function closeModalOnBackdrop(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    event.target.classList.remove('open');
  }
}

// Tutup dengan keyboard ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAuditModal();
    closeCorruptorModal();
    closeReportModal();
  }
});
