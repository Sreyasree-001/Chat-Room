import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './components/Home.jsx'
import UnauthApp from './components/UnauthApp.jsx'
import AuthApp from './components/AuthApp.jsx'
import SignUp from './components/SignUp.jsx'
import { AuthProvider } from './context/auth.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path="unauth" element={<UnauthApp/>}/>
      <Route path='/' element={<Home/>}>
        <Route path="/" index element={<AuthApp/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
