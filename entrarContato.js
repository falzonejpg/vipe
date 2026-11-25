const botao = document.getElementById("botao");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

botao.disabled = true;

function validarCampos() {
const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  const nomeValido = nome.length >= 3;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  botao.disabled = !(nomeValido && emailValido);
}

inputNome.addEventListener("input", validarCampos);
inputEmail.addEventListener("input", validarCampos);

botao.addEventListener("click", (event) => {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  const texto = `Olá, vim do site e desejo entrar em contato, tudo bem?%0A*Nome Completo:* ${nome}\n%0A*Email:* ${email}`;
  const url = `https://wa.me/5513974160498?text=`+ texto;

  window.open(url, "_blank");
});
