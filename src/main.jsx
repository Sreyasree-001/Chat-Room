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
  Routes,
} from "react-router-dom";
import Home from './components/Home.jsx'
import UnauthApp from './components/UnauthApp.jsx'
import AuthApp from './components/AuthApp.jsx'
import SignUp from './components/SignUp.jsx'
import { AuthProvider } from './context/auth.jsx'
import Landing from './components/Landing.jsx'
import ChatRoom from './components/ChatRoom.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="unauth" element={<UnauthApp />} />
      <Route path='/' element={<Home />}>
        <Route path="/" element={<AuthApp />}>
          <Route path='/' element={<Landing />} />
          <Route path='/room/:id' element={<ChatRoom />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
