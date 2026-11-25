const botoes = document.querySelectorAll(".coracao");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
    const fundoAtual = botao.style.backgroundImage;

    if (fundoAtual.includes("preenchido")) {
    botao.style.backgroundImage = "url('./imagens/coração-vazio.png')";
    } else {
    botao.style.backgroundImage = "url('./imagens/coracao-preenchido.png')";
    }
    });
});
