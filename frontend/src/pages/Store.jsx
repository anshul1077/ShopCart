import React from 'react'
import NavBar from '../components/NavBar'; 
import StoreComponent from '../components/StoreComponent'
function Store() {
  return (
    <>
    <div className='bg-slate-800'>
      <NavBar/>
    </div>      
      <StoreComponent />     
    </>
  )
}

export default Store;
