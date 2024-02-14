// import React, { useState } from 'react'
import Color from './Color.jsx'
import Personal from './Personal.jsx'
import Work from './Work.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'

function Settings () {
    const {renderPersonal, personal, resetPersonal, examplePersonal} = Personal()
    const {renderColor, color, photo, examplePhoto} = Color()
    const {renderWork, work, resetWork, exampleWork} = Work()
    const {renderEducation, education, resetEducation, exampleEducation} = Education()
    const {renderSkills, skills, resetSkills, exampleSkills} = Skills()
        
    function handleReset() {
        resetPersonal();
        resetWork();
        resetEducation();
        resetSkills();
    
      }
      function handleExample() {
        examplePersonal()
        exampleWork()
        exampleEducation()
        exampleSkills()
        examplePhoto()
      }

    return {
        color,
        photo,
        examplePhoto,
        personal,
        resetPersonal,
        examplePersonal,
        work,
        resetWork,
        exampleWork,
        education,
        resetEducation,
        exampleEducation,
        skills,
        resetSkills,
        exampleSkills,
        renderSettings: (
        <div className="settings">
            <div className='button-container box'>
                <button className='mainBtn' onClick={handleReset}>Reset CV</button>
                <button className='mainBtn' onClick={handleExample}>Example</button>
            </div>
            {renderColor}
            {renderPersonal}
            {renderWork}
            {renderEducation}
            {renderSkills}

        </div>
    )}
}

export default Settings