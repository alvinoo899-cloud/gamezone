/**
 * ============================================================================
 * GAMEZONE - JAVASCRIPT LOGIC
 * ============================================================================
 * Kode ini dibuat dengan JavaScript standar (Vanilla JS) agar mudah dipelajari
 * oleh pemula. Berisi data game, sistem pencarian, filter kategori, dan modal.
 */

// ============================================================================
// 1. DATA GAME (ARRAY OF OBJECTS)
// ============================================================================
// Anda dapat menambah atau mengubah game di bawah ini dengan mudah.
const gamesData = [
  {
    id: "valorant",
    name: "Valorant",
    primaryCategory: "FPS",
    categories: ["FPS", "Action"],
    developer: "Riot Games",
    releaseYear: "2020",
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Penembak taktis berbasis karakter 5v5 dengan keahlian menembak presisi dan kemampuan agen unik.",
    fullDesc: "Valorant adalah penembak taktis orang pertama (FPS) 5v5 gratis yang dikembangkan oleh Riot Games. Setiap pemain memilih Agen dengan kemampuan unik serta membeli persenjataan realistis di setiap ronde. Tujuannya adalah menanam atau menjinakkan 'Spike' dalam serangkaian ronde kompetitif yang memacu adrenalin.",
    platforms: ["PC (Windows)", "PlayStation 5", "Xbox Series X/S"],
    highlights: [
      "Pertempuran Taktis 5v5 Berkecepatan Tinggi",
      "Pilihan 20+ Agen dengan Kemampuan Unik",
      "Mode Ranked Kompetitif & Esports Global",
      "Sistem Anti-Cheat Vanguard yang Mutakhir"
    ]
  },
  {
    id: "minecraft",
    name: "Minecraft",
    primaryCategory: "Adventure",
    categories: ["Adventure"],
    developer: "Mojang Studios",
    releaseYear: "2011",
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Caves_%26_Cliffs_II_-_Alex_%26_Steve_I.png",
    fallbackImage: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Game sandbox balok legendaris untuk menjelajah dunia tanpa batas, bertahan hidup, dan membangun kreasi.",
    fullDesc: "Minecraft adalah game sandbox petualangan paling laris di dunia. Pemain ditempatkan di dunia luas yang dibuat secara prosedural dari blok 3D. Kamu bisa mengumpulkan bahan tambang, membuat perlengkapan, membangun istana megah, bertarung melawan monster malam, hingga mengalahkan Ender Dragon di dimensi akhir.",
    platforms: ["PC", "Android", "iOS", "PlayStation", "Xbox", "Nintendo Switch"],
    highlights: [
      "Mode Survival (Bertahan Hidup) & Creative",
      "Dunia Balok Luas Tanpa Batas (Infinite World)",
      "Mekanisme Redstone untuk Otomasi Canggih",
      "Komunitas Modding & Server Multiplayer Raksasa"
    ]
  },
  {
    id: "gta-v",
    name: "Grand Theft Auto V",
    primaryCategory: "Action",
    categories: ["Action", "Adventure"],
    developer: "Rockstar Games",
    releaseYear: "2013",
    rating: 4.9,
    image: "https://shared.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Mahakarya open-world penuh aksi di kota megah Los Santos mengikuti kisah tiga kriminal legendaris.",
    fullDesc: "Grand Theft Auto V (GTA V) membawamu ke kota fiktif Los Santos dan daerah sekitarnya yang sangat detail. Pemain berganti-ganti memainkan tiga tokoh utama: Michael sang mantan perampok bank, Franklin sang pemuda jalanan ambisius, dan Trevor si psikopat liar. Diperkaya juga dengan dunia GTA Online yang terus diperbarui.",
    platforms: ["PC (Steam/Epic)", "PlayStation 4/5", "Xbox One/Series X"],
    highlights: [
      "Tiga Karakter Utama yang Saling Terhubung",
      "Misi Heist (Perampokan) Spektakuler",
      "Kota Los Santos Open-World Super Realistis",
      "GTA Online dengan Ratusan Misi & Mobil Keren"
    ]
  },
  {
    id: "mobile-legends",
    name: "Mobile Legends: Bang Bang",
    primaryCategory: "Action",
    categories: ["Action"],
    developer: "Moonton",
    releaseYear: "2016",
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/Mobile_Legends_Bang_Bang_Battlefield_Overview.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Game MOBA mobile 5v5 terfavorit dengan pertarungan tim cepat, kontrol presisi, dan ratusan hero.",
    fullDesc: "Mobile Legends: Bang Bang (MLBB) adalah game arena pertarungan online multiplayer (MOBA) untuk smartphone. Bergabunglah dengan temanmu dalam pertempuran 5v5 melawan pemain sungguhan di 3 lorong (lanes). Taklukkan monster hutan, hancurkan menara pertahanan, dan runtuhkan markas musuh dalam laga seru selama 10-15 menit.",
    platforms: ["Android", "iOS"],
    highlights: [
      "Pertandingan Cepat 10 Menit Kapan Saja",
      "120+ Pilihan Hero (Tank, Mage, Marksman, Assassin)",
      "Kontrol Virtual Joystick Sangat Responsif",
      "Ekosistem Turnamen Esports Resmi (MPL, M-Series)"
    ]
  },
  {
    id: "free-fire",
    name: "Garena Free Fire",
    primaryCategory: "Battle Royale",
    categories: ["Battle Royale", "Action"],
    developer: "Garena / 111 Dots Studio",
    releaseYear: "2017",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/en/0/09/Free_Fire_Chrono.png",
    fallbackImage: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Game battle royale mobile berkecepatan tinggi; 50 pemain bertarung di pulau terpencil untuk bertahan hidup.",
    fullDesc: "Garena Free Fire adalah game menembak bertahan hidup populer untuk ponsel. Setiap pertandingan berdurasi 10 menit menempatkanmu di pulau terpencil bersama 49 pemain lain yang semuanya bertekad bertahan hidup. Terjun payung, cari senjata, tetap berada di zona aman, dan jadilah yang terakhir bertahan untuk meraih kemenangan 'Booyah!'.",
    platforms: ["Android", "iOS"],
    highlights: [
      "Pertempuran Cepat 10 Menit 50 Pemain",
      "Karakter Unik dengan Skill Pasif & Aktif",
      "Ringan dan Lancar di Segala Spesifikasi Smartphone",
      "Mode Ranked Skuad 4v4 'Clash Squad'"
    ]
  },
  {
    id: "pubg",
    name: "PUBG: BATTLEGROUNDS",
    primaryCategory: "Battle Royale",
    categories: ["Battle Royale", "FPS"],
    developer: "KRAFTON, Inc.",
    releaseYear: "2017",
    rating: 4.8,
    image: "https://shared.steamstatic.com/store_item_assets/steam/apps/578080/capsule_616x353.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Pelopor genre battle royale dunia dengan mekanik tembakan realistis dan strategi pertempuran 100 pemain.",
    fullDesc: "PUBG: BATTLEGROUNDS adalah game battle royale legendaris yang mempopulerkan genre ini secara global. 100 pemain terjun ke peta luas seperti Erangel dan Miramar tanpa membawa perlengkapan. Pemain harus mencari persenjataan, helm, rompi, dan kendaraan sambil terus bergerak menghindari zona biru mematikan demi mengamankan 'Winner Winner Chicken Dinner!'.",
    platforms: ["PC (Steam)", "PlayStation 4/5", "Xbox One/Series X", "Mobile"],
    highlights: [
      "Simulasi Balistik Senjata Sangat Autentik",
      "Peta Legendaris (Erangel, Miramar, Sanhok, Taego)",
      "Pertempuran Menegangkan Melawan 100 Pemain",
      "Tersedia Gratis untuk Dimainkan (Free-to-Play)"
    ]
  }
];

// ============================================================================
// 2. SELEKSI ELEMEN DOM (Document Object Model)
// ============================================================================
const gamesGrid = document.getElementById("games-grid");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.getElementById("results-count");
const activeFilterIndicator = document.getElementById("active-filter-indicator");
const noResultsBox = document.getElementById("no-results");
const resetFilterBtn = document.getElementById("reset-filter-btn");

// Elemen Modal
const gameModal = document.getElementById("game-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalBtnClose = document.getElementById("modal-btn-close");
const modalBtnAction = document.getElementById("modal-btn-action");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalRating = document.getElementById("modal-rating");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDeveloper = document.getElementById("modal-developer");
const modalGenreTags = document.getElementById("modal-genre-tags");
const modalDescription = document.getElementById("modal-description");
const modalHighlights = document.getElementById("modal-highlights");
const modalPlatforms = document.getElementById("modal-platforms");

// Elemen Navigasi & Mobile
const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopBtn = document.getElementById("back-to-top");

// State Global untuk Menyimpan Filter yang Aktif
let currentCategory = "all";
let currentSearchTerm = "";

// ============================================================================
// 3. FUNGSI UNTUK MERENDER KARTU GAME KE DALAM GRID
// ============================================================================
/**
 * Merender daftar game ke dalam elemen HTML #games-grid
 * @param {Array} games - Daftar objek game yang akan ditampilkan
 */
function renderGames(games) {
  // Kosongkan grid sebelum menambahkan kartu baru
  gamesGrid.innerHTML = "";

  // Jika tidak ada game yang cocok dengan pencarian / filter
  if (games.length === 0) {
    gamesGrid.style.display = "none";
    noResultsBox.style.display = "block";
    resultsCount.textContent = "Menampilkan 0 game";
    return;
  }

  // Tampilkan kembali grid dan sembunyikan kotak "no results"
  gamesGrid.style.display = "grid";
  noResultsBox.style.display = "none";
  resultsCount.textContent = `Menampilkan ${games.length} dari ${gamesData.length} game`;

  // Buat kartu game satu per satu
  games.forEach((game) => {
    // Tentukan class warna badge kategori
    const categoryClass = game.primaryCategory.toLowerCase().replace(/\s+/g, "");

    // Buat elemen artikel untuk kartu game
    const card = document.createElement("article");
    card.className = "game-card";
    card.setAttribute("data-id", game.id);

    // Template HTML kartu game
    card.innerHTML = `
      <div class="card-media">
        <img 
          src="${game.image}" 
          alt="${game.name}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='${game.fallbackImage}';"
        >
        <div class="card-overlay"></div>
        <div class="card-badges">
          <span class="badge badge-category ${categoryClass}">
            <i class="fa-solid fa-tag"></i> ${game.primaryCategory}
          </span>
          <span class="badge badge-rating">
            <i class="fa-solid fa-star"></i> ${game.rating}
          </span>
        </div>
      </div>

      <div class="card-content">
        <div class="card-title-row">
          <h3 class="card-title">${game.name}</h3>
        </div>
        <span class="card-developer"><i class="fa-solid fa-gamepad"></i> ${game.developer}</span>
        
        <p class="card-desc">${game.shortDesc}</p>
        
        <div class="card-platforms">
          <span><i class="fa-solid fa-display"></i> ${game.platforms.slice(0, 2).join(", ")}${game.platforms.length > 2 ? ' +' : ''}</span>
        </div>

        <button class="btn-view-details" data-id="${game.id}" aria-label="Lihat detail game ${game.name}">
          <span>View Details</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    // Tambahkan kartu ke dalam gamesGrid
    gamesGrid.appendChild(card);
  });

  // Pasang event listener pada setiap tombol "View Details"
  attachDetailButtonListeners();
}

// ============================================================================
// 4. SISTEM FILTER & PENCARIAN (SEARCH & CATEGORY FILTER)
// ============================================================================
/**
 * Menyaring data game berdasarkan kata kunci pencarian dan kategori aktif
 */
function filterGames() {
  const searchTerm = currentSearchTerm.trim().toLowerCase();

  const filtered = gamesData.filter((game) => {
    // 1. Cek kecocokan nama game dengan kata kunci pencarian
    const matchesSearch = game.name.toLowerCase().includes(searchTerm) ||
      game.primaryCategory.toLowerCase().includes(searchTerm);

    // 2. Cek kecocokan dengan filter kategori
    let matchesCategory = false;
    if (currentCategory === "all") {
      matchesCategory = true;
    } else {
      // Mencocokkan primary category atau array categories
      matchesCategory = game.primaryCategory.toLowerCase() === currentCategory.toLowerCase() ||
        game.categories.some(cat => cat.toLowerCase() === currentCategory.toLowerCase());
    }

    // Game harus memenuhi kedua kriteria
    return matchesSearch && matchesCategory;
  });

  // Tampilkan hasil penyaringan
  renderGames(filtered);
}

// Event Listener: Input Pencarian Real-Time
searchInput.addEventListener("input", (e) => {
  currentSearchTerm = e.target.value;

  // Tampilkan atau sembunyikan tombol 'X' (Clear)
  if (currentSearchTerm.length > 0) {
    clearSearchBtn.style.display = "flex";
  } else {
    clearSearchBtn.style.display = "none";
  }

  filterGames();
});

// Event Listener: Tombol Hapus Pencarian (X)
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearchTerm = "";
  clearSearchBtn.style.display = "none";
  searchInput.focus();
  filterGames();
});

// Event Listener: Tombol Filter Kategori (All, Action, Adventure, FPS, Battle Royale)
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus status aktif dari semua tombol filter
    filterButtons.forEach((b) => b.classList.remove("active"));

    // Aktifkan tombol yang diklik
    btn.classList.add("active");

    // Ambil nilai kategori dari data-category attribute
    currentCategory = btn.getAttribute("data-category");

    // Perbarui teks indikator kategori aktif
    const categoryName = btn.querySelector("span") ? btn.querySelector("span").textContent : currentCategory;
    activeFilterIndicator.innerHTML = `Kategori: <strong>${categoryName}</strong>`;

    filterGames();
  });
});

// Event Listener: Tombol Reset ketika game tidak ditemukan
resetFilterBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearchTerm = "";
  clearSearchBtn.style.display = "none";
  currentCategory = "all";

  // Reset tombol filter UI
  filterButtons.forEach((btn) => {
    if (btn.getAttribute("data-category") === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  activeFilterIndicator.innerHTML = `Kategori: <strong>All Games</strong>`;
  filterGames();
});

// ============================================================================
// 5. MODAL DETAIL GAME (POPUP KETIKA VIEW DETAILS DIKLIK)
// ============================================================================
/**
 * Membuka modal dan mengisi konten berdasarkan ID game yang diklik
 * @param {string} gameId - ID game yang ingin ditampilkan
 */
function openModal(gameId) {
  const game = gamesData.find((g) => g.id === gameId);
  if (!game) return;

  // Isi data modal
  modalImage.src = game.image;
  modalImage.alt = game.name;
  modalImage.onerror = () => {
    modalImage.src = game.fallbackImage;
  };

  modalTitle.textContent = game.name;
  modalYear.textContent = `Tahun Rilis: ${game.releaseYear}`;
  modalRating.innerHTML = `<i class="fa-solid fa-star"></i> ${game.rating} / 5.0`;
  modalCategory.textContent = game.primaryCategory;
  modalDeveloper.textContent = game.developer;
  modalGenreTags.textContent = game.categories.join(", ");
  modalDescription.textContent = game.fullDesc;

  // Masukkan daftar fitur unggulan (Highlights)
  modalHighlights.innerHTML = "";
  game.highlights.forEach((item) => {
    const highlightEl = document.createElement("div");
    highlightEl.className = "highlight-item";
    highlightEl.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span>${item}</span>`;
    modalHighlights.appendChild(highlightEl);
  });

  // Masukkan daftar platform yang didukung
  modalPlatforms.innerHTML = "";
  game.platforms.forEach((platform) => {
    const chip = document.createElement("span");
    chip.className = "platform-chip";

    // Beri ikon sesuai jenis platform
    let iconClass = "fa-gamepad";
    if (platform.toLowerCase().includes("pc") || platform.toLowerCase().includes("windows")) {
      iconClass = "fa-desktop";
    } else if (platform.toLowerCase().includes("android") || platform.toLowerCase().includes("ios")) {
      iconClass = "fa-mobile-screen-button";
    }

    chip.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${platform}</span>`;
    modalPlatforms.appendChild(chip);
  });

  // Update aksi tombol modal
  modalBtnAction.onclick = () => {
    alert(`Membuka info gameplay untuk "${game.name}"!\nDeveloper: ${game.developer}\nPlatform: ${game.platforms.join(", ")}`);
  };

  // Tampilkan modal dan cegah halaman di belakang scrolling
  gameModal.classList.add("active");
  gameModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Menutup modal detail game
 */
function closeModal() {
  gameModal.classList.remove("active");
  gameModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

// Pasang Event Listener untuk tombol-tombol View Details di kartu
function attachDetailButtonListeners() {
  const detailButtons = document.querySelectorAll(".btn-view-details");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gameId = btn.getAttribute("data-id");
      openModal(gameId);
    });
  });
}

// Event Listener: Tombol Tutup Modal (X)
modalCloseBtn.addEventListener("click", closeModal);
modalBtnClose.addEventListener("click", closeModal);

// Event Listener: Klik area luar modal untuk menutup
gameModal.addEventListener("click", (e) => {
  if (e.target === gameModal) {
    closeModal();
  }
});

// Event Listener: Tombol 'Escape' pada keyboard untuk menutup modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && gameModal.classList.contains("active")) {
    closeModal();
  }
});

// ============================================================================
// 6. RESPONSIVE MOBILE NAVIGATION & NAVBAR EFFECTS
// ============================================================================
// Toggle Menu Hamburger di Layar HP
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Tutup menu mobile ketika salah satu link navigasi diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

    // Perbarui status aktif pada link navigasi
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Efek Sticky Navbar saat di-scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Tampilkan / Sembunyikan Tombol Back to Top
  if (window.scrollY > 350) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Klik tombol Back to Top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ============================================================================
// 7. INISIALISASI HALAMAN SAAT PERTAMA KALI DIBUKA
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render semua game saat halaman selesai dimuat
  renderGames(gamesData);
  console.log("GameZone Website siap digunakan! Total game dimuat:", gamesData.length);
});
