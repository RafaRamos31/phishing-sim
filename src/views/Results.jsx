import { useEffect, useState } from 'react'
import phishing from '../assets/phishing.png'
import { useFetchGet } from './hooks/useFetch'

function Results() {

  const [ victimas, setVictimas ] = useState([]);
  const [ count, setCount ] = useState(0);
  const { data, isLoading } = useFetchGet('victimas');

  const [ show, setShow ] = useState(false)
  
  useEffect(() => {
    if(data && !isLoading){
      setVictimas(data)
    }
  }, [data, isLoading])

  useEffect(() => {
    let sum = 0;

    for(let v of victimas){
      if(v.estado === 'Vulnerado'){
        sum++;
      }
    }

    setCount(sum)

  }, [victimas])
  
  return (
    <>
      <img src={phishing} alt="logo phishing" style={{maxHeight: '100px'}}/>
      <h1 style={{marginBottom: '0'}}>Número de personas que abrieron el enlace</h1>
      <button style={{marginTop: '2rem', marginBottom: '2rem', width: '8rem', height: '6rem', fontSize: '2rem'}} onClick={() => setShow(s => !s)}>{count}</button>
      <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}>
      {
        show && victimas.map((u, index) => (
          <p 
          style={{
            border: '1px solid white', borderRadius: '10px', fontSize: '2rem', margin: '10px',
            backgroundColor: u.estado === 'Vulnerado' ? '#EA401B' : 'green'
          }} key={index}>{u.nombre}</p>
        ))
      }
      </div>
    </>
  )
}

export default Results
