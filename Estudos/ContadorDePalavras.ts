/*interface words{
    olá: number,
    mundo: number,
    programador: number,
    novo: number
}

function contadorDePalavras(name: string){
    const word: words = {
        olá: 0,
        mundo: 0,
        programador: 0,
        novo: 0
    }
    const words: string[] = name.replace(/[.,!?`]/g, "").toLocaleLowerCase().split(" ")
    for(let i = 0; i < words.length; i++){
        if (words[i] ==="olá") {
            word.olá += 1            
        }
        else if (words[i] ==="mundo") {
            word.mundo += 1            
        }
        if (words[i] ==="programador") {
            word.programador += 1            
        }
        if (words[i] ==="novo") {
            word.novo += 1            
        }
        else{
            console.log("Encaia aqui não chefe")
        }
    }
    return word
}


let retorno = contadorDePalavras("Olá mundo! Olá programador. Mundo novo!")

console.log(`O retorno das palavras "Olá mundo! Olá programador. Mundo novo!" foi: \nolá:${retorno.olá}\nmundo: ${retorno.mundo}\nprogramador: ${retorno.programador}\nnovo: ${retorno.novo}`)*/

function contadorDePalavras(frase: string): { [palavra: string]: number } {
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
  const result = contadorDePalavras("Olá mundo! Olá programador. Mundo novo!");
console.log(result);
