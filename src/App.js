import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Components/hello"

const App =()=>{




  return(
    <div className = {'mother'}>
              <header>
                  <div class="overlay"></div>
                  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                  </video>
              </header>
    <Hello />
      
    </div>
  )
}

export default App;
