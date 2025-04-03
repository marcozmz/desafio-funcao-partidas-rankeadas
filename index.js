let partidas = [115, 30];
let rank = "";

calcularNivel(partidas); 
function calcularNivel([vit, der]) { 
    let nivel = vit - der;

    switch (true) {
        case (nivel < 10):
            rank = "Ferro";
            break;
        case (nivel <= 20):
            rank = "Bronze";
            break;
        case (nivel <= 50):
            rank = "Prata";
            break;
        case (nivel <= 80):
            rank = "Ouro";
            break;
        case (nivel <= 90):
            rank = "Diamante";
            break;
        case (nivel <= 100):
            rank = "Lendário";
            break;
        case (nivel > 100):
            rank = "Imortal";
            break;
        default:
            rank = "Erro";
            break;
    }

    console.log(`O Herói tem um saldo de ${nivel} e está no nível de ${rank}`);
}
