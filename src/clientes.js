//clientes.html
// Captura o botão "Salvar" e a tabela
const btnSalvar = document.getElementById("btnSalvar");
const tabela = document
  .getElementById("tabelaUsuarios")
  .getElementsByTagName("tbody")[0];

// Adiciona um evento de clique ao botão "Salvar"
btnSalvar.addEventListener("click", function () {
  // Captura os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;

  // Valida se todos os campos foram preenchidos
  if (nome && email && cpf) {
    // Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow();

    // Insere as células na nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    const celulaCpf = novaLinha.insertCell(2);

    // Adiciona os valores nas células
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
    celulaCpf.textContent = cpf;

    // Limpa os campos do formulário
    document.getElementById("formUsuario").reset();

    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});
