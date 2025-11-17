import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Members from './pages/MembersPage' 
import EventsPage from './pages/EventsPage'
import { events } from './assets/assets'
import { EventProfile } from './components/EventProfile'
import { event } from './assets/assets'
import Reports from './pages/ReportsPage'
import MailingPage from './pages/MailingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  function onSelect(){

  }
  function onEdit(){

  }
  function onDelete(){

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/dashboard'/>
        <Route path='/members' element={<Members />}/>
        <Route path='/events' element={<EventsPage events={events} onSelect={onSelect}/>}/>
        <Route path='/reports' element={<Reports />}/>
        <Route path='/mailing' element={<MailingPage />}/>



      </Routes>
      
     

    </BrowserRouter>
  )
}

export default App
