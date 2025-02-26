//clientes.html
const btnSalvar = document.getElementById("btnSalvar");
const tabela = document
  .getElementById("tabelaUsuarios")
  .getElementsByTagName("tbody")[0];

btnSalvar.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;

  if (nome && email && cpf) {
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    const celulaCpf = novaLinha.insertCell(2);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
    celulaCpf.textContent = cpf;

    document.getElementById("formUsuario").reset();

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});
