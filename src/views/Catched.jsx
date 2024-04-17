import { useParams } from 'react-router-dom'
import phishing from '../assets/phishing.png'
import { useFetchPut } from './hooks/useFetch';

export const Catched = () => {

  const { idUser } = useParams();

  useFetchPut('victimas/'+idUser);

  return (
    <>
      <img src={phishing} alt="logo phishing" style={{maxHeight: '100px'}}/>
      <h1 style={{marginBottom: '0'}}>Bienvenido</h1>
      <div className="card">
        <p style={{fontSize: '3rem'}}>
          Esto solo es un simulacro, pero en un caso real <br /><b>podrias haber entregado tus datos <br />y los de tu empresa a un desconocido</b>.
        </p>
        <p>Por tal motivo, te invitamos a la <a href="">Capacitación sobre buenas practicas en el uso de correo electronico y aplicaciones de computadora</a>.</p>
        <p><i>Atte: Monitoreo y Evaluacion, Feed the Future Avanzando la Nutrición en Honduras</i></p>
      </div>
    </>
  )
}

