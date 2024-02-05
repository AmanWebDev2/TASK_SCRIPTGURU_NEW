import { createContext, useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Offers from './components/Offers'
import Products from './components/Products'
import Slider from './components/Slider'
import { getUserApi } from './api'


export const UserContext = createContext(null);

function App() {

  const [userData,setUserData] = useState(null);

  useEffect(()=>{
    ((async()=>{
      const user = await getUserApi()
      if(user) {
        setUserData(user);
      }
    }))()
  },[]);

  return (
    <main>
      <Header userData={userData} setUserData={setUserData}/>
      
      <Carousel/>
      <Slider/>
      <Products />
      <Offers/>
      <Footer/>
    </main>
  )
}

export default App
