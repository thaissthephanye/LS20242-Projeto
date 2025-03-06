import { clientesDataset } from "./dataset.js";

document.addEventListener("DOMContentLoaded", function () {
  const btnSalvar = document.getElementById("btnSalvar");
  const tbodyClientes = document.getElementById("tbodyClientes");

  // Função para carregar dados do localStorage ou usar o dataset inicial
  function loadLocalStorage() {
    let clientes = localStorage.getItem("clientes");
    if (!clientes) {
      // Se não houver dados no localStorage, usa o clientesDataset
      clientes = clientesDataset;
      localStorage.setItem("clientes", JSON.stringify(clientes)); // Salva o dataset no localStorage
    } else {
      clientes = JSON.parse(clientes); // Converte a string JSON para um array
    }
    return clientes;
  }

  // Função para salvar dados no localStorage
  function saveToLocalStorage(clientes) {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  // Função para renderizar a tabela com os dados
  function renderTable(clientes) {
    tbodyClientes.innerHTML = ""; // Limpa o conteúdo atual da tabela

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

  // Carregar dados do localStorage (ou dataset) e renderizar a tabela ao carregar a página
  let clientes = loadLocalStorage();
  renderTable(clientes);

  // Adicionar evento de clique ao botão "Salvar"
  btnSalvar.addEventListener("click", function () {
    // Capturar os valores dos inputs
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;

    // Validar se os campos estão preenchidos
    if (nome && email && cpf) {
      // Criar um novo objeto cliente
      const novoCliente = {
        id: (clientes.length + 1).toString(), // Gera um ID único
        nome: nome,
        email: email,
        cpf: cpf,
      };

      // Adicionar o novo cliente ao array
      clientes.push(novoCliente);

      // Salvar no localStorage
      saveToLocalStorage(clientes);

      // Renderizar a tabela novamente
      renderTable(clientes);

      // Limpar o formulário
      document.getElementById("formUsuario").reset();

      // Fechar o modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
});
