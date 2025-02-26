//obras.html

document.addEventListener("DOMContentLoaded", function () {
  const btnSalvar = document.getElementById("btnSalvar");
  const tabela = document
    .getElementById("tabelaObras")
    .getElementsByTagName("tbody")[0];

  //pegando os elementos
  btnSalvar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const tipoConstrucao = document.getElementById("tipoConstrucao").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    //add na tabela
    if (nome && tipoConstrucao && logradouro && bairro && cidade && estado) {
      const novaLinha = tabela.insertRow();

      const celulaNome = novaLinha.insertCell(0);
      const celulaTipo = novaLinha.insertCell(1);
      const celulaLogradouro = novaLinha.insertCell(2);
      const celulaBairro = novaLinha.insertCell(3);
      const celulaCidade = novaLinha.insertCell(4);
      const celulaEstado = novaLinha.insertCell(5);

      celulaNome.textContent = nome;
      celulaTipo.textContent = tipoConstrucao;
      celulaLogradouro.textContent = logradouro;
      celulaBairro.textContent = bairro;
      celulaCidade.textContent = cidade;
      celulaEstado.textContent = estado;

      document.getElementById("formObras").reset();

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
});
