const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/italofernandesvm@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
          // O envio do formulário foi bem-sucedido
          // Redireciona para a página de sucesso
          window.location.href = "sucesso.html";
        }
    })
    .catch((error) => {
      // Lida com erros
      console.error(error);
    });
});
