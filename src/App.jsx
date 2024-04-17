import phishing from './assets/phishing.png'
import './App.css'

function App() {

  return (
    <>
      <img src={phishing} alt="logo phishing" style={{maxHeight: '100px'}}/>
      <h1 style={{marginBottom: '0'}}>¡Bienvenido!</h1>
      <div className="card">
        <p style={{fontSize: '3rem'}}>
          Esto solo es un simulacro, pero en un caso real <b>podrias haber entregado tus datos a un desconocido</b>.
        </p>
        <p>Por tal motivo, te invitamos a la <a href="">Capacitación sobre buenas practicas en el uso de correo electronico y aplicaciones de computadora</a>.</p>
        <p><i>Atte: Rafa Ramos & Ana Quezada</i></p>
      </div>
    </>
  )
}

export default App
