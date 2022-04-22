var listadepecas = ["Motor", "Amortecedor", "Freio", "Cambio", "Disco de Freio", "Radiador"]

if (listadepecas.length < 10){
    console.log("É possivel cadastrar mais peças")
    
}else{
    console.log("Não tem mais espaço na lista")
    
}

let peso = 50;

if (peso < 100) {
    console.log("A peça deve pesar no minimo 100g")
    
} else {
    console.log("A peça possui peso adequado")
    
}

let nomePeca = "Disco de Freio"

if(nomePeca.length > 3) {
    console.log("Nome de peça está adequado para cadastro!")
    
}else if (nomePeca.length == 0) {

    console.log("O nome da peça não pode ser vazio")
    
}else{
    console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")  




}


switch (nomePeca.length > 3) {
    case 0:
        console.log("O nomeda peça não pode ser vazio")
        break;
    case 1:  
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado!")
        break;
    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}

