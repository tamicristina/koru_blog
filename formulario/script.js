function validaTeForm(event) {
  event.preventDefault(); // Impede o envio do formulário

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let isValid = true;

  // Limpar mensagens de erro anteriores
  nameError.textContent = "";
  emailError.textContent = "";

  // Verificar se os campos estão preenchidos
  if (name.trim() === "") {
    nameError.textContent = "O nome é obrigatório.";
    isValid = false;
  }

  if (email.trim() === "") {
    emailError.textContent = "O e-mail é obrigatório.";
    isValid = false;
  }

  // Se tudo estiver correto, envia o formulário
  if (isValid) {
    alert("Formulário enviado com sucesso!");
    document.getElementById("form").reset();
  }
}
