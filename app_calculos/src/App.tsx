import { useState } from 'react'
import './App.css'

function App() {
  const [currentX, setCurrentX] = useState("");
  const [currentY, setCurrentY] = useState("");

  const [aprendization, setAprendization] = useState("")
  const [w0, setW0] = useState("");
  const [w1, setW1] = useState("");
  const [x, setX] = useState<number[]>([]);
  const [y, setY] = useState<number[]>([]);
  const [prev, setPrev] = useState<number[] >([]);
  const [error, setError] = useState<number[]>([]);
  const [sumError, setSumError] = useState<number>(0);
  const [sumErrorWithCoeficiente, setSumErrorWithCoeficiente] = useState<number>(0);
  const [newW0, setNewW0] = useState<number>();
  const [newW1, setNewW1] = useState<number>();
  
  function handleAddX(){
    const numberX = Number(currentX)
    setX((x) => [...x, numberX])
    setCurrentX("")
  }
  function handleAddY(){
    const numberY = Number(currentY)
    setY((y) => [...y, numberY])
    setCurrentY("")
  }


  function handleCalculateErrors(){
      //Gerar previsão
      const newW0 = Number(w0)
      const newW1 = Number(w1)
    const newPrev = x.map((xi: number) => newW1 * xi + newW0);
    setPrev(newPrev);

    //calcular erros
      const newErrors = y.map((yi, index) => yi - newPrev[index]);
    setError(newErrors.map((a) => Number(a.toFixed(2))));
    console.log(newErrors)
     

    //sum error
    const SumError = newErrors.reduce((acc,current) => acc + current ,0)
    setSumError(SumError)

    //sum error with coeficiente
    console.log(error)
    const NewSumErrorWithCoeficiente = newErrors.reduce((acc, error, index) => (error * x[index]) + acc, 0);
    
    console.log(NewSumErrorWithCoeficiente)

    setSumErrorWithCoeficiente(Number(NewSumErrorWithCoeficiente.toFixed(2)))
  

    // New coeficiente w0

    const NewValueW0 = newW0 + Number(aprendization) * sumError
    setNewW0(NewValueW0)
    const NewValueW1 = newW1 + Number(aprendization) * NewSumErrorWithCoeficiente
    setNewW1(NewValueW1)


  }


  return (
    <>
      <div>
         Adicione os coeficientes X, separando por vírgula: 
         
         <div className='flex flex-row gap-2'>
          <input type="text" className='border-1 border-gray-400 rounded-md' value={currentX} 
          onChange={(e) => setCurrentX(e.target.value) }
          />

          <button 
          className='bg-gray-400 rounded-sm text-white p-2'
          onClick={handleAddX}> Adicionar X
          </button>
          </div>
         Adicione os coeficientes y: 

         <div className='flex flex-row gap-2'>
          <input type="text" className='border-1 border-gray-400 rounded-md' value={currentY} 
          onChange={(e) => setCurrentY(e.target.value) }
          />

          <button 
          className='bg-gray-400 rounded-sm text-white p-2'
          onClick={handleAddY}> Adicionar y
          </button>
          </div>

         <div className='flex flex-col gap-2'>

         Adicione os coeficientes W0: 
          <input type="text" className='border-1 border-gray-400 rounded-md' value={w0} 
          onChange={(e) => setW0(e.target.value) }
          />
         Adicione os coeficientes W1: 

        
          <input type="text" className='border-1 border-gray-400 rounded-md' value={w1} 
          onChange={(e) => setW1(e.target.value) }
          />
         Adicione os a taxa de aprendizagem: 

        
          <input type="text" className='border-1 border-gray-400 rounded-md' value={aprendization} 
          onChange={(e) => setAprendization(e.target.value) }
          />

         <button 
          className='bg-gray-400 rounded-sm text-white p-3'
          onClick={handleCalculateErrors}> Calcular coeficientes
          </button>
          <div>
          <p>W0: {w0}</p>
          <p>W1: {w1}</p>
          <p>Aprendizagem: {aprendization}</p>
          <p>X: [{x.join(",")} ]</p>
          <p>Y: [{y.join(",")} ]</p>
        <p>Previsões: {prev.join(",")}</p>
        <p>Erros: {error.join(",")}</p>
        <p>Soma dos erros: {sumError}</p>
        <p>Soma com os coeficientes: {sumErrorWithCoeficiente}</p>
        <p>Nova interação W0: {newW0}</p>
        <p>Nova interação W1: {newW1}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
