const choco = document.getElementById("choco");

choco.addEventListener("click", () => {
  choco.classList.add("crack");

  setTimeout(() => {
    choco.classList.add("break");
  }, 600);

  setTimeout(() => {
    choco.classList.add("melt");
  }, 1200);

  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 2500);
});
