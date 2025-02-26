//obras.html

document.addEventListener("DOMContentLoaded", function () {
  // Captura o botão "Salvar" e a tabela
  const btnSalvar = document.getElementById("btnSalvar");
  const tabela = document
    .getElementById("tabelaObras")
    .getElementsByTagName("tbody")[0];

  // Adiciona um evento de clique ao botão "Salvar"
  btnSalvar.addEventListener("click", function () {
    // Captura os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const tipoConstrucao = document.getElementById("tipoConstrucao").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    // Valida se todos os campos foram preenchidos
    if (nome && tipoConstrucao && logradouro && bairro && cidade && estado) {
      // Cria uma nova linha na tabela
      const novaLinha = tabela.insertRow();

      // Insere as células na nova linha
      const celulaNome = novaLinha.insertCell(0);
      const celulaTipo = novaLinha.insertCell(1);
      const celulaLogradouro = novaLinha.insertCell(2);
      const celulaBairro = novaLinha.insertCell(3);
      const celulaCidade = novaLinha.insertCell(4);
      const celulaEstado = novaLinha.insertCell(5);

      // Adiciona os valores nas células
      celulaNome.textContent = nome;
      celulaTipo.textContent = tipoConstrucao;
      celulaLogradouro.textContent = logradouro;
      celulaBairro.textContent = bairro;
      celulaCidade.textContent = cidade;
      celulaEstado.textContent = estado;

      // Limpa os campos do formulário
      document.getElementById("formObras").reset();

      // Fecha o modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
});
