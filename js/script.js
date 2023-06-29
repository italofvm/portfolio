
async function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;

  // Realiza a validação dos campos
  if (nome.trim() === "") {
    alert("Por favor, preencha o campo Nome");
    return;
  }

  if (email.trim() === "") {
    alert("Por favor, preencha o campo Email");
    return;
  }

if (nome === '' || email === '' || assunto === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Se todas as validações passarem, você pode enviar o formulário aqui
  alert('Formulário enviado com sucesso!');
  // Adicione o código para enviar o formulário para o servidor aqui...

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('assunto').value = '';
  document.getElementById('mensagem').value = '';
}
