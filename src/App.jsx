import { useState } from 'react'
import './App.css'
import UnauthApp from './components/UnauthApp'
import AuthApp from './components/AuthApp';
import { useAuth } from './hooks/useAuth';

function App() {
  const {user} = useAuth();
  return user ? <AuthApp/>: <UnauthApp/>;
  
}

export default App
