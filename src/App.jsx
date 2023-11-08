import React from 'react'
import './App.css'
import Header from './components/header'
import LeftSidebar from './components/left_sidebar'
import Content from './components/content'
import RightSidebar from './components/right_sidebar'

function App() {

  return (
    <>
   <div class="container-fluid">
              
      <Header />
      
    <div class="row flex-nowrap">
      <LeftSidebar />
      <Content />
      <RightSidebar />

      </div>
    </div>
    </>
  )
}

export default App
