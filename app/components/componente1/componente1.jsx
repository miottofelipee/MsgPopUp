import React from 'react'

function Componente1({valorpadrao, agreg, max, min}) {
  
    const [contador, setContador] = useState(valorpadrao)
    let padarContador = valorpadrao; 

    function adicionar(){
        setContador(contador > max ? contador : contador + agreg)
    }

    function remover(){
        setContador(contador < min ? contador : contador - agreg);
    }

    function reset(){
        setContador(padarContador)
    }
    
  return (
    <div>
        <h1>Aula de estado TDS2</h1>
        <button onClick={adicionar}>Adicionar</button>
        <button onClick={remover}>Remover</button>
        <button onClick={reset}>Zerar</button>
        <p>Contagem: {contador}</p>
    </div>
  )
  
}

export default Componente1