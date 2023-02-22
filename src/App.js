
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Home } from "./components/home";
import "./css/inicio.css"


function App() {

  const [usuario, setUsuario]=useState(null);
  const [pass, setPass]=useState(null);


const enviarApi=async (e)=>{
  e.preventDefault();

  axios.post("http://localhost:4000/login",{
    usuario:usuario,
    pass:pass,
  },{
    withCredentials:true,
  }).then(res=> console.log(res)).catch(err=> console.log(err))

};

const [isReadyForInstall, setIsReadyForInstall] =useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}

const descargar=()=>{

}

 
  return (
    <div className="App">
         <div className="contenido">
                <h2>registrate </h2>

                {isReadyForInstall && <button onClick={downloadApp}>descargar</button>}
            </div>

            <form className='formulario'>
              <input onChange={(e)=> setUsuario(e.target.value)} type={"text"} className></input>
              <input onChange={(e)=> setPass(e.target.value)} type={"password"} className></input>
              <button onClick={enviarApi}> ingresar</button>
            </form>
     
    </div>
  );
}

export default App;
