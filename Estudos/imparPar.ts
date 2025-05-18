interface parImpar{
  impar: number[]
  par: number[]
}
const parImpar: parImpar = {
  impar: [],
  par: []
}
function separarParImpar(numbers: number[]): parImpar{
for(let i = 0; i <= numbers.length; i++){
  if(numbers[i] % 2 === 0){
    parImpar.par.push(numbers[i])
  }else{
    parImpar.impar.push(numbers[i])
  }
}

  return parImpar
}

let resultado = separarParImpar([1, 2, 3, 4, 5, 6],)

console.log(`Os números fornecidos foram [1, 2, 3, 4, 5, 6], resultado: \n Pares: ${resultado.par}\nImpares: ${resultado.impar}`)