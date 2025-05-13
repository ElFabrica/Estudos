/*function contadorDePalavras(frase: string): { [palavra: string]: number } {
    const contador: { [palavra: string]: number } = {};
    const palavrasValidas = new Set(["olá", "mundo", "programador", "novo"]);
  
    const palavras = frase
      .replace(/[.,!?`]/g, "")
      .toLowerCase()
      .split(" ");
  
    for (const palavra of palavras) {
      if (palavrasValidas.has(palavra)) {
        contador[palavra] = (contador[palavra] || 0) + 1;
      } else {
        console.log(`Ignorado: "${palavra}"`);
      }
    }
  
    return contador;
  }

*/
interface espirro {
  forte: number,
  fraco: number
}

function EspirrosDoDragão(espirros:string): espirro{
  const contador: espirro ={
    forte: 0,
    fraco: 0
  }
  const letras: string[] = espirros.split("")

  letras.forEach(letra => {
    if (letra ==="F") {
      contador.forte +=1
    } else {
      contador.fraco +=1
    }
  });
  
return contador

}

const resposta = EspirrosDoDragão("FFfFfFf")
console.log(`Espirro Forte:${resposta.forte}\nEspirro Fraco:${resposta.fraco} `)