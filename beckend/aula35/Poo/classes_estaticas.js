//classes estática - metodos static

class Helper {

    static validaCPF(cpf){
        // valido aqui 
        return true; // ou false 
    }

    static validaCNPJ(cnpj) {
        // valido aqui
        return true; // ou false
    }

    // n function of help
}

if(Helper.validaCPF('054.785.487-45')) {
    console.log("CPF Validado")
}

if(Helper.validaCNPJ('43.458.845/0001-12')){
    console.log("CNPj invalido")
}

