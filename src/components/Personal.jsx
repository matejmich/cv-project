import {useState} from 'react'

function Personal() {

    const [personal, setPersonal] = useState({name: '', email: '', number: '', location: '', aboutInfo: ''})

    function handleNameChange (e) {
        
        setPersonal(p => ({...p, name: e.target.value}))
        
        
    }
    function handleEmailChange (e) {
                setPersonal(p => ({...p, email: e.target.value}))

        
    }
    function handleNumberChange (e) {
        setPersonal(p => ({...p, number: e.target.value}))

       
    }
    function handleAboutInfoChange (e) {
        setPersonal(p => ({...p, aboutInfo: e.target.value}))

       
    }
    function handleLocationChange (e) {
        setPersonal(p => ({...p, location: e.target.value}))

    }
    function resetPersonal() {
        setPersonal({name: '', email: '', number: '', location: '', aboutInfo: ''})
    }
    function examplePersonal() {
        setPersonal({name: 'John Example', email: 'j.example8965315@gmail.com', number: '123456789', location: 'London', aboutInfo: 'Results-driven corporate lawyer with 3+ years experience ensuring the legality of commercial transactions. Adept at drafting and reviewing policies, and client negotiation. Possess a J.D. from Harvard Law School and am a member of the New York State Bard in good standing.'})
    }

    return {
        personal,
        resetPersonal,
        examplePersonal,
        renderPersonal: (
        <div className="box">
            <p>Personal information:</p>
            <input type="text" value={personal.name} onChange={handleNameChange} placeholder='Enter full name'/>
            <input type="email" value={personal.email} onChange={handleEmailChange} placeholder='Enter your email'/>
            <input type="number" value={personal.number} onChange={handleNumberChange} placeholder='Enter your phone number'/>
            <input type="text" value={personal.location} onChange={handleLocationChange} placeholder='Enter your location'/>
            <textarea type="text" value={personal.aboutInfo} onChange={handleAboutInfoChange} placeholder='Enter information about you..'></textarea>
            
        </div>
    )}
}

export default Personal;