const email = "exemplo@email.com";
const senha = "senha123"

const form = document.getElementById("loginForm")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha =document.getElementById("senha").value;

    if(email == emailCorreto && senha === senhaCorreta){
        alert("Login bem-sucedido");
    } else{
        alert("Email ou senha incorretos. tente novamente.")
    }
});
