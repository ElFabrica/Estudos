import React, {cloneElement, useState} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from "react-native"

function App(){
const [img, setImg] = useState(require("./src/biscoito.png"))
const [textoFrase, setTextoFrase] = useState("")
  
let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
]

function quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * frases.length)
  setTextoFrase(`"${frases[numeroAleatorio]}"`)
  setImg(require("./src/biscoitoAberto.png"))
}

function reiniciar(){
  setTextoFrase("")
  setImg(require("./src/biscoito.png"))
}
  return(
    
    <View style ={styles.conteiner}>
<Image 
source ={img}
style= {styles.img}
/>

<Text style ={styles.textoFrase}>{textoFrase}</Text>
<TouchableOpacity style ={styles.botao} onPress ={quebraBiscoito} > 
<View style ={styles.btnArea}>
  <Text style ={styles.btnTexto}>Quebrar Biscoito</Text>
</View>

</TouchableOpacity>

<TouchableOpacity style ={[styles.botao, {margin: 15, borderColor: "#121212"}]} onPress = { reiniciar }> 
<View style ={styles.btnArea}>
  <Text style ={[styles.btnTexto, {color: "#121212"}]}>Resetar biscoito</Text>
</View>

</TouchableOpacity>

    </View>
  
    
  )}
const styles = StyleSheet.create({

  conteiner:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
    
  },
  img:{
    width: 230,
    height: 230
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30, 
    fontStyle: "italic",
    textAlign: "center"
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22"
  }
})

export default App