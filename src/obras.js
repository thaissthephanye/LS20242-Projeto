import { obrasDataset } from "./dataset.js";

document.addEventListener("DOMContentLoaded", function () {
  const btnSalvar = document.getElementById("btnSalvar");
  const tbodyObras = document.getElementById("tbodyObras");

  // Função para carregar dados do localStorage ou usar o dataset inicial
  function loadLocalStorage() {
    let obras = localStorage.getItem("obras");
    if (!obras) {
      // Se não houver dados no localStorage, usa o obrasDataset
      obras = obrasDataset;
      localStorage.setItem("obras", JSON.stringify(obras)); // Salva o dataset no localStorage
    } else {
      obras = JSON.parse(obras); // Converte a string JSON para um array
    }
    return obras;
  }

  // Função para salvar dados no localStorage
  function saveToLocalStorage(obras) {
    localStorage.setItem("obras", JSON.stringify(obras));
  }

  // Função para renderizar a tabela com os dados
  function renderTable(obras) {
    tbodyObras.innerHTML = ""; // Limpa o conteúdo atual da tabela

    obras.forEach((obra) => {
      const row = `
        <tr>
          <td>${obra.id}</td> <!-- Coluna do ID -->
          <td>${obra.nome}</td>
          <td>${obra.tipoConstrucao}</td>
          <td>${obra.logradouro}</td>
          <td>${obra.bairro}</td>
          <td>${obra.cidade}</td>
          <td>${obra.estado}</td>
        </tr>
      `;
      tbodyObras.insertAdjacentHTML("beforeend", row);
    });
  }

  // Carregar dados do localStorage (ou dataset) e renderizar a tabela ao carregar a página
  let obras = loadLocalStorage();
  renderTable(obras);

  // Adicionar evento de clique ao botão "Salvar"
  btnSalvar.addEventListener("click", function () {
    // Capturar os valores dos inputs
    const nome = document.getElementById("nome").value;
    const tipoConstrucao = document.getElementById("tipoConstrucao").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    // Validar se os campos estão preenchidos
    if (nome && tipoConstrucao && logradouro && bairro && cidade && estado) {
      // Criar um novo objeto obra
      const novaObra = {
        id: (obras.length + 1).toString(), // Gera um ID único
        nome: nome,
        tipoConstrucao: tipoConstrucao,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      };

      // Adicionar a nova obra ao array
      obras.push(novaObra);

      // Salvar no localStorage
      saveToLocalStorage(obras);

      // Renderizar a tabela novamente
      renderTable(obras);

      // Limpar o formulário
      document.getElementById("formObras").reset();

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
