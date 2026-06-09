/* Opret en modal til at vise alle billeder i fuld størrelse */

document.addEventListener("DOMContentLoaded", () => {
  // Opret modal
  const modal = document.createElement("div");
  modal.id = "imageModal";

  modal.innerHTML = `
    <img id="modalImage" alt="">
  `;

  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
    document.body.classList.remove("modal-open");
  });

  document.body.appendChild(modal);

  const modalImage = document.getElementById("modalImage");

  /* Tilføj event listeners til alle billeder for at åbne modal */
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt || "";
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  });
});
