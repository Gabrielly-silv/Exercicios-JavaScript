function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
nomeIdade("Jose",18);

console.log(nomeIdade(16,"Gaby"))
console.log(nomeIdade("Gaby",16))


function soma(numero1, numero2){
return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
return numero1 * numero2;
}
console.log(soma(2))
console.log(multiplica(soma(4,5)))