import { useState } from "react"

function Education() {
    const [education, setEducation] = useState ({school: '', degree: '', start: '', end: ''})

    function handleSchoolChange(e) {
        setEducation(ed => ({...ed, school: e.target.value}))
    }
    function handleDegreeChange(e) {
        setEducation(ed => ({...ed, degree: e.target.value}))
    }
    function handleStartChange(e) {
        setEducation(ed => ({...ed, start: e.target.value}))
    }
    function handleEndChange(e) {
        setEducation(ed => ({...ed, end: e.target.value}))
    }
    function resetEducation() {
        setEducation({school: '', degree: '', start: '', end: ''})
    }
    function exampleEducation() {
        setEducation({school: 'HARVARD UNIVERSITY', degree: 'Juris Doctor', start: '2015', end: '2020'})
    }
    return {
        education,
        resetEducation,
        exampleEducation,
        renderEducation: (
            <div className="box">
                <p>Education:</p>
                <input type="text" value={education.school} onChange={handleSchoolChange} placeholder="Enter school name" />
                <input type="text" value={education.degree} onChange={handleDegreeChange} placeholder="Enter degree" />
                <input type="text" value={education.start} onChange={handleStartChange} placeholder="Enter start date" />
                <input type="text" value={education.end} onChange={handleEndChange} placeholder="Enter end date" />

            </div>
        )
    }
}

export default Education