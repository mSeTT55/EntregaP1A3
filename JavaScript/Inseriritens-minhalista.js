/*Função que ao clicar mostra a tela de cadastro de filmes*/
function telaCadastroFilmes() {
    let conteudoprincipalLista = document.getElementById("conteudoprincipalLista");
    let conteudoprincipalcadastro = document.getElementById("conteudoprincipalcadastro");

    if(conteudoprincipalLista.style.display === "block"){
        conteudoprincipalLista.style.display = "none";
        teladecarregamento.style.display = "flex";
        setTimeout(function() {
            teladecarregamento.style.display = "none";
            conteudoprincipalcadastro.style.display = "block";
        }, 1000);
    } else {
        conteudoprincipalLista.style.display = "block";
        teladecarregamento.style.display = "none";
        conteudoprincipalcadastro.style.display = "none";
    }
}


