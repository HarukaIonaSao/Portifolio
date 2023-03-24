    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let assunto = document.getElementById("assunto");
    let mensagem = document.getElementById("mensagem");

function validate() {
    
        if(nome.value === ""  ) {
            alert("Por favor,digite seu nome!");
            nome.focus();
            return;
        }
                      
        if(email.value == "" || email.value ) {
            alert("E-mail não informado");
            email.focus();
            return;
        }
       
        if(assunto.value === "") {
            alert("Digite um assunto!");
            assunto.focus();
            return;
        }

        if(mensagem.value === "") {
            alert("Escreva uma mensagem");
            mensagem.focus();
            return;
        }
        alert("Formulário enviado com sucesso!")
}

// prevenir defaul
const btn = document.querySelector("#submit");
btn.addEventListener("click", function(e){
    e.preventDefault();
    
})