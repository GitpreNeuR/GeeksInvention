import React, { useEffect,useState } from 'react'
import Header from './components/Header'
import Home from './Home'
import Loader from './components/Loader';
import Aos from 'aos';

function App() {

  const [isLoading,setIsLoading]=useState(true);
  



  useEffect(()=>{

    setTimeout(()=>{
      
      setIsLoading(false);
    },3000);
    Aos.init({
      
    });
  
    return () => {
      Aos.refresh();
    };
  },[]);
  useEffect(() => {
  
}, []);

  
  return (
    <>
    {isLoading ? <Loader/> :
    <>
    <Header/>
    <Home/>
    
    </> }
    
    
    </>
  )
}

export default App