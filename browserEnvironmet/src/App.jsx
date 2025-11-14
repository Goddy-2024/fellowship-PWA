import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Members from './pages/MembersPage'
import EventsPage from './pages/EventsPage'
import { events } from './assets/assets'
import { EventProfile } from './Components/EventProfile'
import { event } from './assets/assets'



function App() {
  function onSelect(){

  }
  function onEdit(){

  }
  function onDelete(){

  }
  return (
    <>
      <LandingPage />
      <LoginPage />
      <DashboardPage />
      <Members />
      <EventsPage events={events} onSelect={onSelect}/>
     

    </>
  )
}

export default App
