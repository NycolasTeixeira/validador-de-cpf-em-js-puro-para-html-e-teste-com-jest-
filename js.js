/*
passo 1 - pedir cpf
passo 2 - calcular digitos
passo 3 - verificar digitos calculados = informados
passo 4 - se igual, informar cpf valido
passo 5 - se nao igual, informar cpf invalido
passo 6 - perguntar se deseja validar outro cpf
*/
const prompt = require('prompt-sync')();

console.log(` ----------------------------------
Escolha uma opção:\n
1- validador de cpf\n
2-\n
3-\n

`);

let pMenu = prompt(">>>  ");

if (pMenu == '1') {

    console.log("digite o cpf")
    let perguntaCpf = prompt(">>> ").replace('.', '').replace('.', '').replace('-', '');

    let soma1 = 0;
   


     // enquanto o multiplicador decrementa de 10 a 2, o indice aumenta até ser 10

    for (multiplicador = 10, i = 0; multiplicador >= 2; multiplicador--, i++) {
        soma1 += perguntaCpf.charAt(i) * multiplicador;

        console.log(soma1);

    };
    let resto1 = soma1 % 11;

    if (11 - resto1 == perguntaCpf.charAt(9)) {
        console.log(`primeiro digito valido: ${perguntaCpf.charAt(9)}
        ---------------------------------------------------------------`);

    } else{
        console.log(`primeiro digito invalido: ${perguntaCpf.charAt(9)}`);
    };





    let soma2 = 0;

    for (multiplicador = 11, i = 0; multiplicador >= 2; multiplicador--, i++) {
        soma2 += perguntaCpf.charAt(i) * multiplicador;

        console.log(soma2);
    };

    let resto2 = soma2 % 11;

    if (11 - resto2 == perguntaCpf.charAt(10)) {
        console.log(`segundo digito valido: ${perguntaCpf.charAt(10)}
    ---------------------------------------------------------------`);
    } else {
        console.log(`segundo digito invalido: ${perguntaCpf.charAt(10)}`);
    };

};

function algoritmoCpf1(testeCpf) {

    var soma1 = 0;

    for (multiplicador = 10, i = 0; multiplicador >= 2; multiplicador--, i++) {
        soma1 += testeCpf.charAt(i) * multiplicador;


    };
    let resto1 = soma1 % 11;

    return (11 - resto1 == testeCpf.charAt(9))
};

function algoritmoCpf2(testeCpf) {

    var soma2 = 0;

    for (multiplicador = 11, i = 0; multiplicador >= 2; multiplicador--, i++) {
        soma2 += testeCpf.charAt(i) * multiplicador;

    };
    let resto2 = soma2 % 11;

    return (11 - resto2 == testeCpf.charAt(10))

};

module.exports = {
    algoritmoCpf1,
    algoritmoCpf2
}
