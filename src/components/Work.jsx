import {useState} from 'react'

function Work() {

    const [work, setWork] = useState ({position: '', company: '', start: '', end: '', info: ''})

    function handlePositionChange(e) {
        setWork(w => ({...w, position: e.target.value}))
    }
    function handleCompanyChange(e) {
        setWork(w => ({...w, company: e.target.value}))
    }
    function handleStartChange(e) {
        setWork(w => ({...w, start: e.target.value}))
    }
    function handleEndChange(e) {
        setWork(w => ({...w, end: e.target.value}))
    }
    function handleInfoChange(e) {
        setWork(w => ({...w, info: e.target.value}))
    }
    function resetWork() {
        setWork({position: '', company: '', start: '', end: '', info: ''})
    }
    function exampleWork() {
        setWork({position: 'Staff Attorney', company: 'BAC Croporation', start: '2021', end: '2023', info: 'Advised executives regarding legal right, opportnities, and obligations.'})
    }

    
    return {
        work,
        resetWork,
        exampleWork,
        renderWork: (

            <div className="box">
            <p>Work experience:</p> 
            <input type="text" value={work.position} onChange={handlePositionChange} placeholder='Enter your position'/>   
            <input type="text" value={work.company} onChange={handleCompanyChange} placeholder='Enter company name'/>   
            <input type="text" value={work.start} onChange={handleStartChange} placeholder='Enter start date'/>   
            <input type="text" value={work.end} onChange={handleEndChange} placeholder='Enter end date'/>   
            <textarea type="text" value={work.info} onChange={handleInfoChange} placeholder='Enter work information'/>   
            
            </div>
        )
    }

}

export default Work