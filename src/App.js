// first-project
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
// import Particles from "react-tsparticles";  // Başka bir zaman ayrıntılı bak

function App() {
  return (
    <>

      {/* <Particles  

        params={ {
          particles : {
            number : {
              value : 30 ,
              density : {
                enable : true , 
                value_area : 900
              }
            }
          }
        } }

      /> */}  {/* Öğren */}


      <Navbar />

      <Header />

      <AboutMe />
    
    
    </>
  );
}

export default App;

