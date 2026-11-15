// Isi URL album Google Photos pada tahap akhir sebelum website dipublikasikan.
const albumLinks = {
  frame1: "",
  frame2: ""
};

document.getElementById("year").textContent = new Date().getFullYear();

const notice = document.createElement("div");
notice.className = "site-notice";
notice.setAttribute("role", "status");
notice.setAttribute("aria-live", "polite");
document.body.appendChild(notice);

let noticeTimer;
function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("is-visible");
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => notice.classList.remove("is-visible"), 2600);
}

document.querySelectorAll("[data-album]").forEach((frame) => {
  frame.addEventListener("click", (event) => {
    const key = frame.dataset.album;
    const albumUrl = albumLinks[key];

    if (!albumUrl) {
      event.preventDefault();
      showNotice("Tautan album foto akan ditambahkan sebelum website dipublikasikan.");
      return;
    }

    event.preventDefault();
    window.open(albumUrl, "_blank", "noopener,noreferrer");
  });
});