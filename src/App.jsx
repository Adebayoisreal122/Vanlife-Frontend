import React from 'react'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Signin from './components/Signin';
import Home from './components/Home';
import Notfound from './components/Notfound';
import About from './components/About';
import Host from './components/Host';
import Vandetails from './components/Vandetails';
import Vandescription from './components/Vandescription';
import Hostdash from './components/Hostdash';
import Hostreview from './components/Hostreview';
import Hostincome from './components/Hostincome';
import Hostvans from './components/Hostvans';

function App() {




  const [ DeferredPrompt,  setDeferredPrompt] = useState("")
  useEffect(()=>{
    if("ServiceWorker" in navigator){
      window.addEventListener('load', ()=>{
        navigator.serviceWorker
        .register('/sw.js')
        .then(registration =>{
          console.log('SW registered: ', registration);
        })
        .catch(registrationError =>{
          console.log('SW registration failed: ', registrationError);
        })
      })
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };
  
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
    // console.log();
  })




  return (
    <>

    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<Home/>} />
    <Route path="*" element={<Notfound/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/vans" element={<Vandetails/>}/>
    <Route path="/vans/:id" element={<Vandescription/>} />


<Route path='/host' element={<Host/>}>
<Route path='/host' element={<Navigate to='/host/dashboard'/>} />
<Route path='/host/dashboard' element={<Hostdash/>} />
<Route path='/host/review' element={<Hostreview/>} />
<Route path='/host/income' element={<Hostincome/>} />
<Route path='/host/van' element={<Hostvans/>} />




</Route>







      </Route>
    </Routes>

    </>
  )
}

export default App