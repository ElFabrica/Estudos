import React, { cloneElement, useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

let timer = null
let ss = 0
let mm = 0
let hh = 0

function App() {
  const [numero, setNumero] = useState(0)
  const [botao, setBotao] = useState("INICIAR")
  const [ultimo, setUltimo] = useState(null)

function start(){
  if(timer !== null){
      //Aqui pausa o timer 
      clearInterval(timer)
      timer = null
      setBotao("INICIAR")

  }else{
    //Reativar o timer
    timer = setInterval(()=>{
      ss++

      if(ss == 60){
        ss = 0
        mm++
      }
      if(mm == 60){
        mm = 0
        hh++
      }

      let format = `${hh < 10 ? "0" + hh: hh}:${mm < 10 ? "0" + mm: mm}:${ss < 10 ? "0" + ss : ss}`

      setNumero(format)
    }, 1000)

    setBotao("PAUSAR")
  }
}
function clean() {
  if(timer !==null){
    //Parar o timer
    clearInterval(timer)
    timer = null 
  }
  setUltimo(numero)
  setNumero(0)
  ss = 0
  mm = 0
  hh = 0

  setBotao("INICIAR")

}
  return (

    <View style={styles.conteiner}>

      <Image source={require("./src/crono.png")} />

      <Text style={styles.time}>{numero}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style ={styles.btn} onPress={start}>
          <Text style ={styles.btnText}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.btn} onPress={clean}>
          <Text style ={styles.btnText} >RESETAR</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.areaUltima}>
        <Text style ={styles.textoCorrida}>
          {ultimo ? `Ultimo tempo ${ultimo}`: "Nenhum tempo registrado..."}
        </Text>

      </View>
      <View style ={{alignItems:"flex-end", justifyContent: "flex-end", width: "100%", alignContent: "flex-end", margin:"12", padding: 8  }}>
      <Text style={{color: "#FFFFFF", fontSize:15}}>@El Fábrica Company</Text>
      </View>
    </View>


  )
}
const styles = StyleSheet.create({

  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00AEEF"
  },
  time: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  btnArea:{
    flexDirection: "row",
    marginTop: 130,
    height: 40
  },
  btn:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  height: 40,
  margin: 17,
  borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#00AEEF"
  },
  areaUltima:{
    marginTop: 40
  },
  textoCorrida:{
      fontSize: 22,
      color: "#FFFFFF",
      fontStyle:"italic"
  }
})

export default App