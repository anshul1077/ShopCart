import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const handleNavigateStore = () => {
    navigate('/store')
  }

  return (
    <div className='flex justify-center items-center h-[50vh] flex-col'>
      <h3 className='text-5xl font-bold text-white mt-10'>Beat the</h3>
      <h1 className='text-8xl font-bold text-red-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] mt-4 mb-4' >Black Friday!</h1>
      <input placeholder="Search something here..." type="text" className='p-5 bg-gray-300 m-5 w-[50vw] h-[60px] text-black placeholder-white rounded-full bg-opacity-40' />
      <div>
        <button type='submit' className="bg-red-500 text-white rounded-lg py-3 px-5" onClick={handleNavigateStore}>Visit Our Store!</button>
        <button type='submit' className='text-white border border-red-500 border-2 rounded-lg px-5 py-2 ml-3'>About us</button>
      </div> 
    </div>
  )
}

export default Home