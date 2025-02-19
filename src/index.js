let pVermelho = document.getElementById("vermelho");
pVermelho.insertAdjacentElement(
  "beforeend",
  "<p>Parágrafo Alterado <img src='C:LS20242-Projetosrcimagesice-cream-8534875_1280.jpg' >"
);

let pAzuls = document.getElementsByClassName("azul");
for (const pAzul of pAzuls) {
  pAzul.classList.add("borda");
}
