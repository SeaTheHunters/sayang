const choco = document.getElementById("choco");

choco.addEventListener("click", () => {
  choco.classList.add("melt");

  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 2200);
});
