// ── DATA RAJA/RATU ──
const monarchData = {
  henry: {
    name: 'HENRY VIII',
    img: './images/2.jpg',
    lahir: '28 Juni 1491, Greenwich',
    wafat: '28 Januari 1547, London',
    kebangsaan: 'Inggris',
    jabatan: 'Raja Inggris (1509–1547)',
    extra: '',
    fakta: 'Henry VIII terkenal karena memisahkan Gereja Inggris dari Gereja Katolik, yang dikenal sebagai bagian dari Reformasi Inggris. Ia juga dikenal karena memiliki enam istri dan kebijakan politiknya yang kuat selama masa pemerintahannya.'
  },
  elizabeth1: {
    name: 'ELIZABETH I',
    img: './images/3.jpg',
    lahir: '7 September 1533, Greenwich',
    wafat: '24 Maret 1603, Richmond Palace',
    kebangsaan: 'Inggris',
    jabatan: 'Ratu Inggris (1558–1603)',
    extra: '',
    fakta: 'Memerintah selama periode yang dikenal sebagai Era Elizabethan. Pada masa pemerintahannya, Inggris mengalami kemajuan besar dalam seni, sastra, dan eksplorasi. Mengalahkan Spanish Armada pada tahun 1588. Tidak pernah menikah atau memiliki anak.'
  },
  victoria: {
    name: 'VICTORIA',
    img: './images/4.jpg',
    lahir: '24 Mei 1819, Kensington Palace',
    wafat: '22 Januari 1901, Osborne House',
    kebangsaan: 'Inggris',
    jabatan: 'Ratu Inggris (1837–1901)',
    extra: `
      <p><strong>Ayah:</strong> Prince Edward, Duke of Kent and Strathearn</p>
      <p><strong>Ibu:</strong> Princess Victoria of Saxe-Coburg-Saalfeld</p>
      <p><strong>Suami:</strong> Prince Albert</p>
    `,
    fakta: 'Memerintah selama lebih dari 63 tahun (salah satu yang terlama dalam sejarah Inggris). Pada masa pemerintahannya, Inggris menjadi kekuatan besar dunia (imperium luas). Masa ini ditandai dengan kemajuan industri, ilmu pengetahuan, dan teknologi.'
  },
  elizabeth2: {
    name: 'ELIZABETH II',
    img: './images/5.jpg',
    lahir: '21 April 1926, Mayfair',
    wafat: '8 September 2022, Balmoral Castle',
    kebangsaan: 'Inggris',
    jabatan: 'Ratu Inggris (1952–2022)',
    extra: '<p><strong>Nama lengkap:</strong> Elizabeth Alexandra Mary</p>',
    fakta: 'Ratu dengan masa pemerintahan terlama dalam sejarah Inggris. Menyaksikan banyak perubahan besar dunia, termasuk perkembangan teknologi dan politik global. Dikenal karena dedikasi tinggi terhadap tugas kerajaan dan stabilitas monarki.'
  }
};

// ── STATE ──
let previousPage = 'home';

// ── NAVIGASI HALAMAN ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── TAMPILKAN DETAIL RAJA/RATU ──
function showDetail(monarchKey) {
  previousPage = 'home';
  const m = monarchData[monarchKey];
  const body = document.getElementById('detail-body');

  body.innerHTML = `
    <div class="detail-portrait">
      <img src="${m.img}" alt="${m.name}" 
      style="width:200px; display:block;"
      onerror="this.style.background='#a8865a';" />
      <p class="portrait-name">${m.name}</p>
    </div>
    <h1>${m.name}</h1>
    <div class="detail-meta">
      ${m.extra}
      <p><strong>Lahir:</strong> ${m.lahir}</p>
      <p><strong>Wafat:</strong> ${m.wafat}</p>
      <p><strong>Kebangsaan:</strong> ${m.kebangsaan}</p>
      <p><strong>Jabatan:</strong> ${m.jabatan}</p>
    </div>
    <div class="detail-facts">
      <h3>✦ Fakta Penting</h3>
      <p>${m.fakta}</p>
    </div>
  `;

  showPage('detail');
}

// ── KEMBALI KE HALAMAN SEBELUMNYA ──
function goBack() {
  showPage(previousPage);
}

// ── FUNGSI SEARCH ──
function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!q) return;

  // Cari nama raja/ratu
  for (const [key, m] of Object.entries(monarchData)) {
    if (m.name.toLowerCase().includes(q)) {
      showDetail(key);
      return;
    }
  }

  // Cari halaman fakta menarik
  if (q.includes('fakta') || q.includes('menarik') || q.includes('reformation') || q.includes('armada') || q.includes('industrial')) {
    showPage('fakta');
    return;
  }

  alert('Tidak ditemukan hasil untuk: ' + q);
}

// ── EVENT LISTENERS ──
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch();
    });
  }
});
