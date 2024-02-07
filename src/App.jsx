import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Lecture from './components/Lecture'

function App() {

  const [component, setComponent] = useState(<Home />)

  function setMenu(menu) {
    
    switch (menu) {
      case 'home': {
        setComponent(<Home />);
        break;
      }
      case 'lecture': {
        setComponent(<Lecture />)
        break;
      }


    }
  }

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])



  return (

    <div className="container">


      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">

          <img src={reactLogo}></img>
          <a className="navbar-brand" href="#"></a>
          <span>ICET Engineering</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item btn">
                <a className="nav-link active" aria-current="page"

                  //  set a parameterize function to onclick event 

                  // why calling setMenu with wrrapped another function/anonymous function?
                  // when run this code firstly run this html part only excute default function .not running the setmenu() in first time.no issue
                  onClick={() => { setMenu('home') }
                    // function () {         
                  }>Home</a>
              </li>
              <li className="nav-item btn">

                {/* set a parameterize function to onclick event  */}

                <a className="nav-link" onClick={() => { setMenu('lecture') }}>Lectures</a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* if you can use initial state in variable on usestate ,you can remove this line add following part. */}

      {/* <Home></Home>
        <Lecture></Lecture> */}

      {component}


    </div>

  )
}

export default App
