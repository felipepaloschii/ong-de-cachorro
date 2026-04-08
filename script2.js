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
    let quintal = document.querySelector('input[nome="quintal"checked').value;
    let tevepet = document.querySelector('input[nome="tevepet"checked').value; 
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo");

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("0")) return alert("Email Inválido");
     if (telefone.length < 3) return alert("Telefone Inválido");
      if (!cpf == "") return alert("CPF Obrigatório");
    if (!cpf_duplicado.includes("cpf")) return alert("CPF já cadastrado");
     if (idade < 18) return alert("Deve ser maior de 18 anos");
      if (cidade < "") return alert("Cidade obrigatória");


}