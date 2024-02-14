

function ResumeDisplay({color, photo, personal, work, education, skills}) {
    return(
        <div className="resume">
            <div className="resume-header" style={{backgroundColor: color}}>
                <div className="resume-header-left">
                {personal.name}
                </div>
                <div className="resume-header-right">
                    <div className="resume-email">
                        {personal.email}
                    </div>
                    <div className="resume-number">
                        {personal.number}
                    </div>
                    <div className="resume-location">
                        {personal.location}
                        
                    </div>
                </div>
            </div>
            <div className="about-info">
            {personal.aboutInfo} 
            </div>
            {work.company || work.position ? (
                    <div className="text-container">
                        <div className="text-container-text">
                            <div className="banner" style={{ backgroundColor: color }}>Work experience:</div>
                            <p className="res">{work.position}</p> 
                            <p className="res">{work.company}</p> 
                            <p className="res">{work.start}</p> 
                            <p className="res">{work.end}</p> 
                            <div className="res" >{work.info}</div> 
                        </div>
                    </div>
                ) : null}
            {education.school || education.degree ? (
                    <div className="text-container">
                        <div className="banner" style={{ backgroundColor: color }}>Education:</div>
                        <div className="text-container-text">
                            <p className="res">{education.school}</p> 
                            <p className="res">{education.degree}</p> 
                            <p className="res">{education.start}</p> 
                            <p className="res">{education.end}</p> 
                        </div>
                    </div>
                ) : null}

            {skills.length !== 0 ? (
                    <div className="text-container">
                    
                    <div className="text-container-text">
                        <div className="banner" style={{ backgroundColor: color }}>Skills:</div>
                        <div className="text-container" id="skills-container">
                            <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                            </ul>
                            
                            <img className="picture" src={photo ? photo : ''} alt="your image" />


                        </div>
                    </div>
                    </div>
            ) : null}
                
        </div>
        
    )
}

export default ResumeDisplay