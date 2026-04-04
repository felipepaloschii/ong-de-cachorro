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
    let termo = document.getElementById("termo");

    let valido = true;

    if (nome.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (nome.length < 3) {
        alert("Seu nome deve ter no mínimo 3 caracteres.");
        valido = false;
    }

    if (email.length === 0) {
        alert("Informe seu email");
        valido = false;
    } else if (!email.includes("@")) {
        alert("Seu email deve ter @.");
        valido = false;
    }


    if (telefone.length === 0) {
        alert("Informe seu telefone");
        valido = false;
    } else if (telefone.length < 8) {
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
    } else if (idade.length < 18) {
        alert("Você deve ser maior de idade para adotar.");
        valido = false;
    }

    if (cidade.length === 0) {
        alert("Campo cidade obrigatório");
        valido = false;
    }

    if (!moradia) {
        alert("Selecione seu tipo de moradia");
        valido = false;
    } else if (moradia === "casa" && quintal === "nao"){
        alert("Aviso, o uso do espaço externo pode ser limitado.");
        valido = false;
    } else if (moradia === "apartamento" && quintal === "sim"){
        alert("ERRO: Quem mora em apartamento não pode ter quintal.");
    }

    if (!quintal) {
        alert("Selecione se tem quintal");
        valido = false
    }
    if (!tevepet) {
        alert("Selecione se já teve pets");
        valido = false;
    } else if (tevepet === "nao") {
        alert("Aviso, já que você nunca teve um pet, pode haver acompanhamento da ONG.");
    }

    if (horas.length === 0) {
        alert("Informe quantas horas sozinho o pet ficará");
        valido = false;
    } else if (isNaN(horas)) {
        alert("As horas devem ser informadas com números.");
        valido = false;
        let porque = prompt("AVISO: Não é recomendado deixar seu pet tanto tempo sozinho, justifique o porque do tempo");


        if (!porque || porque.length === 0) {
            alert("Justifique para realizar o cadastro");
            valido = false
        }
    }

    if (motivo.length === 0) {
        alert("Informe o motivo da adoção");
        valido = false;
    } else if (motivo.length < 10) {
        alert("O motivo deve ter no mínimo 10 caracteres.");
        valido = false;
    } else if ((motivo === "porque sim") || (motivo === "porque eu quero") || (motivo === "Porque sim")) {
        alert("O motivo é muito genérico, não será aceita.");
        valido = false;
    }

    if (!termo.checked) {
        alert("Você precisa aceitar o termo de responsabilidade");
        valido = false
    }

    if (!valido) {
    } else if (moradia === "apartamento") {
        let resp1 = prompt("O apartamento permite animais?");
    } else if (moradia  === "casa" && quintal === "sim"){
        let resp2 = prompt("O quintal é seguro?");
    }

    if (!valido) {
        return false;
    }

    if (valido) {
        alert("Cadastro\n Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Telefone: " + telefone + "\n" +
            "CPF: " + cpf + "\n" +
            "Idade: " + idade + "\n" +
            "Cidade: " + cidade + "\n" +
            "Mora em: " + moradia + "\n" +
            "Apresentou: " + quintal + " ter quintal em casa\n" +
            "Apresentou: " + tevepet + " já ter tido um pet\n" +
            "Animal ficará sozinho: " + horas + " horas \n" +
            "Motivo da adoção: " + motivo + "\n")



    }


}