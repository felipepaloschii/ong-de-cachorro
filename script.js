function formulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
        let tevepet = document.getElementById("tevepet").value;
            let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
        let termo = document.getElementById("termo").value;

        let erro = "";


        if(nome.length < 3) mensagem = mensagem + "- Mínimo 3 caracteres\n";
        if(email.index0f("@") === -1) mensagem = mensagem + "Deve conter @\n";

        let telefoneNumero = "";
        for(let i = 0; i < telefone.length; i++) {
            if (telefone[i]>= "0" && telefone[i] <= "9") {
                telefoneNumero = telefoneNumero + telefone[i];
            }
        }
        if (telefoneNumero.length < 8) {
            erro = erro + "Telefone precisa ter no mínimo 8 numeros\n";
        }

        let (cpfLimpo === "") {
            erro = erro + "CPF é obrigatório\n";

        } 
        
        let CPFjaexiste = false;
        for (let i = 0; i < cpfcadastrado.length; i++) {
            if(cpfLimpo === cpfcadastrado[i]){
                CPFjaexiste = true;
            }
        }
        if (CPFjaexiste) {
            erro = erro + "Este CPF já está cadastrado\n";
        }











}