import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div >
      <Outlet/>
      <p className="read-the-docs">
                <div className="container mx-auto text-center">
                    <p className="text-sm mb-2">
                        &copy; Copyright {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </p>
    </div>
  )
}

export default App
