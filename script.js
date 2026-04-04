function formulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let cpf_duplicado = [
        "12345678910",
        "10987654321",
        "12345109876",
        "10987612345"
    ]
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let tevepet = document.getElementById("tevepet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
        let termo = document.getElementById("termo").value;

        let erro = "";

if (nome.length === 0) {
    alert("Informe seu nome");
    valido = false;
} else if (nome.length < 3){
    alert("Seu nome deve ter no mínimo 3 caracteres.");
    valido = false;
}

if (email.length === 0) {
    alert("Informe seu email");
    valido = false;
} else if (!email.includes("@")){
    alert("Seu email deve ter @.");
    valido = false;
}


    if (telefone.length === 0) {
    alert("Informe seu telefone");
    valido = false;
} else if (telefone.length < 8){
    alert("Seu telefone deve ter no mínimo 8 dígitos.");
    valido = false;
}
if (cpf.length === 0) {
    alert("Campo CPF obrigatório");
    valido = false;
} else if (cpf_duplicado.includes(cpf)) {
    alert("Esse CPF já está cadastrado.");
    valido = false;
}
if (idade.length === 0) {
    alert("Informe sua idade");
    valido = false;
} else if (idade.length < 18){
    alert("Você deve ser maior de idade para adotar.");
    valido = false;
}

if (cidade.length === 0) {
    alert("Campo cidade obrigatório");
    valido = false;
}

}