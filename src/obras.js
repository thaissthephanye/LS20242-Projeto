import { obrasDataset } from "./dataset.js";

function loadLocalStorage() {
  let obrasLocalStorage = localStorage.getItem("obras");
  if (obrasLocalStorage == null) {
    localStorage.setItem("obras", JSON.stringify(obrasDataset));
    obrasLocalStorage = localStorage.getItem("obras");
  }
  return JSON.parse(obrasLocalStorage);
}

const loadObrasTable = () => {
  let tbodyObras = document.getElementById("tbodyObras");
  tbodyObras.innerHTML = "";

  let obras = loadLocalStorage();
  for (const obra of obras) {
    tbodyObras.insertAdjacentHTML("beforeend", getRowObraTable(obra));
  }
};

const getRowObraTable = (obra) => {
  return `<tr>
    <td>${obra.id}</td>
    <td>${obra.nome}</td>
    <td>${obra.tipoConstrucao}</td>
    <td>${obra.logradouro}</td>
    <td>${obra.bairro}</td>
    <td>${obra.cidade}</td>
    <td>${obra.estado}</td>
  </tr>`;
};

let obraForm = document.getElementById("formObras");
let btnSalvar = document.getElementById("btnSalvar");

btnSalvar.addEventListener("click", (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let tipoConstrucao = document.getElementById("tipoConstrucao").value;
  let logradouro = document.getElementById("logradouro").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;

  if (nome && tipoConstrucao && logradouro && bairro && cidade && estado) {
    let novaObra = {
      id: (loadLocalStorage().length + 1).toString(), // Gera um ID único
      nome: nome,
      tipoConstrucao: tipoConstrucao,
      logradouro: logradouro,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
    };

    let obras = loadLocalStorage();
    obras.push(novaObra);

    localStorage.setItem("obras", JSON.stringify(obras));

    loadObrasTable();

    Toastify({
      text: "Obra cadastrada com sucesso!",
      className: "success",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor:
        "linear-gradient(to right,rgb(10, 27, 177),rgb(61, 110, 201))",
    }).showToast();

    // Fecha o modal
    let modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();

    obraForm.reset();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});

loadObrasTable();
