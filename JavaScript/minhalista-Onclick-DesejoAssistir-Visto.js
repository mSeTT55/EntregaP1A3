/*Função que ao clicar altera entre Desejo Assistir e visto*/
let direita_Desejoassistir = document.getElementById("direita-itens-desejo-assistir");
let direita_Visto = document.getElementById("direita-itens-visto");

let esquerda_Desejoassistir = document.getElementById("desejoassistir");
let esquerda_Visto = document.getElementById("visto");

function mudarTela_desejoassistir() {
    if(direita_Visto.style.display === "flex"){
        direita_Visto.style.display = "none"
        direita_Desejoassistir.style.display = "flex";
        esquerda_Visto.style.backgroundColor = "rgba(81, 71, 105, 0)";
        esquerda_Desejoassistir.style.backgroundColor = "rgba(81, 71, 105, 0.45)";
        
    }else{
        direita_Desejoassistir.style.display = "flex";
        esquerda_Visto.style.backgroundColor = "rgba(81, 71, 105, 0)";
        esquerda_Desejoassistir.style.backgroundColor = "rgba(81, 71, 105, 0.45)";
        
    }
       
}

function mudarTela_visto() {
    if(direita_Desejoassistir.style.display === "flex"){
        direita_Desejoassistir.style.display = "none";
        direita_Visto.style.display = "flex";
        esquerda_Desejoassistir.style.backgroundColor = "rgba(81, 71, 105, 0)";
        esquerda_Visto.style.backgroundColor = "rgba(81, 71, 105, 0.45)";

    }else{
        direita_Visto.style.display = "flex";
        esquerda_Desejoassistir.style.backgroundColor = "rgba(81, 71, 105, 0)";
        esquerda_Visto.style.backgroundColor = "rgba(81, 71, 105, 0.45)";
    }
       
}

