
import './App.css'
// import {useState} from 'react'
import Settings from './components/Settings.jsx'
import ResumeDisplay from './components/ResumeDisplay.jsx'

function App() {
  const {renderSettings, color, photo, personal, work, education, skills} = Settings()
    
  

  return (
    <>
   <div className='content'>
    {renderSettings}
    <ResumeDisplay  {...{color, photo, personal, work, education, skills}}/>
   </div>
   
   <footer>This is the CV project made as a part of <a target='_blank' href='https://www.theodinproject.com'> The Odin Project</a></footer>
   </>
  )
}

export default App
