import { useState } from "react";
import background from "../assets/background.jpg";

function Color() {
    const [color, setColor] = useState("#56B2BB");
    const [photo, setPhoto] = useState(null);
    
    function handleColorChange(e) {
        setColor(e.target.value);
    }
    
    function handlePhotoChange(event) {
        const selectedPhoto = event.target.files[0];
        setPhoto(URL.createObjectURL(selectedPhoto));
    }
    
    function examplePhoto() {
        
        setPhoto(background);
    }
 
    return {
        color,
        photo,
        examplePhoto,
        renderColor: (
            <div className="box">
                <p>Pick a color:</p>
                <div className="color-picker" style={{ backgroundColor: color }}>
                    <input className="color-input" type="color" value={color} onChange={handleColorChange} />
                </div>
                <p>Upload a photo:</p>
                <label htmlFor="file-upload" className="custom-file-input">Choose File</label>
                <input id="file-upload" type="file" onChange={handlePhotoChange} />
            
            </div>
        )
    };
}

export default Color;
