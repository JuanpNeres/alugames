function verificarPalindromo(string){
    let texto = prompt("Digite uma palavra ou frase:");
    let invertida = texto.split('').reverse().join('');

    if(texto === invertida){
        alert(`A palavra "${texto}" é um palíndromo!`);
    }else{
        alert(`A palavra "${texto}" não é um palíndromo!`);
    }
}
verificarPalindromo();
