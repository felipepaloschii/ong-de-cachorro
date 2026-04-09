document.getElementById("FormularioAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

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

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email Inválido");
    if (telefone.length < 3) return alert("Telefone Inválido");
    if (cpf === "") return alert("CPF Obrigatório");
    if (cpf_duplicado.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Deve ser maior de 18 anos");
    if (cidade == "") return alert("Cidade obrigatória");
    if (moradia == "") return alert("Moradia");
    if (!quintal) return alert("Informe sobre o quintal");
    if (!tevepet) return alert("Informe se ja teve pet");
    if (horas == "" || isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo.checked) return alert("Aceite os termos para a adoção");


    if (moradia == "apartamento" && quintal == "sim") {
        return alert ("Apartamento não pode ter quintal");
    }

    if (horas > 8) {
        return alert("Animal ficará muito tempo sozinho")
    }
        if (tevepet == "nao") {
            return alert ("A ONG poderá acompanhar sua adaptação")
        
    }

    let motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert ("Motivo inválido");
    }

    document.getElementById("resultado").innerHTML =
    "Cadastro realizado com sucesso <br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Telefone: " + telefone + "<br>" +
    "Cidade: " + cidade;
})