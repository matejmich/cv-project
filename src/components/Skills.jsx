import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState(""); 

  function handleAddSkills(e) {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setSkills((s) => [...s, skillInput.trim()]);
      setSkillInput(""); 
    }
  }

  function deleteSkill (index) {
    setSkills(skills.filter((_, i) => i !== index))
  }

  function resetSkills() {
    setSkills([]);
  }
  function exampleSkills() {
    setSkills(['team work', 'corporate law', 'legal research', 'critical thinking'])
}

  return {
    skills,
    resetSkills,
    exampleSkills,
    renderSkills: (
      <div className="box" id="skillS">
        <p>Skills:</p>
        <input
          type="text"
          value={skillInput} 
          onChange={(e) => setSkillInput(e.target.value)} 
          onKeyDown={handleAddSkills}
          placeholder="Enter a skill"
        />
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill} <button className="delete-skill" onClick={() => deleteSkill(index)}>&times;</button></li> 
          ))}
        </ul>
      </div>
    ),
  };
}

export default Skills;
