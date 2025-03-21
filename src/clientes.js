import { clientesDataset } from "./dataset.js";

document.addEventListener("DOMContentLoaded", function () {
  const btnSalvar = document.getElementById("btnSalvar");
  const tbodyClientes = document.getElementById("tbodyClientes");

  function loadLocalStorage() {
    let clientes = localStorage.getItem("clientes");
    if (!clientes) {
      clientes = clientesDataset;
      localStorage.setItem("clientes", JSON.stringify(clientes));
    } else {
      clientes = JSON.parse(clientes);
    }
    return clientes;
  }

  function saveToLocalStorage(clientes) {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  function renderTable(clientes) {
    tbodyClientes.innerHTML = "";

    clientes.forEach((cliente) => {
      const row = `
        <tr>
          <td>${cliente.id}</td> <!-- Coluna do ID -->
          <td>${cliente.nome}</td>
          <td>${cliente.email}</td>
          <td>${cliente.cpf}</td>
        </tr>
      `;
      tbodyClientes.insertAdjacentHTML("beforeend", row);
    });
  }

  let clientes = loadLocalStorage();
  renderTable(clientes);

  btnSalvar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;

    if (nome && email && cpf) {
      const novoCliente = {
        id: (clientes.length + 1).toString(), // Gera um ID único
        nome: nome,
        email: email,
        cpf: cpf,
      };

      clientes.push(novoCliente);

      saveToLocalStorage(clientes);

      renderTable(clientes);

      document.getElementById("formUsuario").reset();

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
});
