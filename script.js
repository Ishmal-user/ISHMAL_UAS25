// --- Logika Toggle Menu Mobile ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const successMessage = document.getElementById("successMessage");

mobileMenuButton.addEventListener("click", () => {
  // Toggle tampilan menu mobile
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
  }
});

// Tutup menu saat tautan diklik (untuk navigasi)
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// --- Logika Pengiriman Formulir ---
const inquiryForm = document.getElementById("inquiryForm");

// Penanganan formulir sederhana untuk menampilkan modal sukses
inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir default

  // Tampilkan modal khusus
  successMessage.style.display = "flex";
  inquiryForm.reset(); // Hapus bidang formulir
});

// Fungsi untuk menutup modal sukses
function closeModal() {
  successMessage.style.display = "none";
}
