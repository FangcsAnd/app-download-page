const DOWNLOAD_LINKS = {
  ios: "https://apps.apple.com/app/idXXXXXXXXX",
  android: "https://example.com/app-release.apk",
};

const QR_API = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";

document.querySelectorAll("[data-store]").forEach((el) => {
  const store = el.dataset.store;
  el.setAttribute("href", DOWNLOAD_LINKS[store] || "#");
});

document.querySelectorAll("[data-qr]").forEach((el) => {
  const store = el.dataset.qr;
  const link = DOWNLOAD_LINKS[store];
  if (!link) return;
  const img = document.createElement("img");
  img.alt = store + " 下载二维码";
  img.src = QR_API + encodeURIComponent(link);
  el.appendChild(img);
});
